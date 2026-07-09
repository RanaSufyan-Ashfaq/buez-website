import React from "react";
// MUI Imports
import { Box, Typography, Grid } from "@mui/material";
// Assets
import FounderImage from "../../assets/founder.svg";
import ChecksIcon from "../../assets/checksIcon.svg";
import ExclusiveIcon from "../../assets/exclusive.svg";
import AppleStoreIcon from "../../assets/applestore.svg";
import GooglePlayIcon from "../../assets/googleplay.svg";
import TicketIcon from "../../assets/heroTicketIcon.svg";
import HeroAvatar1 from "../../assets/heroAvatar1.jpeg";
import HeroAvatar2 from "../../assets/heroAvatar2.jpeg";
import HeroAvatar3 from "../../assets/heroAvatar3.jpeg";
import HeroAvatar4 from "../../assets/heroAvatar4.jpeg";

const badgePills = ["Premium Access", "Founder Badge", "Early Access Launch"];
const heroAvatars = [HeroAvatar1, HeroAvatar2, HeroAvatar3, HeroAvatar4];

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
              background: "rgba(69,87,176,0.3)",
              border: "1px solid rgba(255,255,255,0.05)",
              borderRadius: "999px",
              padding: "8px 13px",
              mb: "25px",
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
              fontSize: { xs: "28px", md: "40px" },
              fontWeight: 500,
              lineHeight: 1.35,
            }}
          >
            First{" "}
            <Box component="span" sx={{ fontWeight: 700 }}>
              100
            </Box>{" "}
            User Get
            <br />
            <Box component="span" sx={{ fontWeight: 700 }}>
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
              mt: "18px",
            }}
          >
            <Box
              component="img"
              src={ExclusiveIcon}
              alt="Exclusive"
              sx={{ width: "35px", height: "35px" }}
            />
            <Typography
              sx={{ color: "#F4D740", fontSize: "18px", fontWeight: 600 }}
            >
              +Exclusive Founder Badge
            </Typography>
          </Box>

          <Typography
            component="p"
            sx={{
              color: "rgba(255, 255, 255, 0.4)",
              fontSize: "16px",
              lineHeight: 1.7,
              mt: "24px",
              maxWidth: "505px",
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
              gap: { xs: "12px", md: "26px" },
              mt: "20px",
              justifyContent: { xs: "center", md: "flex-start" },
            }}
          >
            {badgePills.map((label) => (
              <Box
                key={label}
                sx={{
                  display: "flex",
                  alignItems: "center",
                  gap: "12px",
                  height: "48px",
                  background: "rgba(69, 87, 176, 0.3)",
                  border: "1px solid rgba(255,255,255,0.05)",
                  borderRadius: "24px",
                  padding: "0 14px",
                }}
              >
                <Box
                  component="img"
                  src={ChecksIcon}
                  alt="Check"
                  sx={{ width: "18px", height: "18px" }}
                />
                <Typography
                  sx={{ color: "#ffffff", fontSize: "16px", fontWeight: 500 }}
                >
                  {label}
                </Typography>
              </Box>
            ))}
          </Box>

          <Box
            sx={{
              display: "flex",
              gap: "20px",
              mt: "40px",
              flexWrap: "wrap",
              justifyContent: { xs: "center", md: "flex-start" },
            }}
          >
            <Box
              component="a"
              href="https://apps.apple.com/pk/app/buez/id6753902802"
              target="_blank"
              rel="noopener noreferrer"
              sx={{
                display: "flex",
                alignItems: "center",
                gap: "16px",
                width: "206px",
                height: "68px",
                background: "rgba(255,255,255,0.2)",
                borderRadius: "12px",
                padding: "0 21px",
                cursor: "pointer",
                textDecoration: "none",
                transition: "background 0.3s ease",
                "&:hover": { background: "rgba(255,255,255,0.28)" },
              }}
            >
              <Box
                component="img"
                src={AppleStoreIcon}
                alt="App Store"
                sx={{ width: "28px", height: "30px" }}
              />
              <Box sx={{ textAlign: "left" }}>
                <Typography
                  sx={{
                    color: "rgba(255,255,255,0.6)",
                    fontSize: "14px",
                    lineHeight: 1.2,
                  }}
                >
                  Download on the
                </Typography>
                <Typography
                  sx={{
                    color: "#ffffff",
                    fontSize: "18px",
                    fontWeight: 600,
                    lineHeight: 1.3,
                  }}
                >
                  App Store
                </Typography>
              </Box>
            </Box>

            <Box
              component="a"
              href="https://play.google.com/store/apps/details?id=com.adamburg.buez"
              target="_blank"
              rel="noopener noreferrer"
              sx={{
                display: "flex",
                alignItems: "center",
                gap: "16px",
                width: "206px",
                height: "68px",
                background: "rgba(255,255,255,0.2)",
                borderRadius: "12px",
                padding: "0 21px",
                cursor: "pointer",
                textDecoration: "none",
                transition: "background 0.3s ease",
                "&:hover": { background: "rgba(255,255,255,0.28)" },
              }}
            >
              <Box
                component="img"
                src={GooglePlayIcon}
                alt="Google Play"
                sx={{ width: "29px", height: "32px" }}
              />
              <Box sx={{ textAlign: "left" }}>
                <Typography
                  sx={{
                    color: "rgba(255,255,255,0.6)",
                    fontSize: "14px",
                    lineHeight: 1.2,
                  }}
                >
                  Get it on
                </Typography>
                <Typography
                  sx={{
                    color: "#ffffff",
                    fontSize: "18px",
                    fontWeight: 600,
                    lineHeight: 1.3,
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
            sx={{
              width: { xs: "auto", md: "484px" },
              maxWidth: { xs: "70%", md: "100%" },
              height: "auto",
            }}
          />

          <Box
            sx={{
              display: { xs: "none", md: "flex" },
              position: "absolute",
              top: "106px",
              right: "317px",
              alignItems: "center",
              width: "496px",
              height: "92px",
              background: "rgba(244, 255, 244, 0.1)",
              backdropFilter: "blur(20px)",
              borderRadius: "16px",
              padding: "0 16px",
            }}
          >
            <Box
              sx={{
                width: "45px",
                height: "45px",
                borderRadius: "50%",
                background: "rgba(69, 87, 176, 0.4)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                flexShrink: 0,
              }}
            >
              <Box
                component="img"
                src={TicketIcon}
                alt="Slots"
                sx={{ width: "27px", height: "27px" }}
              />
            </Box>

            <Box sx={{ ml: "9px", textAlign: "left" }}>
              <Typography
                sx={{
                  color: "rgba(255,255,255,0.8)",
                  fontSize: "14px",
                  fontWeight: 500,
                }}
              >
                Slots Remaining
              </Typography>
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  gap: "5px",
                  mt: "8px",
                }}
              >
                <Box
                  sx={{
                    width: "8px",
                    height: "8px",
                    borderRadius: "50%",
                    background: "#FFDA44",
                    flexShrink: 0,
                    "@keyframes dotBeep": {
                      "0%": {
                        transform: "scale(1)",
                        boxShadow: "0 0 0 0 rgba(255,218,68,0.55)",
                      },
                      "50%": {
                        transform: "scale(1.35)",
                      },
                      "100%": {
                        transform: "scale(1)",
                        boxShadow: "0 0 0 9px rgba(255,218,68,0)",
                      },
                    },
                    animation: "dotBeep 1.6s ease-out infinite",
                    "@media (prefers-reduced-motion: reduce)": {
                      animation: "none",
                    },
                  }}
                />
                <Typography
                  sx={{ color: "rgba(255,255,255,0.4)", fontSize: "14px" }}
                >
                  67 slots remaining
                </Typography>
              </Box>
            </Box>

            <Box
              sx={{
                width: "1px",
                height: "59px",
                background: "rgba(255,255,255,0.15)",
                ml: "18px",
                flexShrink: 0,
              }}
            />

            <Box sx={{ ml: "18px" }}>
              <Box sx={{ display: "flex", alignItems: "baseline", gap: "4px" }}>
                <Typography
                  sx={{
                    color: "#ffffff",
                    fontSize: "36px",
                    fontWeight: 600,
                    lineHeight: 1,
                  }}
                >
                  23
                </Typography>
                <Typography
                  sx={{ color: "rgba(255,255,255,0.4)", fontSize: "20px" }}
                >
                  /100
                </Typography>
              </Box>
              <Box
                sx={{
                  position: "relative",
                  width: "92px",
                  height: "4px",
                  borderRadius: "2px",
                  background: "rgba(255,255,255,0.1)",
                  mt: "10px",
                }}
              >
                <Box
                  sx={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    width: "29px",
                    height: "4px",
                    borderRadius: "2px",
                    background: "#4557B0",
                  }}
                />
              </Box>
            </Box>

            <Box sx={{ display: "flex", alignItems: "center", ml: "auto" }}>
              {heroAvatars.map((avatar, index) => (
                <Box
                  key={index}
                  component="img"
                  src={avatar}
                  alt={`Founder ${index + 1}`}
                  sx={{
                    width: "33px",
                    height: "33px",
                    borderRadius: "50%",
                    objectFit: "cover",
                    border: "1px solid #1A1F30",
                    ml: index === 0 ? 0 : "-10px",
                  }}
                />
              ))}
              <Box
                sx={{
                  width: "32px",
                  height: "32px",
                  borderRadius: "50%",
                  background: "rgba(255,255,255,0.1)",
                  border: "1px solid #1A1F30",
                  ml: "-9px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Typography
                  sx={{ color: "#ffffff", fontSize: "10px", fontWeight: 500 }}
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
