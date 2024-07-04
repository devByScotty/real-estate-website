import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { createRegistration, getLogin } from '../../redux/actions/loginandReg';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import './Login.css';

const LoginAndReg = () => {
    const [rightPanelActive, setRightPanelActive] = useState(false);
    const navigate = useNavigate(); // Initialize useNavigate

    const handleSignUpClick = () => {
        setRightPanelActive(true);
    };

    const handleSignInClick = () => {
        setRightPanelActive(false);
    };

    const [userData, setUserData] = useState({
        username: '',
        email: '',
        password: '',
    });

    const dispatch = useDispatch();

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setUserData({
            ...userData,
            [name]: value,
        });
    };

    const handleActionRegistration = (e) => {
        e.preventDefault();
        dispatch(createRegistration(userData))
            .then(() => {
                // Optional: Handle success scenario
                console.log('Registration successful');
                // Clear form fields if needed
                setUserData({
                    username: '',
                    email: '',
                    password: '',
                });
                // Redirect to login page or another route
                navigate('/login');
            })
            .catch((error) => {
                // Optional: Handle error scenario
                console.error('Registration error:', error);
            });
    };

    const handleActionLogin = (e) => {
        e.preventDefault();
        dispatch(getLogin(userData))
            .then(() => {
                // Optional: Handle success scenario
                console.log('Login successful');
                console.log(userData)
                // Redirect to home page or another route
                navigate('/');
            })
            .catch((error) => {
                // Optional: Handle error scenario
                console.error('Login error:', error);
            });
    };

    return (
        <div className='loginBody'>
            <div className={`logincontainer ${rightPanelActive ? 'right-panel-active' : ''}`} id="logincontainer">
                <div className="form-container sign-up-container">
                    <form onSubmit={handleActionRegistration}>
                        <h1 className='h1Btn'>Create Account</h1>
                        <div className="social-container">
                            <a href="#" className="aBtn social"><i className="fab fa-facebook-f"></i></a>
                            <a href="#" className="aBtn social"><i className="fab fa-google-plus-g"></i></a>
                            <a href="#" className="aBtn social"><i className="fab fa-linkedin-in"></i></a>
                        </div>
                        <span className='spanBtn'>or use your email for registration</span>
                        <input className='inputLogin' type="text" name="username" placeholder="Name" value={userData.username} onChange={handleInputChange} />
                        <input className='inputLogin' type="email" name="email" placeholder="Email" value={userData.email} onChange={handleInputChange} />
                        <input className='inputLogin' type="password" name="password" placeholder="Password" value={userData.password} onChange={handleInputChange} />
                        <button className='loginBtn' type="submit">Sign Up</button>
                    </form>
                </div>
                <div className="form-container sign-in-container">
                    <form onSubmit={handleActionLogin}>
                        <h1 className='h1Btn'>Sign in</h1>
                        <div className="social-container">
                            <a href="#" className="aBtn social"><i className="fab fa-facebook-f"></i></a>
                            <a href="#" className="aBtn social"><i className="fab fa-google-plus-g"></i></a>
                            <a href="#" className="aBtn social"><i className="fab fa-linkedin-in"></i></a>
                        </div>
                        <span className='spanBtn'>or use your account</span>
                        <input className='inputLogin' type="email" name="email" placeholder="Email" value={userData.email} onChange={handleInputChange} />
                        <input className='inputLogin' type="password" name="password" placeholder="Password" value={userData.password} onChange={handleInputChange} />
                        <button className='loginBtn' type="submit">Sign In</button>
                    </form>
                </div>
                <div className="overlay-container">
                    <div className="overlay">
                        <div className="overlay-panel overlay-left">
                            <h1 className='h1Btn'>Welcome Back!</h1>
                            <p className='pBtn'>To keep connected with us please login with your personal info</p>
                            <button className="ghost loginBtn" id="signIn" onClick={handleSignInClick}>Sign In</button>
                        </div>
                        <div className="overlay-panel overlay-right">
                            <h1 className='h1Btn'>Hello, Friend!</h1>
                            <p className='pBtn'>Enter your personal details and start journey with us</p>
                            <button className="ghost loginBtn" id="signUp" onClick={handleSignUpClick}>Sign Up</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LoginAndReg;

