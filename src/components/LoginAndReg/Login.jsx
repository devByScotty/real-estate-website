import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import './Auth.css';

const Login = () => {
    const [userData, setUserData] = useState({
        email: '',
        password: '',
    });

    const userInfo = {
        email: '',
        password: ''
    }
   
    const navigate = useNavigate();

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        
        setUserData({
            ...userData,
            [name]: value,
        });
        userInfo[name] = value;
       // console.log(userData.email);
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        
        try {
            const response = await axios.post('https://real-estate-backend-4hnr.onrender.com/api/login', {
                email: userData.email,
                password: userData.password,
            });

            console.log('Login successful:', response.data);
            localStorage.setItem('token', response.data.token);
            localStorage.setItem('user', JSON.stringify(response.data.user));
            //console.log(localStorage.setItem('user', JSON.stringify(response.data)));
        
            // Handle success logic here (e.g., redirect, state update)
            navigate('/');
            
        } catch (error) {
            console.error('Login error:', error);
            // Handle error logic here (e.g., show error message)
        }
        
   
    };

    return (
        <div className="auth-container-2">
        <div className="auth-container">
            <h2>Login</h2>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label>Email:</label>
                    <input
                        type="email"
                        name="email"
                        value={userData.email}
                        onChange={handleInputChange}
                        required
                    />
                </div>
                <div className="form-group">
                    <label>Password:</label>
                    <input
                        type="password"
                        name="password"
                        value={userData.password}
                        onChange={handleInputChange}
                        required
                    />
                </div>
                <button type="submit">Login</button>
            </form>
        </div>
        </div>
    );
};

export default Login;

