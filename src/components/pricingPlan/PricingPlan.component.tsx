import React, { useState } from "react";
// MUI Imports
import { Box, Typography, Button, ClickAwayListener } from "@mui/material";
// Assets
import CheckIcon from "../../assets/check-icon.svg";
// Flag Assets
import FlagCHF from "../../assets/flag-chf.svg";
import FlagUSD from "../../assets/flag-usd.svg";
import FlagEUR from "../../assets/flag-eur.svg";
import ArrowDownIcon from "../../assets/arrow-down.svg";

const PricingPlan = () => {
  const [currency, setCurrency] = useState("CHF");
  const [isOpen, setIsOpen] = useState(false);

  const pricingData: any = {
    CHF: { type: "CHF", monthly: "7.90", yearly: "79", symbol: "CHF" },
    USD: { type: "USD", monthly: "9.50", yearly: "95", symbol: "$" },
    EUR: { type: "EUR", monthly: "8.90", yearly: "89", symbol: "€" },
  };

  const currencies = [
    { code: "CHF", name: "Swiss Franc", icon: FlagCHF },
    { code: "USD", name: "United State Dollar", icon: FlagUSD },
    { code: "EUR", name: "Euro", icon: FlagEUR },
  ];

  const currentPricing = pricingData[currency];

  const freePlanFeatures = [
    "Full access to all features",
    "Post and browse requests",
    "Secure in-app messaging",
    "Personalized user profile & reviews",
  ];

  const monthlyPlanFeatures = [
    "Full access to all features",
    "Post and browse requests",
    "Secure in-app messaging",
    "Personalized user profile & reviews",
    "Cancel anytime",
  ];
  const yearlyPlanFeatures = [
    "Full access to all features",
    "Post and browse requests",
    "Secure in-app messaging",
    "Personalized user profile & reviews",
    "Cancel anytime",
  ];

  return (
    <Box
      id="pricing"
      sx={{
        background: "linear-gradient(142deg, #2F80B5 0%, #020617 20%)",
        pb: { xs: "80px", md: "140px" },
        pt: { xs: "80px", md: "110px" },
        px: { xs: "15px", md: "20px" },
        textAlign: "center",
        overflow: "visible", // Changed to visible for dropdown
        position: "relative",
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
          mb: "30px",
        }}
      >
        Start free for 14 days, then stay connected with full access through our
        simple monthly plan.
      </Typography>

      {/* Currency Dropdown */}
      <Box
        sx={{
          position: "relative",
          width: "fit-content",
          margin: "0 auto 50px auto",
          zIndex: 10,
        }}
      >
        <ClickAwayListener onClickAway={() => setIsOpen(false)}>
          <Box>
            <Box
              onClick={() => setIsOpen(!isOpen)}
              sx={{
                display: "flex",
                alignItems: "center",
                gap: "8px",
                padding: "4px 10px",
                background: "rgba(255, 255, 255, 0.1)",
                backdropFilter: "blur(10px)",
                borderRadius: "20px",
                cursor: "pointer",
                border: "1px solid rgba(255, 255, 255, 0.1)",
                transition: "all 0.3s ease",
                "&:hover": {
                  background: "rgba(255, 255, 255, 0.15)",
                },
              }}
            >
              <Box
                component="img"
                src={currencies.find((c) => c.code === currency)?.icon}
                alt={currency}
                sx={{
                  width: "20px",
                  height: "20px",
                  borderRadius: "50%",
                  objectFit: "cover",
                }}
              />
              <Typography sx={{ color: "white", fontWeight: 500 }}>
                {currency}
              </Typography>
              <Box
                sx={{
                  color: "white",
                  transform: isOpen ? "rotate(180deg)" : "rotate(0deg)",
                  transition: "transform 0.3s",
                }}
              >
                <Box component="img" src={ArrowDownIcon} alt="Arrow Down" />
              </Box>
            </Box>

            {isOpen && (
              <Box
                sx={{
                  position: "absolute",
                  top: "120%",
                  left: "50%",
                  transform: "translateX(-50%)",
                  width: "145px",
                  // background: "rgba(13, 27, 73, 0.9)", // Darker background for dropdown
                  backdropFilter: "blur(12px)",
                  borderRadius: "16px",
                  border: "1px solid rgba(255, 255, 255, 0.1)",
                  padding: "8px",
                  boxShadow: "0 10px 40px rgba(0, 0, 0, 0.2)",
                  zIndex: 20,
                }}
              >
                {currencies.map((curr) => (
                  <Box
                    key={curr.code}
                    onClick={() => {
                      setCurrency(curr.code);
                      setIsOpen(false);
                    }}
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      gap: "12px",
                      padding: "2px 8px",
                      borderRadius: "12px",
                      cursor: "pointer",
                      transition: "all 0.2s",
                      marginBottom: "10px",
                      background:
                        currency === curr.code
                          ? "rgba(255, 255, 255, 0.1)"
                          : "transparent",
                      "&:hover": {
                        background: "rgba(255, 255, 255, 0.05)",
                      },
                    }}
                  >
                    <Box
                      component="img"
                      src={curr.icon}
                      alt={curr.code}
                      sx={{
                        width: "24px",
                        height: "24px",
                        borderRadius: "50%",
                        objectFit: "cover",
                      }}
                    />
                    <Box sx={{ textAlign: "left" }}>
                      <Typography
                        sx={{
                          color: "white",
                          fontSize: "16px",
                          fontWeight: 500,
                        }}
                      >
                        {curr.code}
                      </Typography>
                      <Typography
                        sx={{
                          color: "rgba(255, 255, 255, 0.5)",
                          fontSize: "8px",
                        }}
                      >
                        {curr.name}
                      </Typography>
                    </Box>
                  </Box>
                ))}
              </Box>
            )}
          </Box>
        </ClickAwayListener>
      </Box>

      {/* Pricing Cards */}
      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          // gap: "30px",
          maxWidth: "1126px",
          margin: "0 auto",
          justifyContent: "center",
          alignItems: { xs: "center", md: "stretch" },
        }}
      >
        {/* Free Plan Card */}
        <Box
          sx={{
            flex: 1,
            maxWidth: { xs: "400px", md: "354px" },
            background:
              "linear-gradient(135deg, rgba(255,255,255,0.05), rgba(255,255,255,0.02))",
            borderRadius: "16px",
            padding: { xs: "32px 0px", md: "40px 0px" },
            border: "1px solid rgba(255,255,255,0.1)",
            backdropFilter: "blur(12px)",
            textAlign: "left",
            transition: "all 0.3s ease",
            // "&:hover": {
            //   transform: "scale(1.05)",
            //   border: "1px solid rgba(255,255,255,0.2)",
            //   boxShadow: "0 20px 60px rgba(0,0,0,0.3)",
            // },
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
            BUEZ FREE
          </Typography>

          <Box sx={{ mb: "32px", padding: "0px 32px" }}>
            <Typography
              component="span"
              sx={{
                color: "#ffffff",
                fontSize: "30px",
                fontWeight: 600,
              }}
            >
              {currentPricing.type === "CHF"
                ? "CHF 0"
                : `${currentPricing.symbol} 0`}
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
          </Box>
        </Box>
        {/* Monthly Plan Card */}
        <Box
          sx={{
            flex: 1,
            maxWidth: { xs: "100%", md: "354px" },
            background:
              "linear-gradient(179.97deg, rgba(84, 97, 112, 0.5) 0%, rgba(13, 0, 48, 0.2) 99.97%)",
            borderRadius: "16px",
            padding: { xs: "32px 0px", md: "40px 0px" },
            border: "1px solid rgba(47, 128, 181, 0.3)",
            backdropFilter: "blur(12px)",
            textAlign: "left",
            transition: "all 0.3s ease",
            transform: "scale(1.05)",
            boxShadow: "0 8px 32px rgba(47, 128, 181, 0.2)",
            zIndex: 1,
            position: "relative",
            // "&:hover": {
            //   transform: "scale(1.05)",
            //   border: "1px solid rgba(255,255,255,0.2)",
            //   boxShadow: "0 20px 60px rgba(0,0,0,0.3)",
            // },
          }}
        >
          <Box
            sx={{
              position: "absolute",
              top: "-14px",
              left: "50%",
              transform: "translateX(-50%)",
              background: "linear-gradient(90deg, #2F80B5, #4557B0)",
              borderRadius: "999px",
              padding: "4px 16px",
              whiteSpace: "nowrap",
            }}
          >
            <Typography
              sx={{ color: "#ffffff", fontSize: "12px", fontWeight: 600 }}
            >
              MOST POPULAR
            </Typography>
          </Box>

          <Typography
            sx={{
              color: "#ffffff",
              fontSize: "18px",
              fontWeight: 600,
              mb: "20px",
              padding: "0px 32px",
            }}
          >
            BUEZ PRO
          </Typography>

          <Box sx={{ mb: "32px", padding: "0px 32px" }}>
            <Typography
              component="span"
              sx={{
                color: "#ffffff",
                fontSize: "30px",
                fontWeight: 600,
              }}
            >
              {currentPricing.type === "CHF" ? "CHF" : currentPricing.symbol}{" "}
              {currentPricing.monthly}
            </Typography>
            {/* Removed the separate cents logic to simplify for dynamic currency */}
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
            {monthlyPlanFeatures.map((feature, index) => (
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
          </Box>
        </Box>
        {/* Yearly Plan Card */}
        <Box
          sx={{
            flex: 1,
            maxWidth: { xs: "400px", md: "354px" },
            background:
              "linear-gradient(135deg, rgba(255,255,255,0.05), rgba(255,255,255,0.02))",
            borderRadius: "16px",
            padding: { xs: "32px 0px", md: "40px 0px" },
            border: "1px solid rgba(255,255,255,0.1)",
            backdropFilter: "blur(12px)",
            textAlign: "left",
            transition: "all 0.3s ease",
            boxShadow: "0 20px 60px rgba(0,0,0,0.3)",
            // "&:hover": {
            //   transform: "scale(1.05)",
            //   border: "1px solid rgba(47, 128, 181, 0.5)",
            //   boxShadow: "0 20px 60px rgba(47, 128, 181, 0.3)",
            // },
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
            STANDARD PLAN
          </Typography>

          <Box sx={{ mb: "32px", padding: "0px 32px" }}>
            <Typography
              component="span"
              sx={{
                color: "#ffffff",
                fontSize: "30px",
                fontWeight: 600,
              }}
            >
              {currentPricing.type === "CHF" ? "CHF" : currentPricing.symbol}{" "}
              {currentPricing.yearly}
            </Typography>
            <Typography
              component="span"
              sx={{
                color: "#94a3b8",
                fontSize: "16px",
                ml: "8px",
              }}
            >
              / yearly / user
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
              width: "62%",
              margin: "-16px auto 0px auto",
            }}
          >
            <Typography
              sx={{
                color: "#94a3b8",
                fontSize: "13px",
              }}
            >
              Save{" "}
              {currentPricing.type === "CHF" ? "CHF" : currentPricing.symbol}{" "}
              17% yearly
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
            {yearlyPlanFeatures.map((feature, index) => (
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
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default PricingPlan;
