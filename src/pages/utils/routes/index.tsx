import React from 'react';
import { HashRouter as Router, Route, Switch } from 'react-router-dom'
import Home from '../../home';
import Playlist from '../../playlist';
function Routes() {
	return (
		<Router>
          <Switch>
            <Route exact path="/playlist/:track" component={Playlist} />
            <Route exact path="/" component={Home} />
          </Switch>
      </Router>
	);
}

export default Routes;
