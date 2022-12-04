import React from "react";
import About from "../components/About";
import Footer from "../components/Footer";
import Hero from "../components/Hero/Hero";
import Navigation from "../components/Navigation";
import Project from '../components/Project/Project.jsx'

const Home = ({ theme, toggleTheme }) => {
	return (
		<>
			<Navigation theme={theme} toggleTheme={toggleTheme} />
			<Hero theme={theme} />
			<About theme={theme} />
			<Project theme={theme} />
			<Footer theme={theme} />
		</>
	);
};

export default Home;
