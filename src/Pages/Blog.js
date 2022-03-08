import React from 'react'
import Navigation from '../components/navigation/Navigation'
import LineBar from "../components/LineBar/LineBar";
import BlogContainer from '../components/BlogContainer/BlogContainer';

const Blog = () => {
  return (
    <>
      <Navigation />
      <LineBar degree="145deg" />
      <BlogContainer />
    </>
  )
}

export default Blog