import React from 'react';

const MenuDisplay = ({ menuItems, addToOrder }) => {
  const renderMenuItems = () => {
    const rows = [];
    for (let i = 0; i < menuItems.length; i += 3) {
      const rowItems = menuItems.slice(i, i + 3);
      const rowContent = rowItems.map((item) => (
        <div key={item.id} className="menu-item">
          <img src={item.image} alt={item.name} className="menu-item-image" />
          <div className="menu-item-details">
            <h3>{item.name}</h3>
            <p>${item.price}</p>
            <button onClick={() => addToOrder(item)} className="add-to-order-button">
              Add to Order
            </button>
          </div>
        </div>
      ));
      rows.push(<div key={i} className="menu-row">{rowContent}</div>);
    }
    return rows;
  };

  return (
    <div>
      <h2>Menu</h2>
      <div className="menu-items">{renderMenuItems()}</div>
    </div>
  );
};

export default MenuDisplay;







