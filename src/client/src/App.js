import './App.css';
import React, { useState, useEffect } from 'react';

function App() {
	const [data, setData] = useState([{}]);
	useEffect(() => {
		fetch('/stories')
			.then((res) => res.json())
			.then((data) => {
				setData(data);
				console.log(data);
			});
	}, []);
	return (
		<div className="App">
			{typeof data.stories === 'undefined' ? (
				<p>Loading...</p>
			) : (
				data.stories.map((story, i) => (
					<p key={i}>
						{story.title}
						{story.description}
					</p>
				))
			)}
		</div>
	);
}

export default App;
