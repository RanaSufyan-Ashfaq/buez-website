import React, { useState } from "react";
// MUI Imports
import { Box, Typography, IconButton } from "@mui/material";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
// Assets
import Step1Image from "../../assets/step1.svg";
import Step2Image from "../../assets/step2.svg";
import Step3Image from "../../assets/step3.svg";
import Step4Image from "../../assets/step4.svg";
import Step5Image from "../../assets/step5.svg";

const steps = [
  {
    label: "Post Request",
    title: "Post a request",
    description: "Post your request in just a few steps.",
    image: Step1Image,
  },
  {
    label: "Browse & Apply",
    title: "Browse & Apply",
    description: "Browse requests and apply to the ones that fit you.",
    image: Step2Image,
  },
  {
    label: "Manage Requests",
    title: "Manage Requests",
    description: "Track all your requests and stay updated in one place.",
    image: Step3Image,
  },
  {
    label: "Complete Request",
    title: "Complete Requests",
    description: "Complete the job and mark the request as done.",
    image: Step4Image,
  },
  {
    label: "Review & Rate",
    title: "Review & Rate",
    description: "Review the service and rate your experience.",
    image: Step5Image,
  },
];

const stackStyles = [
  { x: 0, scale: 1, blur: 0, opacity: 1 },
  { x: 28, scale: 0.82, blur: 1, opacity: 1.75 },
  { x: 49, scale: 0.7, blur: 2, opacity: 1.55 },
  { x: 67, scale: 0.6, blur: 3, opacity: 1.4 },
  { x: 82, scale: 0.52, blur: 4, opacity: 1.28 },
];

