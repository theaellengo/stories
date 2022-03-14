import React, { Fragment } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Stories from './components/layout/Stories';
import Register from './components/auth/Register';
import Login from './components/auth/Login';
import Parts from './components/layout/Parts';
import Profile from './components/layout/Profile';

// Redux
import { Provider } from 'react-redux';
import store from './store';

import './App.css';

const App = () => (
	<Provider store={store}>
		<Router>
			<Fragment>
				<Navbar />
				<Routes>
					<Route exact path="/stories" element={<Stories />} />
					<Route exact path="/register" element={<Register />} />
					<Route exact path="/login" element={<Login />} />
					<Route exact path="/part" element={<Parts />} />
					<Route exact path="/profile" element={<Profile />} />
				</Routes>
			</Fragment>
		</Router>
	</Provider>
);

export default App;
