
import React from 'react'
import {
    BrowserRouter as Router,
    Routes,
    Route,
    BrowserRouter,
  } from 'react-router-dom';
  
  import Home from './pages/Home'
  import DigitalCreations from './pages/DigitalCreations'
  import EventPlanning from './pages/EventPlanning'
  import Photography from './pages/Photography'
  import WritingSample from './pages/WritingSample'

  function Routers() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/DigitalCreations" element={<DigitalCreations />} />
                <Route path="/EventPlanning" element={<EventPlanning />} />
                <Route path="/Photography" element={<Photography />} />
                <Route path="/WritingSample" element={<WritingSample />} /> 
            </Routes>
        </BrowserRouter>
    );
}

export default Routers;
