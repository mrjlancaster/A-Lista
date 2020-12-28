import './LandingPage.css';

const LandingPage = () => {
	return (
		<div className="landing__page">
			<div className="landing__page--content">
				<h2 className="coming__soon--title">A-LISTA</h2>
				<div className="coming__soon--texts">
					{/* <p className="hashtag">#Underconstruction</p> */}
					<p className="coming__soon">Coming soon</p>
				</div>

				<div className="notify__me--wrapper">
					<input type="text" className="notify__me--input" name="email" placeholder="youremail@example.com"  />
					<button type="button" className="get__notified--btn">
						Get Notified <i className="fas fa-long-arrow-alt-right"></i>
					</button>
				</div>
			</div>
			<p className="copyrights">Copyright &copy; 2020 All Rights Reserved</p>
		</div>
	)
}

export default LandingPage;
