import React from 'react';
import { Routes, Route } from "react-router-dom";
import './App.scss';
import './wordpress-styles/Common.scss';
import Layout from './components/Layout/Layout';
import Home from './pages/Home/Home';
import Events from './pages/Events/Events';
import EventPost from './pages/Events/EventPost';

function App() {
  return (
    <Routes>
      <Route path='/' element={<Layout />}>
        <Route index element={<Home />} />
        <Route path='/events' element={<Events />} />
        <Route path='/event/:slug' element={<EventPost />} />
      </Route>
    </Routes>
  );
}

export default App;
