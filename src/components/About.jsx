import React from 'react'
import styled from 'styled-components'

export default function About({ theme }) {
    return (
        <Container>
            <Heading>ABOUT ME</Heading>
            <Paragraph theme={theme}>A meticulous software developer with 6+ months of experience. Specialized in creating Optimized, Pixel-perfect and Responsive web apps.</Paragraph>
            <Paragraph theme={theme}>I’m very ambitious software developer looking for a role in established IT company with the opportunity to work with the latest technologies on challenging and diverse projects.</Paragraph>
            <SubHeading>Tech Stack and Tools I use</SubHeading>
            <StackContainer>
                <IconImg src="/assets/icons/reactjs.svg" alt="icon" />
                {
                    theme === "light" ?
                        <IconImg src="/assets/icons/nextjs-black.svg" alt="icon" />
                        :
                        <IconImg src="/assets/icons/next-white.svg" alt="icon" />
                }
                <IconImg src="/assets/icons/styled-components.svg" alt="icon" />
                <IconImg src="/assets/icons/material-ui.svg" alt="icon" />
                <IconImg src="/assets/icons/redux.svg" alt="icon" />
                <IconImg src="/assets/icons/typescript.svg" alt="icon" />
                <IconImg src="/assets/icons/nodejs.svg" alt="icon" />
                <IconImg src="/assets/icons/mongodb.svg" alt="icon" />
            </StackContainer>
        </Container>
    )
}

const Container = styled.section`
    margin: 6rem 8rem;
`

const Heading = styled.h1`
    font-size: 6rem;
`

const Paragraph = styled.p`
    font-size: 1.4rem;
    margin: 1rem 0;
    color: ${(props) => props.theme === "dark" ? "#fff" : "#353535"};
`

const SubHeading = styled.p`
    font-size: 1.5rem;
    margin-top: 2rem;
    font-weight: 600;
`

const StackContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-top: 1rem;
`

const IconImg = styled.img`
    width: 80px;
`