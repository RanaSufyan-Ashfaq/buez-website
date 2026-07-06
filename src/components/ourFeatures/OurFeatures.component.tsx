import React, { useState } from "react";
// MUI Imports
import { Box, Typography } from "@mui/material";
import ShareIcon from "@mui/icons-material/Share";
// Assets
import TrialIcon from "../../assets/trial.svg";
import PostRequestsIcon from "../../assets/postRequests.svg";
import AcceptCompleteIcon from "../../assets/acceptCompleteTasks.svg";
import RatingsIcon from "../../assets/rating.svg";
import ProfileRankingIcon from "../../assets/profileRanking.svg";
import TrialPhoneImage from "../../assets/tryBuezFree.svg";
import PostRequestPhoneImage from "../../assets/step1.svg";
import AcceptCompletePhoneImage from "../../assets/step2.svg";
import RatingsPhoneImage from "../../assets/step5.svg";
import ProfileRankingPhoneImage from "../../assets/step3.svg";
import ShareTasksPhoneImage from "../../assets/step4.svg";

const features = [
  {
    title: "14-Days Free Trial",
    description: "Access all features free for 14 days",
    tooltip: "Try BUEZ free for 14 days and explore all features.",
    icon: TrialIcon,
    image: TrialPhoneImage,
  },
  {
    title: "Post Requests",
    description: "Post tasks with details and connect with helpers easily.",
    tooltip: "Post tasks with details and connect with helpers easily.",
    icon: PostRequestsIcon,
    image: PostRequestPhoneImage,
  },
  {
    title: "Accept & Complete Tasks",
    description: "Browse nearby requests, accept tasks, and assist others.",
    tooltip: "Browse nearby requests, accept tasks, and assist others.",
    icon: AcceptCompleteIcon,
    image: AcceptCompletePhoneImage,
  },
  {
    title: "Ratings & Reviews",
    description: "Rate and review after each task to build community trust.",
    tooltip: "Rate and review after each task to build community trust.",
    icon: RatingsIcon,
    image: RatingsPhoneImage,
  },
  {
    title: "Profile Ranking",
    description: "Earn badges like Top Buezer as you complete more tasks.",
    tooltip: "Earn badges like Top Buezer as you complete more tasks.",
    icon: ProfileRankingIcon,
    image: ProfileRankingPhoneImage,
  },
  {
    title: "Share Tasks",
    description: "Share tasks with friends and your community easily.",
    tooltip: "Share tasks with friends and your community easily.",
    icon: null,
    image: ShareTasksPhoneImage,
  },
];

