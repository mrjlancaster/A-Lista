import '../components/Header.css';
import { Link } from 'react-dom';

const Header = () => {
    return (
        <div className='header'>
            <h2>A-LISTA</h2>
            <navbar>
                <ul>
                    <Link className='signIn' to="/signIn">Sign In</Link>
                    <Link className='register' to="/register">Create your account</Link>
                </ul>
            </navbar>
        </div>
    )
}

export default Header;