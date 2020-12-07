import { useState } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Homepage from './layouts/Homepage';
import Login from './layouts/Login';
import Register from './layouts/Register';

const App =(props) => {
	const [ email, setEmail ] = useState('');
	return (
		<Router>
			<div className="App">
				<Switch>
					<Route path='/' exact>
						<Homepage email={ email } />
					</Route>
					<Route path='/Login' component={Login} />
					<Route path='/register' component={Register} />
				</Switch>
			</div>
		</Router>
	);
}

export default App;
