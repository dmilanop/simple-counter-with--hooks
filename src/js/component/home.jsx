import React, { useState, useEffect } from "react";

//create your first component
const Home = () => {

	const[count, setCount] = useState(0)

	useEffect(() => {
		const increase = setInterval(() => {
			setCount(count + 1)
		}, 1000)

		return () => {
			clearInterval(increase)
		}
	}, [count]);

	return (
		<div className="text-center">
			<h1>Counter: {count}</h1>
		</div>
	);
};

export default Home;
