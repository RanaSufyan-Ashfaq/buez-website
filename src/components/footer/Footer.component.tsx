import React, { useState } from "react";
// MUI Imports
import { Box, Typography, TextField, IconButton, Link } from "@mui/material";
import emailjs from "emailjs-com";
import { useTranslation, Trans } from "react-i18next";
// Assets
import BuezIcon from "../../assets/buez.svg";
import FacebookIcon from "../../assets/facebook.svg";
import InstagramIcon from "../../assets/instagram.svg";
import TwitterIcon from "../../assets/twitter.svg";
import YoutubeIcon from "../../assets/youtube.svg";
import SendEmailIcon from "../../assets/sendEmail.svg";
import CopyRightIcon from "../../assets/copyright.svg";

const Footer = () => {
  const { t } = useTranslation();
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">(
    "idle"
  );

  const handleSend = () => {
    const trimmed = email.trim();
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(trimmed)) {
      setStatus("error");
      return;
    }
    setStatus("sending");
    emailjs
      .send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        {
          fullName: "Let's Connect (website footer)",
          email: trimmed,
          deviceModel: "N/A — footer contact request for info@buezapp.com",
        },
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      )
      .then(
        () => {
          setStatus("sent");
          setEmail("");
        },
        (error) => {
          console.error("Email send error:", error);
          setStatus("error");
        }
      );
  };

  return (
    <Box
      component="footer"
      sx={{
        background: "#090D1D",
        pt: { xs: "70px", md: "84px" },
        pb: { xs: "56px", md: "52px" },
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
            mb: { xs: "56px", md: "63px" },
            gap: { xs: "54px", md: "80px" },
          }}
        >
          <Box sx={{ width: "100%" }}>
            <Box sx={{ display: "flex", alignItems: "center", mb: "20px" }}>
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
                color: "rgba(255,255,255,0.6)",
                fontSize: "16px",
                lineHeight: 1.7,
                textAlign: "justify",
                mb: { xs: "34px", md: "30px" },
                maxWidth: { xs: "100%", md: "333px" },
              }}
            >
              {t("footer.description")}
            </Typography>

            {/* Social Media Icons */}
            <Box sx={{ display: "flex", gap: { xs: "20px", md: "41px" }, alignItems: "center" }}>
              <Link
                href="https://www.instagram.com/buezapp?igsh=cTV3NDlodzN0MzQ3"
                target="_blank"
                rel="noopener noreferrer"
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
                  background: "rgba(255,255,255,0.3)",
                }}
              />

              <Link
                href="https://www.instagram.com/buezapp?igsh=cTV3NDlodzN0MzQ3"
                target="_blank"
                rel="noopener noreferrer"
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
                  background: "rgba(255,255,255,0.3)",
                }}
              />

              <Link
                href="https://www.instagram.com/buezapp?igsh=cTV3NDlodzN0MzQ3"
                target="_blank"
                rel="noopener noreferrer"
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
                  background: "rgba(255,255,255,0.3)",
                }}
              />

              <Link
                href="https://www.instagram.com/buezapp?igsh=cTV3NDlodzN0MzQ3"
                target="_blank"
                rel="noopener noreferrer"
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

          <Box sx={{ width: { xs: "100%", md: "363px" } }}>
            <Typography
              sx={{
                color: "#ffffff",
                fontSize: "18px",
                fontWeight: 600,
                letterSpacing: "0.5px",
                mb: { xs: "18px", md: "22px" },
              }}
            >
              {t("footer.connectTitle")}
            </Typography>

            <Typography
              sx={{
                color: "rgba(255,255,255,0.9)",
                fontSize: { xs: "14px", md: "16px" },
                mb: { xs: "24px", md: "33px" },
                lineHeight: 1.7,
              }}
            >
              <Trans i18nKey="footer.connectText" components={{ br: <br /> }} />
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
                placeholder={t("footer.emailPlaceholder")}
                variant="outlined"
                fullWidth
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                  if (status !== "idle") setStatus("idle");
                }}
                onKeyDown={(e) => {
                  if (e.key === "Enter") handleSend();
                }}
                type="email"
                disabled={status === "sending"}
                sx={{
                  "& .MuiOutlinedInput-root": {
                    height: "54px",
                    background: "rgba(255,255,255,0.1)",
                    borderRadius: "27px",
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
                onClick={handleSend}
                disabled={status === "sending"}
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
                  "&.Mui-disabled": {
                    background: "#253275",
                    opacity: 0.6,
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

            {status === "sent" && (
              <Typography
                sx={{ color: "#7CD992", fontSize: "13px", mt: "10px" }}
              >
                {t("footer.sent")}
              </Typography>
            )}
            {status === "error" && (
              <Typography
                sx={{ color: "#E58A8A", fontSize: "13px", mt: "10px" }}
              >
                {t("footer.error")}
              </Typography>
            )}
          </Box>
        </Box>

        {/* Divider */}
        <Box
          sx={{
            height: "1px",
            background: "rgba(244,255,244,0.4)",
            width: "100%",
            maxWidth: "1167px",
            mx: "auto",
            mb: { xs: "26px", md: "28px" },
          }}
        />

        {/* Bottom - Copyright */}
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            gap: "10px",
            textAlign: "center",
          }}
        >
          <Typography
            sx={{
              color: "rgba(255,255,255,0.6)",
              fontSize: { xs: "14px", md: "16px" },
              fontWeight: "400",
              display: "flex",
              alignItems: "center",
              gap: "10px",
            }}
          >
            <Box
              component="img"
              src={CopyRightIcon}
              alt="Copy Right"
              sx={{ width: "20px", height: "20px", opacity: 0.6 }}
            />
            {t("footer.copyright")}
          </Typography>

          <Typography
            sx={{
              color: "rgba(255,255,255,0.8)",
              fontSize: { xs: "14px", md: "16px" },
              fontWeight: "400",
            }}
          >
            {t("footer.credit")}
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default Footer;
