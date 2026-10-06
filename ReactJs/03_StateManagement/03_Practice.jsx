import { useState } from "react";

/*
You are given a React application with a product list and search bar.
Requirement
Complete the search functionality so that:
1. Typing in the search box updates the search state.
2. Products are filtered by name.
3. Search should be case-insensitive.
4. Matching products should be displayed.
5. If nothing matches, display "No products found".
*/
function App() {
  const products = [
    { id: 1, name: "Laptop", price: 50000 },
    { id: 2, name: "Phone", price: 20000 },
    { id: 3, name: "Keyboard", price: 2000 },
    { id: 4, name: "Mouse", price: 1000 }
  ];

  const [search, setSearch] = useState("");

  const filteredProducts = products.filter((product) => {
    // complete this -----------
     product.name.toLowerCase().includes(search.toLowerCase())
  });

  return (
    <div>
      <h1>Products</h1>

      <input
        type="text"
        placeholder="Search products..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      {filteredProducts.length === 0 ? (
        <p>No products found</p>
      ) : (
        filteredProducts.map((product) => (
          <div key={product.id}>
            <h2>{product.name}</h2>
            <p>₹{product.price}</p>
          </div>
        ))
      )}
    </div>
  );
}

export default App;