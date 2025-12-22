// MUI Imports
import {
  Box,
  Typography,
  Accordion,
  AccordionSummary,
  AccordionDetails,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { useState } from "react";

const FrequentlyAskQuestion = () => {
  const [expanded, setExpanded] = useState<string | false>(false);

  const handleChange =
    (panel: string) => (_event: React.SyntheticEvent, isExpanded: boolean) => {
      setExpanded(isExpanded ? panel : false);
    };

  const faqs = [
    {
      id: "panel1",
      question: "What is BUEZ?",
      answer:
        "BUEZ is a community-driven platform that connects people who need help with everyday tasks to those willing to offer assistance. It's designed to make collaboration simple, accessible, and rewarding for everyone.",
    },
    {
      id: "panel2",
      question: "How does the free trial work?",
      answer:
        "You get 14 days of completely free access to all BUEZ features. No credit card required. After the trial, you can choose to upgrade to our monthly subscription plan to continue enjoying full access.",
    },
    {
      id: "panel3",
      question: "How do I post a request?",
      answer:
        "Simply create an account, tap the 'Post Request' button, describe what you need help with, set your preferences, and publish. Your request will be visible to nearby users who can offer assistance.",
    },
    {
      id: "panel4",
      question: "Can I offer help instead of requesting it?",
      answer:
        "Absolutely! BUEZ is a two-way platform. You can browse requests from others in your area and offer your skills or time to help. It's a great way to earn recognition and build your reputation in the community.",
    },
    {
      id: "panel5",
      question: "Do I need a subscription to use BUEZ?",
      answer:
        "You can start with a 14-day free trial to explore all features. After that, a monthly subscription of $12.99 gives you unlimited access to post requests, offer help, and connect with your community.",
    },
  ];

  return (
    <Box
      sx={{
        background: "#020617",
        py: { xs: "80px", md: "140px" },
        px: { xs: "15px", md: "20px" },
      }}
    >
      <Box
        sx={{
          maxWidth: "1428px",
          margin: "0 auto",
          display: "grid",
          gridTemplateColumns: { xs: "1fr", md: "1fr 1fr" },
          alignItems: "center",
        }}
      >
        {/* Left Section - Heading & Description */}
        <Box>
          <Typography
            component="h2"
            sx={{
              color: "#ffffff",
              fontSize: { md: "24px", lg: "35px" },
              fontWeight: 500,
              lineHeight: 1.2,
              mb: { xs: "20px", md: "24px" },
            }}
          >
            Frequently Asked Questions
          </Typography>

          <Typography
            component="p"
            sx={{
              color: "#cbd5e1",
              fontSize: { xs: "16px", lg: "18px" },
              lineHeight: 1.7,
              maxWidth: "500px",
            }}
          >
            Have questions about using BUEZ? Find clear answers to help you get
            started, manage your account, and make the most of your experience.
          </Typography>
        </Box>

        {/* Right Section - FAQ Accordion */}
        <Box>
          {faqs.map((faq, index) => (
            <Accordion
              key={faq.id}
              expanded={expanded === faq.id}
              onChange={handleChange(faq.id)}
              sx={{
                background: "transparent",
                border: "none",
                borderBottom: "1px solid rgba(255,255,255,0.1)",
                boxShadow: "none",
                "&:before": {
                  display: "none",
                },
                "&.Mui-expanded": {
                  margin: 0,
                },
              }}
            >
              <AccordionSummary
                expandIcon={
                  <ExpandMoreIcon
                    sx={{
                      color: "#ffffff",
                      fontSize: "18px",
                    }}
                  />
                }
                sx={{
                  padding: { xs: "20px 0", md: "20px 0" },
                  minHeight: "auto",
                  "&.Mui-expanded": {
                    minHeight: "auto",
                  },
                  "& .MuiAccordionSummary-content": {
                    margin: 0,
                    "&.Mui-expanded": {
                      margin: 0,
                    },
                  },
                }}
              >
                <Typography
                  sx={{
                    color: "#ffffff",
                    fontSize: { xs: "16px", md: "18px" },
                    fontWeight: 500,
                  }}
                >
                  {index + 1}. {faq.question}
                </Typography>
              </AccordionSummary>
              <AccordionDetails
                sx={{
                  padding: "0 0 24px 0",
                }}
              >
                <Typography
                  sx={{
                    color: "#ffffff",
                    fontSize: { xs: "14px", md: "15px" },
                    lineHeight: 1.7,
                    // paddingLeft: { xs: "24px", md: "28px" },
                  }}
                >
                  {faq.answer}
                </Typography>
              </AccordionDetails>
            </Accordion>
          ))}
        </Box>
      </Box>
    </Box>
  );
};

export default FrequentlyAskQuestion;
