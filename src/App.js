import Navbar from "./components/Navbar";
import SocialMediaContainer from "./components/SocialMedia";
import { BackgroundBeams } from "./components/ui/background-beams";
import About from "./pages/About";
import { Landing } from "./pages/Landing";
import Projects from "./pages/Projects";
import Skills from "./pages/Skills";
import "@fontsource/noto-serif-display";

function App() {
  return (
    <div
      className="bg-zinc-950"
      style={{ fontFamily: "Nono Serif Display, serif" }}
    >
      <Navbar />
      <SocialMediaContainer />
      <Landing />
      <div className="flex flex-col gap-16 pl-64 pr-64 bg-transparent">
        <About />
        <Skills />
        <Projects />
      </div>
      <BackgroundBeams />
    </div>
  );
}

export default App;
