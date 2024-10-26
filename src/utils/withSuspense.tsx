import { Fragment, Suspense } from 'react';

export default function withSuspense<T>(
  Component: React.ComponentType<T>,
  fallback: React.ReactNode = <Fragment />
) {
  return (props: T) => (
    <Suspense fallback={fallback}>
      {/* @ts-ignore */}
      <Component {...props} />
    </Suspense>
  );
}
