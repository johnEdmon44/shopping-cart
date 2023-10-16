import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)

  const handleMenu = () => {
    setMenuOpen(!menuOpen);
    console.log(menuOpen)
  }

  return (
    <>
      <nav className={menuOpen ? "main-nav open" : "main-nav"}>
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

      <FontAwesomeIcon icon={faBars} size="3x" className={menuOpen ? "menu open" : "menu"} onClick={handleMenu} />
    </>
  )
}