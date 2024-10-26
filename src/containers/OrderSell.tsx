import { useMemo } from 'react';
import { useParams } from '@tanstack/react-router';
import { useInView } from 'react-intersection-observer';

import { useAxiosQuery } from '@hooks';
import type { OrderResponse } from '@types';
import { calcTotalAttr } from '@utils';
import { Button, Input, List, OrderCard } from '@components';

export default function SellTab() {
  const { marketId } = useParams({
    from: '/orders/$marketId/',
  });

  const [ref, inView] = useInView({
    threshold: 1,
    initialInView: true,
  });

  const { data, error, refetch } = useAxiosQuery<OrderResponse>(
    ['orders-sell'],
    `/v2/mth/actives/${marketId}/?type=sell`,
    undefined,
    {
      enabled: inView,
      staleTime: 0,
      refetchInterval: 5000,
      refetchIntervalInBackground: true,
    }
  );

  const finalResult = useMemo(() => {
    const newArr = data?.orders?.splice(0, 9) || [];

    if (newArr.length) {
      const totalValue = calcTotalAttr(newArr, 'value');
      const totalPrice = calcTotalAttr(newArr, 'price');
      const totalRemain = calcTotalAttr(newArr, 'remain');

      newArr.unshift({
        value: totalValue.toPrecision(5),
        remain: totalRemain.toPrecision(5),
        price: totalPrice.dividedBy(newArr.length).toPrecision(5),
        amount: '0',
      });
    }

    return newArr;
  }, [data]);

  if (error) {
    return (
      <div className="flex-col justify-center self-center items-center grow text-center">
        <h2>Something Went Wrong!</h2>
        <Button onClick={() => refetch()}>Retry</Button>
      </div>
    );
  }

  if (data?.volume === '0') {
    return (
      <div className="flex-col justify-center self-center items-center grow text-center">
        <h2>No Order Found!</h2>
        <Button onClick={() => refetch()}>Refresh</Button>
      </div>
    );
  }

  return (
    <div ref={ref} className="flex-col justify-start items-stretch grow">
      <Input orders={finalResult} />
      <div className="h-[50vh] flex-col justify-start items-stretch grow">
        <List overscan={7} estimateSize={() => 50} count={10}>
          {(item) => (
            <OrderCard
              key={item.index}
              totalMode={item.index === 0}
              style={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: `${item.size}px`,
                transform: `translateY(${item.start}px)`,
              }}
              order={finalResult?.[item.index]}
            />
          )}
        </List>
      </div>
    </div>
  );
}
