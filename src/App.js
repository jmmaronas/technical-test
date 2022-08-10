import './App.css'
import Home from './components/Home.js';
import NavBar from './components/NavBar.js';
import LoginForm from './components/login/LoginForm.js'
import SignUpForm from './components/login/SingUpForm.js';
import UsersLists from './components/user/UsersLists.js';
import { AuthProvider } from './context/AuthProvider';
import { BrowserRouter, Routes, Route } from 'react-router-dom'

function App() {
  return (
    <>
      <BrowserRouter>
        <AuthProvider>
        <NavBar />
          <Routes>
            <Route path='/' element={<Home/>} />
            <Route path='/login' element={<LoginForm />} />
            <Route path='/signup' element={<SignUpForm />} />
            <Route path='/userslists' element={<UsersLists />} />
          </Routes>
        </AuthProvider>
      </BrowserRouter>
    </>
  )
}

export default App;
