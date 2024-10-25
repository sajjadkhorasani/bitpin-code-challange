import Decimal from 'decimal.js';
import React, { useCallback, useMemo, useState } from 'react';

import { Order } from '@types';
import { calcTotalAttr } from '@utils';

const PercentageInput = ({ orders }: { orders?: Order[] }) => {
  const [value, setValue] = useState('0');

  const onChangeHandler = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      e.preventDefault();
      setValue(e.target.value);
    },
    [setValue]
  );

  const totalRemain = useMemo(
    () => (orders ? calcTotalAttr(orders, 'remain') : new Decimal(0)),
    [orders]
  );

  const totalPriceSum = useMemo(
    () =>
      orders
        ? orders.reduce(
            (sum, order) =>
              sum.plus(new Decimal(order.price).times(order.remain)),
            new Decimal(0)
          )
        : new Decimal(0),
    [orders]
  );

  const result = useMemo(() => {
    if (!value) {
      return {
        recieve: new Decimal(0),
        price: new Decimal(0),
        amountPay: new Decimal(0),
      };
    }

    const decimalPercentage = new Decimal(value).dividedBy(100);
    const recieve = totalRemain.times(decimalPercentage);

    const price = totalRemain.gt(0)
      ? totalPriceSum.dividedBy(totalRemain)
      : new Decimal(0);

    const amountPay = price.times(recieve);

    return { recieve, price, amountPay };
  }, [value, totalRemain, totalPriceSum]);

  return (
    <div className="flex-col justify-start items-stretch gap-4 p-4 border border-neutral-400">
      <div className="flex justify-end items-center">
        <input
          type="number"
          value={value}
          onChange={onChangeHandler}
          placeholder="٪۱۰"
          className="border border-gray-300 rounded px-2 py-1 focus:outline-none focus:border-blue-500"
        />
        <label className=" ms-4">: مقدار درصدی را وارد کنید</label>
      </div>
      <div className="flex-col justify-start items-end">
        <p>حجم دریافتی : {result.recieve.toFixed(2)}</p>
        <p>میانگین قیمت ارز : {result.price.toFixed(2)}</p>
        <p>مبلغ قابل پرداخت : {result.amountPay.toFixed(2)}</p>
      </div>
    </div>
  );
};

export default PercentageInput;
