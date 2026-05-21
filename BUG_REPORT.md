# Visual Bug Report: Intentional Regression for CI Pipeline Validation

To validate our Storybook + Chromatic visual regression testing pipeline, we have intentionally introduced a visual bug into our premium `Button` component's **Danger** state. 

---

## 🐛 Bug Overview

- **Component**: `Button` (Danger state)
- **File**: `src/components/Button.css`
- **Expected Behavior**: A danger button should feature a vibrant, warning-red gradient (`var(--grad-danger)`) to visually signal high-risk actions (e.g., deletions, destructive resets) to the user.
- **Actual Behavior**: The danger button incorrectly displays a success-green gradient (`var(--grad-success)`), causing high-risk triggers to look like safe, affirmative actions. This violates critical accessibility guidelines and visual hierarchies.

---

## 🔍 Code Differences

Below is the exact diff showing where the visual bug was introduced in our styled code:

```diff
 .custom-btn-danger {
-  background: var(--grad-danger);
+  background: var(--grad-success); /* INTENTIONAL VISUAL BUG: wrong background color (green instead of red) */
   box-shadow: 0 4px 14px rgba(239, 68, 68, 0.25);
 }
```

---

## ⚡ How This Validates the Chromatic CI Loop

Traditional unit and integration tests (e.g., Jest, React Testing Library) will NOT catch this bug! A standard test checking if the button mounts or is disabled/enabled will pass perfectly because the underlying HTML structures and event handlers are unmodified.

Here is how our visual regression loop handles this:

1. **Local Storybook**: The visual regression is instantly visible in the local Storybook environment under the `Danger` story of the `Button`.
2. **Pull Request Trigger**: When a developer pushes this change in a branch or opens a Pull Request, the GitHub Actions `visual-test.yml` workflow fires automatically.
3. **Chromatic Scanning**: Chromatic builds the storybook, captures screenshots of all stories, and compares the `Danger` state snapshot against the baseline main snapshot.
4. **Failure & Review**: Chromatic flags the background change, marks the check as **Pending Review** in the GitHub PR status, and generates a visual diff screen showing the baseline red overlayed with the incoming green. 
5. **Resolution**: A QA engineer or developer can reject the change on the Chromatic dashboard to fail the CI build, preventing this regression from merging to `main`.
