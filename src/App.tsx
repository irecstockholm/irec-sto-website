import React from 'react';
import { Routes, Route } from "react-router-dom";
import './App.scss';
import Layout from './components/Layout/Layout';
import Home from './pages/Home/Home';
import Events from './pages/Events/Events';

function App() {
  return (
    <Routes>
      <Route path='/' element={<Layout />}>
        <Route index element={<Home />} />
        <Route path='/events' element={<Events />} />
      </Route>
    </Routes>
  );
}

export default App;
