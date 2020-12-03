import '../components/Header.css';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div className='header'>
            <h2>A-LISTA</h2>
            <navbar>
                <ul>
                    <li className='signIn'>
                        <Link to='/signin' className="li-font">Sign In</Link>
                    </li>
                    <li className='register'>
                        <Link to='/register' className="li-font">Create your account</Link>
                    </li>
                </ul>
            </navbar>
        </div>
    )
}

export default Header;