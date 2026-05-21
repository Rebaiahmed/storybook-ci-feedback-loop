# Storybook + CI: My Favorite Frontend Feedback Loop

> A robust proof-of-concept repository demonstrating the ultimate frontend QA workflow: declarative components, automated visual regression testing, and continuous documentation deployment.

---

## 📖 The Frontend Feedback Loop Problem

Have you ever merged a Pull Request where all the unit and integration tests passed perfectly, only to find out that a critical UI layout was broken in production? 

Traditional test suites (like Jest or React Testing Library) excel at testing logical states and functional behaviors. However, they are completely blind to **visual appearance**. A button can have perfect event handlers, but if its background matches its text color or turns a bright green when it should be warning-red, traditional code tests will still report a green checkmark.

**The Solution:** Scaffolding components declare-first in Storybook, and automating screenshot comparisons on every single push via Chromatic CI. 

---

## 🛠️ Step 1: Setting Up a Visual-First Environment

To build this loop, we scaffolded a clean, React + TypeScript workspace powered by Vite to keep rebuilds instant. The dependencies (configured in `package.json`) use the latest Storybook v8 framework:

```json
{
  "scripts": {
    "dev": "vite",
    "storybook": "storybook dev -p 6006",
    "build-storybook": "storybook build"
  },
  "devDependencies": {
    "storybook": "^8.0.0",
    "@storybook/react-vite": "^8.0.0"
  }
}
```

By keeping our styles scoped within dedicated component files, we ensure modularity and clean presentation.

---

## 🎨 Step 2: Scaffolding Premium Components Declare-First

We built three highly reusable components representing critical UI layers, ensuring **100% state coverage** as declarative stories using Storybook's official `StoryObj` args pattern:

### 1. The Button Component
Features states for `primary`, `danger`, `disabled`, and `loading`.
* **Code**: `src/components/Button.tsx`
* **Stories**: `src/components/Button.stories.tsx`

```typescript
// Declaring Button stories with strict TypeScript
import type { Meta, StoryObj } from '@storybook/react';
import { Button } from './Button.tsx';

const meta: Meta<typeof Button> = {
  title: 'Components/Button',
  component: Button,
  tags: ['autodocs'],
};
export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    variant: 'primary',
    children: 'Primary Action',
  },
};
```

### 2. The Modal Component
Features standard overlays, custom footers, and footerless notification frames.
* **Code**: `src/components/Modal.tsx`
* **Stories**: `src/components/Modal.stories.tsx`

### 3. The Card Component
Includes default dashboard states, shimmering skeleton loading animations, and warning error boundary placeholders.
* **Code**: `src/components/Card.tsx`
* **Stories**: `src/components/Card.stories.tsx`

---

## 🚀 Step 3: Automating Visual Regression Checks in CI

Every branch push and pull request executes our visual testing pipeline. Chromatic compiles our storybook, takes snapshots, and runs cloud-based pixel comparison algorithms to check for changes.

The workflow at `.github/workflows/visual-test.yml` caches dependencies to run in seconds and uses safe project token secrets:

```yaml
name: "Visual Tests"

on:
  push:
    branches: [main]
  pull_request:
    branches: [main]

jobs:
  chromatic:
    name: Run Chromatic
    runs-on: ubuntu-latest
    steps:
      - name: Checkout Repository
        uses: actions/checkout@v4
        with:
          fetch-depth: 0

      - name: Set up Node.js
        uses: actions/setup-node@v4
        with:
          node-version: 18
          cache: 'npm'

      - name: Install Dependencies
        run: npm ci --legacy-peer-deps

      - name: Run Chromatic Tests
        uses: chromaui/action@v11
        with:
          projectToken: ${{ secrets.CHROMATIC_PROJECT_TOKEN }}
          onlyChanged: true
          exitZeroOnChanges: true
```

---

## 🐛 Step 4: Catching Visual Regressions (The Intentional Bug)

To demonstrate the power of this loop, we have intentionally introduced a visual bug into `src/components/Button.css`:

```css
.custom-btn-danger {
  background: var(--grad-success); /* INTENTIONAL VISUAL BUG: wrong background color (green instead of red) */
  box-shadow: 0 4px 14px rgba(239, 68, 68, 0.25);
}
```

Instead of a danger-red background gradient, the button is styled in success-green. 
* **The Result**: A unit test checking if the button mounts will PASS. But **Chromatic CI** will capture the green button, compare it against the red baseline, and block the Pull Request, alerting the developer of a visual regression.
* For more, check the [BUG_REPORT.md](BUG_REPORT.md) file.

---

## 🌐 Step 5: Continuous Documentation Deployments

When changes are verified and merged to `main`, the living styleguide must update automatically. Our second workflow at `.github/workflows/storybook-deploy.yml` builds and deploys Storybook directly to GitHub Pages using modern, safe ID token permissions:

```yaml
name: "Deploy Storybook"

on:
  push:
    branches: [main]

permissions:
  contents: read
  pages: write
  id-token: write

concurrency:
  group: "pages"
  cancel-in-progress: false

jobs:
  deploy:
    environment:
      name: github-pages
      url: ${{ steps.deployment.outputs.page_url }}
    runs-on: ubuntu-latest
    steps:
      - name: Checkout Repository
        uses: actions/checkout@v4
        # ... sets up Node and caches npm ...
      - name: Build Storybook
        run: npm run build-storybook
      - name: Deploy to GitHub Pages
        id: deployment
        uses: actions/deploy-pages@v4
```

---

## 🚦 Getting Started Locally

1. **Clone & Install Dependencies**:
   ```bash
   NODE_OPTIONS="--dns-result-order=ipv4first" npm install --legacy-peer-deps
   ```
2. **Start Local Storybook**:
   ```bash
   npm run storybook
   ```
3. **Verify Type Compilation**:
   ```bash
   npx tsc --noEmit
   ```
4. **Compile Static Storybook**:
   ```bash
   npm run build-storybook
   ```
# storybook-ci-feedback-loop
