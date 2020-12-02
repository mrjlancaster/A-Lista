import './Body.css';

const Body = () => {
    return (
        <div className="body_container">
            <div className="body_description-wrapper">
                <h1>Your guests deserve to be reserved</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consectetur atque aperiam suscipit incidunt rerum explicabo, maiores hic. Mollitia fuga earum corporis dolores, fugit totam dolore dicta architecto explicabo voluptatibus repellat eaque quidem, nemo adipisci accusamus natus, dignissimos impedit vitae odit laboriosam </p>
            </div>


            <label for="email">
                <input type="text" name="email" placeholder="youremail@email.com" />
                Create account
            </label>
        </div>
    )
}

export default Body;