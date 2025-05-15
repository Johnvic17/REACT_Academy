import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";

// pages
import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import Contact from './pages/Contact/Contact'

//components
import Navbar from "./components/Navbar";
import Whatsapp from "./components/whatsapp";



function App() {
  return (
    <>
      <div>
        <BrowserRouter>
          <Navbar/>
            <Routes>
              <Route path="/" element={<Home/>} />
              <Route path="/about" element={<About/>}/>
              <Route path="/contact" element={<Contact/>}/>
            </Routes>     
        </BrowserRouter>     
        <Whatsapp />
      </div>     
    </>
  );
}

export default App;
