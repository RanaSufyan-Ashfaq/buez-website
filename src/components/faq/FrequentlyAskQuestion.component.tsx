import React from "react";
// MUI Imports
import {
  Box,
  Typography,
  Accordion,
  AccordionSummary,
  AccordionDetails,
} from "@mui/material";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import { useState } from "react";
import { useTranslation } from "react-i18next";

const faqKeys = ["what", "trial", "post", "offer", "subscription"];

const FrequentlyAskQuestion = () => {
  const { t } = useTranslation();
  const [expanded, setExpanded] = useState<string | false>(false);

  const handleChange =
    (panel: string) => (_event: React.SyntheticEvent, isExpanded: boolean) => {
      setExpanded(isExpanded ? panel : false);
    };

  const faqs = faqKeys.map((key, index) => ({
    id: `panel${index + 1}`,
    question: t(`faq.items.${key}.question`),
    answer: t(`faq.items.${key}.answer`),
  }));

  return (
    <Box
      sx={{
        background: "#020617",
        pt: { xs: "60px", md: "80px" },
        pb: { xs: "70px", md: "96px" },
        px: { xs: "15px", md: "20px" },
      }}
    >
      <Box
        sx={{
          maxWidth: "1428px",
          margin: "0 auto",
          display: "grid",
          gridTemplateColumns: { xs: "1fr", md: "570px 1fr" },
          alignItems: "center",
          columnGap: { md: "159px" },
        }}
      >
        {/* Left Section - Heading & Description */}
        <Box>
          <Typography
            component="h2"
            sx={{
              color: "#ffffff",
              fontSize: { xs: "28px", md: "34px" },
              fontWeight: 600,
              lineHeight: 1.2,
              mb: { xs: "20px", md: "36px" },
            }}
          >
            {t("faq.title")}
          </Typography>

          <Typography
            component="p"
            sx={{
              color: "rgba(255,255,255,0.6)",
              fontSize: "16px",
              lineHeight: 1.7,
              maxWidth: "485px",
            }}
          >
            {t("faq.subtitle")}
          </Typography>
        </Box>

        {/* Right Section - FAQ Accordion */}
        <Box sx={{ mt: { xs: "50px", md: 0 } }}>
          {faqs.map((faq, index) => (
            <Accordion
              key={faq.id}
              expanded={expanded === faq.id}
              onChange={handleChange(faq.id)}
              sx={{
                background: "transparent",
                border: "none",
                boxShadow: "none",
                color: "#ffffff",
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
                  <ChevronRightIcon
                    sx={{
                      color: "#ffffff",
                      fontSize: "20px",
                    }}
                  />
                }
                sx={{
                  padding: 0,
                  minHeight: { xs: "60px", md: "86px" },
                  "&.Mui-expanded": {
                    minHeight: { xs: "60px", md: "86px" },
                  },
                  "& .MuiAccordionSummary-expandIconWrapper.Mui-expanded": {
                    transform: "rotate(90deg)",
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
                    color: "#F4FFF4",
                    fontSize: "16px",
                    fontWeight: 600,
                    lineHeight: 1.25,
                  }}
                >
                  {index + 1}. {faq.question}
                </Typography>
              </AccordionSummary>
              <AccordionDetails
                sx={{
                  padding: { xs: "0 0 22px 0", md: "0 54px 34px 0" },
                }}
              >
                <Typography
                  sx={{
                    color: "rgba(255,255,255,0.6)",
                    fontSize: { xs: "14px", md: "15px" },
                    lineHeight: 1.7,
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
