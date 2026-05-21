# Demo Script: Storybook + CI Feedback Loop

This script serves as a companion guide to the proof-of-concept, mapping sections of the blog post **"Storybook + CI: My Favorite Frontend Feedback Loop"** directly to the actual files, codebases, and configs created in this repository.

---

## 🗺️ Blog Sections to Code Map

### 1. "Local Playground: Creating the Component"
* **Blog Context**: In this section, we discuss setting up isolated visual test environments and scaffolding frontend components with multiple states.
* **Actual Code Location**:
  * Scaffolding: [package.json](file:///Users/ahmed/.gemini/antigravity/scratch/storybook-ci-poc/package.json) features our React + Vite + TS framework dependencies.
  * Button Component: [Button.tsx](file:///Users/ahmed/.gemini/antigravity/scratch/storybook-ci-poc/src/components/Button.tsx)
  * Button Styling: [Button.css](file:///Users/ahmed/.gemini/antigravity/scratch/storybook-ci-poc/src/components/Button.css)
* **How to Verify**:
  1. Open a terminal in the root of the project directory.
  2. Start the local Storybook:
     ```bash
     npm run storybook
     ```
  3. Open `http://localhost:6006` in your web browser. You will see the beautiful, premium styling of the Button component.

---

### 2. "Writing the Story: Declarative State Coverage"
* **Blog Context**: The blog argues that components should have complete, declarative state coverage using the modern args pattern (`StoryObj`).
* **Actual Code Location**:
  * Button Stories: [Button.stories.tsx](file:///Users/ahmed/.gemini/antigravity/scratch/storybook-ci-poc/src/components/Button.stories.tsx)
  * Modal Stories: [Modal.stories.tsx](file:///Users/ahmed/.gemini/antigravity/scratch/storybook-ci-poc/src/components/Modal.stories.tsx)
  * Card Stories: [Card.stories.tsx](file:///Users/ahmed/.gemini/antigravity/scratch/storybook-ci-poc/src/components/Card.stories.tsx)
* **Audit Document**: [STORIES_AUDIT.md](file:///Users/ahmed/.gemini/antigravity/scratch/storybook-ci-poc/STORIES_AUDIT.md) verifies complete compliance across all stories.

---

### 3. "The CI Pipeline: Automating Regression Catching"
* **Blog Context**: Automation is the core of the feedback loop. Every branch push or pull request must trigger a visual regression check on Chromatic.
* **Actual Code Location**:
  * Visual Test Workflow: [visual-test.yml](file:///Users/ahmed/.gemini/antigravity/scratch/storybook-ci-poc/.github/workflows/visual-test.yml)
* **Key Steps in CI**:
  - `actions/checkout@v4` with `fetch-depth: 0` allows Chromatic to read Git history.
  - `actions/setup-node@v4` with `cache: 'npm'` optimizes CI runs.
  - `chromaui/action@v11` automates standard Chromatic execution via `secrets.CHROMATIC_PROJECT_TOKEN`.
* **Audit Document**: [CI_AUDIT.md](file:///Users/ahmed/.gemini/antigravity/scratch/storybook-ci-poc/CI_AUDIT.md) reviews and validates the workflow code.

---

### 4. "Catching the Mismatch: The Intentional Regression"
* **Blog Context**: To prove the loop works, we deliberately introduce a visual regression that would easily bypass normal unit tests but get flagged in the visual pipeline.
* **Actual Code Location**:
  * Mismatched Code: [Button.css](file:///Users/ahmed/.gemini/antigravity/scratch/storybook-ci-poc/src/components/Button.css#L37-L40)
* **What to Look For**:
  Notice that inside `Button.css`, the `.custom-btn-danger` background is set to `var(--grad-success)` (green gradient) instead of `var(--grad-danger)` (red gradient).
* **Documented Details**: Check [BUG_REPORT.md](file:///Users/ahmed/.gemini/antigravity/scratch/storybook-ci-poc/BUG_REPORT.md) for a detailed analysis of this regression.

---

### 5. "Deploying the Living Component Library"
* **Blog Context**: When code is successfully approved and merged to the default branch, the documentation (Storybook) should deploy to a public site like GitHub Pages automatically.
* **Actual Code Location**:
  * Deploy Workflow: [storybook-deploy.yml](file:///Users/ahmed/.gemini/antigravity/scratch/storybook-ci-poc/.github/workflows/storybook-deploy.yml)
* **How to Verify**:
  In a real GitHub environment, merging to `main` triggers this workflow, which builds and publishes the assets under `./storybook-static` straight to GitHub Pages.
