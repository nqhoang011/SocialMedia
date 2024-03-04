import './App.scss';
import Login from '../pages/Login/Login';
import SignUp from '../pages/Login/SignUp';
import HomePage from '../pages/HomePage/HomePage';
import { Route, Router, Routes } from 'react-router-dom';
import Profile from '../pages/Profile/Profile';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Login />} />
        <Route path='/signup' element={<SignUp />} />
        <Route path='/home' element={<HomePage />} />
        <Route path='/profile' element={<Profile />} />
      </Routes>
    </div >
  );
}

export default App;
