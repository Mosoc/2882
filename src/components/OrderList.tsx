import React from 'react';
import { filter, descend, sortWith, prop } from 'ramda';
import OrderItem from './OrderItem';
import { Order, Orders } from '../types';

const filterThenSort = (orders: Orders): Orders => {
  return sortWith<Order>([descend(prop('date'))])(orders);
};

const OrderList: React.FC<{ orders: Orders }> = ({ orders }) => {
  return (
    <div>
      {filterThenSort(orders).map((item: Order) => (
        <OrderItem key={item.toString()} {...item} />
      ))}
    </div>
  );
};

export default OrderList;
