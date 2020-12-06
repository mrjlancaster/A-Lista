import React from 'react';
import './Login.css';
import { Link } from 'react-router-dom';

const Login = () => {
	return (
		<div className="login_container">
			<div className="login_sidebar">
				<h1>A-Lista</h1>
				<div className="login_sidebar-content">
					<h3>
						Member <br />
						Login
					</h3>
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

			<div className="register_form-container">
				<form action="/" className="register_form" method="POST">
					<h1>Welcome</h1>
					<div className="register_inputs-container">
						<input type="email" placeholder="Email*" />
						<input type="password" placeholder="Password*" />
					</div>
					<p>
						<Link to="">Forgot password?</Link>
					</p>
					<button type="submit">LOGIN</button>
				</form>
			</div>
		</div>
	)
}

export default Login;
