import React from 'react';
import styled from 'styled-components';
import RightContainer from './RightContainer';


export default function Hero({ theme }) {
    return (
        <Header id="breadcrumb">
            <LContainer>
                <Heading>HI I’M SUMIT, I BUILD THINGS FOR THE WEB </Heading>
                <Paragraph theme={theme}>A passionate software developer having an experience of building,deployment and maintaining Web applications with ReactJS, Nodejs, MongoDB and some other cool libraries and frameworks.</Paragraph>
                <BtnContainer>
                    <ButtonPrimary href="#contact-with-me" theme={theme}>Say Hi</ButtonPrimary>
                    <ButtonSecondary href="https://www.linkedin.com/in/sumit-kumar-das-01/" theme={theme}>Connect with me</ButtonSecondary>
                </BtnContainer>
            </LContainer>
            <RContainer>
                <RightContainer />
            </RContainer>
        </Header>
    )
}

const Header = styled.header`
    margin: 4rem 8rem;
    display: flex;
    // align-items: center;
    justify-content: space-between;
    @media(max-width: 1200px){
        margin: 4rem;
    }
    @media(max-width:700px){
        margin: 4rem 2rem;
    }
`

const Heading = styled.h1`
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
`

const Paragraph = styled.p`
    font-size: 1.4rem;
    margin: 1rem 0;
    color: ${(props) => props.theme === "dark" ? "#fff" : "#353535"};
    line-height: 25px;
    @media(max-width: 1200px){
        font-size: 1.2rem;
    }
    @media(max-width: 460px){
        font-size: 1rem;
    }
`

const BtnContainer = styled.div`
    margin-top: 2rem;
`

const Button = styled.a`
    text-decoration: none;
    padding: 10px 20px;
    font-weight: 600;
    font-size: 1.2rem;
`

const ButtonPrimary = styled(Button)`
    background: ${(props) => props.theme === "dark" ? "#fff" : "#000"};
    color: ${(props) => props.theme === "dark" ? "#000" : "#fff"};
`

const ButtonSecondary = styled(Button)`
    color: ${(props) => props.theme === "dark" ? "#fff" : "#000"};
`

const LContainer = styled.div`
    flex: 0 1 60%;
    @media(max-width: 870px){
        flex: 0 1 100%;
    }
`

const RContainer = styled.div`
    display: flex;
    // align-items: center;
    justify-content: center;
    flex: 0 1 30%;
    @media(max-width: 870px){
        display: none;
    }
`