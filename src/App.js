import "./App.css";
import Thumbnail from "./components/thumbnail";
import About from "./components/about";
import Project from "./components/project";
import Contact from "./components/contact";
import sosmed_slider from "./components/slider";

function App() {
  return (
    <div className="App">
      <Thumbnail />
      <About />
      <Project />
      <Contact />
      <sosmed_slider />
    </div>
  );
}

export default App;
