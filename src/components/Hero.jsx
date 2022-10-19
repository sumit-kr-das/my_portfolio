import React from 'react'
import styled from 'styled-components'

export default function Hero({theme}) {
    return (
        <Header>
            <LeftContainer>
                <Heading>HI I’M SUMIT, I BUILD THINGS FOR THE WEB </Heading>
                <Paragraph theme={theme}>A passionate software developer having an experience of building,deployment and maintaining Web applications with ReactJS, Nodejs, MongoDB and some other cool libraries and frameworks.</Paragraph>
                <BtnContainer>
                    <ButtonPrimary href="#" theme={theme}>Say Hi</ButtonPrimary>
                    <ButtonSecondary href="#" theme={theme}>Connect with me</ButtonSecondary>
                </BtnContainer>
            </LeftContainer>
            <RightContainer>
                <img src="/assets/avatar.png" alt="hero_img" />
            </RightContainer>
        </Header>
    )
}

const Header = styled.header`
    margin: 4rem 8rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
`

const Heading = styled.h1`
    font-size: 6rem;
`

const Paragraph = styled.p`
    font-size: 1.4rem;
    margin: 1rem 0;
    color: ${(props) => props.theme === "dark" ? "#fff" : "#353535"};
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

const LeftContainer = styled.div`
    flex: 0 1 60%;
`

const RightContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex: 0 1 30%;
    background-color: red;
`