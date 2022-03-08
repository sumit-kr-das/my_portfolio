import { Box, Typography } from "@mui/material";
import React from "react";

const titleStyle = {
  color: "#ffffff",
  fontFamily: "'Fira Code', monospace",
};

const BlogContainer = () => {
  return (
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
        Blog is empty
      </Typography>
    </Box>
  );
};

export default BlogContainer;
