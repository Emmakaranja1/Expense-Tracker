import React from "react";

export const SortDropdown = ({ sortBy, onSortChange }) => {
  return (
    <div className="sort-dropdown" style={{ margin: "10px 40px" }}>
      <label>
        Sort by:{" "}
        <select
          value={sortBy}
          onChange={(e) => onSortChange(e.target.value)}
          style={{ padding: "6px", borderRadius: "6px" }}
        >
          <option value="">None</option>
          <option value="category">Category</option>
          <option value="description">Description</option>
        </select>
      </label>
    </div>
  );
};

export default SortDropdown;
