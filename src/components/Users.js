
import { useEffect, useState } from "react"
import { getUsers } from "../api"
import UserCard from "./UserCard"


const Users = () => {
    const [users, setUsers] = useState([])
    const [isLoading, setIsLoading] = useState(true)


    useEffect(() => {
        let isMounted = true;
        getUsers().then((users) => {
            if (isMounted) {
                setUsers(users)
                setIsLoading(false)
            }

        })
        return () => {
            isMounted = false;
        }
    }, [users])

    if (isLoading) {
        return <h2>Loading...</h2>
    }

    return (
        <section className="users-contain">
            {
                users.map((user, index) => {
                    return <UserCard key={`user${index}`} username={user.username} avatar_url={user.avatar_url} />
                })}
        </section>
    )

}

export default Users