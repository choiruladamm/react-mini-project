/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */

import { useState } from "react";

export default function App() {
  const [items, setItems] = useState([]);

  const onSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    const input = form.item;
    const newItems = [...items, input.value];
    setItems(newItems);
    form.reset();
  };

  const onRemoveItem = () => {};

  return (
    <>
      <h1>Shopping List</h1>
      <div className="shopping-list">
        <h2>Items to Buy</h2>
        <form onSubmit={onSubmit}>
          <input
            type="text"
            name="item"
            placeholder="Add a new item"
            required
          />
          <button className="button">Add</button>
        </form>
        {items.map((item, index) => (
          <Item onRemoveItem={onRemoveItem} key={item + index} item={item} />
        ))}
      </div>
    </>
  );
}

export const Item = ({ item, onRemoveItem }) => {
  return (
    <li>
      {item}
      <button onClick={onRemoveItem}>Remove</button>
    </li>
  );
};
