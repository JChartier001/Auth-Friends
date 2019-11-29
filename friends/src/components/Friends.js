import React, {useState, useEffect} from 'react';
import api from "../helpers/api";
import EditFriend from "./EditFriend"
import ProtectedRoute from "./ProtectedRoute";

function Friends(props) {
    const [friend, setFriend] = useState({
        id:"",
        name:"",
        email: "",
        age: null
    })
    // console.log(friend.id)

  
  
   
    //     e.preventDefault();
    //     api()
    //     .delete(`api/friends/${friend.id}`)
    //     .then((response) => {console.log("delete",response)
    //     //  props.history.push("/friends");
    //      api()
    //      .get("/api/friends")
    //     .then(response => {
    //         console.log(response.data)
    //         setFriend(response.data)            
    //         } 
    //     )
    //     .catch(error =>{
    //         console.log(error)
    //     })    
    //     .catch(error => {
    //       console.log(error);
    //     })
    //   })
    // }
    

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
    

    const handleDelete = (e, id) =>{
        console.log("before", friend)
        e.preventDefault();
        api()
        .delete(`/api/friends/${id}`)
        .then(response => {
            console.log("delete", response)
            api()
            .get(`/api/friends`)
            .then(response => {

                setFriend(response.data)
            })
            .catch(error=> {
                console.log(error)
            })
           
         props.history.push("/friends");
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
                    <h2>Name: {friend.name}</h2>                
                    <p>Email: {friend.email}</p>
                    <p>Age: {friend.age}</p>
                    <button onClick={() => {props.history.push(`/editfriend/${friend.id}`)}}> Edit Friend</button>
                    <button 
                    onClick={handleDelete}
                    >Delete</button>
                   
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