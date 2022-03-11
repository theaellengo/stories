import React, { Fragment } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Stories from './components/layout/Stories';
import Register from './components/auth/Register';
import Login from './components/auth/Login';

import './App.css';

const App = () => (
	<Router>
		<Fragment>
			<Navbar />
			<Routes>
				<Route exact path="/stories" element={<Stories />} />
				<Route exact path="/register" element={<Register />} />
				<Route exact path="/login" element={<Login />} />
			</Routes>
		</Fragment>
	</Router>
);

export default App;
