import React, { useState } from 'react';
import MenuDisplay from './MenuDisplay';
import OrderList from './OrderList';
import ThemeSwitch from './ThemeSwitch';
import LogoImage from './icon.png';
import '../App.css'; 

const FastFoodApp = () => {
  const [menuItems, setMenuItems] = useState([
    { id: 1, name: 'Burger', price: 5.99, image: LogoImage },
    { id: 2, name: 'Fries', price: 2.49, image: LogoImage },
    { id: 3, name: 'Soda', price: 1.49, image: LogoImage },
    { id: 4, name: 'Ice Cream', price: 0.99, image: LogoImage },
    { id: 5, name: 'Coffee', price: 1.15, image: LogoImage },
    { id: 6, name: 'Dips', price: 0.49, image: LogoImage },
    { id: 7, name: 'Sallad', price: 1.99, image: LogoImage },
    { id: 8, name: 'Donuts', price: 0.99, image: LogoImage },
    { id: 9, name: 'Paj', price: 0.99, image: LogoImage },
  ]);

  const [orderList, setOrderList] = useState([]);
  const [isDarkTheme, setIsDarkTheme] = useState(false);

  const calculateTotal = () => {
    return orderList.reduce((total, item) => total + item.price * item.quantity, 0).toFixed(2);
  };

  const addToOrder = (item) => {
    const existingItemIndex = orderList.findIndex((orderItem) => orderItem.id === item.id);

    if (existingItemIndex !== -1) {
      const updatedOrderList = [...orderList];
      updatedOrderList[existingItemIndex] = {
        ...updatedOrderList[existingItemIndex],
        quantity: updatedOrderList[existingItemIndex].quantity + 1,
      };
      setOrderList(updatedOrderList);
    } else {
      setOrderList([...orderList, { ...item, quantity: 1 }]);
    }
  };

  const adjustQuantity = (itemId, newQuantity) => {
    const updatedOrderList = orderList.map((orderItem) => {
      if (orderItem.id === itemId) {
        return {
          ...orderItem,
          quantity: newQuantity,
        };
      }
      return orderItem;
    });
    setOrderList(updatedOrderList.filter((item) => item.quantity > 0));
  };

  const toggleTheme = () => {
    setIsDarkTheme(!isDarkTheme);
  };

  const resetOrder = () => {
    setOrderList([]); 
  };

  return (
    <div className={`container ${isDarkTheme ? 'dark-theme' : 'light-theme'}`}>
      <h1>Fast-Food Ordering App</h1>
      <MenuDisplay menuItems={menuItems} addToOrder={addToOrder} />
      <div className="order-section">
        <div className="order-controls">
          <OrderList orderList={orderList} adjustQuantity={adjustQuantity} />
          <ThemeSwitch isDarkTheme={isDarkTheme} toggleTheme={toggleTheme} />
          <button onClick={resetOrder} style={{ marginBottom: '50px' }}>Reset Order</button>
        </div>
        <div style={{ marginBottom: '70px' }}> 
        <h2 style={{ marginBottom: '5px', marginTop: '0' }}>Total Amount</h2> 
        <p style={{ fontSize: '30px', marginTop: '0', marginBottom: '0' }}>${calculateTotal()}</p> 
      </div>
      </div>
    </div>
  );
};

export default FastFoodApp;
