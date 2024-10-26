import { lazy } from 'react';

import { withSuspense } from '@utils';

export type { ButtonProps } from './Button';
const Button = withSuspense(lazy(() => import('./Button/index')));
const Card = withSuspense(lazy(() => import('./Card/index')));
const Container = withSuspense(lazy(() => import('./Container/index')));
const Header = withSuspense(lazy(() => import('./Header/index')));
const Image = withSuspense(lazy(() => import('./Image/index')));
const InfiniteScroll = withSuspense(
  lazy(() => import('./InfiniteScroll/index'))
);
const Input = withSuspense(lazy(() => import('./Input/index')));
const Layout = withSuspense(lazy(() => import('./Layout/index')));
const List = withSuspense(lazy(() => import('./List/index')));
const ListWithPagination = withSuspense(
  lazy(() => import('./List/Pagination'))
);
const Loading = withSuspense(lazy(() => import('./Loading/index')));
const OrderCard = withSuspense(lazy(() => import('./OrderCard/index')));
const Tabs = withSuspense(lazy(() => import('./Tabs/index')));
const Tab = withSuspense(lazy(() => import('./Tabs/Tab')));

export {
  Button,
  Card,
  Container,
  Header,
  Image,
  InfiniteScroll,
  Input,
  Layout,
  List,
  ListWithPagination,
  Loading,
  OrderCard,
  Tabs,
  Tab,
};
