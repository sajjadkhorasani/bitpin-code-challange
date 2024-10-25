import { QueryCache, QueryClient } from '@tanstack/react-query';
// import { persistQueryClient } from '@tanstack/react-query-persist-client';
// import { createSyncStoragePersister } from '@tanstack/query-sync-storage-persister';

// import { compress, decompress } from 'lz-string';

export const queryCache = new QueryCache();

const client = new QueryClient({
  queryCache,
  defaultOptions: {
    queries: {
      staleTime: 3000,
      refetchOnWindowFocus: false,
      retry: 5,
    },
  },
});

// const localStoragePersister = createSyncStoragePersister({
//   storage: window.localStorage,
//   key: 'cache',
//   serialize: (data) => compress(JSON.stringify(data)),
//   deserialize: (data) => JSON.parse(decompress(data)),
// });

// persistQueryClient({
//   // @ts-ignore
//   queryClient: client,
//   persister: localStoragePersister,
//   dehydrateOptions: {
//     shouldDehydrateQuery: (query) => query.queryKey.includes('markets'),
//   },
// });

export default client;
