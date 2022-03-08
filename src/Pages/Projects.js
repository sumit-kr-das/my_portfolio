import React from "react";

import Navigation from "../components/navigation/Navigation";
import LineBar from "../components/LineBar/LineBar";
import ProjectContainer from "../components/ProjectContainer/ProjectContainer";

const Projects = () => {
  return (
    <>
      <Navigation />
      <LineBar degree="-145deg" />
      <ProjectContainer />
    </>
  );
};

export default Projects;
