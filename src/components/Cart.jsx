import Navbar from "./Navbar";

export default function Cart({ cart, dispatch }) {
  const handleRemoveFromCart = item => {
    dispatch({ type: 'REMOVE_FROM_CART', payload: item });
  };

  const handleClearCart = () => {
    dispatch({ type: 'CLEAR_CART' });
  };


  return (
    <>
      <Navbar />
      <h1>Cart</h1>
      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <>
          <ul>
            {cart.map(item => (
              <li key={item.id}>
                <h2>{item.name}</h2>
                <p>Price: ${item.price.toFixed(2)}</p>
                <button onClick={() => handleRemoveFromCart(item)}>
                  Remove from Cart
                </button>
              </li>
            ))}
          </ul>
          <button onClick={handleClearCart}>Clear Cart</button>
        </>
      )}
    </>
  );
}