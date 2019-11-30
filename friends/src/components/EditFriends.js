import React, {useState, useEffect} from 'react'
import api from "../helpers/api";


const EditFriends = (props) => {
    console.log(props);
    const [editFriend, setEditFriend] = useState({
        id: props.id,
        name: props.name,
        email: props.email,
        age: props.age
    })

    useEffect(() => {
        api()
        .get(`/api/friends/${props.match.params.id}`)
        .then(response => {
            console.log(response.data)
            setEditFriend(response.data)            
            } 
        )
        .catch(error =>{
            console.log(error)
        })
    }, [])

    const handleInput = e =>{
        setEditFriend({
            ...editFriend,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = e => {
        e.preventDefault();
        api()
        .put(`/api/friends/${props.match.params.id}`, editFriend)
        .then(response => {
            props.history.push("/friends")
        })
    }

    return(
        <form onSubmit={handleSubmit}>
            <input type="text" name="name" placeholder="Name" value={editFriend.name} onChange={handleInput}/>
            <input type="email" name="email" placeholder="Email"value={editFriend.email} onChange={handleInput}/>
            <input type="text" name="age" placeholder="Age" value={editFriend.age} onChange={handleInput}/>
            <button className="save" type="submit">Save</button>
        </form>
    )
}

export default EditFriends;