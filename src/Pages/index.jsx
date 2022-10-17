import React from "react";
import Navigation from "../components/Navigation";

const Home = ({ theme, toggleTheme }) => {
	return (
		<>
			<Navigation theme={theme} toggleTheme={toggleTheme} />
		</>
	);
};

export default Home;
