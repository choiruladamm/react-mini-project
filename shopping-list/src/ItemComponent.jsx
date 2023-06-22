/* eslint-disable react/prop-types */
import { useState } from "react";

const ItemComponent = ({ item, onRemoveItem, onUpdateItem }) => {
  const [editMode, setEditMode] = useState(false);
  const [editedItem, setEditedItem] = useState(item);

  const handleEdit = () => {
    setEditMode(true);
  };

  const handleSave = () => {
    onUpdateItem(item, editedItem);
    setEditMode(false);
  };

  const handleCancel = () => {
    setEditMode(false);
    setEditedItem(item);
  };

  const handleChange = (event) => {
    setEditedItem(event.target.value);
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
            onClick={handleEdit}
          >
            Edit
          </button>
        </>
      )}

      {editMode && (
        <>
          <input type="text" value={editedItem} onChange={handleChange} />
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
