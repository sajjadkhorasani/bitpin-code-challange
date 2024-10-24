import React from 'react';
import { Decimal } from 'decimal.js';

import { cn } from '@utils';
import { Market } from '@types';
import { Image } from '@components';

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  currency: Market;
}

const Card = ({ className, currency, ...props }: CardProps) => {
  return (
    <div
      title={currency.currency1.title_fa}
      className={cn(
        'flex justify-start items-stretch grow px-2 py-4 rounded-md shadow-sm dark:shadow-neutral-800 cursor-pointer backdrop-contrast-50-50 dark:text-white border dark:border-gray-800',
        className
      )}
      {...props}
    >
      <div className="flex justify-between items-center">
        <div className="flex -space-x-2 pe-4 overflow-hidden">
          <Image
            className="bg-white dark:bg-neutral-800 inline-block h-12 w-12 rounded-full"
            alt={currency.currency1.title}
            src={currency.currency1.image}
          />
          <Image
            className="bg-white dark:bg-neutral-800 inline-block h-12 w-12 rounded-full backdrop-blur-md"
            alt={currency.currency2.title}
            src={currency.currency2.image}
          />
        </div>
      </div>
      <div className="flex-col justify-start self-center grow">
        <h3 className="flex text-sm font-bold">
          {currency.code.replace('_', ' / ')}
        </h3>
        <span className="flex text-sm">{currency.currency1.title_fa}</span>
      </div>
      <div className="flex-col justify-start items-center text-end">
        <p className="text-sm">
          قیمت : {new Decimal(currency.price).toString()}
        </p>
        <p className="text-sm">
          ارزش بازار : {new Decimal(currency.market_cap).toString()}
        </p>
        <p
          className={`text-sm ${+currency.volume_24h >= 0 ? 'text-green-500' : 'text-red-500'}`}
        >
          تغییرات روزانه : {new Decimal(currency.volume_24h).toString()}%
        </p>
      </div>
    </div>
  );
};

export default Card;
