import { cn } from '@utils';

interface ContainerProps {
  className?: string;
  children: React.ReactNode;
}

export default function Container({ className, children }: ContainerProps) {
  return (
    <div
      className={cn('container lg:w-2/4 h-full flex mx-auto px-4', className)}
    >
      {children}
    </div>
  );
}
