import Navbar from "./Navbar";
import Xiaomi from "./assets/Xiaomi.mp4"

export default function Home() {
  return (
    <section className="home">
      <Navbar />

      <div>
        <video
          autoPlay=""
          id="full-page-video"
          loop=""
          role="video"
        >
          <source
            src="/src/components/assets/Xiaomi.mp4"
          />
        </video>
      </div>
    </section>
  )
}