import React, { Fragment, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import PrivateRoute from './components/routing/PrivateRoute';
import Index from './components/layout/Index';
import Navbar from './components/layout/Navbar';
import Stories from './components/stories/Stories';
import Story from './components/story/Story';
import Register from './components/auth/Register';
import Login from './components/auth/Login';
import Parts from './components/layout/Parts';
import User from './components/profile/User';
import Profile from './components/profile/Profile';
import Alert from './components/layout/Alert';
import setAuthToken from './utils/setAuthToken';
import { loadUser } from './actions/auth';
import StoryForm from './components/stories/StoryForm';

// Redux
import { Provider } from 'react-redux';
import store from './store';

import './App.css';

if (localStorage.token) {
	setAuthToken(localStorage.token);
}
const App = () => {
	useEffect(() => {
		store.dispatch(loadUser());
	}, []);
	return (
		<Provider store={store}>
			<Router>
				<Fragment>
					<Navbar />
					<div className="alert-container">
						<Alert />
					</div>
					<Routes>
						<Route exact path="" element={<Index />} />
						<Route exact path="/stories" element={<Stories />} />
						<Route exact path="/register" element={<Register />} />
						<Route exact path="/login" element={<Login />} />
						<Route exact path="/part" element={<Parts />} />
						<Route exact path="/profile/:id" element={<Profile />} />
						<Route exact path="/story/:id" element={<Story />} />
						<Route
							path="/add"
							element={<PrivateRoute component={StoryForm} />}
						/>
						<Route path="/user" element={<PrivateRoute component={User} />} />
					</Routes>
				</Fragment>
			</Router>
		</Provider>
	);
};

export default App;
