//Rendering Based on Data

import { useState } from "react";

//suppose 
const products = [
    { id: 1, name: "Laptop" },
    { id: 2, name: "Phone" },
    { id: 3, name: "Keyboard" }
];

const [search, setSearch] = useState("");

// Filter
const filteredProducts = products.filter((product)=>
    product.name.toLowerCase().includes(search.LowerCase())
);

Render:
{filteredProducts.map((product)=>(
    <p key={product.id}>{product.name}</p>
))}

// This gives you the core structure:
// Input
//   ↓
// State
//   ↓
// Filter data
//   ↓
// map()
//   ↓
// Render results
