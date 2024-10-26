import { Fragment } from 'react';
import { Decimal } from 'decimal.js';
import { Link, LinkProps } from '@tanstack/react-router';

import { cn } from '@utils';
import { Market } from '@types';
import Image from '@components/Image';

interface CardProps extends LinkProps {
  className?: string;
  market: Market;
  onlyLogo?: boolean;
}

export default function Card({
  className,
  market,
  onlyLogo = false,
  ...props
}: CardProps) {
  const render = (
    <Fragment>
      <div className="flex justify-between items-center">
        <div className="flex -space-x-2 pe-4 overflow-hidden">
          <Image
            className="bg-white dark:bg-neutral-800 inline-block h-12 w-12 rounded-full"
            alt={market.currency1.title}
            src={market.currency1.image}
          />
          <Image
            className="bg-white dark:bg-neutral-800 inline-block h-12 w-12 rounded-full backdrop-blur-md"
            alt={market.currency2.title}
            src={market.currency2.image}
          />
        </div>
      </div>
      <div className="flex-col justify-start self-center grow">
        <h3 className="flex text-sm font-bold">
          {market.code.replace('_', ' / ')}
        </h3>
        <span className="flex text-sm">{market.currency1.title_fa}</span>
      </div>
      {!onlyLogo ? (
        <>
          <div className="flex-col justify-start items-center text-end">
            <p className="text-sm">
              قیمت : {new Decimal(market.price).toString()}
            </p>
            <p className="text-sm">
              ارزش بازار : {new Decimal(market.market_cap).toString()}
            </p>
            <p
              className={`text-sm ${+market.volume_24h >= 0 ? 'text-green-500' : 'text-red-500'}`}
            >
              تغییرات روزانه : {new Decimal(market.volume_24h).toString()}%
            </p>
          </div>
        </>
      ) : null}
    </Fragment>
  );

  return props.to ? (
    <Link
      title={market.currency1.title_fa}
      className={cn(
        'flex justify-start items-stretch grow px-2 py-4 rounded-md shadow-sm dark:shadow-neutral-800 cursor-pointer backdrop-contrast-50-50 dark:text-white border dark:border-gray-800',
        className
      )}
      {...props}
    >
      {render}
    </Link>
  ) : (
    <div
      title={market.currency1.title_fa}
      className={cn(
        'flex justify-start items-stretch grow px-2 py-4 rounded-md shadow-sm dark:shadow-neutral-800 backdrop-contrast-50-50 dark:text-white border dark:border-gray-800',
        className
      )}
      {...props}
    >
      {render}
    </div>
  );
}
