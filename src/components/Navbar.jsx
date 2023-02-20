export default function Navbar() {
  return (
    <nav className="main-nav">
      <h1>FAKE STORE</h1>

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