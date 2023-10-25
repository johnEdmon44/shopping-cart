import Navbar from "./Navbar";
import { Link } from "react-router-dom";
import { paymentOptions } from "./data/paymentOptions";
import { CartContext } from "./CartContext";
import { useContext } from "react";


export default function Cart() {
  const { cart, removeFromCart, clearCart } = useContext(CartContext);

  const idGenerator = () => {
    for (let i = 0; i < 9; i++) {
      const id = Math.floor(Math.random() * 100) + 1;
      return id;
    }
  }

  const totalPrice = (price, quantity) => {
    return price * quantity;
  }

  const totalCartValue = cart.reduce((total, item) => total + item.price * item.quantity, 0).toFixed(2);


  if (!cart || cart.length === 0) {
    return (
      <section>
        <Navbar />
        <div className="empty-cart">
          <p>Your cart is empty.</p>
          <Link to="/shop">SHOP</Link>
        </div>
      </section>
    )
  }


  return (
    <section>
      <Navbar />

      <h1>Cart</h1>
        <div className="cart-container">
          <ul>
            {cart.map(product => ( 
              <li key={idGenerator()} className="cart-item">
                <div>
                  <img src={product.image} alt={product.title} className="cart-img"></img>
                  <div>
                    <Link to={`/product/${product.id}`} style={{textDecoration: "none", color: "black"}}>
                    <strong>{product.title}</strong>
                    </Link>
                    <p>QTY: {product.quantity}</p>
                    <p>Price: ${product.price.toFixed(2)}</p>
                    <p>Total price: ${totalPrice(product.price, product.quantity)}</p>
                  </div>
                </div>

                <button onClick={() => removeFromCart(product)}>
                  Remove
                </button>
              </li>
            ))}
          </ul>

          <div className="cart-total-container">
              <div className="cart-total">

                <h3>Total</h3>

                <div className="total">
                  <p>Sub-total</p>
                  <p>${totalCartValue}</p>
                </div>

                <div className="total">
                  <p>Shipping</p>
                  <p>FREE</p>
                </div>
                
                <div className="total">
                  <p style={{marginTop: ".5rem"}}>Total</p>
                  <p style={{marginTop: ".5rem"}}>${totalCartValue}</p> 
                </div>

                <div className="total-buttons-container">
                  <button className="total-buttons" onClick={clearCart}>
                    Clear Cart
                  </button>

                  <button className="total-buttons">
                    ORDER
                  </button>
                </div>            
            </div>

            <div className="payment-container">
              <h3>Payment options</h3>

              <div className="payment-icons-container">
                {paymentOptions.map((icon, index) => (
                  <img src={icon.img} className="payment-icon" key={index}></img>
                ))}
              </div>
            </div>

          </div>
        </div>
    </section>
  );
}