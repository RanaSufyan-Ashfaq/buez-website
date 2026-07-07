import React from "react";
// Mui Imports
import { Button } from "@mui/material";
import { useLocation, useNavigate } from "react-router-dom";
// Icons
import AppleIconImage from "../assets/download-app.svg";

export const GetBetaVersionButton = ({
  label = "Get Beta Version",
  scrollTo,
}: {
  label?: string;
  scrollTo?: string;
}) => {
  const navigate = useNavigate();
  const location = useLocation();

  const handleClick = () => {
    if (!scrollTo) {
      navigate("/apply-beta-access");
      return;
    }
    if (location.pathname === "/") {
      const element = document.querySelector(scrollTo);
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: "smooth" });
        }, 100);
      }
    } else {
      navigate("/", { state: { scrollTo } });
    }
  };

  return (
    <Button
      onClick={handleClick}
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
