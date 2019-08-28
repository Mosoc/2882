export interface Order {
  name: string;
  logo: string;
  status: {
    code: StatusCode;
    type: string;
  };
  date: string;
}

export type Orders = Order[];

export enum StatusCode {
  Processing = 1,
  Confirmed,
  Cancelled,
  Arrived
}
