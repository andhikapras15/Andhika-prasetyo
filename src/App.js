import "./App.css";
import Thumbnail from "./components/thumbnail";
import About from "./components/about";
import Project from "./components/project";
import Contact from "./components/contact";

function App() {
  return (
    <div className="App">
      <Thumbnail />
      <About />
      <Project />
      <Contact />
    </div>
  );
}

export default App;
