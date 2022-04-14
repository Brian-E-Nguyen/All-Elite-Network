import React from 'react';
import './App.scss';
import Navbar from './components/navbar/Navbar';
import Home from './views/home/Home';

const App = () => {
  return (
    <div>
      <Navbar />
      <Home />
    </div>
  );
};

export default App;
