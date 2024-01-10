import Navbar from "./Navbar";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import { useState, useContext, useEffect } from "react";
import ProductsContext from "./ProductsContext";
import { CartContext } from "./CartContext";


export default function Product() {
  const { products } = useContext(ProductsContext);
  const { cart, addToCart } = useContext(CartContext);
  const { id } = useParams();
  const [addedToCart, setAddedToCart] = useState(false);
  const [quantity, setQuantity] = useState(1);
  const [product, setProduct] = useState(null);

  // const product = products.find((item) => item.id === Number(id));
  useEffect(() => {
    const findProduct = products.find((item) => item.id === Number(id));
    setProduct(findProduct);
  }, [id, products]);

  if(!product) {
    return <p>Loading...</p>
  }
  

  const handleAddToCart = () => {
    setAddedToCart(true);
    addToCart({...product, quantity});
  }
  

  const increaseQty = () => {
    setQuantity(quantity + 1);
  }


  const decreaseQty = () => {
    if(quantity > 1) {
      setQuantity(quantity - 1);
    }
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

              <div className="qty-container">
                <button className="qty-button" onClick={decreaseQty}>-</button>
                <input type="number" id="qty" name="qty" placeholder="qty" value={quantity} onChange={(e) => setQuantity(e.target.value)} className="no-spin-button"></input>
                <button className="qty-button" onClick={increaseQty}>+</button>
              </div>

              <button onClick={handleAddToCart} className="add-to-cart">Add to cart</button>
            </div>
          </div>
        </div>

      </div>
    
    </section>
  )
}