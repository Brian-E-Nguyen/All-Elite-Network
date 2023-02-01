import Footer from './components/ui/footer/Footer';
import Navbar from './components/ui/navbar/Navbar';
import RenderRoutes from './routes/RenderRoutes';
import HomeView from './views/HomeView';

function App() {
  return (
    <div className='App'>
      <HomeView />
      <Footer />
    </div>
  );
}

export default App;
