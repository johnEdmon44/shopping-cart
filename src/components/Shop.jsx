import Navbar from "./Navbar";
import { useState, useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import ProductsContext from "./ProductsContext";

export default function Shop() {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const {products, categories} = useContext(ProductsContext);
  const [filteredProducts, setFilteredProducts] = useState(products);


  function filterProducts(category) {
    setSelectedCategory(category);
  }


  useEffect(() => {
    let newFilteredProducts;

    if(selectedCategory === "all") {
      newFilteredProducts = products;
    } else {
      newFilteredProducts = products.filter((product) => product.category === selectedCategory);
    }

    setFilteredProducts(newFilteredProducts);
  }, [selectedCategory, products]);
  

  return (
    <section className="shop">
      <Navbar />

      <div className="shop-container">

        <nav className="shop-nav">
          
          <h1>SHOP / <br />
            <span style={{fontSize: "1.5rem", fontWeight: "bolder"}}>{selectedCategory}  <span style={{color: "red"}}></span></span>
          </h1>

          <ul>
            <li className="shop-nav-item" id="all" onClick={() => filterProducts("all")}>all</li>

            {categories.map((category, index) => (
              <li key={index} id={category} className="shop-nav-item" onClick={() => filterProducts(category)}>{category}</li>
            ))}
          </ul>
        </nav> 


        <ul className="items-container">
          {filteredProducts.map((product) => (
            <li className="item" id={product.id} key={product.id}>
              <Link to={`/product/${product.id}`}>

                <div className="item-img-container">
                  <img src={product.image} alt={product.title} className="item-img"></img>

                  <div className="see-more">
                    <p>See more</p>
                  </div>

                  <p>{product.title}</p>
                  <p><strong>${product.price}</strong></p>
                </div>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}