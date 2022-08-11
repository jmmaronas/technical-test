import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import Button from 'react-bootstrap/Button'
import { useNavigate } from 'react-router-dom'
import { useState, useEffect } from 'react'
import Logout from './login/Logout.js'
import useAuth from '../hooks/useAuth.js'
import { getMe } from '../services/user.js'

export default function NavBar() {
    const [user, setUser] = useState(null)
    const navigate = useNavigate()
    const { auth, setAuth } = useAuth()

    useEffect(() => {
        ;(async ()=>{
            try{
                const {data:{name}}= await getMe(auth)
                setUser(name)   
                return             
            }catch(err){
                setUser(null)
            }
        })()
    }, [auth])

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
                        <div className="d-flex justify-content-between align-items-center col-md-2">
                            <span className='text-white me-2 fs-5' >{user}</span>
                            <Logout handleLogout={handleLogout} />
                        </div>
                        :
                        <div className="d-flex justify-content-around col-md-2">
                            <Button onClick={() => navigate('/login')} className="me-2" variant="outline-light" size='sm'>Login</Button>{' '}
                            <Button onClick={() => navigate('/signup')} variant="light" size='sm'>Sign Up</Button>{' '}
                        </div>
                }
            </Container>
        </Navbar>
    )
}