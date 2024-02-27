import Sobre from "./components/Sobre";
import Contato from "./components/Contato";
import Experiencia from "./components/Experiencia";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Projetos from "./components/Projetos";
import Footer from "./components/Footer";

function App() {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <Sobre/>
      <Projetos/>
      <Experiencia/>
      <Contato/>
      <Footer/>


    </div>
  );
}

export default App;
