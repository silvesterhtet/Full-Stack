import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar/Navbar'; // Import the Navbar component
import Home from './pages/Home/Home'; // Import the Home component
import NotHome from './pages/NotHome/NotHome'; // Import the NotHome component
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'; // Import Router, Route, and Switch to manage routes


function App() {
  return (
    <div className="App">
      <Navbar />
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer  "
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
