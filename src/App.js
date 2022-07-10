import React from 'react';
import './App.scss';
import RenderRoutes from './router/RenderRoutes';
import Navbar from './components/navbar/Navbar';
import FeaturedSliders from './components/featured/FeaturedSliders';
import Footer from './components/footer/Footer';
const App = () => {
  return (
    <div>
      <Navbar />
      <FeaturedSliders />
      <RenderRoutes />
      <Footer />
    </div>
  );
};

export default App;
