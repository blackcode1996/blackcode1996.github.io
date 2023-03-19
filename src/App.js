import About from './components/About';
import { Home } from './components/Home';
import Navbar from './components/Navbar';
import { Skills } from './components/Skills';
import styles from "./App.css"
import Github from './components/Github';
import Projects from './components/Projects';
import Contact from './components/ContactUs';
import Footer from "./components/Footer"

function App() {
  return (
    <div style={{alignItems:"center",justifyContent:"center",backgroundColor:"#1a202c"}}>
      <Navbar/>
      <Home/>
      <About/>
      <Skills/>
      <Github/>
      <Projects/>
      <Contact/>
      <Footer/>
    </div>
  );
}

export default App;
