import React from 'react';
import './App.scss';
import RenderRoutes from './router/RenderRoutes';
import Navbar from './components/navbar/Navbar';
import Featured from './components/featured/Featured';
import Footer from './components/footer/Footer';
const App = () => {
  return (
    <div>
      <Navbar />
      <Featured />
      <RenderRoutes />
      <Footer />
    </div>
  );
};

export default App;
