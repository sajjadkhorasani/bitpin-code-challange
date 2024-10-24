import { TanStackRouterDevtools } from '@tanstack/router-devtools';

export default function RouterDevTools() {
  if (import.meta.env.PROD) return null;

  return <TanStackRouterDevtools />;
}
