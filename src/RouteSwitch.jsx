import { useReducer } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Cart from "./components/Cart";
import Home from "./components/Home";
import Product from "./components/Product";
import Shop from "./components/Shop";
import { cartReducer, initialCartState } from "./components/cartReducer"


export default function RouteSwitch() {
  const [cart, dispatch] = useReducer(cartReducer, initialCartState)


  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/shop" element={<Shop />}/>
        <Route path="/cart" element={<Cart cart={cart} dispatch={dispatch} />}/>
        <Route path="/product/:id" element={<Product dispatch={dispatch} />} />
      </Routes>
    </BrowserRouter>
  )
}