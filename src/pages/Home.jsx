import FadeIn from "react-fade-in/lib/FadeIn";
import Gallery from "../components/Gallery";
import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <div>
      <Navbar />
      <FadeIn delay={500} transitionDuration={1000}>
      <Hero />
      <Gallery />
      <Footer/>
      </FadeIn>
    </div>
  )
}

export default Home