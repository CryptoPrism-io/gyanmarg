# Milestone 1: Test Cases

## Test Environment
- **URL**: http://localhost:5173
- **Browser**: Chrome/Edge (latest)
- **Prerequisites**: Clear localStorage before testing (`localStorage.clear()` in console)

---

## Phase 1.1: Content Pipeline

### TC-01: Flashcards Load in Spaced Repetition
| Field | Value |
|-------|-------|
| **Precondition** | Complete onboarding, navigate to /review |
| **Steps** | 1. Go to Review Cards from dashboard<br>2. Observe the card count and stats |
| **Expected** | Should show 100+ total cards, cards display front/back content |
| **Status** | [ ] Pass / [ ] Fail |

### TC-02: Daily Challenges Rotate Each Day
| Field | Value |
|-------|-------|
| **Precondition** | Complete onboarding |
| **Steps** | 1. Go to /challenges<br>2. Note the 5 challenges shown<br>3. Change system date to tomorrow<br>4. Refresh page |
| **Expected** | Different set of challenges should appear (date-seeded rotation) |
| **Status** | [ ] Pass / [ ] Fail |

### TC-03: Challenge Pool Variety
| Field | Value |
|-------|-------|
| **Precondition** | None |
| **Steps** | 1. Open browser console<br>2. Run: `import('@/data/challengePool').then(m => console.log(m.challengePool.length))` |
| **Expected** | Should show 45+ challenges in pool |
| **Status** | [ ] Pass / [ ] Fail |

---

## Phase 1.2: Learning Loop Polish

### TC-04: Onboarding Persistence on Refresh
| Field | Value |
|-------|-------|
| **Precondition** | Fresh start (clear localStorage) |
| **Steps** | 1. Start onboarding, enter name "Test User"<br>2. Click Continue to step 2<br>3. Select a goal<br>4. Refresh the page (F5) |
| **Expected** | Should return to step 2 with name and goal preserved |
| **Status** | [ ] Pass / [ ] Fail |

### TC-05: Onboarding Partial Data Recovery
| Field | Value |
|-------|-------|
| **Precondition** | Be on step 3 of onboarding |
| **Steps** | 1. Select learning style<br>2. Close browser tab<br>3. Reopen the app |
| **Expected** | Should resume at step 3 with previous selections intact |
| **Status** | [ ] Pass / [ ] Fail |

### TC-06: SM-2 Algorithm - Hard Rating
| Field | Value |
|-------|-------|
| **Precondition** | Have cards due for review |
| **Steps** | 1. Go to /review<br>2. Flip a card<br>3. Rate as "Hard"<br>4. Complete session<br>5. Check card's next review |
| **Expected** | Card should be scheduled for tomorrow (interval = 1 day) |
| **Status** | [ ] Pass / [ ] Fail |

### TC-07: SM-2 Algorithm - Easy Rating Progression
| Field | Value |
|-------|-------|
| **Precondition** | Review same card multiple times |
| **Steps** | 1. Rate a card "Easy" first time (interval becomes 1)<br>2. Review again, rate "Easy" (interval becomes 6)<br>3. Review again, rate "Easy" |
| **Expected** | Interval should increase: 1 → 6 → ~15 days |
| **Status** | [ ] Pass / [ ] Fail |

### TC-08: Due Cards Count Updates
| Field | Value |
|-------|-------|
| **Precondition** | Cards initialized |
| **Steps** | 1. Note "Due Today" count on /review<br>2. Review 5 cards<br>3. Check count again |
| **Expected** | Due count should decrease by 5 |
| **Status** | [ ] Pass / [ ] Fail |

### TC-09: Today's Focus Shows Due Cards
| Field | Value |
|-------|-------|
| **Precondition** | Have cards due |
| **Steps** | 1. Go to /dashboard<br>2. Look at Today's Focus card |
| **Expected** | Should show "X cards due for review" with link to /review |
| **Status** | [ ] Pass / [ ] Fail |

### TC-10: Weekly Challenge Generation
| Field | Value |
|-------|-------|
| **Precondition** | Complete onboarding |
| **Steps** | 1. Go to /dashboard<br>2. Look at Today's Focus section |
| **Expected** | Should display weekly challenge with progress bar (e.g., "Complete 7 lessons") |
| **Status** | [ ] Pass / [ ] Fail |

---

## Phase 1.3: Gamification 2.0

