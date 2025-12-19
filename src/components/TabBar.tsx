'use client';

import clsx from 'clsx';
import { useEffect } from 'react';

export type TabOption<T extends string> = {
  key: T;
  label: string;
};

type TabBarProps<T extends string> = {
  options: TabOption<T>[];
  active: T;
  onChange: (key: T) => void;
};

export function TabBar<T extends string>({ options, active, onChange }: TabBarProps<T>) {
  useEffect(() => {
    const listener = (event: KeyboardEvent) => {
      if (event.key === 'ArrowRight' || event.key === 'ArrowLeft') {
        event.preventDefault();
        const index = options.findIndex((o) => o.key === active);
        const direction = event.key === 'ArrowRight' ? 1 : -1;
        const nextIndex = (index + direction + options.length) % options.length;
        onChange(options[nextIndex].key);
      }
    };
    window.addEventListener('keydown', listener);
    return () => window.removeEventListener('keydown', listener);
  }, [active, onChange, options]);

  return (
    <div className="flex gap-2 overflow-x-auto border-b border-border bg-white px-4 pb-2">
      {options.map((option) => (
        <button
          key={option.key}
          className={clsx(
            'whitespace-nowrap rounded-full px-4 py-2 text-sm font-medium transition-colors',
            active === option.key
              ? 'bg-primary text-white shadow-card'
              : 'bg-muted text-gray-700 hover:bg-gray-200'
          )}
          onClick={() => onChange(option.key)}
        >
          {option.label}
        </button>
      ))}
    </div>
  );
}
