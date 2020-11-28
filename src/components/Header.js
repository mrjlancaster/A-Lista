import '../components/Header.css';

const Header = () => {
    return (
        <div className='header'>
            <h1>A-LISTA</h1>
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