import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Pages";
import Error from "./Pages/Error";

import useDarkMode from "./styled/useDarkMode";
import { GlobalStyle, LightTheme, DarkTheme } from "./styled/globalStyle";
import { ThemeProvider } from "styled-components";

function App() {
	const [theme, toggleTheme] = useDarkMode();
	const themeMode = theme === "dark" ? DarkTheme : LightTheme;
    console.log("app => ",theme);
	return (
		<ThemeProvider theme={themeMode}>
			<Router>
				<GlobalStyle />
				<Routes>
					<Route
						path="/"
						element={
                            <Home 
                                theme={theme} 
                                toggleTheme={toggleTheme} 
                            />
                        }
					/>
					<Route 
                        path="*" 
                        element={<Error />} 
                    />
				</Routes>
			</Router>
		</ThemeProvider>
	);
}

export default App;
