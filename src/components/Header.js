import '../components/Header.css';
import { Link } from 'react-router-dom';

const Header = () => {
	return (
		<div className='header'>
			<h2>A-LISTA</h2>
			<navbar>
				<div className="navigation_links">
				<Link to='/signin' className="li-font signIn">Sign In</Link>

				<Link to='/register' className="li-font register">Create your account</Link>
				</div>
			</navbar>
		</div>
	)
}

export default Header;
