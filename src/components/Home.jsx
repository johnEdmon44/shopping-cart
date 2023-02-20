import Navbar from "./Navbar";
import Xiaomi from "./assets/Xiaomi.mp4"

export default function Home() {
  return (
    <section className="home">
      <Navbar />

      <div>
        <video id="full-page-video" autoPlay muted loop>
          <source src={Xiaomi}></source>
        </video>
      </div>
    </section>
  )
}