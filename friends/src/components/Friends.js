import React, {useState, useEffect} from 'react';
import api from "../helpers/api";

function Friends() {
    const [friend, setFriend] = useState({
        name:"",
        email:"",
        age: null
    })

    useEffect(() => {
        api()
        .get("/api/friends")
        .then(response => {
            setFroemd({
                name: response.data.name,
                email: response.data.email,
                age: response.data.age
            })
        })
        .catch(error =>{
            console.log(error)
        })
    }, [])

}

return (
    <>
    <h1>My Friends List</h1>
    <div>Name: {friend.name}</div>
    <div>Email: {friend.email}</div>
    <div>Age: {friend.age}</div>
    </>
)
export default Friends;