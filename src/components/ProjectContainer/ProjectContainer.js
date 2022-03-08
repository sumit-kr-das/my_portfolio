import React, { useState } from "react";

import Project from "../Project/Project";
import Tags from '../Tags/Tags';

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
      <Grid item xs={12} lg={3} sx={{ background: "#001E3C", px: {xs:2,md:0} }}>
        <Tags />
      </Grid>
    </Grid>
  );
};

export default ProjectContainer;
