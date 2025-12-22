import React from "react";
// MUI Imports
import { Box, Typography, Grid } from "@mui/material";
// Assets
import HeroSectionImage from "../../assets/heroSection.svg";
// Shared Component
import { GetBetaVersionButton } from "../../shared/GetBetaVersionButton";

const HeroSection = () => {
  return (
    <Box
      sx={{
        background: "linear-gradient(140deg, #2F80B5 0%, #020617 30%)",
        pt: { xs: "120px", md: "236px" },
        pb: { xs: "80px", md: "140px" },
        px: { xs: "15px", md: "20px" },
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
          gap: { xs: "48px", md: "80px" }, // Using gap instead of spacing to avoid negative margins
        }}
      >
        <Grid xs={12} md={6}>
          <Typography
            component="h1"
            sx={{
              color: "#ffffff",
              fontSize: { xs: "28px", md: "40px", lg: "52px" },
              fontWeight: 500,
              lineHeight: 1.2,
            }}
          >
            Daily Chores Made Easy With BUEZ.
          </Typography>

          <Typography
            component="p"
            sx={{
              color: "#e5e7eb",
              fontSize: { xs: "16px", lg: "18px" },
              mt: { xs: "20px", md: "30px" },
              mb: { xs: "40px", md: "60px" },
              maxWidth: "520px",
              mx: { xs: "auto", md: 0 },
            }}
          >
            Find help for your everyday tasks from people within your community
            on BUEZ.
          </Typography>

          <GetBetaVersionButton />
        </Grid>

        <Grid xs={12} md={6} textAlign="center">
          <Box
            component="img"
            src={HeroSectionImage}
            alt="Hero section"
            sx={{
              width: "100%",
              maxWidth: "520px",
            }}
          />
        </Grid>
      </Grid>
    </Box>
  );
};

export default HeroSection;
