import { Box, Typography } from "@mui/material";
import React from "react";
import "./style.css";

const titleStyle = {
  color: "#ffffff",
  fontFamily: "'Fira Code', monospace",
  fontWright: "600",
  fontSize: "1rem",
  paddingLeft: "0.2rem",
};

const textStyle = {
  fontFamily: "'Fira Code', monospace",
  color: "#fff",
  background: "rgb(19, 47, 76)",
  padding: "5px 10px",
  fontSize: "0.7rem",
  borderRadius: "15px",
  m: 1,
};

const Tags = () => {
  return (
    <Box sx={{pr:{ xs: 0, md: 4}, mb: 2}}>
      <Box sx={{ my: 2 }}>
        <Typography
          sx={[
            titleStyle,
            { fontSize: "1.2rem", paddingLeft: "0.2rem", mb: 1 },
          ]}
        >
          Important Tags
        </Typography>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            flexDirection: "row",
            flexWrap: "wrap",
          }}
        >
          <Typography sx={textStyle}>Full Stack</Typography>
          <Typography sx={textStyle}>Front-End</Typography>
          <Typography sx={textStyle}>Rest API</Typography>
          <Typography sx={textStyle}>React</Typography>
          <Typography sx={textStyle}>Automation</Typography>
          <Typography sx={textStyle}>HTML</Typography>
          <Typography sx={textStyle}>CSS</Typography>
          <Typography sx={textStyle}>Games</Typography>
        </Box>
      </Box>
      <Box sx={{ pt: 2 }}>
        <Typography sx={titleStyle}>HTML</Typography>
        <Box className="container">
          <Box className="progress progress-striped">
            <Box className="progress-bar"></Box>
          </Box>
        </Box>
      </Box>
      <Box sx={{ pt: 1 }}>
        <Typography sx={titleStyle}>CSS</Typography>
        <Box className="container">
          <Box className="progress progress-striped">
            <Box className="progress-bar progress-bar2"></Box>
          </Box>
        </Box>
      </Box>
      <Box sx={{ pt: 1 }}>
        <Typography sx={titleStyle}>JavaScript</Typography>
        <Box className="container">
          <Box className="progress progress-striped">
            <Box className="progress-bar progress-bar3"></Box>
          </Box>
        </Box>
      </Box>
      <Box sx={{ pt: 1 }}>
        <Typography sx={titleStyle}>ReactJS</Typography>
        <Box className="container">
          <Box className="progress progress-striped">
            <Box className="progress-bar progress-bar4"></Box>
          </Box>
        </Box>
      </Box>
      <Box sx={{ pt: 1 }}>
        <Typography sx={titleStyle}>Node</Typography>
        <Box className="container">
          <Box className="progress progress-striped">
            <Box className="progress-bar progress-bar5"></Box>
          </Box>
        </Box>
      </Box>
      <Box sx={{ pt: 1 }}>
        <Typography sx={titleStyle}>MongoDB</Typography>
        <Box className="container">
          <Box className="progress progress-striped">
            <Box className="progress-bar progress-bar6"></Box>
          </Box>
        </Box>
      </Box>
      <Box sx={{ pt: 1 }}>
        <Typography sx={titleStyle}>MUI</Typography>
        <Box className="container">
          <Box className="progress progress-striped">
            <Box className="progress-bar progress-bar7"></Box>
          </Box>
        </Box>
      </Box>
      <Box sx={{ pt: 1 }}>
        <Typography sx={titleStyle}>Styled Components</Typography>
        <Box className="container">
          <Box className="progress progress-striped">
            <Box className="progress-bar progress-bar9"></Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Tags;
