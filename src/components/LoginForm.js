import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import useAuth from '../hooks/useAuth.js';
import { login } from '../services/login.js'


export default function LoginForm() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const { setAuth } = useAuth()
    //const [user, setUser] = useState(null)

    const handleLogin = async (event) => {
        event.preventDefault()
        const {accessToken} = await login({ email, password })
        setAuth(accessToken)        
    }
    return (
        <Form onSubmit={handleLogin} className='col-md-6 m-auto'>
            <Form.Group className="mb-3" controlId="formLoginUsername">
                <Form.Label>Email address</Form.Label>
                <Form.Control
                    type='email'
                    value={email}
                    name='Username'
                    placeholder="Enter email"
                    onChange={({ target }) => setEmail(target.value)}
                />
                <Form.Text className="text-muted">
                    We'll never share your email with anyone else.
                </Form.Text>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formLoginPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control
                    type="password"
                    value={password}
                    name='Password'
                    placeholder="Password"
                    onChange={({ target }) => setPassword(target.value)}
                />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicCheckbox">
                <Form.Check type="checkbox" label="Check me out" />
            </Form.Group>
            <Button variant="primary" type="submit">
                Iniciar Sesion
            </Button>
        </Form>
    );
}

