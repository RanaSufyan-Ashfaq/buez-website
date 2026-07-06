import React from "react";
// MUI Imports
import { Box, Typography, Grid } from "@mui/material";
import AppleIcon from "@mui/icons-material/Apple";
import AndroidIcon from "@mui/icons-material/Android";
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
              Manage Chores Smarter
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

            <Box
              sx={{
                display: "flex",
                justifyContent: { xs: "center", md: "flex-start" },
                gap: "12px",
                mt: "20px",
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  gap: "8px",
                  border: "1px solid rgba(255,255,255,0.2)",
                  borderRadius: "999px",
                  padding: "8px 18px",
                  color: "#ffffff",
                }}
              >
                <AppleIcon sx={{ fontSize: "20px" }} />
                <Typography sx={{ fontSize: "14px", fontWeight: 500 }}>
                  App Store
                </Typography>
              </Box>

              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  gap: "8px",
                  border: "1px solid rgba(255,255,255,0.2)",
                  borderRadius: "999px",
                  padding: "8px 18px",
                  color: "#ffffff",
                }}
              >
                <AndroidIcon sx={{ fontSize: "20px" }} />
                <Typography sx={{ fontSize: "14px", fontWeight: 500 }}>
                  Google Play
                </Typography>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </>
  );
};

export default GetBetaVersion;
