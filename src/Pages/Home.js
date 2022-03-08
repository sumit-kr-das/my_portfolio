import React from "react";
import { Box } from "@mui/material";

import Navigation from "../components/navigation/Navigation";
import ProjectContainer from "../components/ProjectContainer/ProjectContainer";


const Home = () => {
  return (
    <>
      <Navigation />
      <Box
        sx={{
          borderImage:
            "linear-gradient(139deg, #fb8817, #ff4b01, #c12127, #e02aff) 3",
          borderWidth: "4px 0 0",
          borderTopStyle: "solid",
        }}
      ></Box>
      <ProjectContainer />
    </>
  );
};

export default Home;
