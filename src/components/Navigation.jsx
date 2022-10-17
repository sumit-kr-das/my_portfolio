import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

export default function Navigation({ theme, toggleTheme }) {
	console.log(theme);
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
	padding: 2rem 8rem;
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
	width: 50px;
`

const RightContainer = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-between;
	gap: 20px;
`;

const Text = styled.p`
	font-weight: 500;
`;

const Hamburger = styled.div`
	width: 40px;
	height: 40px;
	background-color: ${(props) => (props.theme === "dark" ? "#fff" : "#000")};
	border-radius: 50%;
	cursor: pointer;
`;