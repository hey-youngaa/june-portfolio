import React from 'react';
import './App.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import SideBar from './components/sidebar/SideBar';
import Home from './pages/home/Home'
import Yr2023 from './pages/2023/Yr2023'
import Drawing from './pages/drawing/Drawing'
import Painting from './pages/painting/Painting'
import Sculpture from './pages/sculpture/Sculpture'
import About from './pages/about/About'

function App() {
  return (
    <Router>
      <SideBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/2023" element={<Yr2023 />} />
        <Route path="/drawing" element={<Drawing />} />
        <Route path="/painting" element={<Painting />} />
        <Route path="/sculpture" element={<Sculpture />} />
        <Route path='/about' element={<About />} />
      </Routes>
    </Router>
  );
}

export default App;
