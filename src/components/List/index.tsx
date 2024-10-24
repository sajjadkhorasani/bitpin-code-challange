import { useRef } from 'react';
import {
  PartialKeys,
  useVirtualizer,
  VirtualItem,
  VirtualizerOptions,
} from '@tanstack/react-virtual';

import { cn } from '@utils';

interface ListProps
  extends PartialKeys<
    VirtualizerOptions<HTMLDivElement, HTMLDivElement>,
    | 'getScrollElement'
    | 'observeElementOffset'
    | 'observeElementRect'
    | 'scrollToFn'
  > {
  children: (row: VirtualItem) => React.ReactNode;
}

export default function List({ children, ...options }: ListProps) {
  const parentRef = useRef<HTMLDivElement>(null);

  const virtualizer = useVirtualizer({
    ...options,
    getScrollElement: () => parentRef.current,
    overscan: 10,
  });

  return (
    <div
      ref={parentRef}
      className={cn('h-full max-w-full py-4 px-2 overflow-auto')}
    >
      <div className={cn(`relative w-full h-[${virtualizer.getTotalSize()}]`)}>
        {virtualizer.getVirtualItems().map(children)}
      </div>
    </div>
  );
}
