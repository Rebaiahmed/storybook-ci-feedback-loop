import React from 'react';
import './Modal.css';
import { Button } from './Button.tsx';

export interface ModalProps {
  isOpen: boolean;
  title: string;
  onClose: () => void;
  showFooter?: boolean;
  footerContent?: React.ReactNode;
  children: React.ReactNode;
}

export const Modal: React.FC<ModalProps> = ({
  isOpen,
  title,
  onClose,
  showFooter = true,
  footerContent,
  children,
}) => {
  if (!isOpen) return null;

  return (
    <div className="modal-overlay" onClick={onClose} data-testid="modal-overlay">
      <div className="modal-container" onClick={(e) => e.stopPropagation()}>
        <div className="modal-header">
          <h3 className="modal-title">{title}</h3>
          <button className="modal-close-btn" onClick={onClose} aria-label="Close modal">
            &times;
          </button>
        </div>
        <div className="modal-body">{children}</div>
        {showFooter && (
          <div className="modal-footer">
            {footerContent || (
              <>
                <button
                  className="custom-btn"
                  style={{
                    background: 'var(--bg-tertiary)',
                    border: '1px solid var(--border-color)',
                  }}
                  onClick={onClose}
                >
                  Cancel
                </button>
                <Button variant="primary" onClick={onClose}>
                  Confirm
                </Button>
              </>
            )}
          </div>
        )}
      </div>
    </div>
  );
};
