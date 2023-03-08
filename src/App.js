import React from 'react';
import './App.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import SideBar from './components/sidebar/SideBar';
import Home from './pages/home/Home'
import Yr2023 from './pages/2023/Yr2023'
import Yr2022 from './pages/2022/Yr2022'
import Yr2021 from './pages/2021/Yr2021'
import About from './pages/about/About'
import Contact from './pages/contact/Contact'

function App() {
  return (
    <Router>
      <SideBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/2023" element={<Yr2023 />} />
        <Route path="/2022" element={<Yr2022 />} />
        <Route path="/2021" element={<Yr2021 />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
}

export default App;
