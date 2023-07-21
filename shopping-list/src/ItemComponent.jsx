/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */

import { useState } from "react";
import Button from "./Button";

const ItemComponent = ({ item, onRemoveItem, onUpdateItem }) => {
  const [editMode, setEditMode] = useState(false);
  const [editedItem, setEditedItem] = useState(item);

  const handleEdit = () => {
    setEditMode(true);
  };

  const handleChange = (event) => {
    setEditedItem(event.target.value);
  };

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
          <Button color="red" onClick={() => onRemoveItem(item)}>
            X
          </Button>
          <Button color="blue" onClick={handleEdit}>
            Edit
          </Button>
        </>
      )}

      {editMode && (
        <>
          <input type="text" value={editedItem} onChange={handleChange} />
          <Button color="green" onClick={handleSave}>
            Save
          </Button>
          <Button color="red" onClick={handleCancel}>
            Cancel
          </Button>
        </>
      )}
    </li>
  );
};

export default ItemComponent;
