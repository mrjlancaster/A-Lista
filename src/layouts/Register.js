import React, { useState } from 'react';
import './Register.css';
import { Link } from 'react-router-dom';
import axios from 'axios';

const Register = () => {
	const [ registration, setRegistration ] = useState({
		name: '',
		email: '',
		password: '',
		confirmPassword: '',
	});

	const handleSubmit = (e) => {
		e.preventDefault();
		console.log(registration);

		axios({
			url: '/api/newUser',
			method: 'POST',
			data: registration
		})
			.then(res => console.log('data has been sent to server.', res))
			.catch(err => console.log(err))


		// const options = {
		// 	method: 'POST',
		// 	headers: {
		// 		'Content-Type': 'application/json'
		// 	},
		// 	body: JSON.stringify(registration)
		// }
		// fetch('/api/register', options)
		// 	.then(res => console.log(res))
		// 	.catch(err => console.log(err));
	}


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
				<form onSubmit={handleSubmit} className="register_form">
					<h1>Register</h1>
					<div className="register_inputs-container">
						<input 
							type="text" 
							placeholder="Full name*" 
							name="full_name"
							value={registration.name}
							onChange={e => setRegistration({ ...registration, name: e.target.value })}
							// required 
						/>

						<input 
							type="email" 
							placeholder="Email*" 
							name="email"
							value={registration.email}
							onChange={e => setRegistration({ ...registration, email: e.target.value })}
							// required 
						/>

						<input 
							type="password" 
							placeholder="Password*" 
							name="password"
							value={registration.password}
							onChange={e => setRegistration({ ...registration, password: e.target.value })}
							// required 
						/>

						<input 
							type="password" 
							placeholder="Confirm password*" 
							name="password_confirmation" 
							value={registration.confirmPassword}
							onChange={e => setRegistration({ ...registration, confirmPassword: e.target.value })}
							// required 
						/>
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
