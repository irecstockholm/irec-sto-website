import React from 'react';
import { Routes, Route } from "react-router-dom";
import './App.scss';
import './wordpress-styles/Common.scss';
import Layout from './components/Layout/Layout';
import Home from './pages/Home/Home';
import Events from './pages/Events/Events';
import EventPost from './pages/Events/EventPost';
import Church from './pages/Church/Church';
import Movement from './pages/Movement/Movement';

function App() {
  return (
    <Routes>
      <Route path='/' element={<Layout />}>
        <Route path='/' element={<Home />} />
        <Route path='/events' element={<Events />} />
        <Route path='/event/:slug' element={<EventPost />} />
        <Route path='/our-church' element={<Church />} />
        <Route path='/movement' element={<Movement />} />
      </Route>
    </Routes>
  );
}

export default App;
