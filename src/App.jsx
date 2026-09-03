import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Gallery from "./components/Gallery";
import Footer from "./components/Footer"; // Import Footer

export default function App() {
  return (
    <div className="min-h-screen bg-stone-950 font-sans text-stone-100">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Gallery />
      </main>
      <Footer /> 
    </div>
  );
}