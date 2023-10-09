import './App.css';
import './screens/Home.js';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom';
import Home from './screens/Home';
import Login from './screens/Login';
import Login_student from './screens/Login_student';
import Signup_teachers from './screens/Signup_teachers';
import Signup_student from './screens/Signup_student';
import Navigation from './components/Navigation';
import MainRoutes from './screens/MainRoutes';
import NumberSystem from './components/NumberSystem';

function App() {
  return (
    <Router>
      <Navigation/>
      <div>
        <Routes>
          <Route exact path='/' element={<Home />} />
          <Route exact path='/teachers_login' element={<Login />} />
          <Route exact path='/login' element={<Login_student />} />
          <Route exact path='/teachers_signup' element={<Signup_teachers />} />
          <Route exact path='/signup' element={<Signup_student />} />
          <Route exact path='/Dashboard' element={<NumberSystem/>} />
        </Routes>
        <ToastContainer />
        <MainRoutes/>
      </div>
    </Router>
  );
}

export default App;
