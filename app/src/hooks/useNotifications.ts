import { useState, useEffect, useCallback } from 'react';
import { useUserStore } from '@/store/userStore';

type NotificationPermission = 'granted' | 'denied' | 'default';

interface UseNotificationsReturn {
  permission: NotificationPermission;
  isSupported: boolean;
  requestPermission: () => Promise<boolean>;
  sendNotification: (title: string, options?: NotificationOptions) => void;
  scheduleNotification: (title: string, body: string, delayMs: number) => number | null;
  cancelScheduledNotification: (timeoutId: number) => void;
}

export function useNotifications(): UseNotificationsReturn {
  const [permission, setPermission] = useState<NotificationPermission>('default');
  const setNotificationPermission = useUserStore((s) => s.setNotificationPermission);

  // Check if notifications are supported
  const isSupported = typeof window !== 'undefined' && 'Notification' in window;

  // Initialize permission state
  useEffect(() => {
    if (isSupported) {
      setPermission(Notification.permission as NotificationPermission);
    }
  }, [isSupported]);

  // Request notification permission
  const requestPermission = useCallback(async (): Promise<boolean> => {
    if (!isSupported) {
      console.warn('Notifications not supported');
      return false;
    }

    try {
      const result = await Notification.requestPermission();
      setPermission(result as NotificationPermission);
      setNotificationPermission(result as NotificationPermission);
      return result === 'granted';
    } catch (error) {
      console.error('Error requesting notification permission:', error);
      return false;
    }
  }, [isSupported, setNotificationPermission]);

  // Send a notification immediately
  const sendNotification = useCallback(
    (title: string, options?: NotificationOptions) => {
      if (!isSupported || permission !== 'granted') {
        console.warn('Notifications not available or not permitted');
        return;
      }

      try {
        const notification = new Notification(title, {
          icon: '/icon.png',
          badge: '/badge.png',
          ...options,
        });

        // Auto-close after 5 seconds
        setTimeout(() => notification.close(), 5000);

        // Handle click
        notification.onclick = () => {
          window.focus();
          notification.close();
        };
      } catch (error) {
        console.error('Error sending notification:', error);
      }
    },
    [isSupported, permission]
  );

  // Schedule a notification for later
  const scheduleNotification = useCallback(
    (title: string, body: string, delayMs: number): number | null => {
      if (!isSupported || permission !== 'granted') {
        return null;
      }

      const timeoutId = window.setTimeout(() => {
        sendNotification(title, { body });
      }, delayMs);

      return timeoutId;
    },
    [isSupported, permission, sendNotification]
  );

  // Cancel a scheduled notification
  const cancelScheduledNotification = useCallback((timeoutId: number) => {
    clearTimeout(timeoutId);
  }, []);

  return {
    permission,
    isSupported,
    requestPermission,
    sendNotification,
    scheduleNotification,
    cancelScheduledNotification,
  };
}

// Predefined notification types
export function useLearningNotifications() {
  const { sendNotification, permission } = useNotifications();

  const notifyDueCards = useCallback(
    (count: number) => {
      if (permission === 'granted' && count > 0) {
        sendNotification('Cards Ready for Review', {
          body: `You have ${count} flashcard${count > 1 ? 's' : ''} due for review.`,
          tag: 'due-cards',
        });
      }
    },
    [sendNotification, permission]
  );

  const notifyStreakReminder = useCallback(
    (currentStreak: number) => {
      if (permission === 'granted') {
        sendNotification('Keep Your Streak Alive!', {
          body: `You're on a ${currentStreak}-day streak. Don't break it!`,
          tag: 'streak-reminder',
        });
      }
    },
    [sendNotification, permission]
  );

  const notifyAchievement = useCallback(
    (achievementName: string) => {
      if (permission === 'granted') {
        sendNotification('Achievement Unlocked!', {
          body: achievementName,
          tag: 'achievement',
        });
      }
    },
    [sendNotification, permission]
  );

  const notifyLevelUp = useCallback(
    (newLevel: number) => {
      if (permission === 'granted') {
        sendNotification('Level Up!', {
          body: `Congratulations! You've reached Level ${newLevel}!`,
          tag: 'level-up',
        });
      }
    },
    [sendNotification, permission]
  );

  const notifyDailyReminder = useCallback(
    () => {
      if (permission === 'granted') {
        sendNotification('Time to Learn!', {
          body: 'Your daily learning session is waiting for you.',
          tag: 'daily-reminder',
        });
      }
    },
    [sendNotification, permission]
  );

  return {
    notifyDueCards,
    notifyStreakReminder,
    notifyAchievement,
    notifyLevelUp,
    notifyDailyReminder,
  };
}

export default useNotifications;
