import { useMemo } from 'react';
import { useParams } from '@tanstack/react-router';
import { useInView } from 'react-intersection-observer';

import { Button, List, OrderCard } from '@components';
import { useAxiosQuery } from '@hooks';
import { Transaction } from '@types';

export default function TransactionContainer() {
  const { marketId } = useParams({
    from: '/orders/$marketId/',
  });

  const [ref, inView] = useInView({
    threshold: 1,
    initialInView: true,
  });

  const { data, error, refetch } = useAxiosQuery<Transaction[]>(
    ['orders-match'],
    `/v1/mth/matches/${marketId}/`,
    undefined,
    {
      enabled: inView,
      staleTime: 0,
      refetchInterval: 5000,
      refetchIntervalInBackground: true,
    }
  );

  const finalResult = useMemo(() => {
    const newArr = data?.splice(0, 10) || [];

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

  if (!data?.length) {
    return (
      <div className="flex-col justify-center self-center items-center grow text-center">
        <h2>No Order Found!</h2>
        <Button onClick={() => refetch()}>Refresh</Button>
      </div>
    );
  }

  return (
    <div
      ref={ref}
      className="h-[50vh] flex-col justify-start items-stretch grow"
    >
      <List overscan={7} estimateSize={() => 50} count={10}>
        {(item) => (
          <OrderCard
            key={item.index}
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
  );
}
