import '../components/Header.css';
import { BrowserRouter as Router, Link } from 'react-router-dom';

const Header = () => {
    return (
        <Router>
            <div className='header'>
                <h2>A-LISTA</h2>
                <navbar>
                    <ul>
                        <li className='signIn'>
                            <Link to='/signin'>Sign In</Link>
                        </li>
                        <li className='register'>
                            <Link to='/register'>Create your account</Link>
                        </li>
                    </ul>
                </navbar>
            </div>
        </Router>
    )
}

export default Header;