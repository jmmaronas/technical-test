import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import Button from 'react-bootstrap/Button'
import { useNavigate } from 'react-router-dom'
import Logout from './login/Logout.js'
import useAuth from '../hooks/useAuth.js'

export default function NavBar() {
    const navigate = useNavigate()
    const { auth, setAuth } = useAuth()

    const handleLogout = () => {
        setAuth(null)
        navigate('/login')        
      }
    

    return (
        <Navbar bg="dark" variant='dark' expand="lg">
            <Container>
                <Navbar.Brand className='btn btn-link' onClick={() => navigate('/')}>Hiberus</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link onClick={() => navigate('/userslists')}>Lista de usuarios</Nav.Link>                        
                    </Nav>
                </Navbar.Collapse>
                {
                    auth
                        ?
                        <div className="d-flex justify-content-between col-md-2">                            
                            <Logout handleLogout={handleLogout} />
                        </div>
                        :
                        <div className="d-flex justify-content-between col-md-2">
                            <Button onClick={() => navigate('/login')} className="me-2" variant="outline-light">Login</Button>{' '}
                            <Button onClick={() => navigate('/signup')} variant="light">Sign Up</Button>{' '}
                        </div>
                }
            </Container>
        </Navbar>
    )
}