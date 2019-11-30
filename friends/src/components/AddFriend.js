import React, {useState} from 'react'
import api from "../helpers/api"



const AddFriend = (props) =>{
    const [ newFriend, setNewFriend] = useState({
        name: '',
        age: null,
        email: '' 
    })

    const handleInput = e => {
        setNewFriend({
            ...newFriend,
            [e.target.name]: e.target.value,
        })
    }    

    const handleSubmit = e =>{
        e.preventDefault();
        api()
        .post('/api/friends', {
            name: newFriend.name,
            email: newFriend.email,
            age: newFriend.age
        })
        .then(() => {
            props.history.push('/friends')
        })
        .catch(error => {
            console.log(error)
        })        
    }

    return (
        <form onSubmit={handleSubmit}>
            <h3>Enter Friends Information</h3>
            <input type="text" name="name" placeholder="Name" onChange={handleInput}/>
            <input type="email" name="email" placeholder="Email" onChange={handleInput}/>
            <input type="text" name="age" placeholder="Age" onChange={handleInput}/>
            <button className="button" type="submit">Add New Friend</button>
        </form>
    )
}
export default AddFriend;