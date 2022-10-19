import React from 'react';
import { styled } from "styled-components"

import { projectData } from '../constants/project';

export default function Project() {
  return (
    <div>Project</div>
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