import React, { useState } from 'react';
import './Login.css';
import { Link } from 'react-router-dom';
import axios from 'axios';

const Login = () => {
	const [ userLogin, setUserLogin ] = useState({
		userEmail: '',
		userPassword: ''
	})

	const handleLogin = (e) => {
		e.preventDefault();

		// Handle post request
		axios({
			url: '/api/login',
			method: 'POST',
			data: userLogin
		})
			.then(res => console.log('login posted', res))
			.catch(err => console.log(err));


		console.log(userLogin);
	}


	return (
		<div className="login_container">
			<div className="login_back-btn">
				<Link to="/"><i className="fas fa-long-arrow-alt-left"></i> back</Link>
			</div>
	
			<div className="login_sidebar">
				<h1>A-Lista</h1>
				<div className="login_sidebar-content">
					<h3>Member login</h3>
					<ul>
						<li>
							<Link to='/login'>Login</Link>
						</li>
						<li>
							<Link to='/register'>Register</Link>
						</li>
					</ul>
				</div>
			</div>

			<div className="login_form-container">
				<form onSubmit={handleLogin} className="login_form">
					<h1>Welcome</h1>
					<div className="login_inputs-container">
						<input 
						type="email" 
						placeholder="Email*" 
						value={userLogin.userEmail} 
						onChange={e => setUserLogin({ ...userLogin, userEmail: e.target.value })} 
						/>

						<input 
						type="password" 
						placeholder="Password*" 
						value={userLogin.userPassword} 
						onChange={e => setUserLogin({ ...userLogin, userPassword: e.target.value })} 
						/>

						<p>
							<Link to="">Forgot password?</Link>
						</p>
					</div>

					<div className="login_button-container">
						<button type="submit">Login</button>
						<p>
							Don't have an account? <Link to="/register"> Register here</Link>
						</p>
					</div>
					
				</form>
			</div>
		</div>
	)
}

export default Login;
