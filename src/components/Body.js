import './Body.css';
import { Link } from 'react-router-dom';

const Body = () => {
    return (
        <div className="body_container">
            <div className="body_description-wrapper">
                <h1>Your guests deserve to be reserved</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consectetur atque aperiam suscipit incidunt rerum explicabo, maiores hic. Mollitia fuga earum corporis dolores, fugit totam dolore dicta architecto</p>
            </div>
            <div className="register_input-wrapper">
                <div>
                    <input type="text" className="register_input" name="email" placeholder="youremail@example.com" />
                </div>
                <Link to='/register' className="register_link">Create account <i class="fas fa-long-arrow-alt-right"></i></Link>
            </div>
      
        </div>
    )
}

export default Body;