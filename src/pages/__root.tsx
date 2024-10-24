import { Outlet, createRootRoute, useRouter } from '@tanstack/react-router';

import {
  Button,
  Container,
  Header,
  Layout,
  QueryDevTools,
  RouterDevTools,
} from '@components';

export const Route = createRootRoute({
  component: RootComponent,
  errorComponent: ErrorComponent,
  notFoundComponent: NotFoundComponent,
});

function RootComponent() {
  return (
    <Layout>
      <Header />
      <Container className="py-8">
        <Outlet />
        <QueryDevTools />
        <RouterDevTools />
      </Container>
    </Layout>
  );
}

function ErrorComponent() {
  const router = useRouter();
  return (
    <div className="flex-col justify-center self-center items-center grow text-center">
      <h2>Something Went Wrong !</h2>
      <Button className="mt-4" onClick={() => router.invalidate()}>
        Reload
      </Button>
    </div>
  );
}

function NotFoundComponent() {
  const router = useRouter();
  return (
    <div className="flex-col justify-center self-center items-center grow text-center">
      <h2>Route Not Found !</h2>
      <Button
        className="mt-4"
        onClick={() =>
          router.navigate({
            to: '/',
          })
        }
      >
        Home
      </Button>
    </div>
  );
}
