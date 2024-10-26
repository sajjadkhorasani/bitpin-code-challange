import { cn } from '@utils';
import { ComponentProps } from 'react';

export interface ButtonProps extends ComponentProps<'button'> {}

export default function Button({ className, children, ...props }: ButtonProps) {
  return (
    <button
      className={cn(
        'bg-green-400 px-8 py-2 rounded-md hover:bg-green-300 transition',
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
}
