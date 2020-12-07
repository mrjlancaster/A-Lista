import { useState } from 'react';
import './Body.css';
import { Link } from 'react-router-dom';

const Body = () => {
	const [ email, setEmail ] = useState('');

	const handleEmail = () => {
		setEmail('');
		console.log(email);
	}

	return (
		<div className="body_container">
			<div className="body_description-wrapper">
					<h1>Your guests deserve to be reserved</h1>
					<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consectetur atque aperiam suscipit incidunt rerum explicabo, maiores hic. Mollitia fuga earum corporis dolores, fugit totam dolore dicta architecto</p>
			</div>
			<div className="register_input-wrapper">
				<div>
					<input type="text" className="register_input" name="email" placeholder="emailadress@example.com" onChange={(e) => setEmail(e.target.value)} value={email} />
				</div>
					<Link onClick={handleEmail} to='/register' className="register_link">
						Create account <i class="fas fa-long-arrow-alt-right"></i>
					</Link>
			</div>
		</div>
	)
}

export default Body;
