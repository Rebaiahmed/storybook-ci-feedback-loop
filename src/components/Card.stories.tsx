import type { Meta, StoryObj } from '@storybook/react';
import { Card } from './Card.tsx';
import { Button } from './Button.tsx';

const meta: Meta<typeof Card> = {
  title: 'Components/Card',
  component: Card,
  tags: ['autodocs'],
  argTypes: {
    status: {
      control: 'select',
      options: ['default', 'loading', 'error'],
    },
    tag: { control: 'text' },
    title: { control: 'text' },
    description: { control: 'text' },
    errorMsg: { control: 'text' },
    onRetry: { action: 'retried' },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    status: 'default',
    tag: 'Chromatic Integration',
    title: 'Visual Regression Pipeline',
    description:
      'Chromatic scans every story and automates component screenshot comparisons with 0% configuration.',
    footerContent: (
      <>
        <span style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>Status: Active</span>
        <Button variant="primary" style={{ padding: '0.4rem 0.8rem', fontSize: '0.85rem' }}>
          Explore
        </Button>
      </>
    ),
  },
};

export const LoadingSkeleton: Story = {
  args: {
    status: 'loading',
  },
};

export const ErrorState: Story = {
  args: {
    status: 'error',
    errorMsg: 'Connection lost: Chromatic API is currently unreachable.',
  },
};
