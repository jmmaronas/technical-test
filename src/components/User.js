export default function User({user}) {
    return (
        <tr>
            <td>1</td>
            <td>{user.name}</td>
            <td>{user.surname}</td>
            <td>{user.email}</td>
        </tr>
    )
}