import { useState, useEffect } from 'react';
import useAuth from '../../hooks/useAuth.js';
import { getAll } from '../../services/user.js';
import UsersLists from "./UsersLists.js"

export default function UsersListsContent() {
    const [users, setUsers] = useState([])
    const [error, setError] = useState(true)
    const { auth } = useAuth()

    useEffect(() => {
        ; (async () => {
            try {
                const { data: { items } } = await getAll(auth)
                setUsers(items)
                setError(false)
                return
            } catch (err) {
                setError(true)
            }
        })()
    }, [auth])

    if (error) {
        return (
            <h1 className='text-center text-info mt-5'>Debe loguearse primero</h1>
        )
    }
    return (
        <UsersLists users={users} />
    )
}