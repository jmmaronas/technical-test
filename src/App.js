import './App.css'
import LoginForm from './components/LoginForm.js'
import NavBar from './components/NavBar.js';
import SignUpForm from './components/SingUpForm.js';
import UsersList from './components/UsersList';
import { AuthProvider } from './context/AuthProvider';

function App() {
  return (
    <>
      <NavBar/>
      <AuthProvider>
        <LoginForm />
        <SignUpForm />
        <UsersList />
      </AuthProvider>
    </>
  )
}

export default App;
