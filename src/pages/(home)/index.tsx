import { useMemo, useState } from 'react';
import { createFileRoute } from '@tanstack/react-router';

import { useAxiosQuery } from '@hooks';
import { type MarketResponse } from '@types';
import { Tab, Tabs, Button, Card, ListWithPagination } from '@components';

export const Route = createFileRoute('/(home)/')({
  component: Home,
});

enum TabType {
  'Tether',
  'Toman',
}

function Home() {
  const [activeTab, setActiveTab] = useState<TabType>(0);

  const { data, isLoading, error, refetch } = useAxiosQuery<MarketResponse>(
    ['markets'],
    '/v1/mkt/markets/'
  );

  const results = useMemo(() => {
    const tether = [];
    const toman = [];

    if (!data?.results?.length) return null;

    for (const currency of data?.results) {
      if (currency.currency2.code === 'USDT') {
        tether.push(currency);
      } else if (currency.currency2.code === 'IRT') {
        toman.push(currency);
      }
    }

    return {
      tether,
      toman,
    };
  }, [data]);

  if (!data || isLoading) {
    return <h2>Loading ....</h2>;
  }

  if (!results || error) {
    return (
      <div className="flex-col justify-center self-center items-center grow text-center">
        <h2>خطا در برقراری ارتباط با سرور!</h2>
        <Button className="mt-4" onClick={() => refetch()}>
          تلاش مجدد
        </Button>
      </div>
    );
  }

  return (
    <Tabs
      activeTab={activeTab}
      onTabChange={(tab) => setActiveTab(tab as TabType)}
    >
      <Tab title="تتر">
        <ListWithPagination
          className="max-h-[75vh] py-4"
          estimateSize={() => 100}
          results={results.tether}
        >
          {(item) => {
            const market = results.tether[item.index];
            return (
              <Card
                key={market.id}
                className="mt-4"
                market={market}
                to="/orders/$marketId"
                params={{
                  marketId: market.id.toString(),
                }}
                style={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  width: '100%',
                  height: `${item.size}px`,
                  transform: `translateY(${item.start}px)`,
                }}
              />
            );
          }}
        </ListWithPagination>
      </Tab>
      <Tab title="تومان">
        <ListWithPagination
          className="max-h-[75vh] py-4"
          estimateSize={() => 100}
          results={results.toman}
        >
          {(item) => {
            const market = results.toman[item.index];
            return (
              <Card
                key={market.id}
                className="mt-4"
                market={market}
                to="/orders/$marketId"
                params={{
                  marketId: market.id.toString(),
                }}
                style={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  width: '100%',
                  height: `${item.size}px`,
                  transform: `translateY(${item.start}px)`,
                }}
              />
            );
          }}
        </ListWithPagination>
      </Tab>
    </Tabs>
  );
}
