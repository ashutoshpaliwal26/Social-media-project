import './App.css';
import Home from './components/home';
import LogIn from './components/login';
import SignUp from './components/signup';
import Profile from './components/profile';
import NotFound from './components/notfound/notFound';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

export default function App() {
  return (
    <>
      <Router>
        <div>
        </div>
        <Routes>
          <Route exact path='/' element={<Home/>}/>
          <Route exact path='/login' element={<LogIn/>}/>
          <Route exact path='/signup' element={<SignUp/>}/>
          <Route exact path='/:username' element={<Profile/>}/>
          <Route path='*' element={<NotFound/>}/>
        </Routes>
      </Router>
    
    </>
  )
}


