import { createFileRoute } from '@tanstack/react-router';

import { Tab, Tabs } from '@components';
import { OrderBuy, OrderContainer, Transction, OrderSell } from '@containers';

export const Route = createFileRoute('/orders/$marketId/')({
  component: OrderMarketPage,
  validateSearch(search) {
    return {
      type: search.type || 'Buy',
    };
  },
  loaderDeps({ search }) {
    return {
      type: search.type,
    };
  },
});

enum TabType {
  'Buy',
  'Sell',
  'Transactions',
}

function OrderMarketPage() {
  const navigate = Route.useNavigate();
  const { type } = Route.useSearch();
  const { marketId } = Route.useParams();

  return (
    <OrderContainer>
      <Tabs
        activeTab={TabType[type as keyof typeof TabType]}
        onTabChange={(tab) =>
          navigate({
            to: '/orders/$marketId',
            params: { marketId },
            search: {
              type: TabType[tab],
            },
          })
        }
      >
        <Tab title="Buy">
          <OrderBuy />
        </Tab>
        <Tab title="Sell">
          <OrderSell />
        </Tab>
        <Tab title="Transactions">
          <Transction />
        </Tab>
      </Tabs>
    </OrderContainer>
  );
}
