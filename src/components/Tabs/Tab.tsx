import { forwardRef } from 'react';

interface TabProps extends React.HTMLAttributes<HTMLDivElement> {
  title: string;
}

function Tab(
  { children, className, ...props }: React.PropsWithChildren<TabProps>,
  ref: React.Ref<HTMLDivElement>
) {
  return (
    <div ref={ref} className="w-full flex-shrink-0 snap-center" {...props}>
      {children}
    </div>
  );
}

export default forwardRef(Tab);
