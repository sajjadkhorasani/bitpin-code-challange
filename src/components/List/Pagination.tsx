import { useEffect, useRef } from 'react';
import {
  type PartialKeys,
  useVirtualizer,
  type VirtualItem,
  type VirtualizerOptions,
} from '@tanstack/react-virtual';

import { cn } from '@utils';
import { usePagination } from '@hooks';

interface ListProps<T>
  extends Omit<
    PartialKeys<
      VirtualizerOptions<HTMLDivElement, HTMLDivElement>,
      | 'getScrollElement'
      | 'observeElementOffset'
      | 'observeElementRect'
      | 'scrollToFn'
    >,
    'count'
  > {
  results: T[];
  size?: number;
  className?: string;
  children: (row: VirtualItem) => React.ReactNode;
}

export default function List<T>({
  results,
  size,
  className,
  children,
  ...options
}: ListProps<T>) {
  const parentRef = useRef<HTMLDivElement>(null);
  const { data, hasNextPage, nextPage } = usePagination(results, size);

  const virtualizer = useVirtualizer({
    ...options,
    count: hasNextPage ? data.length + 1 : data.length,
    getScrollElement: () => parentRef.current,
    overscan: 10,
  });

  useEffect(() => {
    const [lastItem] = [...virtualizer.getVirtualItems()].reverse();

    if (!lastItem) {
      return;
    }

    if (lastItem.index >= data.length - 1 && hasNextPage) {
      nextPage();
    }
  }, [hasNextPage, nextPage, data.length, virtualizer.getVirtualItems()]);

  return (
    <div
      ref={parentRef}
      className={cn('h-full max-w-full py-4 px-2 overflow-auto', className)}
    >
      <div
        className={cn(`relative w-full`)}
        style={{ height: `${virtualizer.getTotalSize()}px` }}
      >
        {virtualizer.getVirtualItems().map(children)}
      </div>
    </div>
  );
}
