import Navbar from "./Navbar";

export default function Shop() {
  return (
    <section className="shop">
      <Navbar />

      <div className="shop-container">
        <nav className="shop-nav">
          <h1>SHOPS / ALLL</h1>


          <ul>
            <li>ALL</li>
            <li>PHONES</li>
            <li>TABLETS</li>
            <li>LAPTOPS</li>
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