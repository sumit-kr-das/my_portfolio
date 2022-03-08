import React, { useState } from "react";

import Project from "../Project/Project";

import { Box } from "@mui/system";
import { Container, Grid, Typography } from "@mui/material";

import { productData } from "../../constants/projectData";

const ProjectContainer = () => {
  const [data, setData] = useState(productData);
  return (
    <Grid container>
      {/* Project Item */}
      <Grid item xs={12} lg={9} sx={{ background: "#001E3C" }}>
        <Container maxWidth="sm" sx={{ py: 4 }}>
          {/* Single Project */}
          {data.map((data, index) => (
            <Project key={index} data={data} />
          ))}
        </Container>
      </Grid>
      {/* Tag Item   */}
      <Grid item xs={12} lg={3} sx={{ background: "#001E3C", }}>
        <Typography>Hello Bro</Typography>
      </Grid>
    </Grid>
  );
};

export default ProjectContainer;
