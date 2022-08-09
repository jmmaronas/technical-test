import Table from 'react-bootstrap/Table'
import { useState, useEffect } from 'react';
import useAuth from '../hooks/useAuth.js';
import { getAll } from '../services/user.js';
import User from './User.js';


export default function UsersList() {
    const [users, setUsers] = useState([])
    const { auth } = useAuth()

    useEffect(() => {
        if (auth) {            
            ;(async () =>{
                const {data:{items}}= await getAll({
                    headers: {
                        Authorization: `Bearer ${auth}`
                    }
                })
                setUsers(items)
            } 
            )()            
        }

    }, [auth])

    return (
        <Table striped bordered hover>
            <thead>
                <tr>
                    <th>#</th>
                    <th>First Name</th>
                    <th>Last Name</th>
                    <th>Username</th>
                </tr>
            </thead>
            <tbody>
                {users.map(user => <User key={user.id} user={user} />)}
            </tbody>
        </Table>
    );
}

