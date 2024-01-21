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
// import Cursor from './components/Cursor';
import AnimatedCursor from "react-animated-cursor";
import Experience from './components/Experience';
import { useEffect, useState } from 'react';
import Loader from './components/Loader';
// import Chat from './components/Chat';



function App() {

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1500);
  }, []);

  return (
    <div style={{ alignItems: "center", justifyContent: "center", backgroundColor: "#1a202c" }}>
      {!loading ? (
        <>
          <ScrollToTop smooth component={<MySVG />} />
          {/* <Cursor/> */}
          {/* <Chat/> */}
          <Navbar />
          <Home />
          <About />
          <Skills />
          <Github />
          <Experience />
          <Projects />
          <Contact />
          <Footer />
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
            trailingSpeed={10}
            clickables={[
              'a',
              'input[type="text"]',
              'input[type="email"]',
              'input[type="number"]',
              'input[type="submit"]',
              'input[type="image"]',
              'label[for]',
              'select',
              'textarea',
              'button',
              '.link'
            ]}
          />
        </>
      ) : (
        <Loader />
      )}
    </div>
  );
}

export default App;