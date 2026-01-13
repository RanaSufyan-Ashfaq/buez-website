import React from "react";
// MUI Imports
import { Box, Typography } from "@mui/material";
// Icons
import AwardIcon from "../../assets/award.svg";
import CommunityIcon from "../../assets/community.svg";
import CommunicationIcon from "../../assets/directCommunication.svg";
import FastAndEasyIcon from "../../assets/fastAndEasy.svg";
import FreeToStartIcon from "../../assets/freeToStart.svg";
import SafeAndReliableIcon from "../../assets/safeAndReliable.svg";
import PersonalizedExperienceIcon from "../../assets/personalizedExperience.svg";
import NearbyTasksIcon from "../../assets/nearbyTasks.svg";

// Assets
import CircleRingsImage from "../../assets/whyChooseBg.svg";

const WhyChooseBuez = () => {
  const features = [
    {
      title: "Rewarding Experience",
      description:
        "Earn badges and build your reputation as you complete tasks.",
      icon: AwardIcon,
      position: { top: "-12%", left: "13%" },
      mobileOrder: 1,
    },
    {
      title: "Community-Driven Platform",
      description:
        "Designed to connect people who want to help and support each other.",
      icon: CommunityIcon,
      position: { top: "-12%", right: "13%" },
      mobileOrder: 2,
    },
    {
      title: "Direct Communication",
      description:
        "Communicate safely with users to plan and complete tasks smoothly.",
      icon: CommunicationIcon,
      position: { top: "29%", left: "3%" },
      mobileOrder: 3,
    },
    {
      title: "Fast & Easy to Use",
      description:
        "Easily post or accept tasks in seconds — no complicated steps.",
      icon: FastAndEasyIcon,
      position: { top: "29%", right: "3%" },
      mobileOrder: 4,
    },
    {
      title: "Free to Start",
      description:
        "Enjoy a full 14-days free trial with access to every feature of BUEZ.",
      icon: FreeToStartIcon,
      position: { bottom: "22%", left: "3%" },
      mobileOrder: 5,
    },
    {
      title: "Safe & Reliable",
      description:
        "Ratings, reviews, and top profiles help maintain a safe community.",
      icon: SafeAndReliableIcon,
      position: { bottom: "22%", right: "3%" },
      mobileOrder: 6,
    },
    {
      title: "Personalized Experience",
      description:
        "Switch themes, choose your language, and use BUEZ your way.",
      icon: PersonalizedExperienceIcon,
      position: { bottom: "-12%", left: "13%" },
      mobileOrder: 7,
    },
    {
      title: "Nearby Tasks & Helpers",
      description:
        "Find help or offer trusted support within 100km of your current location.",
      icon: NearbyTasksIcon,
      position: { bottom: "-12%", right: "13%" },
      mobileOrder: 8,
    },
  ];

  return (
    <Box
      id="whyBuez"
      sx={{
        background: "#020617",
        pb: { xs: "0px", md: "210px" },
        pt: { xs: "80px", md: "0px" },
        px: { xs: "15px", md: "20px" },
        textAlign: "center",
        position: "relative",
        overflow: "hidden",
        minHeight: { md: "1000px", lg: "1200px" }, // Height for orbital layout
      }}
    >
      <Box
        sx={{
          maxWidth: "1400px",
          margin: "0 auto",
          height: "100%",
          position: "relative",
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
            position: "relative",
            zIndex: 2,
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
            mb: { xs: "40px", md: "60px", lg: "200px" },
            position: "relative",
            zIndex: 2,
          }}
        >
          See why BUEZ is the simplest and most trusted way to get and give help
          in your community.
        </Typography>

        {/* Desktop Circular Layout Container */}
        <Box
          sx={{
            position: "relative",
            width: "100%",
            height: { xs: "auto", md: "800px" },
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          {/* Background Circles */}
          <Box
            component="img"
            src={CircleRingsImage}
            alt="Background circles"
            sx={{
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              width: { xs: "100%", md: "100%", lg: "1200px" },
              height: "auto",
              opacity: 1,
              zIndex: 0,
              pointerEvents: "none",
              display: { xs: "none", md: "none", lg: "block" }, // Hide on mobile if stack layout
            }}
          />

          {/* Central Phone Image */}
          {/* <Box
            component="img"
            src={WhatIsBuezImage}
            alt="BUEZ App Interface"
            sx={{
              position: { xs: "relative", md: "absolute" },
              top: { md: "50%" },
              left: { md: "50%" },
              transform: { md: "translate(-50%, -50%)" },
              width: { xs: "280px", sm: "320px", md: "360px" },
              height: "auto",
              zIndex: 1,
              mb: { xs: "40px", md: 0 },
            }}
          /> */}

          {/* Feature Cards Loop */}
          <Box
            sx={{
              display: { xs: "grid", md: "grid", lg: "block" },
              gridTemplateColumns: { xs: "1fr", sm: "1fr 1fr" },
              gap: "20px",
              width: "100%",
            }}
          >
            {features.map((feature, index) => (
              <Box
                key={index}
                sx={{
                  position: { xs: "relative", lg: "absolute" },
                  ...feature.position, // Apply top/left/right/bottom for desktop
                  top: { xs: "auto", lg: feature.position.top },
                  left: { xs: "auto", lg: feature.position.left },
                  right: { xs: "auto", lg: feature.position.right },
                  bottom: { xs: "auto", lg: feature.position.bottom },

                  width: { xs: "100%", sm: "auto", md: "auto", lg: "380px" },
                  background: "rgba(255, 255, 255, 0.03)",
                  backdropFilter: "blur(10px)",
                  border: "1px solid rgba(255, 255, 255, 0.1)",
                  borderRadius: "16px",
                  padding: "20px",
                  textAlign: "left",
                  gap: "16px",
                  zIndex: 2,
                  transition: "transform 0.3s ease",
                  "&:hover": {
                    background: "rgba(255, 255, 255, 0.08)",
                  },
                }}
              >
                <Box
                  sx={{
                    color: "#ffffff",
                    display: "flex",
                    alignItems: "center",
                    gap: "5px",
                    pb: "6px",
                  }}
                >
                  <Box
                    component="img"
                    src={feature.icon}
                    alt="setting"
                    sx={{
                      width: "24px",
                      height: "24px",
                    }}
                  />
                  <Typography
                    variant="h6"
                    sx={{
                      color: "#ffffff",
                      fontSize: "16px",
                      fontWeight: 600,
                    }}
                  >
                    {feature.title}
                  </Typography>
                </Box>
                <Typography
                  variant="body2"
                  sx={{
                    color: "#9ca3af",
                    fontSize: "13px",
                    lineHeight: 1.5,
                  }}
                >
                  {feature.description}
                </Typography>
              </Box>
            ))}
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default WhyChooseBuez;
