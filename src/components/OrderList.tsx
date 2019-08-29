import React from 'react';
import { filter, descend, sortWith, prop } from 'ramda';
import OrderItem from './OrderItem';
import { Order, Orders, StatusCode } from '../types';

const filterThenSort = (statusList: StatusCode[]) => (
  orders: Orders
): Orders => {

  const filteredOrders = filter<Order>(order => statusList.includes(order.status.code), orders);
  return sortWith<Order>([descend(prop('date'))])(filteredOrders);
};

const OrderList: React.FC<{ orders: Orders }> = ({ orders }) => {
  return (
    <div>
      {filterThenSort([StatusCode.Processing, StatusCode.Confirmed])(
        orders
      ).map((item: Order) => (
        <OrderItem key={item.toString()} {...item} />
      ))}
    </div>
  );
};

export default OrderList;
