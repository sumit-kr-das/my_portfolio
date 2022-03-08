import { Box, Typography } from "@mui/material";
import React from "react";
import Navigation from "../components/navigation/Navigation";
import LineBar from "../components/LineBar/LineBar";

const titleStyle = {
  color: "#ffffff",
  fontFamily: "'Fira Code', monospace",
};

const Home = () => {
  return (
    <>
      <Navigation />
      <LineBar degree="120deg" />
      <Box
        sx={{
          height: "100vh",
          width: "100%",
          background: "#001E3C",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Typography sx={[titleStyle, { fontWeight: "400" }]}>
          Home is empty
        </Typography>
      </Box>
    </>
  );
};

export default Home;
