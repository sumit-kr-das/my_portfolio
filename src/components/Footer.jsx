import React from 'react'
import { Link } from 'react-router-dom';
import styled from 'styled-components';

import { Paragraph } from './Project/styled.project';

function LeftContainer({ theme }) {
    return (
        <CopyrightContainer>
            <CopyrightWrapper>
                <Link to="/">
                    {theme === "light" ? (
                        <NavIcon src="/assets/logo_dark.png" alt="nav_logo" />
                    ) : (
                        <NavIcon src="/assets/logo_light.png" alt="nav_logo" />
                    )}
                </Link>
                <Paragraph theme={theme}>Feel free to reach out to me any time. I prefer to talk over email or Linkedin, Let’s create something amazing together.</Paragraph>
                <SubHeading>contact.sumitkrdas@gmail.com</SubHeading>
            </CopyrightWrapper>
        </CopyrightContainer>
    )
}

function RightContainer({ theme }) {
    return (
        <ContactContainer id="contact-with-me">
            <Title>LETS'S CONNECT TOGETHER!</Title>
            <InputContainer>
                <Input type="text" placeholder="Full Name" />
                <Input type="text" placeholder="Full Email" />
            </InputContainer>
            <InputTextarea type="text" placeholder="Full Message" />
            <ButtonPrimary theme={theme}>Send</ButtonPrimary>
        </ContactContainer>
    )
}

export default function Footer({ theme }) {
    return (
        <>
            <Container>
                <LeftContainer theme={theme} />
                <RightContainer theme={theme} />
            </Container>
            <Copyright>@ Copyright 2022. Designed by <b>Sumit Kumar Das</b>.</Copyright>
        </>
    )
}


export const Container = styled.div`
	margin: 12rem 8rem 4rem 8rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
    @media(max-width: 1200px){
        margin: 8rem 4rem 4rem 4rem;
    }
    @media(max-width: 800px){
        flex-direction: column;
    }
    @media(max-width:700px){
        margin: 4rem 2rem;
    }
`;

const CopyrightContainer = styled.div`
    flex: 0 1 40%;
    width: 100%;
    @media(max-width: 800px){
        flex: 0 1 100%;
    }
`;

const CopyrightWrapper = styled.div`
    width: 100%;
`;

const Copyright = styled.p`
    margin: 0 8rem 2rem 8rem;
    line-height: 25px;
    @media(max-width: 1200px){
        margin: 8rem 4rem 4rem 4rem;
    }
    @media(max-width:700px){
        margin: 4rem 2rem;
    }
`

const ContactContainer = styled.div`
    flex: 0 1 40%;
    @media(max-width: 800px){
        flex: 0 1 100%;
    }
`

const NavIcon = styled.img`
	width: 140px;
`

export const Title = styled.h2`
	font-size: 3rem;
	margin-top: 2rem;
	font-weight: 600;
`;

const InputContainer = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin: 1rem 0;
`

const Input = styled.input`
    font-family: 'Raleway', sans-serif;
    width: 48%;
    background-color: #f5f4f4;
    border: none;
    padding: 15px;
    outline: none;
`

const InputTextarea = styled.textarea`
    font-family: 'Raleway', sans-serif;
    width: 100%;
    height: 100px;
    background-color: #f5f4f4;
    border: none;
    padding: 15px;
    outline: none;
    resize: none;
`

const Button = styled.button`
    padding: 10px 20px;
    font-weight: 600;
    font-size: 1.2rem;
    margin-top: 1rem;
`

const ButtonPrimary = styled(Button)`
    background: ${(props) => props.theme === "dark" ? "#fff" : "#000"};
    color: ${(props) => props.theme === "dark" ? "#000" : "#fff"};
`

export const SubHeading = styled.p`
	font-size: 1.5rem;
	margin-top: 1rem;
	font-weight: 600;
    @media(max-width: 800px){
        font-size: 1.2rem;
    }
`;
