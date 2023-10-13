import { BrowserRouter, Routes, Route } from "react-router-dom";
import Cart from "./components/Cart";
import Home from "./components/Home";
import Product from "./components/Product";
import Shop from "./components/Shop";
import { ProductsProvider } from "./components/productsContext";
import { CartProvider } from "./components/CartContext";


export default function RouteSwitch() {

  return (
    <BrowserRouter>
      <ProductsProvider>
        <CartProvider>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/shop" element={<Shop />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/product/:id" element={<Product />} />
          </Routes>
        </CartProvider>
      </ProductsProvider>
    </BrowserRouter>
  )
}