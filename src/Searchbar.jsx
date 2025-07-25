import React from "react";

const SearchBar = ({ searchQuery, onSearchChange, category, onCategoryChange, inStockOnly, onStockChange }) => {
  return (
    <div style={{ marginBottom: "20px" }}>
      <input
        type="text"
        placeholder="Search by name"
        value={searchQuery}
        onChange={(e) => onSearchChange(e.target.value)}
        style={{ marginRight: "10px", padding: "5px" }}
      />

      <select value={category} onChange={(e) => onCategoryChange(e.target.value)} style={{ marginRight: "10px", padding: "5px" }}>
        <option value="All">All</option>
        <option value="Clothing">Clothing</option>
        <option value="Shoes">Shoes</option>
        <option value="Accessories">Accessories</option>
        <option value="Furniture">Furniture</option>
      </select>

      <label>
        <input
          type="checkbox"
          checked={inStockOnly}
          onChange={(e) => onStockChange(e.target.checked)}
        />{" "}
        In Stock Only
      </label>
    </div>
  );
};

export default SearchBar;
