// MUI Imports
import { Box, Typography, Button } from "@mui/material";
// Assets
import CheckIcon from "../../assets/check-icon.svg";

const PricingPlan = () => {
  const freePlanFeatures = [
    "Full access to all features",
    "Post and browse requests",
    "Secure in-app messaging",
    "Personalized user profile & reviews",
  ];

  const subscriptionFeatures = [
    "Full access to all features",
    "Post and browse requests",
    "Secure in-app messaging",
    "Personalized user profile & reviews",
    "Cancel anytime",
  ];

  return (
    <Box
      sx={{
        background: "linear-gradient(142deg, #2F80B5 0%, #020617 20%)",
        pb: { xs: "80px", md: "140px" },
        pt: { xs: "80px", md: "100px" },
        px: { xs: "15px", md: "20px" },
        textAlign: "center",
        overflow: "hidden",
      }}
    >
      <Typography
        component="h2"
        sx={{
          color: "#ffffff",
          fontSize: { xs: "28px", md: "40px", lg: "52px" },
          fontWeight: 500,
          lineHeight: 1.2,
          mb: { xs: "12px", md: "16px" },
        }}
      >
        Our Pricing Plan
      </Typography>

      <Typography
        component="p"
        sx={{
          color: "#e5e7eb",
          fontSize: { xs: "16px", lg: "18px" },
          maxWidth: "620px",
          margin: "0 auto",
          mb: { xs: "60px", md: "80px" },
        }}
      >
        Start free for 14 days, then stay connected with full access through our
        simple monthly plan.
      </Typography>

      {/* Pricing Cards */}
      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          gap: "30px",
          maxWidth: "900px",
          margin: "0 auto",
          justifyContent: "center",
          alignItems: { xs: "center", md: "stretch" },
        }}
      >
        {/* Free Plan Card */}
        <Box
          sx={{
            flex: 1,
            maxWidth: { xs: "400px", md: "386px" },
            background:
              "linear-gradient(135deg, rgba(255,255,255,0.05), rgba(255,255,255,0.02))",
            borderRadius: "16px",
            padding: { xs: "32px 0px", md: "40px 0px" },
            border: "1px solid rgba(255,255,255,0.1)",
            backdropFilter: "blur(12px)",
            textAlign: "left",
            transition: "all 0.3s ease",
            "&:hover": {
              transform: "scale(1.05)",
              border: "1px solid rgba(255,255,255,0.2)",
              boxShadow: "0 20px 60px rgba(0,0,0,0.3)",
            },
          }}
        >
          <Typography
            sx={{
              color: "#ffffff",
              fontSize: "18px",
              fontWeight: 600,
              mb: "20px",
              padding: "0px 32px",
            }}
          >
            Free Plan
          </Typography>

          <Box sx={{ mb: "32px", padding: "0px 32px" }}>
            <Typography
              component="span"
              sx={{
                color: "#ffffff",
                fontSize: "48px",
                fontWeight: 600,
              }}
            >
              $0
            </Typography>
            <Typography
              component="span"
              sx={{
                color: "#94a3b8",
                fontSize: "16px",
                ml: "8px",
              }}
            >
              / 14 days / user
            </Typography>
          </Box>
          <Box
            sx={{
              position: "relative",
              "&::after": {
                content: '""',
                position: "absolute",
                left: 0,
                bottom: 0,
                width: "100%",
                height: "1px",
                background:
                  "linear-gradient(90deg, #0D1B49 46.63%, #0D4761 100%)",
              },
            }}
          ></Box>
          <Typography
            sx={{
              color: "#94a3b8",
              fontSize: "15px",
              fontWeight: 500,
              mb: "16px",
              mt: "65px",
              padding: "0px 32px",
            }}
          >
            What's Included
          </Typography>

          <Box sx={{ padding: "0px 32px" }}>
            {freePlanFeatures.map((feature, index) => (
              <Box
                key={index}
                sx={{
                  display: "flex",
                  alignItems: "flex-start",
                  mb: "14px",
                  gap: "12px",
                }}
              >
                <Box component="img" src={CheckIcon} alt="Check Icon" />
                <Typography
                  sx={{
                    color: "#cbd5e1",
                    fontSize: "14px",
                    lineHeight: 1.5,
                  }}
                >
                  {feature}
                </Typography>
              </Box>
            ))}
            <Box sx={{ textAlign: "center" }}>
              <Button
                variant="contained"
                sx={{
                  // width: "100%",
                  background: "rgba(255,255,255,0.1)",
                  color: "#ffffff",
                  padding: "8px 46px",
                  borderRadius: "8px",
                  textTransform: "none",
                  fontSize: "14px",
                  fontWeight: 500,
                  marginTop: "40px",
                  border: "1px solid rgba(255,255,255,0.2)",
                  "&:hover": {
                    background: "rgba(255,255,255,0.15)",
                    border: "1px solid rgba(255,255,255,0.3)",
                  },
                }}
              >
                Start Free Plan Now
              </Button>
            </Box>
          </Box>
        </Box>

        {/* Subscription Plan Card */}
        <Box
          sx={{
            flex: 1,
            maxWidth: { xs: "100%", md: "386px" },
            background:
              "linear-gradient(179.97deg, rgba(84, 97, 112, 0.5) 0%, rgba(13, 0, 48, 0.2) 99.97%)",
            borderRadius: "16px",
            padding: { xs: "32px 0px", md: "40px 0px" },
            border: "1px solid rgba(47, 128, 181, 0.3)",
            backdropFilter: "blur(12px)",
            textAlign: "left",
            transition: "all 0.3s ease",
            boxShadow: "0 8px 32px rgba(47, 128, 181, 0.2)",
            "&:hover": {
              transform: "scale(1.05)",
              border: "1px solid rgba(47, 128, 181, 0.5)",
              boxShadow: "0 20px 60px rgba(47, 128, 181, 0.3)",
            },
          }}
        >
          <Typography
            sx={{
              color: "#ffffff",
              fontSize: "18px",
              fontWeight: 500,
              mb: "20px",
              padding: "0px 32px",
            }}
          >
            Subscription Plan
          </Typography>

          <Box sx={{ mb: "32px", padding: "0px 32px" }}>
            <Typography
              component="span"
              sx={{
                color: "#ffffff",
                fontSize: "48px",
                fontWeight: 600,
              }}
            >
              $12
            </Typography>
            <Typography
              component="span"
              sx={{
                color: "#ffffff",
                fontSize: "32px",
                fontWeight: 600,
              }}
            >
              .99
            </Typography>
            <Typography
              component="span"
              sx={{
                color: "#94a3b8",
                fontSize: "16px",
                ml: "8px",
              }}
            >
              / month / user
            </Typography>
          </Box>

          <Box
            sx={{
              position: "relative",
              "&::after": {
                content: '""',
                position: "absolute",
                left: 0,
                bottom: 0,
                width: "100%",
                zIndex: -1,
                height: "1px",
                background:
                  "linear-gradient(90deg, #0D1B49 46.63%, #0D4761 100%)",
              },
            }}
          ></Box>
          <Box
            sx={{
              background: "linear-gradient(90deg, #0D1B49 0%, #000000 100%)",
              borderRadius: "6px",
              padding: "5px 35px",
              display: "flex",
              justifyContent: "center",
              width: "54%",
              margin: "-16px auto 0px auto",
            }}
          >
            <Typography
              sx={{
                color: "#94a3b8",
                fontSize: "13px",
              }}
            >
              $155 billed annually
            </Typography>
          </Box>

          <Typography
            sx={{
              color: "#94a3b8",
              fontSize: "14px",
              fontWeight: 500,
              mb: "16px",
              padding: "0px 32px",
              mt: "26px",
            }}
          >
            What's Included
          </Typography>

          <Box sx={{ padding: "0px 32px" }}>
            {subscriptionFeatures.map((feature, index) => (
              <Box
                key={index}
                sx={{
                  display: "flex",
                  alignItems: "flex-start",
                  mb: "14px",
                  gap: "12px",
                }}
              >
                <Box component="img" src={CheckIcon} alt="Check Icon" />
                <Typography
                  sx={{
                    color: "#cbd5e1",
                    fontSize: "14px",
                    lineHeight: 1.5,
                  }}
                >
                  {feature}
                </Typography>
              </Box>
            ))}
            <Box sx={{ textAlign: "center" }}>
              <Button
                variant="contained"
                sx={{
                  // width: "100%",
                  background: "rgba(100, 116, 139, 0.4)",
                  color: "#ffffff",
                  padding: "8px 46px",
                  borderRadius: "8px",
                  textTransform: "none",
                  fontSize: "14px",
                  fontWeight: 500,
                  border: "1px solid rgba(100, 116, 139, 0.5)",
                  "&:hover": {
                    background: "rgba(100, 116, 139, 0.5)",
                    border: "1px solid rgba(100, 116, 139, 0.6)",
                  },
                }}
              >
                Upgrade Plan Now
              </Button>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default PricingPlan;
