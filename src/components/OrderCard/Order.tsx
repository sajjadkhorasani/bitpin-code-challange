import { Order } from '@types';

export interface OrderCardProps extends React.HTMLAttributes<HTMLDivElement> {
  order: Order;
  totalMode?: boolean;
}

export function InnerOrderCard({ order, totalMode, ...props }: OrderCardProps) {
  return (
    <div
      className="flex justify-between items-center gap-2 px-2 py-2 [&:not(:last-child)]:border-b border-b-neutral-400"
      {...props}
    >
      <span className="text-sm">
        {totalMode ? 'Total Value' : 'Value'} : {order.value}
      </span>
      <span className="text-sm">
        {totalMode ? 'Total Remain' : 'Remain'} : {(order as Order).remain}
      </span>
      <span className="text-sm">
        {totalMode ? 'Average Price' : 'Price'} : {order.price}
      </span>
    </div>
  );
}
