import React from "react";

export const DeleteButton = ({ onClick }) => {
  return (
    <button
      onClick={onClick}
      style={{
        backgroundColor: "red",
        color: "white",
        border: "none",
        borderRadius: "4px",
        padding: "4px 8px",
        cursor: "pointer"
      }}
    >
      Delete
    </button>
  );
};

export default DeleteButton;
