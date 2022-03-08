import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Pages/Home';
import Blog from './Pages/Blog';
import Projects from './Pages/Projects';


const App = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={ <Home /> } />
          <Route path="/projects" element={ <Projects /> } />
          <Route path="/blog" element={ <Blog /> } />
        </Routes>
      </Router>
    </>
  )
}

export default App