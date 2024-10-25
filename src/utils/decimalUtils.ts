import Decimal from 'decimal.js';

export function calcTotalAttr<T>(arr: T[], attr: keyof T) {
  return arr.reduce((a, b) => {
    const number = new Decimal((b as T)[attr as keyof T] as string);

    return new Decimal(a).plus(number);
  }, new Decimal(0));
}
