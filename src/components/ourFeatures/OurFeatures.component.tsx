import React, { useState } from "react";
// MUI Imports
import { Box, Typography } from "@mui/material";
// Assets
import FounderBadgeIcon from "../../assets/featureTrialGift.svg";
import LocationTaskIcon from "../../assets/featureLocationTask.png";
import ShareTasksIcon from "../../assets/featureShareTasksNew.png";
import ProfileRankingIcon from "../../assets/featureProfileRankingNew.png";
import MultiLanguageIcon from "../../assets/featureMultiLanguage.png";
import ThemeIcon from "../../assets/featureTheme.png";
import FounderPhoneImage from "../../assets/founderPhone.png";
import LocationPhoneImage from "../../assets/locationPhone.png";
import ShareTasksPhoneImage from "../../assets/shareTasksPhone.png";
import ProfileRankingPhoneImage from "../../assets/profileRankingPhone.png";
import MultiLanguagePhoneImage from "../../assets/multiLanguagePhone.png";
import ThemePhoneImage from "../../assets/themePhone.png";

const features = [
  {
    title: "Founder Badge",
    description: "Exclusive perks for early members.",
    tooltip: "First 100 users get free 2 months premium subscription.",
    icon: FounderBadgeIcon,
    image: FounderPhoneImage,
  },
  {
    title: "Location Base Task",
    description:
      "View nearby requests within 100 km, or search any location to find more tasks.",
    tooltip:
      "Discover requests within 100 km of your location, or switch to any location to explore more opportunities.",
    icon: LocationTaskIcon,
    image: LocationPhoneImage,
  },
  {
    title: "Share Tasks",
    description:
      "Quickly share tasks so others can view details and apply when available.",
    tooltip:
      "Quickly share tasks so others can view details and apply when available.",
    icon: ShareTasksIcon,
    image: ShareTasksPhoneImage,
  },
  {
    title: "Profile Ranking",
    description:
      "Earn badges like Pro Buezer, Buezer, and Mini Buezer as you complete more tasks.",
    tooltip:
      "Earn badges like Pro Buezer, Buezer, and Mini Buezer as you complete more tasks.",
    icon: ProfileRankingIcon,
    image: ProfileRankingPhoneImage,
  },
  {
    title: "Multi Language Support",
    description: "Switch languages anytime with ease.",
    tooltip: "Buez supports multiple languages for a seamless experience.",
    icon: MultiLanguageIcon,
    image: MultiLanguagePhoneImage,
  },
  {
    title: "Light/Dark theme",
    description: "Switch between light and dark mode anytime.",
    tooltip: "Personalize your experience with light and dark modes.",
    icon: ThemeIcon,
    image: ThemePhoneImage,
  },
];

const OurFeatures = () => {
  const [activeFeature, setActiveFeature] = useState(0);

  const renderIcon = (feature: (typeof features)[number], size: number) => (
    <Box
      component="img"
      src={feature.icon}
      alt={feature.title}
      sx={{ width: `${size}px`, height: `${size}px` }}
    />
  );

  return (
    <Box
      id="ourFeatures"
      sx={{
        background: "#020617",
        py: { xs: "70px", md: "96px" },
        px: { xs: "15px", md: "20px" },
      }}
    >
      <Typography
        component="h2"
        sx={{
          position: "relative",
          color: "#ffffff",
          fontSize: { xs: "28px", md: "34px" },
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
          position: "relative",
          color: "rgba(255,255,255,0.6)",
          fontSize: "16px",
          maxWidth: "820px",
          margin: "0 auto",
          mb: { xs: "50px", md: "100px" },
          textAlign: "center",
        }}
      >
        Everything you need to find trusted service providers, manage requests,
        and get tasks completed with confidence.
      </Typography>

      <Box
        sx={{
          position: "relative",
          zIndex: 1,
          maxWidth: "1428px",
          margin: "0 auto",
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          alignItems: "center",
          justifyContent: "space-between",
          gap: { xs: "50px", md: "60px" },
        }}
      >
        {/* Left - Feature list */}
        <Box
          sx={{
            width: { xs: "100%", md: "547px" },
            flexShrink: 0,
            background: "rgba(37,50,117,0.05)",
            borderRadius: "16px",
            padding: { xs: "20px", md: "24px 20px 32px" },
            display: "flex",
            flexDirection: "column",
          }}
        >
          {features.map((feature, index) => {
            const isActive = index === activeFeature;
            const isLast = index === features.length - 1;
            return (
              <Box
                key={index}
                onClick={() => setActiveFeature(index)}
                sx={{
                  display: "flex",
                  alignItems: "center",
                  gap: "16px",
                  cursor: "pointer",
                  borderRadius: "14px",
                  height: isActive ? { xs: "auto", md: "104px" } : "56px",
                  padding: isActive ? { xs: "16px", md: "0 14px" } : "0 14px",
                  mb: isLast ? 0 : isActive ? "40px" : { xs: "20px", md: "60px" },
                  background: isActive
                    ? "linear-gradient(90deg, rgba(37,50,117,0.3), rgba(69,94,219,0.3))"
                    : "transparent",
                  opacity: isActive ? 1 : 0.4,
                  transition: "all 0.3s ease",
                  "&:hover": { opacity: isActive ? 1 : 0.7 },
                }}
              >
                <Box
                  sx={{
                    width: "48px",
                    height: "48px",
                    borderRadius: "50%",
                    flexShrink: 0,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    background: "rgba(85,113,255,0.2)",
                    transition: "all 0.3s ease",
                  }}
                >
                  {renderIcon(feature, feature.iconSize ?? 24)}
                </Box>

                <Box>
                  <Typography
                    sx={{
                      color: isActive ? "#ffffff" : "#94a3b8",
                      fontSize: isActive ? "20px" : "17px",
                      fontWeight: isActive ? 600 : 500,
                      transition: "all 0.3s ease",
                    }}
                  >
                    {feature.title}
                  </Typography>
                  {isActive && (
                    <Typography
                      sx={{
                        color: "rgba(255,255,255,0.7)",
                        fontSize: "14px",
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
            pr: { md: "39px" },
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
              bottom: "71px",
              right: { md: "300px", lg: "393px" },
              alignItems: "flex-start",
              gap: "16px",
              width: "345px",
              minHeight: "93px",
              background:
                "linear-gradient(154deg, rgba(135,153,242,0.2), rgba(29,37,74,0.2))",
              backdropFilter: "blur(20px)",
              border: "1px solid rgba(255,255,255,0.1)",
              borderRadius: "12px",
              padding: "16px",
            }}
          >
            <Box
              sx={{
                width: "48px",
                height: "48px",
                borderRadius: "50%",
                flexShrink: 0,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                background: "rgba(85,113,255,0.2)",
              }}
            >
              {renderIcon(features[activeFeature], 24)}
            </Box>
            <Box>
              <Typography
                sx={{ color: "#ffffff", fontSize: "15px", fontWeight: 600 }}
              >
                {features[activeFeature].title}
              </Typography>
              <Typography
                sx={{
                  color: "rgba(255,255,255,0.4)",
                  fontSize: "13px",
                  lineHeight: 1.35,
                  mt: "4px",
                }}
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
