export default function Navbar() {
  return (
    <nav>
      <h1>Shopping cart</h1>

      <ul>
        <li className="nav-item" data-text="Home">
          <a href="/">Home</a>
        </li>

        <li className="nav-item" data-text="Shop">
          <a href="/shop">Shop</a>
        </li>

        <li className="nav-item" data-text="Cart">
          <a href="/cart">Cart</a>
        </li>
      </ul>
    </nav>
  )
}