import '../components/Header.css';

const Header = () => {
    return (
        <div className='header'>
            <h2>A-LISTA</h2>
            <navbar>
                <ul>
                    <li className='signIn'>Sign In</li>
                    <li className='register'>Create your account</li>
                </ul>
            </navbar>
        </div>
    )
}

export default Header;