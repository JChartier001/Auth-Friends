import React, {useState} from 'react'
import api from "../helpers/api";

const Login = (props) => {
    const [error,setError] =  useState();
    const [data, setData]= useState({
        username: "",
        password: ""
    });

    const handleChange = (e) => {
        setData({
            ...data,
            [e.target.name]: e.target.value,
        })
    }

    const handleSubmit = e => {
        e.preventDefault();
        api()
            .post("/api/login", data)
            .then(response => {                
                localStorage.setItem('token', response.data.payload)
                props.history.push('/friends')
            })
        .catch(err => {
            setError(err.response.data.message)
        })
        
    }
    return (
        <form onSubmit={handleSubmit}>
            <div className="login">
                <h2>Please Login</h2>
            {error && <div className="error">{error}</div>}
            <input type="text" name='username' placeholder="User Name" value={data.username} onChange={handleChange}/>
            <input type='password' name='password' placeholder='password' value={data.password} onChange={handleChange}/>
            <button className="button" type="submit">Sign In</button>
            </div>
        </form>

    );
}

export default Login;