// MUI Imports
// React
import React, { useState } from "react";
// MUI Imports
import { Box, Typography, IconButton } from "@mui/material";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
// Slider
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
// Assets
import ExploreBuezImage from "../../assets/ExploreBuezOne.svg";
import ExploreBuezImageTwo from "../../assets/ExploreBuezTwo.svg";
// Custom Arrow Components
const NextArrow = ({ onClick }: { onClick?: () => void }) => {
  return (
    <IconButton
      onClick={onClick}
      sx={{
        position: "absolute",
        right: { xs: "0", md: "-60px" },
        top: "50%",
        transform: "translateY(-50%)",
        zIndex: 2,
        background: "rgba(255, 255, 255, 0.1)",
        backdropFilter: "blur(10px)",
        color: "#ffffff",
        width: "50px",
        height: "50px",
        borderRadius: "50%",
        "&:hover": {
          background: "rgba(255, 255, 255, 0.2)",
        },
      }}
    >
      <ArrowForwardIosIcon sx={{ fontSize: "20px" }} />
    </IconButton>
  );
};
const PrevArrow = ({ onClick }: { onClick?: () => void }) => {
  return (
    <IconButton
      onClick={onClick}
      sx={{
        position: "absolute",
        left: { xs: "0", md: "-60px" },
        top: "50%",
        transform: "translateY(-50%)",
        zIndex: 2,
        background: "rgba(255, 255, 255, 0.1)",
        backdropFilter: "blur(10px)",
        color: "#ffffff",
        width: "50px",
        height: "50px",
        borderRadius: "50%",
        "&:hover": {
          background: "rgba(255, 255, 255, 0.2)",
        },
      }}
    >
      <ArrowBackIosNewIcon sx={{ fontSize: "20px" }} />
    </IconButton>
  );
};
const ExploreBuez = () => {
  const [slideIndex, setSlideIndex] = useState(0);
  const images = [
    ExploreBuezImage,
    ExploreBuezImage,
    ExploreBuezImage,
    ExploreBuezImage,
  ];
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    centerMode: true,
    centerPadding: "0",
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    beforeChange: (current: number, next: number) => setSlideIndex(next),
    responsive: [
      {
        breakpoint: 960, // Tablet and Mobile
        settings: {
          slidesToShow: 1, // Show 1 slide on mobile for better view
          centerMode: true,
          centerPadding: "40px",
        },
      },
    ],
    customPaging: (i: number) => (
      <Box
        sx={{
          width: i === slideIndex ? "12px" : "8px",
          height: i === slideIndex ? "12px" : "8px",
          borderRadius: "50%",
          background: i === slideIndex ? "#ffffff" : "rgba(255, 255, 255, 0.3)",
          transition: "all 0.3s ease",
          mt: "20px",
        }}
      />
    ),
    appendDots: (dots: any) => (
      <Box
        sx={{
          display: "flex !important",
          justifyContent: "center",
          gap: "8px",
          alignItems: "center",
          bottom: "-40px", // Adjust dot position
        }}
      >
        {dots}
      </Box>
    ),
  };
  return (
    <Box
      sx={{
        background: "linear-gradient(142deg, #2F80B5 0%, #020617 20%)",
        pb: { xs: "80px", md: "140px" },
        pt: { xs: "80px", md: "100px" },
        px: { xs: "15px", md: "20px" },
        textAlign: "center",
        // overflow: "hidden", // Removed to prevent clipping of shadows/dots
        minHeight: "600px",
      }}
    >
      <Box sx={{ maxWidth: "1428px", margin: "0 auto" }}>
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
          Explore the BUEZ App Interface
        </Typography>
        <Typography
          component="p"
          sx={{
            color: "#e5e7eb",
            fontSize: { xs: "16px", lg: "18px" },
            maxWidth: "60%",
            margin: "0 auto",
            mb: { xs: "60px", md: "50px" },
          }}
        >
          Experience a clean, intuitive design that makes connecting, posting,
          and completing tasks effortless — all within a smooth and
          user-friendly interface.
        </Typography>
        <Box
          sx={{
            position: "relative",
            px: { xs: "0", md: "60px" }, // Add padding for arrows
            ".slick-slide": {
              opacity: 0.5,
              transform: "scale(0.8)",
              transition: "all 0.5s ease",
            },
            ".slick-center": {
              opacity: 1,
              transform: "scale(1.05)", // Grow effect for center slide
              zIndex: 10,
              position: "relative",
            },
            ".slick-list": {
              padding: "60px 0 !important", // Increased padding to prevent clipping of scaled image
              // overflow: "visible", // Removed to hide extra slides on sides
            },
            // Hide default slick dots
            ".slick-dots li": {
              margin: 0,
              width: "auto",
              height: "auto",
            },
          }}
        >
          <Slider {...settings}>
            {images.map((img, index) => (
              <Box key={index} sx={{ outline: "none", px: "10px" }}>
                <Box
                  component="img"
                  src={img}
                  alt={`BUEZ Interface ${index + 1}`}
                  sx={{
                    width: "100%",
                    height: "auto",
                    borderRadius: "24px",
                    boxShadow:
                      index === slideIndex
                        ? "0 20px 50px rgba(0,0,0,0.5)"
                        : "none",
                  }}
                />
              </Box>
            ))}
          </Slider>
        </Box>
      </Box>
    </Box>
  );
};
export default ExploreBuez;
