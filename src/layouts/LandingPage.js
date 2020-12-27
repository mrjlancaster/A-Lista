import './LandingPage.css';

const LandingPage = () => {
	return (
		<div className="landing__page">
			<div className="landing__page--content">
				<h2 className="coming__soon--title">A-LISTA</h2>
				<p className="coming__soon">Coming soon</p>
				<p className="hashtag">#Underconstruction</p>
				<div>
					<p>Get notify when it's ready</p>
					<div className="notify__me--wrapper">
						<input type="text" className="notify__me--input" name="email" placeholder="emailadress@example.com"  />
						<button type="button" className="get__notified--btn">
							Create account <i className="fas fa-long-arrow-alt-right"></i>
						</button>

					</div>
				</div>
			</div>
			<p className="copyrights">Copyright &copy; 2020 All Rights Reserved</p>
		</div>
	)
}

export default LandingPage;
