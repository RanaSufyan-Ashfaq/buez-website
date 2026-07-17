import React from "react";
// MUI Imports
import { Box, Typography } from "@mui/material";
import { useTranslation } from "react-i18next";
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
import CentralPhoneImage from "../../assets/whyChoosePhone.png";

const WhyChooseBuez = () => {
  const { t } = useTranslation();
  const features = [
    {
      title: t("why.items.rewarding.title"),
      description: t("why.items.rewarding.description"),
      icon: AwardIcon,
      position: { top: "138px", left: "117px" },
      mobileOrder: 1,
    },
    {
      title: t("why.items.community.title"),
      description: t("why.items.community.description"),
      icon: CommunityIcon,
      position: { top: "138px", right: "117px" },
      mobileOrder: 2,
    },
    {
      title: t("why.items.communication.title"),
      description: t("why.items.communication.description"),
      icon: CommunicationIcon,
      position: { top: "462px", left: "0px" },
      mobileOrder: 3,
    },
    {
      title: t("why.items.fast.title"),
      description: t("why.items.fast.description"),
      icon: FastAndEasyIcon,
      position: { top: "462px", right: "0px" },
      mobileOrder: 4,
    },
    {
      title: t("why.items.free.title"),
      description: t("why.items.free.description"),
      icon: FreeToStartIcon,
      position: { top: "797px", left: "0px" },
      mobileOrder: 5,
    },
    {
      title: t("why.items.safe.title"),
      description: t("why.items.safe.description"),
      icon: SafeAndReliableIcon,
      position: { top: "797px", right: "0px" },
      mobileOrder: 6,
    },
    {
      title: t("why.items.personalized.title"),
      description: t("why.items.personalized.description"),
      icon: PersonalizedExperienceIcon,
      position: { top: "1122px", left: "117px" },
      mobileOrder: 7,
    },
    {
      title: t("why.items.nearby.title"),
      description: t("why.items.nearby.description"),
      icon: NearbyTasksIcon,
      position: { top: "1122px", right: "117px" },
      mobileOrder: 8,
    },
  ];

  return (
    <Box
      id="whyBuez"
      sx={{
        background: "#020617",
        pt: { xs: "70px", md: "96px" },
        pb: { xs: "0px", md: "96px" },
        px: { xs: "15px", md: "20px" },
        textAlign: "center",
        position: "relative",
        overflowX: "clip",
        "&::before": {
          content: '""',
          position: "absolute",
          top: "-754px",
          left: "-1524px",
          width: "2750px",
          height: "2750px",
          background: "radial-gradient(circle closest-side, rgba(47,128,181,0.28) 0%, rgba(47,128,181,0.12) 35%, rgba(47,128,181,0.04) 60%, rgba(47,128,181,0) 80%)",
          pointerEvents: "none",
          display: { xs: "none", md: "block" },
        },
      }}
    >
      <Box
        sx={{
          maxWidth: "1428px",
          margin: "0 auto",
          height: "100%",
          position: "relative",
        }}
      >
        <Typography
          component="h2"
          sx={{
            color: "#ffffff",
            fontSize: { xs: "28px", md: "34px" },
            fontWeight: 600,
            lineHeight: 1.2,
            mb: { xs: "12px", md: "16px" },
            position: "relative",
            zIndex: 2,
          }}
        >
          {t("why.title")}
        </Typography>

        <Typography
          component="p"
          sx={{
            color: "rgba(255,255,255,0.6)",
            fontSize: "16px",
            maxWidth: "900px",
            margin: "0 auto",
            mb: { xs: "40px", md: "60px", lg: "0px" },
            position: "relative",
            zIndex: 2,
          }}
        >
          {t("why.subtitle")}
        </Typography>

        {/* Desktop Circular Layout Container */}
        <Box
          sx={{
            position: "relative",
            width: "100%",
            height: { xs: "auto", lg: "1402px" },
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          {/* Background Rings */}
          <Box
            sx={{
              display: { xs: "none", lg: "block" },
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              width: "1402px",
              height: "1402px",
              borderRadius: "50%",
              border: "1.8px solid rgba(127,133,153,0.17)",
              pointerEvents: "none",
            }}
          />
          <Box
            sx={{
              display: { xs: "none", lg: "block" },
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              width: "1102px",
              height: "1102px",
              borderRadius: "50%",
              border: "1.8px solid rgba(127,133,153,0.17)",
              pointerEvents: "none",
            }}
          />

          {/* Central Phone Image */}
          <Box
            component="img"
            src={CentralPhoneImage}
            alt="BUEZ App Interface"
            sx={{
              display: { xs: "none", lg: "block" },
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              width: "300px",
              height: "auto",
              zIndex: 1,
            }}
          />

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
                  top: { xs: "auto", lg: feature.position.top },
                  left: { xs: "auto", lg: feature.position.left },
                  right: { xs: "auto", lg: feature.position.right },

                  width: { xs: "100%", sm: "auto", lg: "411px" },
                  background: "rgba(153,161,187,0.12)",
                  backdropFilter: "blur(10px)",
                  borderRadius: "16px",
                  padding: { xs: "20px", lg: "20px 24px" },
                  textAlign: "left",
                  zIndex: 2,
                  transition: "background 0.3s ease",
                  "&:hover": {
                    background: "rgba(153,161,187,0.2)",
                  },
                  "@keyframes cardFloat": {
                    "0%": { transform: "translateY(0px)" },
                    "50%": { transform: "translateY(-10px)" },
                    "100%": { transform: "translateY(0px)" },
                  },
                  animation: {
                    lg: `cardFloat ${3 + (index % 3) * 0.5}s ease-in-out infinite`,
                  },
                  animationDelay: `${index * 0.4}s`,
                  "@media (prefers-reduced-motion: reduce)": {
                    animation: "none",
                  },
                }}
              >
                <Box
                  sx={{
                    color: "#ffffff",
                    display: "flex",
                    alignItems: "center",
                    gap: "9px",
                  }}
                >
                  <Box
                    sx={{
                      width: "36px",
                      height: "36px",
                      borderRadius: "50%",
                      flexShrink: 0,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      background: "rgba(255,255,255,0.1)",
                    }}
                  >
                    <Box
                      component="img"
                      src={feature.icon}
                      alt={feature.title}
                      sx={{
                        width: "20px",
                        height: "20px",
                      }}
                    />
                  </Box>
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
                    color: "#A1A2A1",
                    fontSize: "13px",
                    lineHeight: 1.45,
                    mt: "8px",
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
