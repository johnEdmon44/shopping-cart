import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="main-nav">
      <h1>FAKE STORE</h1>

      <ul>
        <li className="nav-item" data-text="Home">
          <Link to="/">Home</Link>
        </li>

        <li className="nav-item" data-text="Shop">
          <Link to="/shop">Shop</Link>
        </li>

        <li className="nav-item" data-text="Cart">
          <Link to="/cart" >Cart</Link>
        </li>
      </ul>
    </nav>
  )
}