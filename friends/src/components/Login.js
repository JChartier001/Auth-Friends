import React, {useState} from 'react'
import axios from 'axios';


const Login = () => {
    const [data, setData]= useState({
        name: "",
        email: ""
    });

    const handleChange = (e) => {
        setData({
            ...data,
            [e.target.name]: e.target.value,
        })
    }

    const handleSubmit = e => {
        e.preventDefault();

        
    }
    return (

    );
}