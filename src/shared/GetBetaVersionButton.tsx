import React from "react";
// Mui Imports
import { Button } from "@mui/material";
// Icons
import AppleIconImage from "../assets/appleIcon.svg";

export const GetBetaVersionButton = ({}) => {
  return (
    <Button
      sx={{
        backgroundColor: "#ffffff",
        color: "#020617",
        borderRadius: "50px",
        padding: "12px 24px",
        fontSize: "20px",
        fontWeight: 500,
        textTransform: "none",
        width: { sm: "100%", md: "auto" },
        img: { width: "39px", pr: "10px" },
      }}
    >
      <img src={AppleIconImage} alt="Apple Icon" />
      Get Beta Version
    </Button>
  );
};
