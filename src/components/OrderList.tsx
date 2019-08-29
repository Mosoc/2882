import React from 'react';
import { filter, descend, sortWith, prop } from 'ramda';
import OrderItem from './OrderItem';
import { Order, Orders, StatusCode } from '../types';

const filterThenSort = (statusList: StatusCode[]) => (
  orders: Orders
): Orders => {
  const filteredOrders = filter<Order>(
    order => statusList.includes(order.status.code),
    orders
  );
  return sortWith<Order>([descend(prop('date'))])(filteredOrders);
};

const OrderList: React.FC<{ orders: Orders }> = ({ orders }) => {
  return (
    <div>
      <section>
        <h2 className='section-title'>{`進行中`}</h2>
        {filterThenSort([StatusCode.Processing, StatusCode.Confirmed])(
          orders
        ).map((item: Order) => (
          <OrderItem key={item.toString()} {...item} />
        ))}
      </section>
      <section>
      　<h2 className='section-title'>{`已完成`}</h2>
        {filterThenSort([StatusCode.Arrived, StatusCode.Cancelled])(
          orders
        ).map((item: Order) => (
          <OrderItem key={item.toString()} {...item} />
        ))}
      </section>
    </div>
  );
};

export default OrderList;
