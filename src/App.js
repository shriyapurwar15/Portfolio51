import Layout from "./components/Layout/Layout";
import About from "./pages/About/About";
import Contact from "./pages/Contact/Contact";
import Education from "./pages/Educations/Education";
import Projects from "./pages/Projects/Projects";
import Techstack from "./pages/Techstack/Techstack";
import Workexp from "./pages/Workexp/Workexp";
import ScrollToTop from "react-scroll-to-top"
import { useTheme } from "./context/ThemeContext";
import MobileNav from "./components/MobileNav/MobileNav";


function App() {
  const [theme]=useTheme()
  return (
    <>
    <div id={theme}>
      <div className="temp" style={{overflowX:"hidden"}}>
        <MobileNav/>
      <Layout />
      <About />
      <Education />
      <Techstack />
      <Projects />
      <Workexp />
      <Contact />
      </div>
      </div>
      <ScrollToTop smooth color="#f29f67" style={{ backgroundColor: "#1e1e2c",borderRadius:"80px"}} />
    </>
  );
}

export default App;