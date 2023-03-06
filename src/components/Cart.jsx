import Navbar from "./Navbar";
import { Link } from "react-router-dom";
import { paymentOptions } from "./data/paymentOptions";


export default function Cart({ cart, dispatch }) {
  const handleRemoveFromCart = item => {
    dispatch({ type: 'REMOVE_FROM_CART', payload: item });
  };

  const handleClearCart = () => {
    dispatch({ type: 'CLEAR_CART' });
  };


  return (
    <section>
      <Navbar />

      <h1>Cart</h1>

      {cart.length === 0 ? (
        <div className="empty-cart">
          <p>Your cart is empty.</p>
          <Link to="/shop">SHOP</Link>
        </div>
      ) : (
        <div className="cart-container">

            <ul>
              {cart.map(item => ( 
                <li key={item.id} className="cart-item">
                  <div>
                    <div className="cart-img">
                      <p>img</p>
                    </div>

                    <div>
                      <Link to={`/product/${item.id}`} style={{textDecoration: "none", color: "black"}}>
                        <strong>{item.name}</strong>
                      </Link>
                      <p>Price: ${item.price.toFixed(2)}</p>
                    </div>
                  </div>

                  <button onClick={() => handleRemoveFromCart(item)}>
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
                  <p>${cart.reduce((total, item) => total + item.price, 0).toFixed(2)}</p>
                </div>

                <div className="total">
                  <p>Shipping</p>
                  <p>FREE</p>
                </div>
                
                <div className="total">
                  <p style={{marginTop: ".5rem"}}>Total</p>
                  <p style={{marginTop: ".5rem"}}>${cart.reduce((total, item) => total + item.price, 0).toFixed(2)}</p>
                </div>

                <div className="total-buttons-container">
                  <button onClick={handleClearCart} className="total-buttons">
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
      )}
    </section>
  );
}