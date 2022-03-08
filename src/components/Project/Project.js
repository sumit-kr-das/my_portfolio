import React from "react";
import { Box } from "@mui/system";
import { Typography } from "@mui/material";

const titleStyle = {
  color: "#ffffff",
  fontFamily: "'Fira Code', monospace",
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

const Project = ({ data }) => {
  return (
    <Box
      sx={{
        border: "1px solid rgb(80, 144, 211)",
        borderRadius: "10px",
        p: 2,
        mb: 2,
      }}
    >
      <a href={data.url} style={{  textDecoration: "none" }}>
        <Typography sx={[titleStyle, { fontWeight: "400" }]}>
          {data.title}
        </Typography>

        <Box
          sx={{  
            display: "flex", 
            alignItems: "center", 
            flexDirection: "row"
        }}
        >
          {data.tags.map((tagData, index) => (
            <Typography sx={textStyle} key={index}>
              {tagData}
            </Typography>
          ))}
        </Box>
        <Typography
          sx={[titleStyle, { fontWeight: "300", fontSize: "14px", mb: 1 }]}
        >
          {data.des}
        </Typography>
      </a>
      <a style={titleStyle} href={data.live}>
        Visit Website »
      </a>
    </Box>
  );
};

export default Project;
