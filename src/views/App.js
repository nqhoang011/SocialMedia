import logo from './logo.svg';
import './App.scss';
import './Example/TestComponent';
import TestComponent from './Example/TestComponent';
import NavigationBar from '../components/navigationBar/navigationBar';
import Login from '../pages/Login';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* <NavigationBar /> */}
        <Login />
        {/* <TestComponent /> */}
      </header>
    </div >
  );
}

export default App;
