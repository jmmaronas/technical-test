import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { signUp } from '../services/login';

export default function SignUpForm() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [name, setName] = useState('')
    const [surname, setSurname]=useState('')
    const [user, setUser] = useState(null)

    const handleSignUp = (event) => {
        event.preventDefault()
        signUp({email, password, name, surname})
    }
    return (
        <Form onSubmit={handleSignUp} className='col-md-6 m-auto'>
            <Form.Group className="mb-3" controlId="formSignupUsername">
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

            <Form.Group className="mb-3" controlId="formSignupPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control
                    type="password"
                    value={password}
                    name='Password'
                    placeholder="Password"
                    onChange={({ target }) => setPassword(target.value)}
                />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formSignupName">
                <Form.Label>Name</Form.Label>
                <Form.Control
                    type="text"
                    value={name}
                    name='Name'
                    placeholder="Nombre"
                    onChange={({ target }) => setName(target.value)}
                />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formSignupSurname">
                <Form.Label>Surname</Form.Label>
                <Form.Control
                    type="text"
                    value={surname}
                    name='Password'
                    placeholder="Password"
                    onChange={({ target }) => setSurname(target.value)}
                />
            </Form.Group>            
            <Button variant="primary" type="submit">
                Registro
            </Button>
        </Form>
    );
}