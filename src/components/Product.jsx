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
          <div className="product-img">
            <p>img</p>
          </div>

          <div className="specs-container">
            <strong>{product.name}</strong>
            <br></br>
            <strong>SPECIFICATIONS</strong>

            <ul className="specs">
              <li>
                <strong>RAM</strong>
                <p>8gb</p>
              </li>

              <li>
                <strong>Storage</strong>
                <p>256gb</p>
              </li>

              <li>
                <strong>Cpu</strong>
                <p>Cpu sample</p>
              </li>

              <li>
                <strong>Gpu</strong>
                <p>gpu sample</p>
              </li>

              <li>
                <strong>Camera</strong>
                <p>48mp</p>
              </li>
            </ul>
            <button onClick={handleAddToCart}>ADD TO CART</button>
          </div>

        </div>
      </div>

    </section>
  )
}