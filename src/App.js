import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Countries from './components/Countries/Countries';
import Details from './components/Details/Details';

const App = () => (
  <div className="App">
    <Routes>
      <Route path="/" element={<Countries />} />
      <Route path="/Details/:country" element={<Details />} />
    </Routes>
  </div>
);

export default App;
