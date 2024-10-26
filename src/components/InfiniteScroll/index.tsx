import { useMemo } from 'react';
import {
  type IntersectionOptions,
  useInView,
} from 'react-intersection-observer';

import { cn } from '@utils';
import { usePagination } from '@hooks';

interface InfiniteScrollProps<T> extends IntersectionOptions {
  results: T[];
  size?: number;
  className?: string;
  children: (item: T, index: number) => JSX.Element;
}

export default function InfiniteScroll<T>({
  results,
  size = 10,
  className,
  children,
  ...options
}: InfiniteScrollProps<T>) {
  const { data, hasNextPage, nextPage } = usePagination(results, size);
  const { ref } = useInView({
    ...options,
    threshold: 1.0,
    onChange(inView) {
      if (inView && hasNextPage) {
        nextPage();
      }
    },
  });

  const render = useMemo(() => {
    return data.map(children);
  }, [data]);

  return (
    <div
      className={cn(
        'max-h-full flex-col justify-start items-stretch gap-4 overflow-auto',
        className
      )}
    >
      {render}
      {hasNextPage && (
        <div
          ref={ref}
          className={
            'mt-4 border rounded-lg shadow p-4 w-full mx-auto animate-pulse'
          }
        >
          <div className="h-12 bg-gray-200 rounded-lg"></div>
        </div>
      )}
    </div>
  );
}
