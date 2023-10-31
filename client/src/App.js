import './App.css';
import Home from './pages/Main/Home/Home';
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
      <div>contact</div>
      }/>
      <Route path={'/about'} element={
      <div>about</div>
      }/>
    </Routes>
  );
}

export default App;
