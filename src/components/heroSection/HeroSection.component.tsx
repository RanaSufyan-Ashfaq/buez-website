import React from "react";
// MUI Imports
import { Box, Typography, Grid } from "@mui/material";
// Assets
import FounderImage from "../../assets/founder.svg";
import ChecksIcon from "../../assets/checksIcon.svg";
import ExclusiveIcon from "../../assets/exclusive.svg";
import AppleStoreIcon from "../../assets/applestore.svg";
import GooglePlayIcon from "../../assets/googleplay.svg";
import SlotsIcon from "../../assets/slots.svg";

const badgePills = ["Premium Access", "Founder Badge", "Early Access Launch"];
const avatarColors = ["#F59E0B", "#8B5CF6", "#10B981"];

const HeroSection = () => {
  return (
    <Box
      sx={{
        position: "relative",
        background: "#020617",
        overflow: "hidden",
        pt: { xs: "130px", md: "185px" },
        pb: { xs: "60px", md: "60px" },
        px: { xs: "15px", md: "20px" },
        "&::before": {
          content: '""',
          position: "absolute",
          top: "-220px",
          left: "-220px",
          width: "700px",
          height: "700px",
          borderRadius: "50%",
          background: "rgba(47, 128, 181, 1)",
          filter: "blur(180px)",
          opacity: 0.55,
          pointerEvents: "none",
          zIndex: 0,
        },
      }}
    >
      <Grid
        container
        alignItems="center"
        flexWrap={{ xs: "wrap", md: "nowrap" }}
        justifyContent={{ xs: "center", md: "space-between" }}
        textAlign={{ xs: "center", md: "left" }}
        sx={{
          maxWidth: "1428px",
          margin: "0 auto",
          width: "100%",
          gap: { xs: "48px", md: "80px" },
          position: "relative",
          zIndex: 1,
        }}
      >
        <Grid xs={12} md={6}>
          <Box
            sx={{
              display: "inline-block",
              background: "rgba(255,255,255,0.08)",
              border: "1px solid rgba(255,255,255,0.12)",
              borderRadius: "999px",
              padding: "6px 18px",
              mb: "20px",
            }}
          >
            <Typography
              sx={{
                color: "#ffffff",
                fontSize: "12px",
                fontWeight: 600,
                letterSpacing: "1px",
              }}
            >
              EARLY ACCESS
            </Typography>
          </Box>

          <Typography
            component="h1"
            sx={{
              color: "#ffffff",
              fontSize: { xs: "28px", md: "40px", lg: "52px" },
              fontWeight: 500,
              lineHeight: 1.25,
            }}
          >
            First{" "}
            <Box component="span" sx={{ fontWeight: 800 }}>
              100
            </Box>{" "}
            User Get
            <br />
            <Box component="span" sx={{ fontWeight: 800 }}>
              2 Months Free
            </Box>
            <br />
            Premium Subscription
          </Typography>

          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: { xs: "center", md: "flex-start" },
              gap: "10px",
              mt: "20px",
            }}
          >
            <Box
              component="img"
              src={ExclusiveIcon}
              alt="Exclusive"
              sx={{ width: "28px", height: "28px" }}
            />
            <Typography
              sx={{ color: "#FBBF24", fontSize: "16px", fontWeight: 600 }}
            >
              +Exclusive Founder Badge
            </Typography>
          </Box>

          <Typography
            component="p"
            sx={{
              color: "rgba(255, 255, 255, 0.4)",
              fontSize: { xs: "16px", lg: "18px" },
              mt: "20px",
              maxWidth: "480px",
              mx: { xs: "auto", md: 0 },
            }}
          >
            Be among the first 100 users to experience BUEZ and get rewarded
            with 2 months premium access and founder badge.
          </Typography>

          <Box
            sx={{
              display: "flex",
              flexWrap: "wrap",
              gap: "12px",
              mt: "28px",
              justifyContent: { xs: "center", md: "flex-start" },
            }}
          >
            {badgePills.map((label) => (
              <Box
                key={label}
                sx={{
                  display: "flex",
                  alignItems: "center",
                  gap: "8px",
                  background: "rgba(69, 87, 176, 0.3)",
                  border: "1px solid rgba(255,255,255,0.1)",
                  borderRadius: "999px",
                  padding: "8px 16px",
                }}
              >
                <Box
                  component="img"
                  src={ChecksIcon}
                  alt="Check"
                  sx={{ width: "16px", height: "16px" }}
                />
                <Typography
                  sx={{ color: "#ffffff", fontSize: "14px", fontWeight: 500 }}
                >
                  {label}
                </Typography>
              </Box>
            ))}
          </Box>

          <Box
            sx={{
              display: "flex",
              gap: "12px",
              mt: "28px",
              flexWrap: "wrap",
              justifyContent: { xs: "center", md: "flex-start" },
            }}
          >
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                gap: "10px",
                background: "rgba(255,255,255,0.06)",
                border: "1px solid rgba(255,255,255,0.12)",
                borderRadius: "12px",
                padding: "10px 20px",
                cursor: "pointer",
                transition: "background 0.3s ease",
                "&:hover": { background: "rgba(255,255,255,0.1)" },
              }}
            >
              <Box
                component="img"
                src={AppleStoreIcon}
                alt="App Store"
                sx={{ width: "20px", height: "24px" }}
              />
              <Box sx={{ textAlign: "left" }}>
                <Typography
                  sx={{ color: "#cbd5e1", fontSize: "10px", lineHeight: 1.2 }}
                >
                  Download on the
                </Typography>
                <Typography
                  sx={{
                    color: "#ffffff",
                    fontSize: "15px",
                    fontWeight: 600,
                    lineHeight: 1.2,
                  }}
                >
                  App Store
                </Typography>
              </Box>
            </Box>

            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                gap: "10px",
                background: "rgba(255,255,255,0.06)",
                border: "1px solid rgba(255,255,255,0.12)",
                borderRadius: "12px",
                padding: "10px 20px",
                cursor: "pointer",
                transition: "background 0.3s ease",
                "&:hover": { background: "rgba(255,255,255,0.1)" },
              }}
            >
              <Box
                component="img"
                src={GooglePlayIcon}
                alt="Google Play"
                sx={{ width: "22px", height: "24px" }}
              />
              <Box sx={{ textAlign: "left" }}>
                <Typography
                  sx={{ color: "#cbd5e1", fontSize: "10px", lineHeight: 1.2 }}
                >
                  Get it on
                </Typography>
                <Typography
                  sx={{
                    color: "#ffffff",
                    fontSize: "15px",
                    fontWeight: 600,
                    lineHeight: 1.2,
                  }}
                >
                  Google Play
                </Typography>
              </Box>
            </Box>
          </Box>
        </Grid>

        <Grid
          xs={12}
          md={6}
          sx={{
            textAlign: { xs: "center", md: "right" },
            position: "relative",
          }}
        >
          <Box
            component="img"
            src={FounderImage}
            alt="BUEZ Founder"
            sx={{ maxWidth: { xs: "70%", md: "85%" }, height: "auto" }}
          />

          <Box
            sx={{
              display: { xs: "none", md: "flex" },
              position: "absolute",
              top: "16%",
              left: "0",
              alignItems: "center",
              gap: "16px",
              background: "rgba(244, 255, 244, 0.1)",
              backdropFilter: "blur(40px)",
              border: "1px solid rgba(255,255,255,0.12)",
              borderRadius: "16px",
              padding: "16px",
              boxShadow: "0 20px 40px rgba(0,0,0,0.3)",
            }}
          >
            <Box
              sx={{
                width: "40px",
                height: "40px",
                borderRadius: "20px",
                background: "rgba(69, 87, 176, 0.4)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                flexShrink: 0,
              }}
            >
              <Box
                component="img"
                src={SlotsIcon}
                alt="Slots"
                sx={{ width: "20px", height: "20px" }}
              />
            </Box>

            <Box>
              <Typography sx={{ color: "#94a3b8", fontSize: "12px" }}>
                Slots Remaining
              </Typography>
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  gap: "5px",
                  mt: "2px",
                }}
              >
                <Box
                  sx={{
                    width: "6px",
                    height: "6px",
                    borderRadius: "50%",
                    background: "#818cf8",
                  }}
                />
                <Typography sx={{ color: "#cbd5e1", fontSize: "12px" }}>
                  67 slots remaining
                </Typography>
              </Box>
            </Box>

            <Box
              sx={{
                width: "1px",
                height: "32px",
                background: "rgba(255,255,255,0.15)",
              }}
            />

            <Box sx={{ display: "flex", alignItems: "baseline", gap: "2px" }}>
              <Typography
                sx={{ color: "#ffffff", fontSize: "24px", fontWeight: 700 }}
              >
                23
              </Typography>
              <Typography sx={{ color: "#64748b", fontSize: "14px" }}>
                /100
              </Typography>
            </Box>

            <Box sx={{ display: "flex", ml: "4px" }}>
              {avatarColors.map((color, index) => (
                <Box
                  key={index}
                  sx={{
                    width: "26px",
                    height: "26px",
                    borderRadius: "50%",
                    background: color,
                    border: "2px solid #0f172a",
                    ml: index === 0 ? 0 : "-8px",
                  }}
                />
              ))}
              <Box
                sx={{
                  width: "26px",
                  height: "26px",
                  borderRadius: "50%",
                  background: "#1e293b",
                  border: "2px solid #0f172a",
                  ml: "-8px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Typography
                  sx={{ color: "#cbd5e1", fontSize: "9px", fontWeight: 600 }}
                >
                  +19
                </Typography>
              </Box>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default HeroSection;
