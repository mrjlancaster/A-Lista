import React, { useState } from 'react';
import './LandingPage.css';

const LandingPage = () => {
	const [ email, setEmail ] = useState('');

	const handleSubmit = (e) => {
		e.preventDefault();
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
					<input type="text" name="email" className="notify__me--input" name="email" placeholder="youremail@example.com" value={email} onChange={(e) => setEmail(e.target.value)} />
					<button className="get__notified--btn">
						Get Notified <i className="fas fa-long-arrow-alt-right"></i>
					</button>
				</form>
			</div>
			<p className="copyrights">Copyright &copy; 2020 All Rights Reserved</p>
		</div>
	)
}

export default LandingPage;
