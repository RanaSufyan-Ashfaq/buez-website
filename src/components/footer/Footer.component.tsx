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
        py: { xs: "60px", md: "50px" },
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
              sm: "repeat(2, 1fr)",
              md: "2fr 1fr 2fr",
            },
            mb: "60px",
            gap: "25px",
          }}
        >
          <Box sx={{ width: { xs: "100%", xlg: "476px" } }}>
            <Box sx={{ display: "flex", alignItems: "center", mb: "20px" }}>
              <Box
                component="img"
                src={BuezIcon}
                alt="BUEZ Logo"
                sx={{
                  //   width: "40px",
                  //   height: "40px",
                  mr: "12px",
                }}
              />
            </Box>

            <Typography
              sx={{
                color: "#ffffff",
                fontSize: "16px",
                lineHeight: 1.7,
                mb: "32px",
                maxWidth: "350px",
              }}
            >
              More than just an app — BUEZ connects communities, empowers
              individuals, and turns everyday tasks into opportunities to
              collaborate and grow together.
            </Typography>

            {/* Social Media Icons */}
            <Box sx={{ display: "flex", gap: "20px", alignItems: "center" }}>
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
                  sx={{ width: "20px", height: "20px" }}
                />
              </Link>

              <Box
                sx={{
                  width: "1px",
                  height: "20px",
                  background: "#475569",
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
                  sx={{ width: "20px", height: "20px" }}
                />
              </Link>

              <Box
                sx={{
                  width: "1px",
                  height: "20px",
                  background: "#475569",
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
                  sx={{ width: "20px", height: "20px" }}
                />
              </Link>

              <Box
                sx={{
                  width: "1px",
                  height: "20px",
                  background: "#475569",
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
                  sx={{ width: "20px", height: "20px" }}
                />
              </Link>
            </Box>
          </Box>

          <Box sx={{ width: { xs: "100%", xlg: "476px" } }}>
            <Typography
              sx={{
                color: "#ffffff",
                fontSize: "25px",
                fontWeight: 600,
                mb: "24px",
                letterSpacing: "0.5px",
              }}
            >
              QUICK LINKS
            </Typography>

            <Box sx={{ display: "flex", flexDirection: "column", gap: "16px" }}>
              {["About", "Features", "Pricing", "Community"].map((link) => (
                <Link
                  key={link}
                  href="#"
                  underline="none"
                  sx={{
                    color: "#ffffff",
                    fontSize: "14px",
                    transition: "color 0.3s ease",
                    "&:hover": {
                      color: "#94a3b8",
                    },
                  }}
                >
                  {link}
                </Link>
              ))}
            </Box>
          </Box>

          <Box sx={{ width: { xs: "100%", xlg: "476px" } }}>
            <Typography
              sx={{
                color: "#ffffff",
                fontSize: "25px",
                fontWeight: 600,
                mb: "12px",
                letterSpacing: "0.5px",
              }}
            >
              LET'S CONNECT
            </Typography>

            <Typography
              sx={{
                color: "#ffffff",
                fontSize: "14px",
                mb: "24px",
                lineHeight: 1.6,
              }}
            >
              Questions, ideas, or just want to say hi?
              <br />
              We're always here to chat.
            </Typography>

            <Box
              sx={{
                display: "flex",
                gap: "8px",
                maxWidth: "369px",
                position: "relative",
              }}
            >
              <TextField
                placeholder="Your email address"
                variant="outlined"
                fullWidth
                sx={{
                  "& .MuiOutlinedInput-root": {
                    background: "#ffffff",
                    borderRadius: "8px",
                    fontSize: "14px",
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
                    padding: "12px 16px",
                    color: "#334155",
                    "&::placeholder": {
                      color: "#94a3b8",
                      opacity: 1,
                    },
                  },
                }}
              />

              <IconButton
                sx={{
                  background: "#1F2027",
                  borderRadius: "4px",
                  width: "46px",
                  height: "40px",
                  position: "absolute",
                  right: "3px",
                  top: "2px",
                  "&:hover": {
                    background: "#ffffff",
                  },
                }}
              >
                <Box
                  component="img"
                  src={SendEmailIcon}
                  alt="Send"
                  sx={{ width: "20px", height: "20px" }}
                />
              </IconButton>
            </Box>
          </Box>
        </Box>

        {/* Divider */}
        <Box
          sx={{
            height: "1px",
            background: "#1e293b",
            mb: "26px",
          }}
        />

        {/* Bottom - Copyright */}
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            gap: "8px",
            textAlign: "center",
          }}
        >
          <Typography
            sx={{
              color: "#ffffff",
              fontSize: "16px",
              fontWeight: "400",
              display: "flex",
              alignItems: "center",
              gap: "6px",
            }}
          >
            <Box component="img" src={CopyRightIcon} alt="Copy Right" />
            2025 BUEZ. All Rights Reserved.
          </Typography>

          <Typography
            sx={{
              color: "#ffffff",
              fontSize: "16px",
              fontWeight: "400",
            }}
          >
            Designed & Developed by Devappics
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default Footer;
