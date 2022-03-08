import React from "react";
import { AppBar, Box, MenuItem, Toolbar, Typography } from "@mui/material";
import { Link } from "react-router-dom";

const Navigation = () => {
  return (
    <AppBar position="static" sx={{ background: "#071A2F"}}>
      <Toolbar>
        <Box
          sx={{
            width: "100%",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <Box>
            <Typography
              sx={{ fontFamily: "'Fira Code', monospace" }}
              variant="h6"
              color="inherit"
            >
              #sumit
            </Typography>
          </Box>
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <MenuItem component={Link} to="/" sx={{ fontFamily: "'Fira Code', monospace" }}>
              Home
            </MenuItem>
            <MenuItem component={Link} to="/projects" sx={{ fontFamily: "'Fira Code', monospace" }}>
              Projects
            </MenuItem>
            <MenuItem component={Link} to="/blog" sx={{ fontFamily: "'Fira Code', monospace" }}>
              Blog
            </MenuItem>
          </Box>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Navigation;
