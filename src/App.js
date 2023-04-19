import "./App.css";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Contact from "./Pages/Contact";
import Alumni from "./Pages/Alumni";
import About from "./Pages/About";
import Footer from "./components/Footer";

function App() {
  return (
    <>
    
    <Router>
      <Navbar />
      
      <Routes>
        <Route path="/" element={ <Home/>} />
       
        <Route path="/alumni" element={ <Alumni/>} />
       
        <Route path="/contact" element={ <Contact/>} />
        
        <Route path="/about" element={<About/>} />
          
      </Routes>
    </Router>
   
   {/* <Alumni />
   <Contact/>
   <About/>
    */}
    <Footer/>
</>
  );
}

export default App;
