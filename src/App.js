import { useState } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Homepage from './layouts/Homepage';
import Login from './layouts/Login';
import Register from './layouts/Register';

const App =() => {
	const [ email, setEmail ] = useState('');
	const handleEmail = (e) => setEmail(e.target.value);


	return (
		<Router>
			<div className="App">
				<Switch>
					<Route path='/' exact>
						<Homepage email={email} onChange={handleEmail} />
					</Route>
					<Route path='/Login' component={Login} />

					<Route path='/register'>
						<Register email={email} />
					</Route>
				</Switch>
			</div>
		</Router>
	);
}

export default App;
