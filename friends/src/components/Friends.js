import React, {useState, useEffect} from 'react';
import api from "../helpers/api";
import AddFriend from "./AddFriend";
import ProtectedRoute from "./ProtectedRoute";

function Friends(props) {
    const [friend, setFriend] = useState({
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
            } 
        )
        .catch(error =>{
            console.log(error)
        })
}, [])
return (
    
    <div className='Top'>    
        <div className="header">
        <h1 >My Friends...</h1>
        </div>
        <div className="friendList">
    {friend.length && friend!==0 ? friend.map(friend => {
        return(      
            <div>
            <div className="friendCard">
                <h2>Name: {friend.name}</h2>
                <p>Email: {friend.email}</p>
                <p>Age: {friend.age}</p>
            </div>
            </div>
    )}): null
    }]</div>
    <div className="button">
     <button onClick={() => {props.history.push("/addfriend")}}>Add New Friend</button>
    </div>
    </div>
    
    
)}

export default Friends;