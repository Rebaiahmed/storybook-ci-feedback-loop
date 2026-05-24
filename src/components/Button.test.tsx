/**
 * Button Unit Tests
 *
 * These tests check that the Button component works correctly
 * from a logic/DOM perspective.
 *
 * ⚠️  ALL TESTS PASS — even though the button has 3 visual bugs:
 *    Bug 1: Danger button is GREEN instead of RED
 *    Bug 2: Primary button font is 10px (barely readable)
 *    Bug 3: Loading button label is hidden (user sees blank spinner)
 *
 * Unit tests are blind to visual appearance.
 * That's exactly why we need Chromatic.
 */

import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { Button } from './Button';

describe('Button — unit tests (all pass, bugs invisible)', () => {

  // ✅ PASSES — DOM mounts fine, even though button is GREEN instead of RED
  it('Bug 1: renders danger button — unit test PASSES, visual bug missed', () => {
    render(<Button variant="danger">Delete Order</Button>);
    const btn = screen.getByRole('button', { name: /delete order/i });
    expect(btn).toBeTruthy();
    // 🚨 No test checks background color → green bug ships to production
  });

  // ✅ PASSES — text content is there in the DOM, even though font is 10px
  it('Bug 2: renders primary button text — unit test PASSES, font-size bug missed', () => {
    render(<Button variant="primary">Checkout $99</Button>);
    expect(screen.getByText('Checkout $99')).toBeTruthy();
    // 🚨 No test checks font-size → tiny unreadable text ships to production
  });

  // ✅ PASSES — "children" text node exists in DOM, even though CSS hides it
  it('Bug 3: loading button has label in DOM — unit test PASSES, hidden text missed', () => {
    render(<Button loading>Processing payment...</Button>);
    expect(screen.getByText('Processing payment...')).toBeTruthy();
    // 🚨 display:none makes text invisible to users, but NOT to DOM queries
    // Testing Library finds it in the DOM regardless of CSS visibility
  });

  // ✅ PASSES — functional behavior is fine
  it('button is disabled when loading', () => {
    render(<Button loading>Loading</Button>);
    expect(screen.getByRole('button')).toBeDisabled();
  });

});
