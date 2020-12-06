import React from 'react';
import './Login.css';
import { Link } from 'react-router-dom';

const Login = () => {
	return (
		<div className="login_container">
			<div className="login_back-btn">
				<Link to="/"><i class="fas fa-long-arrow-alt-left"></i> back</Link>
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
				<form action="/login" className="login_form" method="POST">
					<h1>Welcome</h1>
					<div className="login_inputs-container">
						<input type="email" placeholder="Email*" />
						<input type="password" placeholder="Password*" />
					</div>

					<p className="login_form-forgot-password">
						<Link to="">Forgot password?</Link>
					</p>

					<button className="login_button" type="submit">LOGIN</button>
					<p>
						Don't have an account? <Link to="/register"> Register here</Link>
					</p>
				</form>
			</div>
		</div>
	)
}

export default Login;
