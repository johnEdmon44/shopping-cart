import Navbar from "./Navbar";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import { useState, useContext } from "react";
import ProductsContext from "./productsContext";


export default function Product({dispatch}) {
  const { products }= useContext(ProductsContext);
  const { id } = useParams();
  const [addedToCart, setAddedToCart] = useState(false);

  const product = products.find((item) => item.id === Number(id));

  if(!product) {
    return <p>Loading...</p>
  }

  const handleAddToCart = () => {
    dispatch({ type: 'ADD_TO_CART', payload: product });
    setAddedToCart(true)
  }


  return (
    <section>
      <Navbar />
      <div className="product-container">
        <div>
          <Link to="/shop">Shop</Link>
          <p>&gt;</p>
          <p>{product.title}</p>
        </div>

        <div className="product">
          <img src={product.image} alt={product.title} className="product-img"></img>

          <div className="specs-container">
            <strong>{product.title}</strong>

            <br></br>

            <p>{product.description}</p>

            <div>
              <strong>${product.price}</strong>
              <button onClick={handleAddToCart}>ADD TO CART</button>
              {addedToCart && <p>Added to cart successfully!</p>}
            </div>
          </div>

        </div>
      </div>

    </section>
  )
}