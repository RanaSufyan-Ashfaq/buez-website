import React from "react";
// MUI Imports
import { Box, Typography, Grid } from "@mui/material";
// Assets
import PhoneBackImage from "../../assets/whatIsBuezPhoneBack.png";
import PhoneFrontImage from "../../assets/whatIsBuezPhoneFront.png";

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
              sx={{
                position: "relative",
                width: { xs: "300px", md: "445px" },
                aspectRatio: "445 / 586",
                mx: { xs: "auto", md: 0 },
              }}
            >
              <Box
                component="img"
                src={PhoneBackImage}
                alt="BUEZ onboarding — welcome screen"
                sx={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  width: "57.1%",
                  height: "auto",
                }}
              />
              <Box
                component="img"
                src={PhoneFrontImage}
                alt="BUEZ onboarding — post what you need help with"
                sx={{
                  position: "absolute",
                  top: "13%",
                  left: "42.9%",
                  width: "57.1%",
                  height: "auto",
                }}
              />
            </Box>
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
                fontSize: { xs: "26px", md: "34px" },
                fontWeight: 600,
                lineHeight: 1.2,
              }}
            >
              What is BUEZ?
            </Typography>

            <Typography
              component="p"
              sx={{
                color: "rgba(255,255,255,0.6)",
                fontSize: "16px",
                lineHeight: 1.7,
                maxWidth: { md: "750px" },
                mt: { xs: "20px", md: "24px" },
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
