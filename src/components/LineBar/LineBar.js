import React from "react";
import { Box } from "@mui/system";


const LineBar = ({degree}) => {
  return (
    <Box
      sx={{
        borderImage:
          `linear-gradient(${degree}, #fb8817, #ff4b01, #c12127, #e02aff) 3`,
        borderWidth: "4px 0 0",
        borderTopStyle: "solid",
      }}
    ></Box>
  );
};

export default LineBar;
