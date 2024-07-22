import './App.css';
import Header from './components/Header';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import { Routes, Route } from 'react-router-dom';
import Blog from './pages/Blog';

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/" element={<Home />} /> {/* Default route */}
      </Routes>
    </div>
  );
}

export default App;
