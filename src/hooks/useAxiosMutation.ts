import type { AxiosResponse } from 'axios';
import { useMutation } from '@tanstack/react-query';

import { axiosInstance } from '@services';

async function fetch<D = never, R = never>(url: string, data?: D) {
  return (await axiosInstance.post<D, AxiosResponse<R>>(url, data))?.data;
}

export default function useAxiosMutation<T>(url: string) {
  return useMutation<T, Error, { data: T }>({
    mutationFn: ({ data }: { data: T }) => fetch(url, data),
  });
}
