import logo from './logo.svg';
import './App.scss';
import NavigationBar from '../components/navigationBar/NavBar';
import Login from '../pages/Login/Login';
import SignUp from '../pages/Login/SignUp';
import HomePage from '../pages/HomePage/HomePage';
import { Route, Router, Routes } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Login />} />
        <Route path='/signup' element={<SignUp />} />
        <Route path='/home' element={<HomePage />} />
      </Routes>
    </div >
  );
}

export default App;
