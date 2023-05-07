import About from './components/About';
import { Home } from './components/Home';
import Navbar from './components/Navbar';
import { Skills } from './components/Skills';
import "./App.css"
import Github from './components/Github';
import Projects from './components/Projects';
import Contact from './components/ContactUs';
import Footer from "./components/Footer"
import ScrollToTop from "react-scroll-to-top";
import { ReactComponent as MySVG } from "./logo.svg";
import AnimatedCursor from "react-animated-cursor";
import Chat from './components/Chat';



function App() {


  return (
    <div style={{alignItems:"center",justifyContent:"center",backgroundColor:"#1a202c"}}>
      <ScrollToTop smooth  component={<MySVG />}/>
      <Chat/>
      <Navbar />
      <Home/>
      <About />
      <Skills/>
      <Github/>
      <Projects/>
      <Contact/>
      <Footer/>
      <AnimatedCursor 
        innerSize={20}
        outerSize={8}
        color='19, 143, 204'
        outerAlpha={0.7}
        innerScale={0.9}
        outerScale={5}
        outerStyle={{
          border: '3px solid #fff'
        }}
      />
    </div>
  );
}

export default App;
