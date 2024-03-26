import Topbar from "./components/Topbar";
// import About from "./pages/About";
import { Landing } from "./pages/Landing";
import Projects from "./pages/Projects";
import Skills from "./pages/Skills";

function App() {
  return (
    <div>
      <Topbar />
      <Landing />
      <div className="bg-[rgb(10,10,11)]">
        <Skills />
        <Projects />
        {/* <About /> */}
      </div>
    </div>
  );
}

export default App;
