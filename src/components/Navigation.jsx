import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

export default function Navigation({ theme, toggleTheme }) {

	return (
		<Nav>
			<Link to="/">
				{theme === "light" ? (
					<NavIcon src="/assets/logo_dark.png" alt="nav_logo" />
				) : (
					<NavIcon src="/assets/logo_light.png" alt="nav_logo" />
				)}
			</Link>
			<RightContainer>
				<Text>Switch Theme</Text>
				<Cursor onClick={toggleTheme}>
					{theme === "light" ? (
						<ThemeLogo src="/assets/moon.png" alt="sun_icon" />
					) : (
						<ThemeLogo src="/assets/sun.png" alt="sun_icon" />
					)}
				</Cursor>
				<Hamburger theme={theme} />
			</RightContainer>
		</Nav>
	);
}

const Nav = styled.nav`
	display: flex;
	align-items: center;
	justify-content: space-between;
	margin: 2rem 8rem;
	@media(max-width: 1200px){
        margin: 4rem;
    }
	@media(max-width:700px){
        margin: 4rem 2rem;
    }
`;
const Cursor = styled.div`
	cursor: pointer;
	display: flex;
	align-items: center;
`;
const NavIcon = styled.img`
	width: 140px;
`
const ThemeLogo = styled.img`
	width: 40px;
`
const RightContainer = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-between;
	gap: 20px;
`;
const Text = styled.p`
	font-weight: 500;
	@media(max-width:700px){
        display: none;
    }
`;
const Hamburger = styled.div`
	width: 40px;
	height: 40px;
	background-color: ${(props) => (props.theme === "dark" ? "#fff" : "#000")};
	border-radius: 50%;
	cursor: pointer;
`;
