# Visual Bug Report: 3 Intentional Regressions

These bugs are added on purpose to prove one thing:
**Unit tests will pass. Chromatic will catch them. Users won't see broken UI.**

---

## The Real-World Context: An E-Commerce App

Imagine these bugs in a checkout flow:

- A **red "Delete Order"** button turns green → looks like a safe action → users click it by accident → orders get deleted → revenue lost 💸
- The **"Checkout $99"** button text shrinks to 10px → users can't read the price → they abandon the cart → conversion drops 📉
- The **"Processing payment..."** loading text disappears → users see a blank spinner → they think the app crashed → they refresh → double charge 😱

Unit tests won't catch any of these. **Chromatic will.**

---

## Bug 1 — Wrong Color (Danger Button)

**File:** `src/components/Button.css`
**Story:** `Components/Button` → `Danger`

```diff
 .custom-btn-danger {
-  background: var(--grad-danger);   /* ✅ correct: red */
+  background: var(--grad-success);  /* 🐛 bug: green — looks like a safe action */
 }
```

**Unit test result:** ✅ PASSES (no test checks background color)
**Chromatic result:** 🚨 BLOCKED — pixel diff shows red → green change

---

## Bug 2 — Font Too Small (Primary Button)

**File:** `src/components/Button.css`
**Story:** `Components/Button` → `Primary`

```diff
 .custom-btn-primary {
   background: var(--grad-primary);
+  font-size: 10px; /* 🐛 bug: 10px instead of 0.95rem — barely readable */
 }
```

**Unit test result:** ✅ PASSES (`getByText('Checkout $99')` finds the DOM node regardless of size)
**Chromatic result:** 🚨 BLOCKED — snapshot shows tiny unreadable text vs baseline

---

## Bug 3 — Missing Label on Loading State

**File:** `src/components/Button.css`
**Story:** `Components/Button` → `Loading`

```diff
+.custom-btn-loading .btn-content {
+  display: none; /* 🐛 bug: label hidden — user sees blank spinner only */
+}
```

**Unit test result:** ✅ PASSES (`getByText('Processing payment...')` finds the DOM node even when `display:none`)
**Chromatic result:** 🚨 BLOCKED — snapshot shows empty button vs baseline with label

---

## The Proof: Unit Tests Pass, Bugs Ship

See [`Button.test.tsx`](./src/components/Button.test.tsx) — 4 tests, all green, all 3 bugs invisible:

```
✓ renders danger button — unit test PASSES, visual bug missed
✓ renders primary button text — unit test PASSES, font-size bug missed
✓ loading button has label in DOM — unit test PASSES, hidden text missed
✓ button is disabled when loading
```

This is exactly why visual regression testing exists alongside unit tests — not instead of them.
