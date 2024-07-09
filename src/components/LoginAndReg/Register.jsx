import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import './Auth.css';

const Register = () => {
    const [userData, setUserData] = useState({
        username: '',
        email: '',
        password: '',
        confirmPassword: ''
    });
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setUserData({
            ...userData,
            [name]: value,
        });
    };

    const handleActionRegistration = async (e) => {
        e.preventDefault();
        setError('');

        // Check if passwords match
        if (userData.password !== userData.confirmPassword) {
            setError('Passwords do not match');
            return;
        }

        // Log userData to check the payload
        console.log('Sending user data:', userData);

        setLoading(true);

        try {
            const response = await axios.post('https://real-estate-backend-4hnr.onrender.com/api/register', {
                username: userData.username,
                email: userData.email,
                password: userData.password
            });

            console.log('Registration successful:', response.data);

            // Clear user data after successful registration
            setUserData({
                username: '',
                email: '',
                password: '',
                confirmPassword: ''
            });

            // Redirect to login page
            navigate('/login');
        } catch (error) {
            console.error('Registration error:', error);

            // Check for detailed backend error messages
            if (error.response && error.response.data) {
                setError(error.response.data.message || 'Failed to register. Please try again.');
            } else {
                setError('Failed to register. Please try again.');
            }
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="auth-container-2">
            <div className="auth-container">
                <h2>Register</h2>
                {error && <div className="error-message">{error}</div>}
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
                    <button type="submit" disabled={loading}>Register</button>
                </form>
            </div>
        </div>
    );
};

export default Register;
