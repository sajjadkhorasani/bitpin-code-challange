import { PropsWithChildren, useMemo } from 'react';
import { useQueryClient } from '@tanstack/react-query';
import { useParams } from '@tanstack/react-router';

import { Card } from '@components';
import { MarketResponse } from '@types';

export default function OrderContainer({ children }: PropsWithChildren) {
  const client = useQueryClient();
  const { marketId } = useParams({ from: '/orders/$marketId/' });

  const markets = client.getQueryData<MarketResponse>(['markets']);

  const currentMarket = useMemo(() => {
    const currentIndex = markets?.results?.findIndex(
      (item) => item.id.toString() === marketId
    );

    return currentIndex ? markets?.results?.[currentIndex] : null;
  }, [markets]);

  return (
    <div className="flex-col justify-start items-stretch grow">
      {currentMarket ? <Card onlyLogo market={currentMarket} /> : null}
      {children}
    </div>
  );
}
