import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Testimonial from "./components/Testimonial";
import Cards from "./components/Cards";
import Pricing from "./components/Pricing";
import Footer from "./components/Footer";

export default function HomePage() {
  return (
    <div className="font-sans items-center justify-items-center">
      <Navbar />
      <Hero />
      <Testimonial />
      <Cards />
      <Pricing />
      <Footer />
    </div>
  );
}
