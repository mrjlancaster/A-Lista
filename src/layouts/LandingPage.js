import Background from '../img/landing-page-bg2.jpg';
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
					<div>
						<input type="text" className="register_input" name="email" placeholder="emailadress@example.com"  />

						<p className="copyrights">Copyright &copy; 2020 All Rights Reserved</p>
					</div>
				</div>
			</div>
			
		</div>
	)
}

export default LandingPage;
