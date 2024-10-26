import { Fragment, Suspense } from 'react';

export function withSuspense<T extends JSX.IntrinsicAttributes>(
  Component: React.ComponentType<T>,
  fallback: React.ReactNode = <Fragment />
) {
  return (props: T) => (
    <Suspense fallback={fallback}>
      <Component {...props} />
    </Suspense>
  );
}
