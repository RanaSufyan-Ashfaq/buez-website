import React, { useState } from "react";
// MUI Imports
import { Box, Typography, ClickAwayListener } from "@mui/material";
import WorkspacePremiumIcon from "@mui/icons-material/WorkspacePremium";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import CreditCardIcon from "@mui/icons-material/CreditCard";
import PeopleAltOutlinedIcon from "@mui/icons-material/PeopleAltOutlined";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
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
    CHF: { type: "CHF", intro: "3.90", monthly: "7.90", symbol: "CHF" },
    USD: { type: "USD", intro: "4.90", monthly: "9.50", symbol: "$" },
    EUR: { type: "EUR", intro: "4.40", monthly: "8.90", symbol: "€" },
  };

  const currencies = [
    { code: "CHF", name: "Swiss Franc", icon: FlagCHF },
    { code: "USD", name: "United State Dollar", icon: FlagUSD },
    { code: "EUR", name: "Euro", icon: FlagEUR },
  ];

  const currentPricing = pricingData[currency];
  const symbol =
    currentPricing.type === "CHF" ? "CHF" : currentPricing.symbol;

  const baseFeatures = [
    "Full access to all features",
    "Post and browse requests",
    "Secure in-app messaging",
    "Personalized user profile & reviews",
  ];
  const standardFeatures = [...baseFeatures, "Cancel anytime"];

  // Shared pieces -----------------------------------------------------------

  const HeaderBadge = ({
    icon,
    label,
  }: {
    icon: React.ReactNode;
    label: string;
  }) => (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        gap: "5px",
        height: "22px",
        px: "10px",
        borderRadius: "11px",
        background: "rgba(69,87,176,0.3)",
        border: "1px solid rgba(69,87,176,0.2)",
        flexShrink: 0,
      }}
    >
      {icon}
      <Typography
        sx={{
          color: "#ffffff",
          fontSize: "10px",
          fontWeight: 600,
          letterSpacing: "0.5px",
          whiteSpace: "nowrap",
        }}
      >
        {label}
      </Typography>
    </Box>
  );

  const PricePill = ({ label }: { label: string }) => (
    <Box
      sx={{
        display: "inline-flex",
        alignItems: "center",
        height: "22px",
        px: "12px",
        borderRadius: "11px",
        background: "rgba(69,87,176,0.2)",
        border: "1px solid rgba(69,87,176,0.2)",
      }}
    >
      <Typography
        sx={{ color: "#ffffff", fontSize: "11px", whiteSpace: "nowrap" }}
      >
        {label}
      </Typography>
    </Box>
  );

  const Divider = () => (
    <Box
      sx={{
        width: "100%",
        height: "1px",
        background: "linear-gradient(90deg, #0D1B49 46.63%, #0D4761 100%)",
        mt: "20px",
      }}
    />
  );

  const FeatureList = ({ features }: { features: string[] }) => (
    <>
      <Typography
        sx={{
          color: "rgba(255,255,255,0.9)",
          fontSize: "16px",
          fontWeight: 500,
          mt: "28px",
          mb: "18px",
        }}
      >
        What&apos;s included
      </Typography>
      {features.map((feature, index) => (
        <Box
          key={index}
          sx={{
            display: "flex",
            alignItems: "center",
            mb: "12px",
            gap: "14px",
          }}
        >
          <Box component="img" src={CheckIcon} alt="" sx={{ width: "20px" }} />
          <Typography
            sx={{
              color: "rgba(255,255,255,0.6)",
              fontSize: "14px",
              lineHeight: 1.5,
            }}
          >
            {feature}
          </Typography>
        </Box>
      ))}
    </>
  );

  const sideCardSx = {
    width: { xs: "100%", md: "354px" },
    maxWidth: { xs: "400px", md: "354px" },
    minHeight: { md: "575px" },
    background: "rgba(255,255,255,0.05)",
    borderRadius: "16px",
    border: "1px solid rgba(255,255,255,0.1)",
    backdropFilter: "blur(12px)",
    textAlign: "left",
    padding: "28px 26px",
    display: "flex",
    flexDirection: "column",
  } as const;

  return (
    <Box
      id="pricing"
      sx={{
        background: "#020617",
        pb: { xs: "70px", md: "96px" },
        pt: { xs: "70px", md: "88px" },
        px: { xs: "15px", md: "20px" },
        textAlign: "center",
        overflowX: "clip", // keep vertical overflow visible for dropdown
        position: "relative",
        "&::before": {
          content: '""',
          position: "absolute",
          top: "-774px",
          right: "-1282px",
          width: "2496px",
          height: "2581px",
          background:
            "radial-gradient(circle closest-side, rgba(47,128,181,0.28) 0%, rgba(47,128,181,0.12) 35%, rgba(47,128,181,0.04) 60%, rgba(47,128,181,0) 80%)",
          pointerEvents: "none",
          display: { xs: "none", md: "block" },
        },
      }}
    >
      <Typography
        component="h2"
        sx={{
          color: "#ffffff",
          fontSize: { xs: "28px", md: "34px" },
          fontWeight: 600,
          lineHeight: 1.2,
          mb: { xs: "12px", md: "16px" },
          position: "relative",
        }}
      >
        Our Pricing Plan
      </Typography>

      <Typography
        component="p"
        sx={{
          color: "rgba(255,255,255,0.6)",
          fontSize: "16px",
          maxWidth: "900px",
          margin: "0 auto",
          mb: "30px",
          position: "relative",
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
          maxWidth: "1080px",
          margin: "0 auto",
          justifyContent: "center",
          alignItems: "center",
          gap: { xs: "24px", md: 0 },
        }}
      >
        {/* Card 1 — BUEZ PLUS (Founder phase) */}
        <Box sx={sideCardSx}>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <Typography
              sx={{ color: "#ffffff", fontSize: "18px", fontWeight: 600 }}
            >
              BUEZ PLUS
            </Typography>
            <HeaderBadge
              icon={
                <WorkspacePremiumIcon
                  sx={{ fontSize: "12px", color: "#ffffff" }}
                />
              }
              label="FOUNDER PHASE"
            />
          </Box>
          <Typography
            sx={{
              color: "rgba(255,255,255,0.4)",
              fontSize: "13px",
              mt: "6px",
            }}
          >
            Free for first 100 Users
          </Typography>

          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              gap: "16px",
              mt: "28px",
            }}
          >
            <Typography
              sx={{ color: "#ffffff", fontSize: "36px", fontWeight: 600, lineHeight: 1 }}
            >
              {symbol} 0
            </Typography>
            <PricePill label="60 DAYS FREE" />
          </Box>
          <Typography
            sx={{
              color: "rgba(255,255,255,0.4)",
              fontSize: "13px",
              mt: "10px",
            }}
          >
            No auto-renewal. Founder badge included.
          </Typography>

          <Divider />

          {/* Spots claimed widget */}
          <Box
            sx={{
              position: "relative",
              overflow: "hidden",
              width: "100%",
              height: "84px",
              mt: "24px",
              borderRadius: "8px",
              background: "rgba(255,255,255,0.05)",
              border: "1px solid rgba(255,255,255,0.05)",
              padding: "14px 18px",
              "&::after": {
                content: '""',
                position: "absolute",
                top: "-40px",
                right: "-40px",
                width: "80px",
                height: "80px",
                borderRadius: "50%",
                background: "#4557B0",
                filter: "blur(25px)",
                pointerEvents: "none",
              },
            }}
          >
            <Box sx={{ display: "flex", alignItems: "center", gap: "10px" }}>
              <Box
                sx={{
                  width: "30px",
                  height: "30px",
                  borderRadius: "50%",
                  background: "rgba(255,255,255,0.05)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  flexShrink: 0,
                }}
              >
                <PeopleAltOutlinedIcon
                  sx={{ fontSize: "15px", color: "#F4FFF4" }}
                />
              </Box>
              <Box>
                <Box sx={{ display: "flex", alignItems: "baseline", gap: "4px" }}>
                  <Typography
                    sx={{ color: "#ffffff", fontSize: "16px", fontWeight: 600, lineHeight: 1.2 }}
                  >
                    23
                  </Typography>
                  <Typography
                    sx={{ color: "rgba(255,255,255,0.4)", fontSize: "12px" }}
                  >
                    /100
                  </Typography>
                </Box>
                <Typography
                  sx={{
                    color: "rgba(255,255,255,0.4)",
                    fontSize: "11px",
                    lineHeight: 1.2,
                  }}
                >
                  Spots Claimed
                </Typography>
              </Box>
              <Box sx={{ ml: "auto", position: "relative" }}>
                <PricePill label="77 left" />
              </Box>
            </Box>
            <Box
              sx={{
                position: "relative",
                width: "100%",
                height: "6px",
                borderRadius: "3px",
                background: "rgba(255,255,255,0.05)",
                mt: "12px",
              }}
            >
              <Box
                sx={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  width: "28.5%",
                  height: "6px",
                  borderRadius: "3px",
                  background: "#4557B0",
                }}
              />
            </Box>
          </Box>

          <FeatureList features={baseFeatures} />

          <Typography
            sx={{
              mt: "auto",
              pt: "16px",
              textAlign: "center",
              fontSize: "12px",
              color: "rgba(255,255,255,0.4)",
            }}
          >
            <Box component="span" sx={{ color: "#ffffff", fontWeight: 600 }}>
              Note:
            </Box>{" "}
            Available only for early users during launch
          </Typography>
        </Box>

        {/* Card 2 — Introductory price (Early-bird) */}
        <Box
          sx={{
            width: { xs: "100%", md: "372px" },
            maxWidth: { xs: "400px", md: "372px" },
            minHeight: { md: "610px" },
            background:
              "linear-gradient(179.97deg, rgba(84, 97, 112, 0.5) 0%, rgba(13, 0, 48, 0.2) 99.97%)",
            borderRadius: "16px",
            border: "1px solid rgba(255,255,255,0.15)",
            backdropFilter: "blur(12px)",
            textAlign: "left",
            padding: "28px 26px",
            display: "flex",
            flexDirection: "column",
            position: "relative",
            zIndex: 1,
          }}
        >
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <Typography
              sx={{
                color: "#ffffff",
                fontSize: "18px",
                fontWeight: 600,
                whiteSpace: "nowrap",
              }}
            >
              Introductory price
            </Typography>
            <HeaderBadge
              icon={
                <DarkModeIcon sx={{ fontSize: "11px", color: "#ffffff" }} />
              }
              label="EARLY-BIRD PHASE"
            />
          </Box>
          <Typography
            sx={{
              color: "rgba(255,255,255,0.4)",
              fontSize: "13px",
              mt: "6px",
            }}
          >
            Early-Bird pricing for your first 3 months.
          </Typography>

          <Box sx={{ display: "flex", alignItems: "baseline", gap: "8px", mt: "24px" }}>
            <Typography
              sx={{ color: "#ffffff", fontSize: "36px", fontWeight: 600, lineHeight: 1 }}
            >
              {symbol} {currentPricing.intro}
            </Typography>
            <Typography
              sx={{ color: "rgba(255,255,255,0.6)", fontSize: "14px" }}
            >
              /month
            </Typography>
          </Box>
          <Box sx={{ mt: "12px" }}>
            <PricePill label="Valid For First 3 Months" />
          </Box>

          <Divider />

          {/* Price transition widget */}
          <Box
            sx={{
              position: "relative",
              display: "flex",
              width: "100%",
              mt: "24px",
              borderRadius: "8px",
              overflow: "hidden",
              border: "1px solid rgba(255,255,255,0.05)",
            }}
          >
            <Box
              sx={{
                flex: 1,
                background: "rgba(69,87,176,0.2)",
                padding: "12px 0 14px",
                textAlign: "center",
              }}
            >
              <Typography
                sx={{ color: "rgba(255,255,255,0.6)", fontSize: "12px" }}
              >
                First 3 months
              </Typography>
              <Typography
                sx={{ color: "#ffffff", fontSize: "14px", fontWeight: 600, mt: "4px" }}
              >
                {symbol} {currentPricing.intro}{" "}
                <Box
                  component="span"
                  sx={{
                    color: "rgba(255,255,255,0.6)",
                    fontSize: "10px",
                    fontWeight: 400,
                  }}
                >
                  /month
                </Box>
              </Typography>
            </Box>
            <Box
              sx={{
                flex: 1,
                background: "rgba(255,255,255,0.05)",
                padding: "12px 0 14px",
                textAlign: "center",
              }}
            >
              <Typography
                sx={{ color: "rgba(255,255,255,0.6)", fontSize: "12px" }}
              >
                After 3 months
              </Typography>
              <Typography
                sx={{ color: "#ffffff", fontSize: "14px", fontWeight: 600, mt: "4px" }}
              >
                {symbol} {currentPricing.monthly}{" "}
                <Box
                  component="span"
                  sx={{
                    color: "rgba(255,255,255,0.6)",
                    fontSize: "10px",
                    fontWeight: 400,
                  }}
                >
                  /month
                </Box>
              </Typography>
            </Box>
            <Box
              sx={{
                position: "absolute",
                top: "50%",
                left: "50%",
                transform: "translate(-50%, -50%)",
                width: "24px",
                height: "24px",
                borderRadius: "50%",
                background: "rgba(255,255,255,0.1)",
                backdropFilter: "blur(6px)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <ArrowForwardIcon sx={{ fontSize: "12px", color: "#ffffff" }} />
            </Box>
          </Box>

          <FeatureList features={baseFeatures} />

          <Typography
            sx={{
              mt: "auto",
              pt: "16px",
              textAlign: "center",
              fontSize: "12px",
              color: "rgba(255,255,255,0.4)",
            }}
          >
            <Box component="span" sx={{ color: "#ffffff", fontWeight: 600 }}>
              Note:
            </Box>{" "}
            You&apos;ll be notified before the price changes.
          </Typography>
        </Box>

        {/* Card 3 — Standard Plan */}
        <Box sx={sideCardSx}>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <Typography
              sx={{ color: "#ffffff", fontSize: "18px", fontWeight: 600 }}
            >
              Standard Plan
            </Typography>
            <HeaderBadge
              icon={
                <CreditCardIcon sx={{ fontSize: "12px", color: "#ffffff" }} />
              }
              label="STANDARD PLAN"
            />
          </Box>
          <Typography
            sx={{
              color: "rgba(255,255,255,0.4)",
              fontSize: "13px",
              mt: "6px",
            }}
          >
            Full BUEZ Access
          </Typography>

          <Box sx={{ display: "flex", alignItems: "baseline", gap: "8px", mt: "28px" }}>
            <Typography
              sx={{ color: "#ffffff", fontSize: "36px", fontWeight: 600, lineHeight: 1 }}
            >
              {symbol} {currentPricing.monthly}
            </Typography>
            <Typography
              sx={{ color: "rgba(255,255,255,0.6)", fontSize: "14px" }}
            >
              /month
            </Typography>
          </Box>
          <Box sx={{ mt: "12px" }}>
            <PricePill label="Billed Monthly" />
          </Box>

          <Divider />

          <FeatureList features={standardFeatures} />

          <Box
            sx={{
              mt: "auto",
              pt: "16px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: "6px",
            }}
          >
            <LockOutlinedIcon
              sx={{ fontSize: "13px", color: "rgba(255,255,255,0.4)" }}
            />
            <Typography
              sx={{ fontSize: "12px", color: "rgba(255,255,255,0.4)" }}
            >
              Secure payment. Cancel anytime
            </Typography>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default PricingPlan;
