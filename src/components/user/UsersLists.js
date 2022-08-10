import Table from 'react-bootstrap/Table'
import { useState, useEffect } from 'react';
import useAuth from '../../hooks/useAuth.js';
import { getAll } from '../../services/user.js';
import User from './User.js';


export default function UsersLists() {
    const [users, setUsers] = useState([])
    const [error, setError] = useState(false)
    const { auth } = useAuth()

    useEffect(() => {
        
            ; (async () => {
                try {
                    const { data: { items } } = await getAll({
                        headers: {
                            Authorization: `Bearer ${auth}`
                        }
                    })
                    setUsers(items)
                    setError(false)
                } catch (err) {
                    setError(true)
                }
            })()
        
    }, [auth])

    if(error){
        return(
            <h1 className='text-center text-info mt-5'>Debe loguearse primero</h1>
        )
    }
    return (
        <div className="container overflow-scroll scroll-hidden">
            <h1 className='text-center'>Lista de usuario</h1>
            <Table id='table-clients' striped bordered hover size='sm'>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Last Name</th>
                        <th>User Name</th>                        
                    </tr>
                </thead>
                <tbody>
                    {users.map(user => <User key={user.id} user={user} />)}
                </tbody>
            </Table>
        </div>
    )
}

