/**
 * Notification Scheduling & Management
 * Handles daily push notifications for streak reminders
 */

export interface NotificationSchedule {
  enabled: boolean;
  scheduledTime: string; // ISO time like "19:00" (7 PM)
  lastNotificationDate: string | null; // ISO date like "2026-02-15"
  timezone: string; // User's timezone
}

/**
 * Request notification permission from user
 * Call this after user authenticates
 */
export async function requestNotificationPermission(): Promise<boolean> {
  if (!('Notification' in window)) {
    console.log('[Notifications] Browser does not support notifications');
    return false;
  }

  if (Notification.permission === 'granted') {
    console.log('[Notifications] Permission already granted');
    return true;
  }

  if (Notification.permission === 'denied') {
    console.log('[Notifications] Permission denied by user');
    return false;
  }

  try {
    const permission = await Notification.requestPermission();
    const granted = permission === 'granted';
    console.log(`[Notifications] Permission ${granted ? 'granted' : 'denied'}`);
    return granted;
  } catch (error) {
    console.error('[Notifications] Error requesting permission:', error);
    return false;
  }
}

/**
 * Check if notifications are supported and permitted
 */
export function canSendNotifications(): boolean {
  if (!('Notification' in window)) return false;
  if (!('serviceWorker' in navigator)) return false;
  return Notification.permission === 'granted';
}

/**
 * Schedule daily notification at user's preferred time
 * Uses service worker for background scheduling
 */
export async function scheduleDailyNotification(
  schedule: NotificationSchedule,
  userStreak: number
): Promise<boolean> {
  if (!canSendNotifications()) {
    console.log('[Notifications] Cannot send notifications');
    return false;
  }

  if (!schedule.enabled) {
    console.log('[Notifications] Notifications disabled');
    return false;
  }

  try {
    // Register service worker if not already registered
    if ('serviceWorker' in navigator) {
      await navigator.serviceWorker.ready;
    }

    // Calculate next notification time
    const notificationTime = getNextNotificationTime(schedule.scheduledTime, schedule.timezone);
    const delayMs = notificationTime.getTime() - Date.now();

    if (delayMs > 0) {
      // Schedule notification via timeout (will only work while app is open)
      // For persistent scheduling, would need Background Sync API or service worker
      console.log(
        `[Notifications] Scheduled notification in ${Math.round(delayMs / 1000)}s at ${notificationTime.toLocaleTimeString()}`
      );

      // For now, use simple timeout (production would use Background Sync)
      setTimeout(() => {
        sendNotification(userStreak);
      }, delayMs);

      return true;
    }

    return false;
  } catch (error) {
    console.error('[Notifications] Error scheduling notification:', error);
    return false;
  }
}

/**
 * Send notification immediately (for manual "Send Now" or testing)
 */
export function sendNotification(userStreak: number): void {
  if (!canSendNotifications()) {
    console.log('[Notifications] Cannot send notifications');
    return;
  }

  const title = `Your ${userStreak}-day streak awaits 🔥`;
  const options: NotificationOptions & Record<string, unknown> = {
    body: '3 min quick review to keep it going',
    icon: '/icons/icon-192x192.png',
    badge: '/icons/icon-72x72.png',
    tag: 'polymind-streak-reminder',
    requireInteraction: false,
    actions: [
      {
        action: 'continue',
        title: 'Continue Learning',
        icon: '/icons/icon-72x72.png',
      },
      {
        action: 'dismiss',
        title: 'Dismiss',
      },
    ],
    data: {
      url: '/dashboard',
      action: 'continue_learning',
    },
  };

  if ('serviceWorker' in navigator && navigator.serviceWorker.controller) {
    navigator.serviceWorker.controller.postMessage({
      type: 'SEND_NOTIFICATION',
      title,
      options,
    });
  } else if ('Notification' in window) {
    new Notification(title, options);
  }
}

/**
 * Calculate next notification time based on user's preferred time and timezone
 * Returns a Date object for when notification should fire
 */
function getNextNotificationTime(scheduledTime: string, timezone: string): Date {
  const [hours, minutes] = scheduledTime.split(':').map(Number);
  const now = new Date();

  // Create date in user's timezone
  const formatter = new Intl.DateTimeFormat('en-US', {
    timeZone: timezone,
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
    hour12: false,
  });

  const parts = formatter.formatToParts(now);
  const localNow = new Date(
    parseInt(parts.find(p => p.type === 'year')?.value || '2026'),
    parseInt(parts.find(p => p.type === 'month')?.value || '1') - 1,
    parseInt(parts.find(p => p.type === 'day')?.value || '1'),
    parseInt(parts.find(p => p.type === 'hour')?.value || '0'),
    parseInt(parts.find(p => p.type === 'minute')?.value || '0'),
    0
  );

  const notificationTime = new Date(localNow);
  notificationTime.setHours(hours, minutes, 0, 0);

  // If scheduled time has already passed today, schedule for tomorrow
  if (notificationTime <= localNow) {
    notificationTime.setDate(notificationTime.getDate() + 1);
  }

  return notificationTime;
}

/**
 * Check if user already received notification today
 */
export function hasReceivedNotificationToday(lastNotificationDate: string | null): boolean {
  if (!lastNotificationDate) return false;

  const today = new Date().toISOString().split('T')[0];
  return lastNotificationDate === today;
}

/**
 * Default notification schedule (user preferences)
 */
export function getDefaultSchedule(): NotificationSchedule {
  return {
    enabled: true,
    scheduledTime: '19:00', // 7 PM default
    lastNotificationDate: null,
    timezone: Intl.DateTimeFormat().resolvedOptions().timeZone || 'UTC',
  };
}
