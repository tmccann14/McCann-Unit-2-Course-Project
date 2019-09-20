import React, { Component } from 'react';
import { Route, NavLink, Switch, Redirect } from 'react-router-dom';

import Courses from './containers/Courses/Courses';
import Course from './containers/Course/Course';
import Users from './containers/Users/Users';
import NoMatch from './components/NoMatch/NoMatch';

import logo from './hulk-iron-man-captain-america.png'; // Tell Webpack this JS file uses this image

console.log(logo); // /hulk-iron-man-captain-america.png

class App extends Component {
  render () {
    return (
      <div className="App">
        <ol style={{ textAlign: 'left' }}>
        </ol>
        <nav>
          <ul style={{ listStyle: 'none', margin: 'auto', padding: '0' }}>
            <li style={{ margin: '10px', display: 'inline-block' }}>
              <NavLink to="/courses">Superheros</NavLink>
            </li>
            <li style={{ margin: '10px', display: 'inline-block' }}>
              <NavLink to="/users">Users</NavLink>
            </li>
          </ul>
        </nav>
        <Switch>
          <Route path="/users" component={Users} />
          {<Route path="/courses/:courseId" component={Course} />}
          <Route path="/courses" component={Courses} />
          <Redirect from="/all-courses" to="/courses" />
          <Route component={NoMatch}/>
        </Switch>
        <img src={logo} alt="hulk-iron-man-captain-america" />
      </div>
    );
  }
}

export default App;
