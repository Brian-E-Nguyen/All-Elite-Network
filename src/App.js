import './App.css';
import Navbar from './components/navbar/Navbar';
import Featured from './components/featured/Featured';
import Footer from './components/footer/Footer';
import RenderRoutes from './router/RenderRoutes';

function App() {
  return (
    <div className='App'>
      <Navbar />
      <Featured />
      <RenderRoutes />
      <Footer />
    </div>
  );
}

export default App;
