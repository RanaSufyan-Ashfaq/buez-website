import React from "react";
// MUI Imports
import { Box, Typography, TextField, IconButton, Link } from "@mui/material";
// Assets
import BuezIcon from "../../assets/buez.svg";
import FacebookIcon from "../../assets/facebook.svg";
import InstagramIcon from "../../assets/instagram.svg";
import TwitterIcon from "../../assets/twitter.svg";
import YoutubeIcon from "../../assets/youtube.svg";
import SendEmailIcon from "../../assets/sendEmail.svg";
import CopyRightIcon from "../../assets/copyright.svg";

const Footer = () => {
  return (
    <Box
      component="footer"
      sx={{
        background: "#0a0c1e",
        pt: { xs: "70px", md: "160px" },
        pb: { xs: "56px", md: "72px" },
        px: { xs: "20px", md: "40px" },
      }}
    >
      <Box
        sx={{
          maxWidth: "1428px",
          margin: "0 auto",
        }}
      >
        {/* Main Footer Content */}
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: {
              xs: "1fr",
              md: "minmax(0, 760px) 363px",
            },
            justifyContent: "space-between",
            mb: { xs: "56px", md: "92px" },
            gap: { xs: "54px", md: "80px" },
          }}
        >
          <Box sx={{ width: "100%" }}>
            <Box sx={{ display: "flex", alignItems: "center", mb: "30px" }}>
              <Box
                component="img"
                src={BuezIcon}
                alt="BUEZ Logo"
                sx={{
                  width: { xs: "45px", md: "53px" },
                  height: "auto",
                }}
              />
            </Box>

            <Typography
              sx={{
                color: "rgba(255,255,255,0.82)",
                fontSize: { xs: "16px", md: "28px" },
                lineHeight: 1.55,
                mb: { xs: "34px", md: "52px" },
                maxWidth: { xs: "100%", md: "760px" },
              }}
            >
              More than just an app — BUEZ connects communities, empowers
              individuals, and turns everyday tasks into opportunities to
              collaborate and grow together.
            </Typography>

            {/* Social Media Icons */}
            <Box sx={{ display: "flex", gap: { xs: "20px", md: "34px" }, alignItems: "center" }}>
              <Link
                href="#"
                sx={{
                  opacity: 0.8,
                  transition: "opacity 0.3s ease",
                  "&:hover": {
                    opacity: 1,
                  },
                }}
              >
                <Box
                  component="img"
                  src={FacebookIcon}
                  alt="Facebook"
                  sx={{ width: { xs: "20px", md: "30px" }, height: { xs: "20px", md: "30px" } }}
                />
              </Link>

              <Box
                sx={{
                  width: "1px",
                  height: { xs: "20px", md: "30px" },
                  background: "rgba(255,255,255,0.24)",
                }}
              />

              <Link
                href="#"
                sx={{
                  opacity: 0.8,
                  transition: "opacity 0.3s ease",
                  "&:hover": {
                    opacity: 1,
                  },
                }}
              >
                <Box
                  component="img"
                  src={InstagramIcon}
                  alt="Instagram"
                  sx={{ width: { xs: "20px", md: "30px" }, height: { xs: "20px", md: "30px" } }}
                />
              </Link>

              <Box
                sx={{
                  width: "1px",
                  height: { xs: "20px", md: "30px" },
                  background: "rgba(255,255,255,0.24)",
                }}
              />

              <Link
                href="#"
                sx={{
                  opacity: 0.8,
                  transition: "opacity 0.3s ease",
                  "&:hover": {
                    opacity: 1,
                  },
                }}
              >
                <Box
                  component="img"
                  src={TwitterIcon}
                  alt="Twitter"
                  sx={{ width: { xs: "20px", md: "30px" }, height: { xs: "20px", md: "30px" } }}
                />
              </Link>

              <Box
                sx={{
                  width: "1px",
                  height: { xs: "20px", md: "30px" },
                  background: "rgba(255,255,255,0.24)",
                }}
              />

              <Link
                href="#"
                sx={{
                  opacity: 0.8,
                  transition: "opacity 0.3s ease",
                  "&:hover": {
                    opacity: 1,
                  },
                }}
              >
                <Box
                  component="img"
                  src={YoutubeIcon}
                  alt="YouTube"
                  sx={{ width: { xs: "20px", md: "30px" }, height: { xs: "20px", md: "30px" } }}
                />
              </Link>
            </Box>
          </Box>

          <Box sx={{ width: { xs: "100%", md: "363px" } }}>
            <Typography
              sx={{
                color: "#ffffff",
                fontSize: { xs: "22px", md: "28px" },
                fontWeight: 700,
                mb: { xs: "18px", md: "30px" },
                letterSpacing: 0,
              }}
            >
              LET'S CONNECT
            </Typography>

            <Typography
              sx={{
                color: "rgba(255,255,255,0.82)",
                fontSize: { xs: "14px", md: "16px" },
                mb: { xs: "24px", md: "42px" },
                lineHeight: 1.55,
              }}
            >
              Questions, ideas, or just want to say hi?
              <br />
              We're always here to chat.
            </Typography>

            <Box
              sx={{
                display: "flex",
                maxWidth: { xs: "100%", md: "363px" },
                height: "54px",
                position: "relative",
              }}
            >
              <TextField
                placeholder="Your email address"
                variant="outlined"
                fullWidth
                sx={{
                  "& .MuiOutlinedInput-root": {
                    height: "54px",
                    background: "rgba(255,255,255,0.1)",
                    borderRadius: "27px",
                    fontSize: "16px",
                    "& fieldset": {
                      border: "none",
                    },
                    "&:hover fieldset": {
                      border: "none",
                    },
                    "&.Mui-focused fieldset": {
                      border: "none",
                    },
                  },
                  "& .MuiOutlinedInput-input": {
                    padding: "0 68px 0 18px",
                    color: "#ffffff",
                    height: "54px",
                    "&::placeholder": {
                      color: "rgba(255,255,255,0.56)",
                      opacity: 1,
                    },
                  },
                }}
              />

              <IconButton
                sx={{
                  background: "#253275",
                  borderRadius: "50%",
                  width: "46px",
                  height: "46px",
                  position: "absolute",
                  right: "4px",
                  top: "4px",
                  "&:hover": {
                    background: "#2f3d8a",
                  },
                }}
              >
                <Box
                  component="img"
                  src={SendEmailIcon}
                  alt="Send"
                  sx={{ width: "22px", height: "22px" }}
                />
              </IconButton>
            </Box>
          </Box>
        </Box>

        {/* Divider */}
        <Box
          sx={{
            height: "1px",
            background: "rgba(255,255,255,0.18)",
            width: { xs: "100%", md: "calc(100% - 450px)" },
            ml: { xs: 0, md: "450px" },
            mb: { xs: "26px", md: "32px" },
          }}
        />

        {/* Bottom - Copyright */}
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: { xs: "center", md: "flex-end" },
            gap: "8px",
            textAlign: { xs: "center", md: "right" },
          }}
        >
          <Typography
            sx={{
              color: "#ffffff",
              fontSize: { xs: "14px", md: "18px" },
              fontWeight: "400",
              display: "flex",
              alignItems: "center",
              gap: "6px",
            }}
          >
            <Box
              component="img"
              src={CopyRightIcon}
              alt="Copy Right"
              sx={{ width: { xs: "16px", md: "22px" }, height: { xs: "16px", md: "22px" } }}
            />
            2026 Büez Solution. All Rights Reserved.
          </Typography>

          <Typography
            sx={{
              color: "#ffffff",
              fontSize: { xs: "14px", md: "18px" },
              fontWeight: "400",
            }}
          >
            Jeyaraja Design & Development
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default Footer;
