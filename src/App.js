import { Contact } from "./pages/Contact";
import Navbar from "./components/Navbar";
import SocialMediaContainer from "./components/SocialMedia";
import { BackgroundBeams } from "./components/ui/background-beams";
import About from "./pages/About";
import { Landing } from "./pages/Landing";
import Projects from "./pages/Projects";
import Skills from "./pages/Skills";
import "@fontsource/noto-serif-display";
import Footer from "./components/Footer";

function App() {
  return (
    <div
      className="tracking-wide bg-zinc-950"
      style={{ fontFamily: "Nono Serif Display, serif" }}
    >
      <Navbar />
      <SocialMediaContainer />
      <Landing />
      <div className="z-50 flex flex-col gap-16 px-4 bg-transparent lg:pr-64 lg:pl-64">
        <About />
        <Skills />
        <Projects />
        <Contact />
      </div>
      <Footer />
      <BackgroundBeams />
    </div>
  );
}

export default App;
