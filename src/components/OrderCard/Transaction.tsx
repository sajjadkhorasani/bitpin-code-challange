import { Transaction } from '@types';

export interface TransactionCardProps
  extends React.HTMLAttributes<HTMLDivElement> {
  order: Transaction;
  totalMode?: boolean;
}

export function InnerTransactionCard({
  order,
  totalMode,
  ...props
}: TransactionCardProps) {
  return (
    <div
      className="flex justify-between items-center gap-2 px-2 py-2 [&:not(:last-child)]:border-b border-b-neutral-400"
      {...props}
    >
      <span className="text-sm">
        {totalMode ? 'Total Amount' : 'Amount'} : {order.match_amount}
      </span>
      <span className="text-sm">
        {totalMode ? 'Total Time' : 'Time'} : {order.time}
      </span>
      <span className="text-sm">
        {totalMode ? 'Total Price' : 'Price'} : {order.price}
      </span>
    </div>
  );
}
