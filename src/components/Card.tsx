import React from 'react';
import './Card.css';
import { Button } from './Button.tsx';

export interface CardProps {
  status?: 'default' | 'loading' | 'error';
  tag?: string;
  title?: string;
  description?: string;
  errorMsg?: string;
  onRetry?: () => void;
  footerContent?: React.ReactNode;
}

export const Card: React.FC<CardProps> = ({
  status = 'default',
  tag,
  title,
  description,
  errorMsg = 'Failed to load dashboard widget data.',
  onRetry,
  footerContent,
}) => {
  if (status === 'loading') {
    return (
      <div className="custom-card custom-card-loading" data-testid="card-skeleton">
        <div className="skeleton-tag skeleton-shimmer" />
        <div className="skeleton-title skeleton-shimmer" />
        <div className="skeleton-text skeleton-shimmer" />
        <div className="skeleton-text-short skeleton-shimmer" />
        <div className="skeleton-footer skeleton-shimmer" />
      </div>
    );
  }

  if (status === 'error') {
    return (
      <div className="custom-card custom-card-error" data-testid="card-error">
        <div className="error-container">
          <span className="error-icon" role="img" aria-label="error">
            ⚠️
          </span>
          <p className="error-message">{errorMsg}</p>
          <p className="error-hint">Please check your network settings and try again.</p>
          {onRetry && (
            <Button variant="danger" onClick={onRetry} style={{ marginTop: '0.5rem' }}>
              Retry Connection
            </Button>
          )}
        </div>
      </div>
    );
  }

  return (
    <div className="custom-card" data-testid="card-default">
      {tag && <span className="card-tag">{tag}</span>}
      {title && <h4 className="card-title">{title}</h4>}
      {description && <p className="card-description">{description}</p>}
      {footerContent && <div className="card-footer">{footerContent}</div>}
    </div>
  );
};
