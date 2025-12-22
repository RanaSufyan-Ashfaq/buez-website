// MUI Imports
import { Box, Typography, Grid } from "@mui/material";
// Assets
import WhatIsBuezImage from "../../assets/whatIsBuez.svg";

const WhatIsBuez = () => {
  return (
    <Box
      sx={{
        background: "#020617",
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
        <Grid xs={12} md={6} textAlign="left">
          <Box component="img" src={WhatIsBuezImage} alt="What is BUEZ" />
        </Grid>
        <Grid xs={12} md={6} sx={{ width: { md: "100%", lg: "50%" } }}>
          <Typography
            component="h2"
            sx={{
              color: "#ffffff",
              fontSize: { xs: "26px", md: "36px", lg: "52px" },
              fontWeight: 500,
              lineHeight: 1.2,
            }}
          >
            What is BUEZ?
          </Typography>

          <Typography
            component="p"
            sx={{
              color: "#e5e7eb",
              fontSize: { xs: "16px", lg: "18px" },
              mt: { xs: "20px", md: "30px" },
              mx: { xs: "auto", md: 0 },
            }}
          >
            BUEZ connects people who need help with daily tasks to those ready
            to assist. Post or browse requests, chat securely, and build trust
            through profiles and reviews. With a simple subscription, join a
            supportive community where helping each other is easy and rewarding.
          </Typography>
        </Grid>
      </Grid>
    </Box>
  );
};

export default WhatIsBuez;
