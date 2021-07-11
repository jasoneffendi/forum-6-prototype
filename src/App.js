import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from 'react-router-dom';

import Home from './containers/Home'
import Discussion from './containers/Discussion'

function App() {
  return (
    <div className='App'>
      <Router basename="/forum-6-prototype">
        <div>
          <Switch>
            <Route exact path='/discussion/:id'>
              <Discussion />
            </Route>
            <Route exact path='/'>
              <Home />
            </Route>
            <Route>
              <Redirect to='/' />
            </Route>
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;
