import React, {useState, useEffect} from 'react';
import api from "../helpers/api";
import EditFriend from "./EditFriends"
import ProtectedRoute from "./ProtectedRoute";

function Friends(props) {
    const [friend, setFriend] = useState({
        id:"",
        name:"",
        email: "",
        age: null
    })

    useEffect(() => {
        api()
        .get("/api/friends")
        .then(response => {
            console.log(response.data)
            setFriend(response.data)            
            })        
            .catch(error =>{
            console.log(error)
        })
    }, [])

    const handleDelete = (id) =>{
        console.log("id", friend.id)
        console.log("before", friend)
        // e.preventDefault();
        api()
        .delete(`/api/friends/${id}`)
        .then(response => {
            console.log("response", response)
            setFriend(response.data)
            api()
            .get(`/api/friends`)
            .then(response => {
                setFriend(response.data)
            })
            .catch(error=> {
                console.log(error)
            }) 
        })
        .catch(error => {
            console.log(error);
        })        
    }

    return (
        <div className='Top'>    
            <div className="header">
            <h1 >My Friends...</h1>
            </div>
            <div className="friendList">
        {friend.length && friend!==0 ? friend.map(friend => {
            return(      
                <div>
                <div className="friendCard" key={friend.id}>
                    {console.log("id", friend.id)}
                    <h2>Name: <br/>{friend.name}</h2>                
                    <p>Email: {friend.email}</p>
                    <p>Age: {friend.age}</p>
                    <div className="editDelete">
                    <button onClick={() => {props.history.push(`/editfriend/${friend.id}`)}}> Edit Friend</button>
                    <button onClick={() => handleDelete(friend.id)}>Delete</button>     
                    </div>              
                </div>
                </div>            
        )}): null
        }</div>
        <div>
        <button onClick={() => {props.history.push("/addfriend")}}>Add New Friend</button>
        </div>
        </div>
    )
}

export default Friends;