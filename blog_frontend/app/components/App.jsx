import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
} from 'react-router-dom';
import { Provider } from 'react-redux';
import store from '../store';
import Nav from './Nav/Nav';
import About from './About/About';
import Home from './Home/Home';
import Posts from './PostsApp/container';
import PageNotFound from './PageNotFound/PageNotFound';

const App = ({ header }) => (
  <Provider store={store}>
    <Router>
      <Switch>
        <Route path='/' exact component={Home} />
        <Route path='/about' exact component={About} />
        <Route path='/posts' exact component={Posts} />
        <Route component={PageNotFound}/>
      </Switch>
    </Router>
  </Provider>
);

export default App;
