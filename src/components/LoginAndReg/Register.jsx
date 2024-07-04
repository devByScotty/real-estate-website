import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { createRegistration } from '../../redux/actions/loginandReg';
import { useNavigate } from 'react-router-dom';
import './Auth.css';

const Register = () => {
    const [userData, setUserData] = useState({
        username: '',
        email: '',
        password: '',
        confirmPassword: '',
    });

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setUserData({
            ...userData,
            [name]: value,
        });
    };

    const handleActionRegistration = (e) => {
        e.preventDefault();
        // Add logic to check if passwords match
        if (userData.password !== userData.confirmPassword) {
            console.error('Passwords do not match');
            return;
        }

        dispatch(createRegistration(userData))
            .then(() => {
                console.log('Registration successful');
                setUserData({
                    username: '',
                    email: '',
                    password: '',
                    confirmPassword: '',
                });
                navigate('/login');
            })
            .catch((error) => {
                console.error('Registration error:', error);
            });
    };

    return (
        <div className="auth-container-2">
            <div className="auth-container">
                <h2>Register</h2>
                <form onSubmit={handleActionRegistration}>
                    <div className="form-group">
                        <label>Username:</label>
                        <input
                            type="text"
                            name="username"
                            value={userData.username}
                            onChange={handleInputChange}
                            required
                        />
                    </div>
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
                    <div className="form-group">
                        <label>Confirm Password:</label>
                        <input
                            type="password"
                            name="confirmPassword"
                            value={userData.confirmPassword}
                            onChange={handleInputChange}
                            required
                        />
                    </div>
                    <button type="submit">Register</button>
                </form>
            </div>
        </div>
    );
};

export default Register;
