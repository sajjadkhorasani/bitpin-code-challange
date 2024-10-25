import React, { Children, useCallback, useMemo } from 'react';

import { cn } from '@utils';
import { Button } from '@components';

interface TabProps {
  title: string | React.ReactNode;
}

interface TabsProps<T extends TabProps> {
  className?: string;
  children: React.ReactElement<T> | React.ReactElement<T>[];
  activeTab: number;
  onTabChange(key: number): void;
}

export default function Tabs<T extends TabProps>({
  className,
  children,
  activeTab,
  onTabChange,
}: TabsProps<T>) {
  const onTabChangeHandler = useCallback(
    (index: number) => (e: React.MouseEvent<HTMLButtonElement>) => {
      e.preventDefault();
      onTabChange(index);
    },
    [onTabChange]
  );

  const render = useMemo(() => {
    return Children.map(children, (tab, index) => {
      return (
        <Button
          key={index}
          onClick={onTabChangeHandler(index)}
          className={cn('bg-transparent grow px-8 py-2 rounded-sm', {
            'bg-green-400': index === activeTab,
            'text-gray-600 border-b border-b-gray-300 dark:border-b-gray-700':
              index !== activeTab,
          })}
        >
          {tab?.props?.title}
        </Button>
      );
    });
  }, [activeTab, children, onTabChangeHandler]);

  return (
    <div className={cn('relative w-full mt-4 overflow-hidden', className)}>
      <div className="flex">{render}</div>
      <div
        className={cn(
          'flex justify-start items-stretch grow snap-x scroll-pe-4 transition-transform duration-500'
        )}
        style={{
          transform: `translateX(-${activeTab * 100}%)`,
        }}
      >
        {children}
      </div>
    </div>
  );
}

export { default as Tab } from './Tab';
