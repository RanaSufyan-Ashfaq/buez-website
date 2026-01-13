import React from "react";
// MUI Imports
import { Box, Typography, Grid } from "@mui/material";
// Assets
import GetBetaVersionImage from "../../assets/getBetaVersion.svg";
// Shared Component
import { GetBetaVersionButton } from "../../shared/GetBetaVersionButton";

const GetBetaVersion = () => {
  return (
    <>
      <Box
        id="about"
        sx={{ height: { xs: "40px", md: "70px" }, background: "#020617" }}
      ></Box>
      <Box
        sx={{
          background: "#020617",
          pt: { xs: "40px", md: "70px" },
          px: { xs: "15px", md: "20px" },
        }}
      >
        <Grid
          container
          // spacing={{ xs: 6, md: 10 }}
          alignItems="center"
          flexWrap={{ xs: "wrap", md: "nowrap" }}
          justifyContent={{ xs: "center", md: "space-between" }}
          textAlign={{ xs: "center", md: "left" }}
          flexDirection={{ xs: "column-reverse", md: "row" }}
          sx={{
            maxWidth: "1428px",
            margin: "0 auto",
            width: "100%",
          }}
        >
          <Grid
            xs={12}
            md={6}
            sx={{
              textAlign: { xs: "center", md: "left" },
            }}
          >
            <Box
              component="img"
              sx={{
                maxWidth: { xs: "75%", md: "100%" },
              }}
              src={GetBetaVersionImage}
              alt="Get Beta Version"
            />
          </Grid>
          <Grid
            xs={12}
            md={6}
            sx={{
              width: { md: "100%", lg: "60%" },
              paddingBottom: { xs: "60px", md: "0" },
            }}
          >
            <Typography
              component="h2"
              sx={{
                color: "#ffffff",
                fontSize: { xs: "26px", md: "36px", lg: "52px" },
                fontWeight: 500,
                lineHeight: 1.2,
              }}
            >
              Get Beta Version
            </Typography>

            <Typography
              component="p"
              sx={{
                color: "#e5e7eb",
                fontSize: { xs: "16px", lg: "18px" },
                mt: { xs: "20px", md: "30px" },
                mx: { xs: "auto", md: 0 },
                mb: { xs: "20px", md: "30px" },
              }}
            >
              Join a growing community that believes in helping each other. With
              BUEZ, you can find support, share your skills, and make daily life
              easier — all in one simple app. Download today and start your
              14-day free trial!
            </Typography>
            <GetBetaVersionButton />
          </Grid>
        </Grid>
      </Box>
    </>
  );
};

export default GetBetaVersion;
