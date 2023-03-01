import Navbar from "./Navbar";
import { phones } from "./products/phones";
import { tablets } from "./products/tablets";
import { laptop } from "./products/laptops";
import { useParams } from "react-router-dom";


export default function Product() {
  const { id } = useParams();
  console.log(id);

  const products = [...phones, ...tablets, ...laptop];
  const product = products.find((p) => p.id === Number(id));

  if (!product) {
    return <div>Product not found</div>;
  }

  return (
    <section>
      <Navbar />
      <div className="product-container">
        <div>
          <a href="">Shop</a>
          <p>&gt;</p>
          <p>{product.name}</p>
        </div>

        <div className="product">
          <h1>Product</h1>
          <p>{product.name}</p>
          <p>{product.price}</p>
          <button>Add to cart</button>
        </div>
      </div>

    </section>
  )
}