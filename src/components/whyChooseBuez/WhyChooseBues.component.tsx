import React from "react";
// MUI Imports
import { Box, Typography } from "@mui/material";
// Assets
import CircleRingsImage from "../../assets/circleRings.svg";
import WhatIsBuezImage from "../../assets/whyChooseBuez.svg";
import SettingIconImage from "../../assets/settingIcon.svg";

const WhyChooseBuez = () => {
  const features = [
    {
      title: "Rewarding Experience",
      description:
        "Earn recognition and build your reputation as you complete tasks.",
      position: { top: "15%", left: "8%" },
    },
    {
      title: "Community-Driven Platform",
      description:
        "Built to connect real people who believe in helping each other.",
      position: { top: "10%", right: "8%" },
    },
    {
      title: "Direct Communication",
      description:
        "Chat securely with users to plan and coordinate tasks with ease.",
      position: { top: "35%", left: "3%" },
    },
    {
      title: "Fast & Easy to Use",
      description:
        "Post or accept tasks in just few taps — no complicated steps.",
      position: { top: "38%", right: "3%" },
    },
    {
      title: "Free to Start",
      description:
        "Enjoy a 14-day free trial with full access to every feature.",
      position: { bottom: "28%", left: "5%" },
    },
    {
      title: "Safe & Reliable",
      description:
        "Verified profiles, ratings, and reviews ensure a trusted community.",
      position: { bottom: "25%", right: "5%" },
    },
    {
      title: "Personalized Experience",
      description:
        "Switch themes, change your language, and make BUEZ truly yours.",
      position: { bottom: "10%", left: "15%" },
    },
    {
      title: "Location-Based Matching",
      description: "Find tasks or help support within your nearby area.",
      position: { bottom: "10%", right: "15%" },
    },
  ];

  return (
    <Box
      sx={{
        background: "linear-gradient(200deg, #2F80B5 0%, #020617 27%)",
        pb: { xs: "80px", md: "140px" },
        pt: { xs: "80px", md: "100px" },
        px: { xs: "15px", md: "20px" },
        textAlign: "center",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <Typography
        component="h2"
        sx={{
          color: "#ffffff",
          fontSize: { xs: "28px", md: "40px", lg: "52px" },
          fontWeight: 500,
          lineHeight: 1.2,
          mb: { xs: "12px", md: "16px" },
        }}
      >
        Why Choose BUEZ?
      </Typography>

      <Typography
        component="p"
        sx={{
          color: "#e5e7eb",
          fontSize: { xs: "16px", lg: "18px" },
          maxWidth: "620px",
          margin: "0 auto",
          mb: { xs: "60px", md: "80px" },
        }}
      >
        See why BUEZ is the simplest and most trusted way to get and give help
        in your community.
      </Typography>
      {/* Background circles */}
      <Box
        component="img"
        src={CircleRingsImage}
        alt="Background circles"
        sx={{
          position: "absolute",
          top: "64%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: { xs: "600px", md: "900px", lg: "1100px" },
          height: "auto",
          opacity: 0.8,
          zIndex: 0,
          pointerEvents: "none",
        }}
      />

      {/* Content */}
      <Box sx={{ position: "relative", zIndex: 1 }}>
        <Box component="img" src={WhatIsBuezImage} alt="BUEZ App" />
      </Box>
    </Box>
  );
};

export default WhyChooseBuez;
