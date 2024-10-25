import { Order, Transaction } from '@types';

import { Skeleton } from './Skeleton';
import { InnerOrderCard, OrderCardProps } from './Order';
import { InnerTransactionCard, TransactionCardProps } from './Transaction';

export default function OrderCard({
  order,
  ...props
}: OrderCardProps | TransactionCardProps) {
  if (!order) return <Skeleton />;

  if (isTransaction(order)) {
    return <InnerTransactionCard order={order} {...props} />;
  }

  return <InnerOrderCard order={order} {...props} />;
}

function isTransaction(order: Order | Transaction): order is Transaction {
  return Object.hasOwn(order, 'match_amount');
}
