import React, { useEffect, useState } from 'react'
import styled from 'styled-components'

export default function RightContainer() {
    const [data, setData] = useState({});
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchData = () => {
            fetch('https://api.github.com/users/sumit-kr-das')
                .then(response => response.json())
                .then(json => setData(json))
                setLoading(false);
        }
        fetchData();
    }, []);

    console.log(loading);
    return (
        <Container>
            <ImgContainer>
                <Image src={data.avatar_url} />
                <LogoImg src="/assets/octocat.png" />
            </ImgContainer>
            <DetailsWrapper>
                <h1>{data.name}</h1>
                <p>{data.login}</p>
                <Button href={data.html_url}>Follow</Button>
                <p>{data.bio}</p>
                <FollowersContainer>
                    <p><b>{data.followers}</b> followers</p>
                    <span>.</span>
                    <p><b>{data.following}</b> following</p>
                </FollowersContainer>
            </DetailsWrapper>
        </Container>
    )
}

const Container = styled.div`

`;

const ImgContainer = styled.div`
    position: relative;
`;

const Image = styled.img`
    width: 250px;
    height: 250px;
    border-radius: 100%;
    box-shadow: 0 0 0 1px rgba(27,31,36,0.15);
    border: 1px solid #d0d7de;
`;

const LogoImg = styled.img`
    background: #fff;
    width: 40px;
    height: 40px;
    position: absolute;
    bottom: 40px;
    right: 0px;
    border: 1px solid #d0d7de;
    border-radius: 100%;
    padding: 8px;
`

const DetailsWrapper = styled.div`

`;

const Button = styled.a`
    background-color: #fff;
    width: 100%;
    border: 1px solid #d0d7de;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 5px 10px;
    border-radius: 5px;
    margin: 0.5rem 0;
    text-decoration: none;
    font-weight: 500;
    color: #000;
    &:hover {
        background-color: rgba(0,0,0,0.05)
    }
`;

const FollowersContainer = styled.div`
    display: flex;
    align-items: center;
    margin-top: 0.5rem;
    span{
        margin:0 0.5rem;
    }
`