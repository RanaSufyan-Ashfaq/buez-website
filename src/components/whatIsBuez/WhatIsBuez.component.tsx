import React from "react";
// MUI Imports
import { Box, Typography, Grid } from "@mui/material";
// Assets
import WhatIsBuezImage from "../../assets/whatIsBuez.svg";

const WhatIsBuez = () => {
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
              src={WhatIsBuezImage}
              alt="What is BUEZ"
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
              supportive community where helping each other is easy and
              rewarding.
            </Typography>
          </Grid>
        </Grid>
      </Box>
    </>
  );
};

export default WhatIsBuez;
