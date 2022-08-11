import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import useAuth from '../../hooks/useAuth.js';
import { login } from '../../services/login.js'


export default function LoginForm() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [error, setError] = useState(false)
    const { setAuth } = useAuth()

    const handleLogin = async (event) => {
        event.preventDefault()
        try {            
            const { accessToken } = await login({ email, password })
            setAuth({
                headers: {
                    Authorization: `Bearer ${accessToken}`
                }
            })
            setEmail('')
            setPassword('')
            setError(false)
            return
        } catch (err) {
            setError(true)
        }
    }
    return (
        <div className="container">
            <h1 className='text-center fst-italic text-primary my-3'>Inicio de sesion</h1>
            <Form onSubmit={handleLogin} className='container col-md-6 m-auto border rounded shadow p-3 bg-light' >
                <Form.Group className="mb-3" controlId="formLoginUsername">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control
                        type='email'
                        value={email}
                        name='Username'
                        placeholder="Enter email"
                        onChange={({ target }) => setEmail(target.value.trim())}
                    />
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
                    {error &&
                        <Form.Text className="text-danger">
                            Usuario y/o contraseña incorrectos
                        </Form.Text>
                    }
                </Form.Group>
                <Button variant="primary" type="submit">
                    Iniciar Sesion
                </Button>
            </Form>
        </div>
    )
}

