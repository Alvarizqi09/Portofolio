import "./App.css";
import About from "./Components/About/About";
import Header from "./Components/Header/Header";
import Project from "./Components/Project/Project";
import Skills from "./Components/Skills/Skills";
import Footer from "./Components/footer/Footer";

function App() {
  return (
    <div className="overflow-x-hidden">
      <Header />
      <About />
      <Project />
      <Skills />
      <Footer />
    </div>
  );
}

export default App;
