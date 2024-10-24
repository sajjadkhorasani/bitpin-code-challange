import { chunk } from 'es-toolkit';
import { useState, useCallback, useMemo, useRef } from 'react';

interface Pagination<T> {
  data: T[];
  nextPage: () => void;
  previousPage: () => void;
  setPage: (page: number) => void;
  hasNextPage: boolean;
  hasPreviusPage: boolean;
  totalPage: number;
}

export default function usePagination<T>(
  results: T[],
  itemsPerPage: number = 10
): Pagination<T> {
  const [currentPage, setCurrentPage] = useState(1);

  const chunkedList = chunk(results, itemsPerPage);

  const nextPage = useCallback(() => {
    if (currentPage < chunkedList.length) {
      setCurrentPage((prev) => prev + 1);
    }
  }, [currentPage, chunkedList]);

  const previousPage = useCallback(() => {
    if (currentPage > 1) {
      setCurrentPage((prev) => prev - 1);
    }
  }, [currentPage]);

  const setPage = useCallback(
    (page: number) => {
      if (page > 0 && page <= chunkedList.length) {
        setCurrentPage(page);
      }
    },
    [chunkedList]
  );

  const hasNextPage = currentPage < chunkedList.length;
  const hasPreviusPage = currentPage > 1;
  const totalPage = chunkedList.length;

  const data = useMemo(() => {
    return chunkedList.slice(0, currentPage - 1).flat();
  }, [chunkedList, currentPage]);

  return {
    data,
    nextPage,
    previousPage,
    setPage,
    hasNextPage,
    hasPreviusPage,
    totalPage,
  };
}