### TC-11: Achievement Unlock Celebration
| Field | Value |
|-------|-------|
| **Precondition** | No achievements unlocked yet |
| **Steps** | 1. Go to /review<br>2. Complete first card review |
| **Expected** | Achievement modal appears with confetti, trophy animation, XP reward display |
| **Status** | [ ] Pass / [ ] Fail |

### TC-12: Level Up Celebration
| Field | Value |
|-------|-------|
| **Precondition** | XP close to level threshold (e.g., 490 XP at level 1) |
| **Steps** | 1. Complete an action that awards 20+ XP<br>2. Cross 500 XP threshold |
| **Expected** | Level Up modal appears with confetti from both sides, large level number |
| **Status** | [ ] Pass / [ ] Fail |

### TC-13: Streak Continuation
| Field | Value |
|-------|-------|
| **Precondition** | Have an active streak |
| **Steps** | 1. Check current streak on dashboard<br>2. Complete any learning activity<br>3. Return next day and complete activity |
| **Expected** | Streak should increment by 1 |
| **Status** | [ ] Pass / [ ] Fail |

### TC-14: Streak Freeze Auto-Use
| Field | Value |
|-------|-------|
| **Precondition** | Active streak, 1 streak freeze available |
| **Steps** | 1. Note streak count (e.g., 5)<br>2. Skip one day (no activity)<br>3. Return day after and do activity |
| **Expected** | Streak preserved (still 5→6), freeze count decremented |
| **Status** | [ ] Pass / [ ] Fail |

### TC-15: Streak Freeze Refresh on Sunday
| Field | Value |
|-------|-------|
| **Precondition** | Streak freeze = 0 |
| **Steps** | 1. Set system date to Sunday<br>2. Open dashboard |
| **Expected** | Streak freeze should refresh to 1 |
| **Status** | [ ] Pass / [ ] Fail |

### TC-16: Local Leaderboard Display
| Field | Value |
|-------|-------|
| **Precondition** | Complete onboarding |
| **Steps** | 1. Go to /dashboard<br>2. Scroll to Leaderboard section |
| **Expected** | Shows user + AI competitors, sorted by XP, user highlighted |
| **Status** | [ ] Pass / [ ] Fail |

### TC-17: Leaderboard Updates with XP
| Field | Value |
|-------|-------|
| **Precondition** | Be ranked lower than an AI competitor |
| **Steps** | 1. Note current rank<br>2. Earn enough XP to pass an AI<br>3. Check leaderboard |
| **Expected** | User rank should improve, position updated |
| **Status** | [ ] Pass / [ ] Fail |

### TC-18: Sound Effects Play (When Enabled)
| Field | Value |
|-------|-------|
| **Precondition** | Sound enabled in settings |
| **Steps** | 1. Go to /review<br>2. Flip a card<br>3. Rate the card |
| **Expected** | Should hear card flip sound, then XP gain sound |
| **Status** | [ ] Pass / [ ] Fail |

### TC-19: Weekly Challenge Progress Tracking
| Field | Value |
|-------|-------|
| **Precondition** | Weekly challenge is "Complete 7 lessons" |
| **Steps** | 1. Note current progress (e.g., 0/7)<br>2. Complete a lesson<br>3. Return to dashboard |
| **Expected** | Progress updates to 1/7, progress bar reflects change |
| **Status** | [ ] Pass / [ ] Fail |

### TC-20: Weekly Challenge Reward Claim
| Field | Value |
|-------|-------|
| **Precondition** | Weekly challenge completed (7/7) |
| **Steps** | 1. See "Claim Reward" button in Today's Focus<br>2. Click to claim |
| **Expected** | XP awarded, button changes to "Claimed", challenge marked complete |
| **Status** | [ ] Pass / [ ] Fail |

---

## Quick Smoke Test Checklist

Run through these quickly to verify basic functionality:

- [ ] App loads at http://localhost:5173
- [ ] Onboarding flow completes
- [ ] Dashboard shows TodaysFocus and Leaderboard
- [ ] /review shows flashcards with SM-2 stats
- [ ] /challenges shows 5 rotating challenges
- [ ] XP/Level display updates after actions
- [ ] No console errors during normal usage

---

## Notes

| Issue | Description | Severity |
|-------|-------------|----------|
| | | |
| | | |
| | | |

---

**Tester**: _________________
**Date**: _________________
**Build**: Milestone 1 Complete
