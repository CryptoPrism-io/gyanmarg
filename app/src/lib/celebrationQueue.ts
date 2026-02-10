/**
 * Celebration Queue System
 *
 * Manages the display of celebration modals (achievements, level ups) to prevent
 * blocking during active learning sessions. Celebrations are queued and shown
 * at appropriate moments (after lessons close, not during).
 */

type CelebrationEvent =
  | { type: 'achievement'; payload: { id: string; name: string; xpReward: number } }
  | { type: 'levelUp'; payload: { newLevel: number } };

type CelebrationCallback = (event: CelebrationEvent) => void;

class CelebrationQueue {
  private queue: CelebrationEvent[] = [];
  private isShowing = false;
  private callback: CelebrationCallback | null = null;
  private checkInterval: number | null = null;

  /**
   * Initialize the queue with a callback that will be triggered when a celebration should show
   */
  initialize(callback: CelebrationCallback) {
    this.callback = callback;

    // Start checking for opportunities to show celebrations
    if (this.checkInterval === null) {
      this.checkInterval = window.setInterval(() => {
        if (this.queue.length > 0 && !this.isShowing && this.canShowNow()) {
          this.showNext();
        }
      }, 2000); // Check every 2 seconds
    }
  }

  /**
   * Add a celebration event to the queue
   */
  enqueue(event: CelebrationEvent) {
    this.queue.push(event);
    console.log(`[CelebrationQueue] Enqueued ${event.type}, queue size: ${this.queue.length}`);

    // Try to show immediately if conditions are right
    if (!this.isShowing && this.canShowNow()) {
      this.showNext();
    }
  }

  /**
   * Check if we can show a celebration right now
   * Don't show if:
   * - Lesson viewer is open
   * - A modal is already showing
   * - User is in an active game
   */
  canShowNow(): boolean {
    // Check if lesson viewer is open (it has z-index 9999)
    const lessonViewerOpen = !!document.querySelector('[class*="z-[9999]"]');

    // Check if any modal is currently visible
    const modalOpen = !!document.querySelector('[role="dialog"][aria-hidden="false"]');

    // Check if we're on a route where celebrations should be delayed
    const currentPath = window.location.pathname;
    const shouldDelay = currentPath.includes('/lesson') ||
                        currentPath.includes('/game') ||
                        currentPath.includes('/quiz');

    const canShow = !lessonViewerOpen && !modalOpen && !shouldDelay;

    if (!canShow && this.queue.length > 0) {
      console.log(`[CelebrationQueue] Delaying celebration (viewer: ${lessonViewerOpen}, modal: ${modalOpen}, path: ${shouldDelay})`);
    }

    return canShow;
  }

  /**
   * Show the next celebration in the queue
   */
  private showNext() {
    if (this.queue.length === 0 || !this.callback) {
      return;
    }

    const event = this.queue.shift();
    if (!event) return;

    this.isShowing = true;
    console.log(`[CelebrationQueue] Showing ${event.type}, remaining: ${this.queue.length}`);

    // Trigger the callback to show the modal
    this.callback(event);
  }

  /**
   * Call this when a celebration modal is closed
   */
  onCelebrationClosed() {
    this.isShowing = false;
    console.log(`[CelebrationQueue] Celebration closed, queue size: ${this.queue.length}`);

    // Wait a bit before showing the next one (better UX)
    setTimeout(() => {
      if (this.queue.length > 0 && this.canShowNow()) {
        this.showNext();
      }
    }, 500);
  }

  /**
   * Get the current queue size (for debugging)
   */
  getQueueSize(): number {
    return this.queue.length;
  }

  /**
   * Clear the queue (use with caution)
   */
  clear() {
    this.queue = [];
    this.isShowing = false;
    console.log('[CelebrationQueue] Queue cleared');
  }

  /**
   * Cleanup when component unmounts
   */
  destroy() {
    if (this.checkInterval !== null) {
      window.clearInterval(this.checkInterval);
      this.checkInterval = null;
    }
    this.clear();
  }
}

// Export singleton instance
export const celebrationQueue = new CelebrationQueue();

// Export types for consumers
export type { CelebrationEvent, CelebrationCallback };
