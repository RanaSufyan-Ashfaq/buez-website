import React from "react";
// MUI Imports
import { Box, Typography, Grid } from "@mui/material";
// Assets
import SettingIconImage from "../../assets/settingIcon.svg";

const OurFeatures = () => {
  const featuresData = [
    {
      title: "14-Days Free Trial",
      description:
        "Access all features free for 14 days – explore, connect, and experience BUEZ before subscribing.",
    },
    {
      title: "Post Requests",
      description:
        "Create task requests by category and description to quickly find help when you need it.",
    },
    {
      title: "Accept & Complete Tasks",
      description:
        "Browse nearby requests, accept tasks, and assist others to earn rewards and recognition.",
    },
    {
      title: "Ratings & Reviews",
      description:
        "Both requester and helper can rate and review after each task to build community trust.",
    },
    {
      title: "Profile Badges",
      description:
        "Earn badges like Top Buezer, Buezer, and Mini Buezer as you complete more tasks successfully.",
    },
    {
      title: "Location-Based Requests",
      description:
        "View posts and top profiles within 100km of your current location for faster, local connections.",
    },
    {
      title: "Manage Subscription",
      description:
        "Continue using BUEZ with a simple monthly plan – cancel anytime, no hidden charges.",
    },
    {
      title: "Theme & Language",
      description:
        "Switch between light or dark mode and choose your preferred language for a personalized experience.",
    },
  ];

  return (
    <Box
      id="ourFeatures"
      sx={{
        background: "#020617",
        pt: { xs: "80px", md: "110px" },
        pb: { xs: "0px", md: "140px" },
        px: { xs: "15px", md: "20px" },
        textAlign: "center",
      }}
    >
      <Typography
        component="h2"
        sx={{
          color: "#ffffff",
          fontSize: { xs: "28px", md: "40px", lg: "52px" },
          fontWeight: 500,
          lineHeight: 1.2,
        }}
      >
        Our Features
      </Typography>

      <Typography
        component="p"
        sx={{
          color: "#e5e7eb",
          fontSize: { xs: "16px", lg: "18px" },
          mt: { xs: "20px", md: "30px" },
          mb: { xs: "40px", md: "60px" },
          maxWidth: "520px",
          margin: "0 auto",
        }}
      >
        Explore the smart tools that make finding and offering help simple,
        secure, and rewarding.
      </Typography>

      <Box
        sx={{
          maxWidth: "1428px",
          margin: "0 auto",
          width: "100%",
          mt: { xs: "40px", md: "60px" },
          display: "grid",
          gridTemplateColumns: {
            xs: "1fr",
            sm: "repeat(2, 1fr)",
            md: "repeat(4, 1fr)",
          },
          gap: { xs: "15px", md: "30px" },
        }}
      >
        {featuresData.map((item, index) => (
          <Box
            key={index}
            sx={{
              background:
                "linear-gradient(135deg, rgba(255,255,255,0.08), rgba(255,255,255,0.02))",
              borderRadius: "12px",
              padding: "30px 24px",
              backdropFilter: "blur(12px)",
              border: "1px solid rgba(255,255,255,0.06)",
              transition: "all 0.3s ease",
              textAlign: "left",
              "&:hover": {
                transform: "translateY(-6px)",
                background:
                  "linear-gradient(135deg, rgba(255,255,255,0.12), rgba(255,255,255,0.04))",
              },
            }}
          >
            <Box
              component="img"
              src={SettingIconImage}
              alt="setting"
              sx={{
                width: "42px",
                height: "42px",
                mb: "16px",
              }}
            />

            <Typography
              sx={{
                color: "#ffffff",
                fontSize: "18px",
                fontWeight: 600,
                mb: "12px",
              }}
            >
              {item.title}
            </Typography>

            <Typography
              sx={{
                color: "#cbd5e1",
                fontSize: "14px",
                lineHeight: 1.6,
              }}
            >
              {item.description}
            </Typography>
          </Box>
        ))}
      </Box>
    </Box>
  );
};

export default OurFeatures;
