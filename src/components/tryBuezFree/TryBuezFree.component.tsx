// MUI Imports
import { Box, Typography, Grid } from "@mui/material";
// Assets
import TryBuezImage from "../../assets/tryBuezFree.svg";
// Shared Component
import { GetBetaVersionButton } from "../../shared/GetBetaVersionButton";

const TryBuezFree = () => {
  return (
    <Box
      sx={{
        background: "#020617",
        py: { xs: "80px", md: "140px" },
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
        }}
      >
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
            Try BUEZ For 14 Days Free!
          </Typography>

          <Typography
            component="p"
            sx={{
              color: "#ffffff",
              fontSize: { xs: "16px", lg: "18px" },
              mt: { xs: "20px", md: "30px" },
              mb: { xs: "40px", md: "60px" },
              mx: { xs: "auto", md: 0 },
            }}
          >
            Join the BUEZ community and explore how easy it is to get help or
            offer support for everyday tasks. Enjoy full access to all features
            — post and browse requests, chat securely, and connect with people
            near you. Start your 14-day free trial today and experience the
            difference.
          </Typography>
          <GetBetaVersionButton />
        </Grid>
        <Grid
          xs={12}
          md={6}
          sx={{
            textAlign: { xs: "center", md: "right" },
            paddingTop: { xs: "60px", md: "0" },
          }}
        >
          <Box component="img" src={TryBuezImage} alt="Try BUEZ" />
        </Grid>
      </Grid>
    </Box>
  );
};

export default TryBuezFree;
