import React from 'react';
import './Register.css';
import { Link } from 'react-router-dom';

const Register = ({ email }) => {
	return (
		<div className="register_container">
			<div className="register_back-btn">
				<Link to="/"><i className="fas fa-long-arrow-alt-left"></i> back</Link>
			</div>
			<div className="register_sidebar">
				<h1>A-Lista</h1>
				<div className="newUserRegistration">
					<h3>
						New Member <br />
						Registration
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
				<form action="/register" className="register_form" method="POST">
					<h1>Register</h1>
					<div className="register_inputs-container">
						<input type="text" placeholder="Full name*" />
						<input type="email" placeholder="Email*" value={email.value}/>
						<input type="password" placeholder="Password*" />
						<input type="password" placeholder="Confirm password*" />
					</div>
					<div className="register_button-container">
						<button type="submit">Create account</button>
						<p>Already have an account?
							<Link to="/login"> Login</Link>
						</p>
					</div>
					
				</form>
			</div>
		</div>
	)
}

export default Register;