const OurFeatures = () => {
  const [activeFeature, setActiveFeature] = useState(0);

  const renderIcon = (feature: (typeof features)[number], size: number) =>
    feature.icon ? (
      <Box
        component="img"
        src={feature.icon}
        alt={feature.title}
        sx={{ width: `${size}px`, height: `${size}px` }}
      />
    ) : (
      <ShareIcon sx={{ color: "#ffffff", fontSize: `${size}px` }} />
    );

  return (
    <Box
      id="ourFeatures"
      sx={{
        background: "#020617",
        py: { xs: "80px", md: "140px" },
        px: { xs: "15px", md: "20px" },
      }}
    >
      <Typography
        component="h2"
        sx={{
          color: "#ffffff",
          fontSize: { xs: "28px", md: "40px" },
          fontWeight: 600,
          lineHeight: 1.2,
          mb: { xs: "12px", md: "16px" },
          textAlign: "center",
        }}
      >
        Your All-in-One Service Solution
      </Typography>

      <Typography
        component="p"
        sx={{
          color: "#94a3b8",
          fontSize: { xs: "16px", lg: "18px" },
          maxWidth: "820px",
          margin: "0 auto",
          mb: { xs: "50px", md: "90px" },
          textAlign: "center",
        }}
      >
        Everything you need to find trusted service providers, manage requests,
        and get tasks completed with confidence.
      </Typography>

      <Box
        sx={{
          maxWidth: "1300px",
          margin: "0 auto",
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          alignItems: { xs: "center", md: "flex-start" },
          justifyContent: "space-between",
          gap: { xs: "50px", md: "60px" },
        }}
      >
        {/* Left - Feature list */}
        <Box
          sx={{
            width: { xs: "100%", md: "620px" },
            flexShrink: 0,
            background:
              "linear-gradient(180deg, rgba(255,255,255,0.03), rgba(255,255,255,0.005))",
            borderRadius: "24px",
            padding: { xs: "20px", md: "40px" },
            display: "flex",
            flexDirection: "column",
            gap: "12px",
          }}
        >
          {features.map((feature, index) => {
            const isActive = index === activeFeature;
            return (
              <Box
                key={index}
                onClick={() => setActiveFeature(index)}
                sx={{
                  display: "flex",
                  alignItems: "center",
                  gap: "20px",
                  cursor: "pointer",
                  borderRadius: "16px",
                  padding: isActive ? "22px 24px" : "12px 24px",
                  background: isActive
                    ? "linear-gradient(90deg, rgba(69,87,176,0.55), rgba(30,41,59,0.55))"
                    : "transparent",
                  transition: "all 0.3s ease",
                  "&:hover": {
                    background: isActive
                      ? "linear-gradient(90deg, rgba(69,87,176,0.55), rgba(30,41,59,0.55))"
                      : "rgba(255,255,255,0.04)",
                  },
                }}
              >
                <Box
                  sx={{
                    width: "56px",
                    height: "56px",
                    borderRadius: isActive ? "14px" : "50%",
                    flexShrink: 0,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    background: isActive
                      ? "rgba(255,255,255,0.12)"
                      : "rgba(255,255,255,0.05)",
                    transition: "all 0.3s ease",
                  }}
                >
                  {renderIcon(feature, 28)}
                </Box>

                <Box>
                  <Typography
                    sx={{
                      color: isActive ? "#ffffff" : "#94a3b8",
                      fontSize: isActive ? "20px" : "18px",
                      fontWeight: isActive ? 700 : 500,
                      transition: "all 0.3s ease",
                    }}
                  >
                    {feature.title}
                  </Typography>
                  {isActive && (
                    <Typography
                      sx={{
                        color: "#cbd5e1",
                        fontSize: "15px",
                        mt: "6px",
                      }}
                    >
                      {feature.description}
                    </Typography>
                  )}
                </Box>
              </Box>
            );
          })}
        </Box>

        {/* Right - Phone image + floating tooltip */}
        <Box
          sx={{
            flex: 1,
            display: "flex",
            justifyContent: { xs: "center", md: "flex-end" },
            position: "relative",
            pr: { md: "40px" },
          }}
        >
          <Box
            component="img"
            src={features[activeFeature].image}
            alt={features[activeFeature].title}
            sx={{
              width: { xs: "260px", md: "376px" },
              height: "auto",
              transition: "all 0.3s ease",
            }}
          />

          <Box
            sx={{
              display: { xs: "none", md: "flex" },
              position: "absolute",
              bottom: "10%",
              right: { md: "270px", lg: "310px" },
              alignItems: "flex-start",
              gap: "14px",
              width: { md: "440px", lg: "480px" },
              maxWidth: "none",
              background:
                "linear-gradient(90deg, rgba(15,23,42,0.95), rgba(30,41,59,0.75))",
              backdropFilter: "blur(20px)",
              border: "1px solid rgba(255,255,255,0.08)",
              borderRadius: "16px",
              padding: "18px 22px",
              boxShadow: "0 20px 40px rgba(0,0,0,0.4)",
            }}
          >
            <Box
              sx={{
                width: "48px",
                height: "48px",
                borderRadius: "12px",
                flexShrink: 0,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                background: "rgba(69,87,176,0.5)",
              }}
            >
              {renderIcon(features[activeFeature], 24)}
            </Box>
            <Box>
              <Typography
                sx={{ color: "#ffffff", fontSize: "17px", fontWeight: 600 }}
              >
                {features[activeFeature].title}
              </Typography>
              <Typography
                sx={{ color: "#94a3b8", fontSize: "14px", mt: "4px" }}
              >
                {features[activeFeature].tooltip}
              </Typography>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default OurFeatures;
