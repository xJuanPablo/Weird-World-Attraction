import './assets/styles/App.css';
import './assets/styles/About.css'
import './assets/styles/Attraction.css'
import Home from './pages/Home/HomePage.jsx';
import About from './pages/About/About';
import Attraction from './pages/AttractionPage/Attraction';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Routes, Route} from 'react-router-dom';

function App() {
  return (
    <Routes className="App">
      <Route index element={<Home/>}/>
      <Route path={'/login'} element={
      <div>Login</div>
      }/>
      <Route path={'/register'} element={
      <div>register</div>
      }/>
      <Route path={'/contact'} element={
      <Attraction />
      }/>
      <Route path={'/about'} element={
      <About />
      }/>
    </Routes>
  );
}

export default App;
