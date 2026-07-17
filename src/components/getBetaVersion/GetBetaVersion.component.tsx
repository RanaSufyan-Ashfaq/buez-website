import React from "react";
// MUI Imports
import { Box, Typography } from "@mui/material";
import { useTranslation } from "react-i18next";
// Assets
import GetBetaPhoneImage from "../../assets/getBetaPhone.png";
import AppleStoreIcon from "../../assets/applestore.svg";
import GooglePlayIcon from "../../assets/googleplay.svg";

const StoreButton = ({ eyebrow, label, icon, iconAlt, iconSx, href }) => (
  <Box
    component={href ? "a" : "button"}
    type={href ? undefined : "button"}
    href={href}
    target={href ? "_blank" : undefined}
    rel={href ? "noopener noreferrer" : undefined}
    sx={{
      display: "flex",
      alignItems: "center",
      gap: "16px",
      width: "206px",
      height: "68px",
      background: "rgba(255,255,255,0.2)",
      border: 0,
      borderRadius: "12px",
      padding: "0 21px",
      cursor: "pointer",
      textAlign: "left",
      textDecoration: "none",
      transition: "background 0.3s ease",
      "&:hover": { background: "rgba(255,255,255,0.28)" },
    }}
  >
    <Box component="img" src={icon} alt={iconAlt} sx={iconSx} />
    <Box>
      <Typography
        sx={{
          color: "rgba(255,255,255,0.6)",
          fontSize: "12px",
          lineHeight: 1.2,
        }}
      >
        {eyebrow}
      </Typography>
      <Typography
        sx={{
          color: "#ffffff",
          fontSize: "16px",
          fontWeight: 600,
          lineHeight: 1.3,
        }}
      >
        {label}
      </Typography>
    </Box>
  </Box>
);

const GetBetaVersion = () => {
  const { t } = useTranslation();
  const storeButtons = [
    {
      eyebrow: t("store.downloadOnThe"),
      label: t("store.appStore"),
      icon: AppleStoreIcon,
      iconAlt: "Apple",
      iconSx: { width: "28px", height: "30px" },
      href: "https://apps.apple.com/pk/app/buez/id6753902802",
    },
    {
      eyebrow: t("store.getItOn"),
      label: t("store.googlePlay"),
      icon: GooglePlayIcon,
      iconAlt: "Google Play",
      iconSx: { width: "29px", height: "32px" },
      href: "https://play.google.com/store/apps/details?id=com.adamburg.buez",
    },
  ];
  return (
    <>
      <Box
        id="downloadApp"
        sx={{ height: { xs: "40px", md: "70px" }, background: "#020617" }}
      ></Box>
      <Box
        sx={{
          background: "#020617",
          pt: { xs: "55px", md: "88px" },
          pb: { xs: "70px", md: "96px" },
          px: { xs: "15px", md: "20px" },
        }}
      >
        <Box
          sx={{
            position: "relative",
            zIndex: 1,
            "&::before": {
              content: '""',
              position: "absolute",
              top: { xs: "-135px", md: "-235px" },
              left: { xs: "-235px", md: "-270px" },
              width: { xs: "360px", md: "520px" },
              height: { xs: "360px", md: "500px" },
              borderRadius: "50%",
              background: "#2F80B5",
              filter: "blur(170px)",
              opacity: 0.58,
              pointerEvents: "none",
              zIndex: -1,
            },
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            flexDirection: { xs: "column-reverse", md: "row" },
            gap: { xs: "52px", md: "110px", lg: "150px" },
            maxWidth: "1428px",
            margin: "0 auto",
            width: "100%",
            textAlign: { xs: "center", md: "left" },
          }}
        >
          <Box
            sx={{
              flex: { xs: "0 1 auto", md: "0 0 520px" },
              display: "flex",
              justifyContent: { xs: "center", md: "flex-start" },
              pl: { md: "100px" },
              width: "100%",
            }}
          >
            <Box
              component="img"
              sx={{
                width: { xs: "min(78vw, 314px)", md: "314px" },
                height: "auto",
              }}
              src={GetBetaPhoneImage}
              alt="BUEZ app welcome screen"
            />
          </Box>
          <Box
            sx={{
              flex: "1 1 auto",
              maxWidth: "820px",
              width: "100%",
            }}
          >
            <Box
              sx={{
                display: "inline-flex",
                alignItems: "center",
                justifyContent: "center",
                minHeight: "26px",
                px: "15px",
                borderRadius: "999px",
                background: "rgba(69, 87, 176, 0.3)",
                border: "1px solid rgba(255,255,255,0.05)",
                mb: { xs: "24px", md: "34px" },
              }}
            >
              <Typography
                sx={{
                  color: "#ffffff",
                  fontSize: "12px",
                  fontWeight: 500,
                  lineHeight: 1,
                }}
              >
                {t("download.badge")}
              </Typography>
            </Box>

            <Typography
              component="h2"
              sx={{
                color: "#ffffff",
                fontSize: { xs: "28px", md: "34px" },
                fontWeight: 600,
                lineHeight: 1.15,
              }}
            >
              {t("download.title")}
            </Typography>

            <Typography
              component="p"
              sx={{
                color: "rgba(255,255,255,0.6)",
                fontSize: { xs: "14px", md: "16px" },
                lineHeight: 1.55,
                mt: { xs: "22px", md: "36px" },
                mx: { xs: "auto", md: 0 },
                maxWidth: "860px",
              }}
            >
              {t("download.description")}
            </Typography>

            <Box
              sx={{
                display: "flex",
                flexWrap: "wrap",
                justifyContent: { xs: "center", md: "flex-start" },
                gap: "20px",
                mt: { xs: "38px", md: "70px" },
              }}
            >
              {storeButtons.map((button) => (
                <StoreButton key={button.label} {...button} />
              ))}
            </Box>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default GetBetaVersion;
