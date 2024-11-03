import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import Menu from './pages/Menu';
import Staff from './pages/Staff';
import Rooms from './pages/Rooms';
import Rules from './pages/Rules';
import Events from './pages/Events';
import Gallery from './pages/Gallery';
import Services from './pages/Services';
import Mare from './pages/Mare';

export default function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/staff" element={<Staff />} />
          <Route path="/rooms" element={<Rooms />} />
          <Route path="/rules" element={<Rules />} />
          <Route path="/events" element={<Events />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/services" element={<Services />} />
          <Route path="/mare" element={<Mare />} />
        </Routes>
      </Layout>
    </Router>
  );
}