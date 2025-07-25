import React, { useState } from "react";
import { products } from "./data";
import Searchbar from "./Searchbar";
import ProductList from "./ProductList";

function App() {
  const [searchQuery, setSearchQuery] = useState("");
  const [category, setCategory] = useState("All");
  const [inStockOnly, setInStockOnly] = useState(false);

  const filteredProducts = products.filter(product => {
    const matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = category === "All" || product.category === category;
    const matchesStock = !inStockOnly || product.inStock;

    return matchesSearch && matchesCategory && matchesStock;
  });

  return (
    <div className="App" style={{ padding: "20px", fontFamily: "century gothic" }}>
      <h1>Product Catalog</h1>
      <Searchbar
        searchQuery={searchQuery}
        onSearchChange={setSearchQuery}
        category={category}
        onCategoryChange={setCategory}
        inStockOnly={inStockOnly}
        onStockChange={setInStockOnly}
      />
      <ProductList products={filteredProducts} />
    </div>
  );
}

export default App;
