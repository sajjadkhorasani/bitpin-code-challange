import { cn } from '@utils';

interface LayoutProps {
  className?: string;
  children: React.ReactNode;
}

export default function Layout({ className, children }: LayoutProps) {
  return (
    <div
      className={cn(
        'flex-col justify-start items-stretch w-full h-full mx-auto overflow-y-auto',
        className
      )}
    >
      {children}
    </div>
  );
}
