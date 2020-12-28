import React, { useState } from 'react';
import './LandingPage.css';
import axios from 'axios';

const LandingPage = () => {
	const [ email, setEmail ] = useState({
		email: ''
	});

	const handleSubmit = (e) => {
		e.preventDefault();

		axios({
			url: '/api/notify-me',
			method: 'POST',
			data: email
		})
		.then(res => console.log(res))
		.catch(err => console.log(err));

		// clear input field
		setEmail({email: ''});
	}

	return (
		<div className="landing__page">
			<div className="landing__page--content">
				<h2 className="coming__soon--title">A-LISTA</h2>
				<div className="coming__soon--texts">
					{/* <p className="hashtag">#Underconstruction</p> */}
					<p className="coming__soon">Coming soon</p>
				</div>

				<form onSubmit={handleSubmit} className="notify__me--wrapper">
					<input 
						type="text" 
						name="email" 
						className="notify__me--input" 
						placeholder="youremail@example.com" 
						value={email.email} 
						onChange={(e) => setEmail({email: e.target.value})} 
					/>
					<button type="submit" className="get__notified--btn">
						Get Notified <i className="fas fa-long-arrow-alt-right"></i>
					</button>
				</form>
			</div>
			<p className="copyrights">Copyright &copy; 2020 All Rights Reserved</p>
		</div>
	)
}

export default LandingPage;
