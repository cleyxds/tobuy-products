import React from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';

import Main from './pages/Main';
import { SignUp } from './pages/SignUp';


const Routes = () => (
	<Router>
		<Switch>
			<Route path='/signup' component={SignUp} />
			<Route path='/app' component={Main} />
			<Route path='*' component={() => <h1>Page not found</h1>} />
		</Switch>
	</Router>
)

export default Routes;