import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Homepage from './layouts/Homepage';
import Login from './layouts/Login';
import Register from './layouts/Register';

const App =() => {	
	return (
		<Router>
			<div className="App">
				<Switch>
					<Route path='/' exact>
						<Homepage />
					</Route>
					<Route path='/Login' component={Login} />

					<Route path='/register'>
						<Register />
					</Route>
				</Switch>
			</div>
		</Router>
	);
}

export default App;
