import React from 'react'
import { Container, BtnTags, Heading, Wrapper, TitleSubContainer, WrapperReverse, ImgContainer, Thumbnil, DetailsContainer, SubHeading, Title, TitleContainer, BtnFilled, BtnOutlined, SubHeadingContainer, Paragraph } from './styled.project';

import { project1, project2, project3 } from './projectData'

function LeftImage({ project, theme }) {
  return (
    <Wrapper>
      <ImgContainer>
        <Thumbnil src={project.thumbnil} />
      </ImgContainer>
      <DetailsContainer>
        <TitleContainer>
          <Title>{project.title}</Title>
          <TitleSubContainer>
            <BtnFilled href={project.live} theme={theme}>Web</BtnFilled>
            {
              project.client &&
              <BtnOutlined href={project.client} theme={theme}>Client</BtnOutlined>
            }
            {
              project.server &&
              <BtnOutlined href={project.server} theme={theme}>Server</BtnOutlined>
            }
          </TitleSubContainer>
        </TitleContainer>
        <SubHeading>Description:</SubHeading>
        <SubHeadingContainer>
          {
            project.description.map((item, indx) => (
              <Paragraph theme={theme} key={indx}>{item}</Paragraph>
            ))
          }
        </SubHeadingContainer>
        <TitleContainer>
          {
            project.tags.map((item, indx) => (
              <BtnTags theme={theme} key={indx}>{item}</BtnTags>
            ))
          }
        </TitleContainer>
      </DetailsContainer>
    </Wrapper>
  )
}

function RightImage({ project, theme }) {
  return (
    <WrapperReverse>
      <DetailsContainer>
        <TitleContainer>
          <Title>{project.title}</Title>
          <BtnFilled href={project.live} theme={theme}>Web</BtnFilled>
          {
            project.client &&
            <BtnOutlined href={project.client} theme={theme}>Client</BtnOutlined>
          }
          {
            project.server &&
            <BtnOutlined href={project.server} theme={theme}>Server</BtnOutlined>
          }
        </TitleContainer>
        <SubHeading>Description:</SubHeading>
        <SubHeadingContainer>
          {
            project.description.map((item, indx) => (
              <Paragraph theme={theme} key={indx}>{item}</Paragraph>
            ))
          }
        </SubHeadingContainer>
        <TitleContainer>
          {
            project.tags.map((item, indx) => (
              <BtnTags theme={theme} key={indx}>{item}</BtnTags>
            ))
          }
        </TitleContainer>
      </DetailsContainer>
      <ImgContainer>
        <Thumbnil src={project.thumbnil} />
      </ImgContainer>
    </WrapperReverse>
  )
}

export default function Project({ theme }) {
  return (
    <Container>
      <Heading>MY FEATURED <br /> PROJECTS</Heading>
      <LeftImage project={project1} theme={theme} />
      <RightImage project={project2} theme={theme} />
      <LeftImage project={project3} theme={theme} />
    </Container>
  )
}

