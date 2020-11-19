import React from 'react';
import './App.css';
import Header from './Header';
import Sidebar from './Sidebar';
import Chat from './Chat';
import Login from './Login';
import Welcome from './Welcome';
import {useStateValue} from './StateProvider';
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom';


function App() {
	
  const [{user},dispatch]=useStateValue();
	
  return (
    <div className="app">
    <Router>
		{ !user?(
		<Login/>
		):(
		<>
		<Header/>
		<div className="app_body">
		 <Sidebar/>
		<Switch>
		<Route path="/room/:roomId">
		<Chat/>	
	    </Route>
		<Route path="/">
	    <Welcome/>
	    </Route>
		</Switch>
		</div>
		</>
		)}
	</Router>
	</div>
  );
}

export default App;
