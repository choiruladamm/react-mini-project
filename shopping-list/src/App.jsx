/* eslint-disable no-unused-vars */

import { useState } from "react";
import ItemComponent from "./ItemComponent";

const App = () => {
  const [items, setItems] = useState([]);

  const onRemoveItem = (itemToRemove) => {
    const newItems = items.filter((item) => {
      return item !== itemToRemove;
    });
    setItems(newItems);
  };

  const onUpdateItem = (itemToUpdate, newItem) => {
    const updatedItems = items.map((item) => {
      if (item === itemToUpdate) {
        return newItem;
      }
      return item;
    });
    setItems(updatedItems);
  };

  const onSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    const input = form.item;
    const newItems = [...items, input.value];
    setItems(newItems);
    form.reset();
  };

  return (
    <>
      <h1>Shopping List</h1>
      <div className="shopping-list">
        <h2>Items to Buy</h2>
        <form onSubmit={onSubmit}>
          <input type="text" name="item" placeholder="Add New Items" required />
          <button>Add</button>
        </form>

        <ul>
          {items.map((item, index) => (
            <ItemComponent
              item={item}
              key={index + item}
              onRemoveItem={onRemoveItem}
              onUpdateItem={onUpdateItem}
            />
          ))}
        </ul>
      </div>
    </>
  );
};

export default App;
