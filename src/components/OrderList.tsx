import React from 'react';
import OrderItem from './OrderItem';
import { Order, Orders } from '../types';

const OrderList: React.FC<{ orders: Orders }> = ({ orders }) => {
  return (
    <div>
      {orders.map((item: Order) => (
        <OrderItem key={item.toString()} {...item} />
      ))}
    </div>
  );
};

export default OrderList;
