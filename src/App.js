import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Countries from './components/Countries/Countries';
// import Map from './components/Map/Map';

const App = () => (
  <div className="App">
    <Routes>
      <Route path="/" element={<Countries />} />
    </Routes>
  </div>
);

export default App;
