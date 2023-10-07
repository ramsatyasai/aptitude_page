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
import Navbar from './components/Navbar';
import Login from './screens/Login';
import Login_student from './screens/Login_student';
import Signup_teachers from './screens/Signup_teachers';
import Signup_student from './screens/Signup_student';
import Dashboard from './screens/dashboard';
import MainRoutes from './components/Routes';

function App() {
  return (
    <Router>
      <Navbar/>
      <div>
        <Routes>
          <Route exact path='/' element ={<Home/>} />
          <Route exact path='/teachers_login' element ={<Login/>}/>
          <Route exact path='/login' element = {<Login_student/>}/>
          <Route exact path='/teachers_signup' element = {<Signup_teachers/>}/>
          <Route exact path='/signup' element={<Signup_student/>}/>
          <Route exact path='/Dashboard' element={<Dashboard />}/>
        </Routes>
        <MainRoutes/>
        <ToastContainer />
      </div>
    </Router>
  );
}

export default App;
