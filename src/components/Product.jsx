import Navbar from "./Navbar";
import { phones } from "./data/phones";
import { tablets } from "./data/tablets";
import { laptop } from "./data/laptops";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";


export default function Product({dispatch}) {
  const { id } = useParams();
  console.log(id);

  const products = [...phones, ...tablets, ...laptop];
  const product = products.find((p) => p.id === Number(id));

  if (!product) {
    return <div>Product not found</div>;
  }

  const handleAddToCart = () => {
    dispatch({ type: 'ADD_TO_CART', payload: product });
  }

  return (
    <section>
      <Navbar />
      <div className="product-container">
        <div>
          <Link to="/shop">Shop</Link>
          <p>&gt;</p>
          <p>{product.name}</p>
        </div>

        <div className="product">
          <h1>Product</h1>
          <p>{product.name}</p>
          <p>{product.price}</p>
          <button onClick={handleAddToCart}>Add to cart</button>
        </div>
      </div>

    </section>
  )
}