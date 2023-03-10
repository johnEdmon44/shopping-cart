import Navbar from "./Navbar";
import { useState } from "react";
import { phones } from "./products/phones";
import { laptop } from "./products/laptops";
import { tablets } from "./products/tablets";

export default function Shop() {
  const [selectedCategory, setSelectedCategory] = useState("ALL");


  let filteredProducts;
  if (selectedCategory === "PHONES") {
    filteredProducts = phones;
  } else if (selectedCategory === "TABLETS") {
    filteredProducts = tablets;
  } else if (selectedCategory === "LAPTOPS") {
    filteredProducts = laptop;
  } else {
    filteredProducts = [...phones, ...tablets, ...laptop];
  }


  
  return (
    <section className="shop">
      <Navbar />

      <div className="shop-container">
        <nav className="shop-nav">
          <h1>SHOP / <br />
            <span style={{fontSize: "1.5rem", fontWeight: "bolder"}}>{selectedCategory}</span>
          </h1>

          <ul>
            <li onClick={() => setSelectedCategory("ALL")} className="shop-nav-item" data-shop-nav="ALL">ALL</li>
            <li onClick={() => setSelectedCategory("PHONES")} className="shop-nav-item" data-shop-nav="PHONES">PHONES</li>
            <li onClick={() => setSelectedCategory("TABLETS")} className="shop-nav-item" data-shop-nav="TABLETS">TABLETS</li>
            <li onClick={() => setSelectedCategory("LAPTOPS")} className="shop-nav-item" data-shop-nav="LAPTOPS">LAPTOPS</li>
          </ul>
        </nav> 


        <div className="items-container">
            {filteredProducts.map((product) => (
              <div className="item">
                <div className="item-img">
                  <p>img</p>
                </div>
            
                <p>{product.name}</p>
                <p>{product.price}</p>
              </div>
            ))}
        </div>
      </div>
    </section>
  )
}