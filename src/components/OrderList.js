// OrderList.js
import React from 'react';

const OrderList = ({ orderList, adjustQuantity }) => {
  return (
    <div>
      <h2>Order List</h2>
      <ul>
        {orderList.map((item) => (
          <li key={item.id}>
            {item.name} - ${item.price} - Quantity: {item.quantity}
            <button onClick={() => adjustQuantity(item.id, item.quantity - 1)}>-</button>
            <button onClick={() => adjustQuantity(item.id, item.quantity + 1)}>+</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default OrderList;


