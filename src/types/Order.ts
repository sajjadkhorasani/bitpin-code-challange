export interface OrderResponse {
  orders: Order[];
  volume: string;
}

export interface Transaction {
  match_amount: string;
  match_id: string;
  price: string;
  time: number;
  type: string;
  value: string;
}

export interface Order {
  amount: string;
  price: string;
  remain: string;
  value: string;
}
