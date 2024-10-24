import { ReactQueryDevtools } from '@tanstack/react-query-devtools';

export default function RouterDevTools() {
  if (import.meta.env.PROD) return null;

  return <ReactQueryDevtools />;
}
