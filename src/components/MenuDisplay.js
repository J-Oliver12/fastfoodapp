import React from 'react';

const MenuDisplay = ({ menuItems, addToOrder }) => {
  const renderMenuItems = () => {
    return menuItems.map((item) => (
      <div key={item.id} className="menu-card">
        <img src={item.image} alt={item.name} className="menu-item-image" />
        <div className="menu-item-details">
          <h3>{item.name}</h3>
          <p>${item.price}</p>
          <button onClick={() => addToOrder(item)}>Add to Order</button>
        </div>
      </div>
    ));
  };

  return (
    <div>
      <h2>Menu</h2>
      <div className="menu-items">{renderMenuItems()}</div>
    </div>
  );
};

export default MenuDisplay;








