import './App.css';
import './screens/Home.js';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom';
import Home from './screens/Home';
import Navbar from './components/Navbar';


function App() {
  return (
    <Router>
      <Navbar/>
      <div>
        <Routes>
          <Route exact path="/" element ={<Home/>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
