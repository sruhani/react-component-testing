//import logo from './logo.svg';
import './App.css';
/*
import AccordionSummary from "./Accordion";
*/
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import NavBar from './components/NavBar'; // Angenommen, du hast eine NavBar-Komponente

export default function App() {

    return (
        <Router>
            <NavBar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/contact" element={<Contact />} />
            </Routes>
        </Router>
    )
}