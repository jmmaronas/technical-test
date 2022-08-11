import Table from 'react-bootstrap/Table'
import User from './User.js';


export default function UsersLists({ users }) {
    return (
        <div className="container overflow-scroll scroll-hidden">
            <h1 className='text-center fst-italic text-secondary my-5'>Lista de usuarios</h1>
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

