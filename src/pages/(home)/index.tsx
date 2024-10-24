import { useMemo, useState } from 'react';
import { createFileRoute } from '@tanstack/react-router';

import { useAxiosQuery } from '@hooks';
import { MarketResponse } from '@types';
import { Tab, Tabs, Card, InfiniteScroll, Button } from '@components';

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
      <div className="flex justify-center items-center">
        <h2>خطا در برقراری ارتباط با سرور!</h2>
        <Button onClick={() => refetch()}>تلاش مجدد</Button>
      </div>
    );
  }

  return (
    <Tabs
      activeTab={activeTab}
      onTabChange={(tab) => setActiveTab(tab as TabType)}
    >
      <Tab title="تتر">
        <InfiniteScroll className="max-h-[80vh] py-4" results={results.tether}>
          {(item) => <Card className="mt-4" key={item.id} currency={item} />}
        </InfiniteScroll>
      </Tab>
      <Tab title="تومان">
        <InfiniteScroll className="max-h-[80vh] py-4" results={results.toman}>
          {(item) => <Card className="mt-4" key={item.id} currency={item} />}
        </InfiniteScroll>
      </Tab>
    </Tabs>
  );
}
