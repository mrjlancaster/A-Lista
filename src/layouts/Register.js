import React from 'react';
import './Register.css';
import { Link } from 'react-router-dom';

const Register = () => {
	return (
		<div className="register_container">
			<div className="register_links">
				<h1>A-Lista</h1>
				<h3>New User Registration</h3>
				<Link to='/login'>Login</Link>
				<Link to='/register'>Register</Link>
			</div>
			<div className="register_form-container">
				<form action="/" className="register_form" method="POST">
					<h1>Register</h1>
					<input type="text" placeholder="First name" />
					<input type="text" placeholder="Last name" />
					<input type="email" placeholder="Email" />
					<input type="password" placeholder="Password" />
					<button type="submit">Register</button>
				</form>
			</div>
		</div>
	)
}

export default Register;
