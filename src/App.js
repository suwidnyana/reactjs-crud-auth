import React from 'react'
import {
	BrowserRouter as Router,
	Switch,
	Route,
	HashRouter
  } from "react-router-dom";
import Login from './pages/login';
import Dashboard from './pages/dashboard';

const App = () => {
	// Data
	


	return(

		<HashRouter basename='/'>
		 <Switch>
		 <Route exact={true} path="/">
            <Login/>
          </Route>
          <Route exact={true} path="/dashboard">
            <Dashboard />
          </Route>
        </Switch>
		</HashRouter>
	)

}

export default App
