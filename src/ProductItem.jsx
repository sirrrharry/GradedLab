import React from "react";

const ProductItem = ({ product }) => {
  return (
    <li
      style={{
        padding: "10px",
        borderBottom: "1px solid #ccc",
        marginBottom: "5px",
      }}
    >
      <strong>{product.name}</strong> — {product.category} — R{product.price}
      <span style={{ marginLeft: "10px", color: product.inStock ? "green" : "red" }}>
        [{product.inStock ? "In Stock" : "Out of Stock"}]
      </span>
    </li>
  );
};

export default ProductItem;
