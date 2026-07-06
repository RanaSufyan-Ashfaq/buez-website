import React from "react";
// Mui Imports
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
// Icons
import AppleIconImage from "../assets/download-app.svg";

export const GetBetaVersionButton = ({ label = "Get Beta Version" }) => {
  const navigate = useNavigate();
  return (
    <Button
      onClick={() => navigate("/apply-beta-access")}
      sx={{
        backgroundColor: "#ffffff",
        color: "#020617",
        borderRadius: "50px",
        padding: "8px 20px",
        fontSize: "16px",
        fontWeight: 500,
        textTransform: "none",
        width: { sm: "100%", md: "auto" },
        img: { width: "39px", pr: "10px" },

        "&:hover": {
          backgroundColor: "#ffffff",
          color: "#020617",
        },
      }}
    >
      <img src={AppleIconImage} alt="Apple Icon" />
      {label}
    </Button>
  );
};
