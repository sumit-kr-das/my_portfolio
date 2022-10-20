import styled from "styled-components";

export const Container = styled.div`
	margin: 8rem 8rem 0 8rem;
	margin: 10rem;
`;

export const ItemsCenter = styled.div`
	display: flex;
	align-items: center;
`;

export const Heading = styled.h1`
	font-size: 6rem;
`;

export const Wrapper = styled(ItemsCenter)`
	justify-content: space-between;
	margin-top: 4rem;
`;

export const ImgContainer = styled.div`
	flex: 0 1 40%;
`;

export const Thumbnil = styled.img``;

export const DetailsContainer = styled.div`
	flex: 0 1 40%;
`;

export const SubHeading = styled.p`
	font-size: 1.5rem;
	margin-top: 1rem;
	font-weight: 600;
`;

export const Title = styled.h2`
	font-size: 3rem;
	margin-top: 2rem;
	font-weight: 600;
`;

export const TitleContainer = styled(ItemsCenter)`
	align-items: flex-end;
	gap: 1rem;
`;

export const BtnFilled = styled.a`
  text-decoration: none;
	padding: 6px 12px;
	background-color: ${(props) => props.theme === "dark" ? "#fff" : "#000"};
	border: 1px solid #000;
	color: ${(props) => props.theme === "dark" ? "#000" : "#fff"};
	border-radius: 20px;
	font-size: 0.8rem;
	cursor: pointer;
`;

export const BtnTags = styled.p`
	padding: 6px 12px;
	background-color: ${(props) => props.theme === "dark" ? "#fff" : "#000"};
	border: 1px solid #000;
	color: ${(props) => props.theme === "dark" ? "#000" : "#fff"};
	border-radius: 20px;
	font-size: 0.8rem;
`;

export const BtnOutlined = styled.a`
  text-decoration: none;
	padding: 6px 12px;
	border: ${(props) => props.theme === "dark" ? "1px solid #fff" : "1px solid #000"};
	color: ${(props) => props.theme === "dark" ? "#fff" : "#000"};
	border-radius: 20px;
	font-size: 0.8rem;
	cursor: pointer;
`;

export const SubHeadingContainer = styled.div``;

export const Paragraph = styled.p`
	font-size: 1.4rem;
	margin: 1rem 0;
	color: ${(props) => (props.theme === "dark" ? "#fff" : "#353535")};
`;
