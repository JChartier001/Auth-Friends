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
    console.log("TCL: Friends -> friend2", friend),
    <div>
    {friend.length && friend!==0 ? friend.map(friend => {
        return(
            console.log(friend),
            <div>
            <div className="friendCard">
                <h2>Name: {friend.name}</h2>
                <p>Email" {friend.email}</p>
                <p>Age: {friend.age}</p>
            </div>
            </div>
    )}): null
    }
     <button onClick={() => {
                    props.history.push("/addfriend")
                }}>Add New Friend
                     </button>
    </div>
)}

export default Friends;