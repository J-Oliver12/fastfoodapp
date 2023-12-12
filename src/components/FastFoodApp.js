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
  <div style={{ margin: '90px 0' }}></div>
  <div className="order-box" style={{
    border: '1px solid black',
    padding: '20px',
    width: '85%',
    margin: '0 auto',
    borderRadius: '15px',
    marginBottom: '50px',
    backgroundColor: isDarkTheme ? '#333' : '#fff',
    color: isDarkTheme ? '#fff' : '#000',
  }}>
    
    {/* Content of the order box */}
    {orderList.map((item) => (
      <div key={item.id} style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginBottom: '10px',
      }}>
        <span style={{ textAlign: 'left', width: '150px' }}>
          {item.name} x{item.quantity}
        </span>
        <div style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          width: '150px', // Adjust width as needed
        }}>
          <button
            onClick={() => adjustQuantity(item.id, item.quantity - 1)}
            style={{
              backgroundColor: 'red',
              color: '#fff',
              width: '50%',
              height: '40px',
              border: 'none',
              borderRadius: '8px',
              fontSize: '20px',
            }}
          >
            -
          </button>
          <button
            onClick={() => adjustQuantity(item.id, item.quantity + 1)}
            style={{
              backgroundColor: 'green',
              color: '#fff',
              width: '50%',
              height: '40px',
              border: 'none',
              borderRadius: '8px',
              fontSize: '20px',
            }}
          >
            +
          </button>
        </div>
        <span style={{ textAlign: 'right' }}>${(item.price * item.quantity).toFixed(2)}</span>
      </div>
    ))}
    <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '20px' }}>
      <span style={{ fontWeight: 'bold', textAlign: 'left', width: '150px' }}>Total:</span>
      <span style={{ textAlign: 'right' }}>${calculateTotal()}</span>
    </div>
    <button onClick={resetOrder} style={{ marginTop: '20px', display: 'block' }}>Reset Order</button>
  </div>
  <ThemeSwitch isDarkTheme={isDarkTheme} toggleTheme={toggleTheme} />
</div>
  );
};

export default FastFoodApp;
