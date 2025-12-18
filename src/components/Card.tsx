import React from 'react';

export type CardProps = {
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
};

export function Card({ children, onClick, className = '' }: CardProps) {
  const clickable = Boolean(onClick);
  return (
    <div
      role={clickable ? 'button' : undefined}
      tabIndex={clickable ? 0 : undefined}
      onClick={onClick}
      onKeyDown={(event) => {
        if (!clickable) return;
        if (event.key === 'Enter' || event.key === ' ') {
          event.preventDefault();
          onClick?.();
        }
      }}
      className={`rounded-2xl bg-white p-4 shadow-card ${clickable ? 'cursor-pointer hover:-translate-y-0.5 hover:shadow-lg transition' : ''} ${className}`}
    >
      {children}
    </div>
  );
}
