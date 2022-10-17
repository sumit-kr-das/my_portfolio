import { useEffect, useState } from "react";

const useDarkMode = () => {
	const [theme, setTheme] = useState("light");

	const saveMode = (mode) => {
		window.localStorage.setItem("theme", mode);
		setTheme(mode);
	}

	const toggleTheme = () => {
		theme === "dark" ? saveMode("light") : saveMode("dark");
	};

	useEffect(() => {
		const localTheme = window.localStorage.getItem("theme");
		localTheme ? setTheme(localTheme) : setTheme("light")
	},[]);

	return [theme, toggleTheme];
};

export default useDarkMode;
