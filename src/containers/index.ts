import { lazy } from 'react';

import { withSuspense } from '@utils';

const OrderBuy = withSuspense(lazy(() => import('./OrderBuy')));
const OrderContainer = withSuspense(lazy(() => import('./OrderContainer')));
const Transction = withSuspense(lazy(() => import('./Transction')));
const OrderSell = withSuspense(lazy(() => import('./OrderSell')));

export { OrderBuy, OrderContainer, Transction, OrderSell };
