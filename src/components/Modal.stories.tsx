import type { Meta, StoryObj } from '@storybook/react';
import { Modal } from './Modal.tsx';
import { Button } from './Button.tsx';

const meta: Meta<typeof Modal> = {
  title: 'Components/Modal',
  component: Modal,
  tags: ['autodocs'],
  argTypes: {
    isOpen: { control: 'boolean' },
    title: { control: 'text' },
    showFooter: { control: 'boolean' },
    onClose: { action: 'closed' },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    isOpen: true,
    title: 'Reset Repository Confirmation',
    children: (
      <p>
        Are you sure you want to revert all local commits? This action will overwrite your local main
        branch with the origin branch and cannot be undone.
      </p>
    ),
  },
};

export const WithCustomFooter: Story = {
  args: {
    isOpen: true,
    title: 'Visual Regression Detected',
    children: (
      <p>
        The danger state button color does not match the baseline screenshot. Would you like to accept
        this new change or reject it?
      </p>
    ),
    showFooter: true,
    footerContent: (
      <>
        <Button variant="danger">Reject Change</Button>
        <Button variant="primary">Accept & Update Baseline</Button>
      </>
    ),
  },
};

export const WithoutFooter: Story = {
  args: {
    isOpen: true,
    title: 'Quick Information Notice',
    children: (
      <p>
        Your visual tests are currently running in the background of your GitHub Actions CI pipeline.
        We will notify you immediately if any mismatched pixels exceed the 0.1% threshold.
      </p>
    ),
    showFooter: false,
  },
};
