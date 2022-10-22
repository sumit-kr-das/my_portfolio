import styled from "styled-components";

export const Container = styled.div`
	margin: 12rem 8rem 0 8rem;
    @media(max-width: 1200px){
        margin: 8rem 4rem;
    }
    @media(max-width:700px){
        margin: 8rem 2rem;
    }
`;

export const ItemsCenter = styled.div`
	display: flex;
	align-items: center;
`;

export const Heading = styled.h1`
	font-size: 6rem;
	@media(max-width: 1373px){
        font-size: 5rem;
    }
    @media(max-width: 1200px){
        font-size: 4rem;
    }
    @media(max-width: 1100px){
        font-size: 3.5rem;
    }
	@media(max-width: 460px){
        font-size: 2.5rem;
    }
`;

export const Wrapper = styled(ItemsCenter)`
	justify-content: space-between;
	margin-top: 4rem;
	@media(max-width: 1300px){
        flex-direction: column;
    }
`;

export const WrapperReverse = styled(ItemsCenter)`
	justify-content: space-between;
	margin-top: 4rem;
	@media(max-width: 1300px){
        flex-direction: column-reverse;
    }
`;

export const ImgContainer = styled.div`
	flex: 0 1 45%;
`;

export const Thumbnil = styled.img`
        width: 100%;
	@media(max-width: 1200px){
        width: 100%;
    }
`;

export const DetailsContainer = styled.div`
	flex: 0 1 45%;
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
	@media(max-width: 450px) {
        flex-wrap: wrap;
    }
`;

export const TitleSubContainer = styled(ItemsCenter)`
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
	line-height: 25px;
	color: ${(props) => (props.theme === "dark" ? "#fff" : "#353535")};
    @media(max-width: 460px){
        font-size: 1rem;
    }
`;
