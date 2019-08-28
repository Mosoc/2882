import React from 'react';
import { Order } from '../types';

const OrderItem: React.FC<Order> = props => {
  const { name, logo, status, date } = props;
  return (
    <div className="card">
      <div className="card-aside">
        <img src={logo} className="avatar" />
      </div>
      <div className="card-main">
        <div className="card-header">
          <div className="order-status">{status.type}</div>
          <div className="order-date">{`預計出貨：${date}`}</div>
        </div>
        <div className="card-content">
          <div className="order-name">{name}</div>
        </div>
      </div>
    </div>
  );
};

export default OrderItem;
