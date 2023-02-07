import About from './components/About';
import { Home } from './components/Home';
import Navbar from './components/Navbar';
import { Skills } from './components/Skills';
import styles from "./App.css"

function App() {
  return (
    <div style={{alignItems:"center",justifyContent:"center",backgroundColor:"#1a202c"}}>
      <Navbar/>
      <Home/>
      <About/>
      <Skills/>
    </div>
  );
}

export default App;
