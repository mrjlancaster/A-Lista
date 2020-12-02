import './App.css';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

import Homepage from './Homepage';

const App =() => {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path='/' exact component={Homepage} />
          <Route path='/login' component={Login} />
          <Route path='/register' component={Register} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
