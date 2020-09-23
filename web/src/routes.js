import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import { Application } from './pages/Application';
import { SignUp } from './pages/SignUp';

import { PrivateRoute } from './components/PrivateRoute';


const Routes = () => (
	<Router>
		<Switch>
			<Route exact path='/' component={() => <h1>ROOT</h1>} />
			<Route path='/signup' component={SignUp} />
			<PrivateRoute path='/app' component={Application} />
			<Route path='*' component={() => <h1>Page not found</h1>} />
		</Switch>
	</Router>
)

export default Routes;