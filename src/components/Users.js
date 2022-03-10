
import { useEffect, useState } from "react"
import { getUsers } from "../api"
import UserCard from "./UserCard"

const Users = () => {
    const [users, setUsers] = useState([])

    useEffect(() => {
        getUsers().then((users) => {
            setUsers(users)
        })
    })

    return (
        <section className="users-contain">
            {
                users.map(user => {
                    return <UserCard username={user.username} avatar_url={user.avatar_url} />
                })}
        </section>
    )

}

export default Users