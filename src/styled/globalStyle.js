import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    *{
        padding: 0;
        margin: 0;
        box-sizing: border-box;
    }
    body{
        font-family: 'Raleway', sans-serif;
        background: ${({ theme }) => theme.body};
        color: ${({ theme }) => theme.text};
        /* transition: all 0.4s linear; */
    }
`;

export const LightTheme = {
	body: "#fff",
	text: "#121212",
};

export const DarkTheme = {
	body: "#0A1929",
	text: "#fff",
};
