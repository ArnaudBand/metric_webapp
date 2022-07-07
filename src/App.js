import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Countries from './components/Countries/Countries';
import Details from './components/Details/Details';
import Map from './components/Map/Map';

const App = () => (
  <div className="App">
    <Routes>
      <Route path="/" element={<Countries />} />
      <Route path="/Details/:country" element={<Details />} />
      <Route path="/Map" element={<Map />} />
    </Routes>
  </div>
);

export default App;
