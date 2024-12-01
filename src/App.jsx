import About from "./components/About";
import Contact from "./components/Contact";
import Experiance from "./components/Experiance";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Projects from "./components/Projects";

export default function App() {
  return (
    <>
      <Header />
      <Hero />
      <Experiance />
      <Projects />
      <About />
      <Contact />
      <Footer />
    </>
  )
}