const HowBuezWorks = () => {
  const [activeStep, setActiveStep] = useState(0);

  const handlePrev = () => {
    setActiveStep((prev) => (prev === 0 ? steps.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setActiveStep((prev) => (prev === steps.length - 1 ? 0 : prev + 1));
  };

  return (
    <Box
      sx={{
        position: "relative",
        background: "#020617",
        overflow: "hidden",
        py: { xs: "80px", md: "140px" },
        px: { xs: "15px", md: "20px" },
        textAlign: "center",
        "&::after": {
          content: '""',
          position: "absolute",
          bottom: "-220px",
          right: "-220px",
          width: "700px",
          height: "700px",
          borderRadius: "50%",
          background: "rgba(47, 128, 181, 1)",
          filter: "blur(180px)",
          opacity: 0.55,
          pointerEvents: "none",
          zIndex: 0,
        },
      }}
    >
      <Box sx={{ position: "relative", zIndex: 1 }}>
        <Typography
          component="h2"
          sx={{
            color: "#ffffff",
            fontSize: { xs: "28px", md: "40px", lg: "40px" },
            fontWeight: 500,
            lineHeight: 1.2,
            mb: { xs: "12px", md: "16px" },
          }}
        >
          How BUEZ Works
        </Typography>

        <Typography
          component="p"
          sx={{
            color: "#e5e7eb",
            fontSize: { xs: "16px", lg: "18px" },
            margin: "0 auto",
            mb: { xs: "60px", md: "70px" },
          }}
        >
          BUEZ makes it simple to manage your service needs or grow your
          business. Follow these 5 easy steps to get things done.
        </Typography>

        <Box
          sx={{
            position: "relative",
            maxWidth: "1300px",
            margin: "0 auto",
            px: { xs: "0", md: "70px" },
          }}
        >
          <IconButton
            onClick={handlePrev}
            sx={{
              position: "absolute",
              left: { xs: "0", md: "-10px" },
              top: "50%",
              transform: "translateY(-50%)",
              background: "rgba(255, 255, 255, 0.1)",
              backdropFilter: "blur(10px)",
              color: "#ffffff",
              width: "48px",
              height: "48px",
              zIndex: 10,
              "&:hover": { background: "rgba(255, 255, 255, 0.2)" },
            }}
          >
            <ArrowBackIosNewIcon sx={{ fontSize: "18px" }} />
          </IconButton>

          <IconButton
            onClick={handleNext}
            sx={{
              position: "absolute",
              right: { xs: "0", md: "-10px" },
              top: "50%",
              transform: "translateY(-50%)",
              background: "rgba(255, 255, 255, 0.1)",
              backdropFilter: "blur(10px)",
              color: "#ffffff",
              width: "48px",
              height: "48px",
              zIndex: 10,
              "&:hover": { background: "rgba(255, 255, 255, 0.2)" },
            }}
          >
            <ArrowForwardIosIcon sx={{ fontSize: "18px" }} />
          </IconButton>

          <Box
            sx={{
              display: "flex",
              flexDirection: { xs: "column", md: "row" },
              alignItems: "center",
              gap: { xs: "40px", md: "40px" },
            }}
          >
            <Box
              sx={{
                width: { xs: "100%", md: "350px" },
                flexShrink: 0,
                textAlign: "left",
              }}
            >
              <Box
                sx={{
                  display: "inline-block",
                  background: "rgba(255,255,255,0.05)",
                  border: "1px solid rgba(255,255,255,0.1)",
                  borderRadius: "999px",
                  padding: "6px 16px",
                  mb: "20px",
                }}
              >
                <Typography sx={{ color: "#cbd5e1", fontSize: "13px" }}>
                  Step {activeStep + 1}
                </Typography>
              </Box>

              <Typography
                sx={{
                  color: "#ffffff",
                  fontSize: { xs: "26px", md: "32px" },
                  fontWeight: 700,
                  mb: "16px",
                }}
              >
                {steps[activeStep].title}
              </Typography>
              <Typography
                sx={{
                  color: "#94a3b8",
                  fontSize: "16px",
                  lineHeight: 1.6,
                  // whiteSpace: { md: "nowrap" },
                }}
              >
                {steps[activeStep].description}
              </Typography>
            </Box>

            <Box
              sx={{
                flex: 1,
                width: "100%",
                height: { xs: "380px", md: "560px" },
                position: "relative",
                display: "flex",
                alignItems: "center",
                justifyContent: { xs: "center", md: "flex-start" },
                py: { xs: "20px", md: "50px" },
              }}
            >
              {steps.map((step, index) => {
                const offset =
                  (index - activeStep + steps.length) % steps.length;
                const style = stackStyles[offset];
                return (
                  <Box
                    key={index}
                    component="img"
                    src={step.image}
                    alt={step.title}
                    sx={{
                      position: "absolute",
                      top: "50%",
                      left: {
                        xs: `calc(50% + ${style.x * 0.6}%)`,
                        md: `${style.x}%`,
                      },
                      width: { xs: "180px", md: "260px" },
                      height: "auto",
                      transform: {
                        xs: `translate(-50%, -50%) scale(${style.scale})`,
                        md: `translateY(-50%) scale(${style.scale})`,
                      },
                      transformOrigin: "left center",
                      filter: `blur(${style.blur}px)`,
                      opacity: style.opacity,
                      transition: "all 0.4s ease",
                      zIndex: 5 - offset,
                      borderRadius: "24px",
                      boxShadow:
                        offset === 0 ? "0 20px 50px rgba(0,0,0,0.5)" : "none",
                    }}
                  />
                );
              })}
            </Box>
          </Box>
        </Box>

        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexWrap: "wrap",
            maxWidth: "1300px",
            margin: "0 auto",
            mt: { xs: "50px", md: "30px" },
            padding: { xs: "16px 20px", md: "16px 40px" },
            borderRadius: "999px",
            border: "1px solid rgba(129,140,248,0.5)",
          }}
        >
          {steps.map((step, index) => (
            <React.Fragment key={index}>
              <Box
                onClick={() => setActiveStep(index)}
                sx={{
                  display: "flex",
                  alignItems: "center",
                  gap: "10px",
                  cursor: "pointer",
                }}
              >
                <Box
                  sx={{
                    width: "32px",
                    height: "32px",
                    borderRadius: "50%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    flexShrink: 0,
                    background:
                      index === activeStep
                        ? "linear-gradient(90deg, #2F80B5, #4557B0)"
                        : "transparent",
                    border:
                      index === activeStep
                        ? "none"
                        : "1px solid rgba(255,255,255,0.2)",
                  }}
                >
                  <Typography
                    sx={{
                      color: index === activeStep ? "#ffffff" : "#64748b",
                      fontSize: "13px",
                      fontWeight: 600,
                    }}
                  >
                    {String(index + 1).padStart(2, "0")}
                  </Typography>
                </Box>
                <Typography
                  sx={{
                    color: index === activeStep ? "#ffffff" : "#64748b",
                    fontSize: "14px",
                    fontWeight: index === activeStep ? 600 : 400,
                    whiteSpace: "nowrap",
                  }}
                >
                  {step.label}
                </Typography>
              </Box>

              {index < steps.length - 1 && (
                <Box
                  sx={{
                    flex: { xs: "0 0 24px", md: 1 },
                    minWidth: { xs: "24px", md: "60px" },
                    height: "1px",
                    background: "rgba(255,255,255,0.15)",
                    mx: { xs: "10px", md: "20px" },
                  }}
                />
              )}
            </React.Fragment>
          ))}
        </Box>
      </Box>
    </Box>
  );
};

export default HowBuezWorks;
