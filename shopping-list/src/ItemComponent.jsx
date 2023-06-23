/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */

import { useState } from "react";

const ItemComponent = ({ item, onRemoveItem, onUpdateItem }) => {
  const [editMode, setEditMode] = useState(false);
  const [editedItem, setEditedItem] = useState(item);

  const handleSave = () => {
    onUpdateItem(item, editedItem);
    setEditMode(false);
  };

  const handleCancel = () => {
    setEditMode(false);
    setEditedItem(item);
  };

  return (
    <li>
      {!editMode && (
        <>
          {item}
          <button
            style={{
              background: "transparent",
              border: "none",
              color: "red",
              fontWeight: "bold",
              fontSize: "1rem",
            }}
            onClick={() => onRemoveItem(item)}
          >
            X
          </button>
          <button
            style={{
              background: "transparent",
              border: "none",
              color: "blue",
              fontWeight: "bold",
              fontSize: "1rem",
            }}
            onClick={() => setEditMode(true)}
          >
            Edit
          </button>
        </>
      )}

      {editMode && (
        <>
          <input
            type="text"
            value={editedItem}
            onChange={(e) => setEditedItem(e.target.value)}
          />
          <button
            style={{
              background: "transparent",
              border: "none",
              color: "green",
              fontWeight: "bold",
              fontSize: "1rem",
            }}
            onClick={handleSave}
          >
            Save
          </button>
          <button
            style={{
              background: "transparent",
              border: "none",
              color: "red",
              fontWeight: "bold",
              fontSize: "1rem",
            }}
            onClick={handleCancel}
          >
            Cancel
          </button>
        </>
      )}
    </li>
  );
};

export default ItemComponent;
