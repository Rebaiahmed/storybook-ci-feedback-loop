import React from 'react';
import './Button.css';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'danger';
  loading?: boolean;
}

export const Button: React.FC<ButtonProps> = ({
  variant = 'primary',
  loading = false,
  disabled,
  children,
  className = '',
  ...props
}) => {
  const isDisabled = disabled || loading;
  const classes = [
    'custom-btn',
    `custom-btn-${variant}`,
    loading ? 'custom-btn-loading' : '',
    className,
  ].filter(Boolean).join(' ');

  return (
    <button
      className={classes}
      disabled={isDisabled}
      {...props}
    >
      {loading && <span className="btn-spinner" data-testid="spinner" />}
      <span className="btn-content">{children}</span>
    </button>
  );
};
