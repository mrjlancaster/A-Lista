import '../components/Header.css';
import { Link } from 'react-router-dom';

const Header = () => {
	return (
		<div className='header'>
			<h2>
				<Link to="/">A-LISTA</Link>
			</h2>
			<nav>
				<div className="navigation_links">
					<Link to='/login' className="li-font signIn">Login</Link>
					<Link to='/register' className="li-font register">Create your account</Link>
				</div>
			</nav>
		</div>
	)
}

export default Header;
