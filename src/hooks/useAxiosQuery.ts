import type { AxiosResponse } from 'axios';
import {
  QueryKey,
  UndefinedInitialDataOptions,
  useQuery,
} from '@tanstack/react-query';

import { axiosInstance } from '@services';

async function fetch<D = never, R = never>(url: string, data?: D) {
  return (
    await axiosInstance.get<D, AxiosResponse<R>>(url, {
      data,
    })
  )?.data;
}

export default function useAxiosQuery<R = never, D = never>(
  queryKey: QueryKey,
  url: string,
  data?: D,
  options?: Omit<UndefinedInitialDataOptions<D, Error, R>, 'queryKey'>
) {
  return useQuery<D, Error, R>({
    queryKey,
    queryFn: () => fetch(url, data),
    ...options,
  });
}
