import { cn } from '@utils';

interface ButtonProps extends React.HTMLAttributes<HTMLButtonElement> {}

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
