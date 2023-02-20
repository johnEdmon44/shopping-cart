import Navbar from "./Navbar";

export default function Shop() {
  return (
    <section className="shop">
      <Navbar />

      <div className="shop-container">
        <nav className="shop-nav">
          <h1>SHOPS / ALL</h1>


          <ul>
            <li className="shop-nav-item" data-shop-nav="ALL">ALL</li>
            <li className="shop-nav-item" data-shop-nav="PHONES">PHONES</li>
            <li className="shop-nav-item" data-shop-nav="TABLETS">TABLETS</li>
            <li className="shop-nav-item" data-shop-nav="LAPTOPS">LAPTOPS</li>
          </ul>
        </nav> 


        <div className="items-container">
          <div className="item">
            <div className="item-img">
              <p>img</p>
            </div>

            <p>Xiaomi redmi note 5</p>
            <p>$499</p>
          </div>


          <div className="item">
            <div className="item-img">
              <p>img</p>
            </div>

            <p>Xiaomi redmi note 5</p>
            <p>$499</p>
          </div>


          <div className="item">
            <div className="item-img">
              <p>img</p>
            </div>

            <p>Xiaomi redmi note 5</p>
            <p>$499</p>
          </div>


          <div className="item">
            <div className="item-img">
              <p>img</p>
            </div>

            <p>Xiaomi redmi note 5</p>
            <p>$499</p>
          </div>


          <div className="item">
            <div className="item-img">
              <p>img</p>
            </div>

            <p>Xiaomi redmi note 5</p>
            <p>$499</p>
          </div>
        </div>
      </div>
    </section>
  )
}