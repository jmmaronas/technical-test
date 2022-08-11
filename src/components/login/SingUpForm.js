import { useState } from 'react'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import { signUp } from '../../services/login.js'

export default function SignUpForm() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [name, setName] = useState('')
    const [surname, setSurname] = useState('')
    const [error, setError] = useState(false)


    const handleSignUp =async (event) => {
        event.preventDefault()
        try {
            await signUp({ email, password, name, surname })
            setEmail('')
            setPassword('')
            setName('')
            setSurname('')
            setError(false)
            return
        } catch (err) {
            setError(true)
        }
    }
    return (
        <div className="container">
            <h1 className='text-center  fst-italic text-success my-3'>Crear usuario</h1>
            <Form onSubmit={handleSignUp} className='container col-md-6 m-auto border rounded shadow p-3 bg-light'>
                <Form.Group className="mb-3" controlId="formSignupUsername">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control
                        type='email'
                        value={email}
                        name='Username'
                        placeholder="Enter email"
                        onChange={({ target }) => setEmail(target.value.trim())}
                        required
                    />
                    {
                        error &&
                        <Form.Text className="text-success">
                            El usuario ya existe
                        </Form.Text>
                    }
                </Form.Group>

                <Form.Group className="mb-3" controlId="formSignupPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control
                        type="password"
                        value={password}
                        name='Password'
                        placeholder="Ingrese una contraseña"
                        onChange={({ target }) => setPassword(target.value)}
                        required
                    />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formSignupName">
                    <Form.Label>Nombre</Form.Label>
                    <Form.Control
                        type="text"
                        value={name}
                        name='Name'
                        placeholder="Ingrese su nombre"
                        onChange={({ target }) => setName(target.value)}
                        required
                    />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formSignupSurname">
                    <Form.Label>Apellido</Form.Label>
                    <Form.Control
                        type="text"
                        value={surname}
                        name='Password'
                        placeholder="Ingrese su apellido"
                        onChange={({ target }) => setSurname(target.value)}
                    />
                </Form.Group>
                <Button variant="primary" type="submit">
                    Registro
                </Button>
            </Form>
        </div>
    )
}