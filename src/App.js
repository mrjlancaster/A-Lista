import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Homepage from './components/Homepage';
import SignIn from './components/SignIn';
import Register from './components/Register';

const App =() => {
	return (
		<Router>
			<div className="App">
				<Switch>
					<Route path='/' exact component={Homepage} />
					<Route path='/signin' component={SignIn} />
					<Route path='/register' component={Register} />
				</Switch>
			</div>
		</Router>
	);
}

export default App;
