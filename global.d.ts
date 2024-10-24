/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly API_BASE_URL: string;
  readonly API_SECONDARY_BASE_URL: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}

import { router } from '@router';
declare module '@tanstack/react-router' {
  interface Register {
    router: typeof router;
  }
}
