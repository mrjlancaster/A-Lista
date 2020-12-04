import React from 'react';
import './Register.css';
import { Link } from 'react-router-dom';

const Register = () => {
	return (
		<div className="register_container">
			<div className="register_links">
				<h1>A-Lista</h1>
				<h3>New User Registration</h3>
				<ul>
					<li>
						<Link to='/login'>Login</Link>
					</li>
					<li>
						<Link to='/register'>Register</Link>
					</li>
				</ul>
			</div>

			<div className="register_form-container">
				<form action="/" className="register_form" method="POST">
					<h1>Register</h1>
					<div className="register_inputs-container">
						<input type="text" placeholder="Full name" />
						<input type="email" placeholder="Email" />
						<input type="password" placeholder="Password" />
					</div>
					<button type="submit">Create account</button>
					<p>Already have an account?
						<Link to="/login">Login</Link>
					</p>
				</form>
			</div>
		</div>
	)
}

export default Register;
