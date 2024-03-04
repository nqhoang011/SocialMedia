import logo from './logo.svg';
import './App.scss';
import NavigationBar from '../components/navigationBar/NavBar';
import Login from '../pages/Login/Login';
import SignUp from '../pages/Login/SignUp';
import HomePage from '../pages/HomePage/HomePage';
import Messenger from '../pages/Messenger/Messenger';
import { Route, Router, Routes } from 'react-router-dom';
import Reels from '../pages/Reels/Reels';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Login />} />
        <Route path='/signup' element={<SignUp />} />
        <Route path='/home' element={<HomePage />} />
        <Route path='/messenger' element={<Messenger />} />
        <Route path='/reels' element={<Reels />} />
      </Routes>
    </div >
  );
}

export default App;
