// React
import React, { useState } from "react";
// MUI Imports
import { Box, Typography, IconButton } from "@mui/material";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
// Assets
import ExplorePhone1 from "../../assets/explorePhone1.png";
import ExplorePhone2 from "../../assets/explorePhone2.png";
import ExplorePhone3 from "../../assets/explorePhone3.png";
import ExplorePhone4 from "../../assets/explorePhone4.png";
import ExplorePhone5 from "../../assets/explorePhone5.png";

const images = [
  ExplorePhone1,
  ExplorePhone2,
  ExplorePhone3,
  ExplorePhone4,
  ExplorePhone5,
];

// Fan layout from the Figma SVG (relative to the container center):
// slots -2..2 → center offset, width, z-index
const slots: Record<
  number,
  { offset: number; width: number; z: number }
> = {
  [-2]: { offset: -367, width: 249, z: 3 },
  [-1]: { offset: -195, width: 272, z: 4 },
  [0]: { offset: 0, width: 309, z: 5 },
  [1]: { offset: 195, width: 272, z: 4 },
  [2]: { offset: 367, width: 249, z: 3 },
};

const ExploreBuez = () => {
  const [active, setActive] = useState(2);

  const prev = () => setActive((a) => (a + images.length - 1) % images.length);
  const next = () => setActive((a) => (a + 1) % images.length);

  const arrowSx = {
    position: "absolute",
    top: "50%",
    transform: "translateY(-50%)",
    zIndex: 10,
    background: "rgba(255, 255, 255, 0.1)",
    backdropFilter: "blur(10px)",
    color: "#ffffff",
    width: "50px",
    height: "50px",
    borderRadius: "50%",
    "&:hover": {
      background: "rgba(255, 255, 255, 0.2)",
    },
  } as const;

  return (
    <Box
      id="exploreBuez"
      sx={{
        background: "#020617",
        pb: { xs: "80px", md: "140px" },
        pt: { xs: "80px", md: "110px" },
        px: { xs: "15px", md: "20px" },
        textAlign: "center",
        minHeight: "600px",
        overflowX: "clip",
      }}
    >
      <Box
        sx={{
          maxWidth: "1428px",
          margin: "0 auto",
          position: "relative",
          "&::before": {
            content: '""',
            position: "absolute",
            top: "-216px",
            right: "-921px",
            width: "1540px",
            height: "1560px",
            background:
              "radial-gradient(circle closest-side, rgba(47,128,181,0.3) 0%, rgba(47,128,181,0.12) 35%, rgba(47,128,181,0.04) 60%, transparent 80%)",
            pointerEvents: "none",
            display: { xs: "none", md: "block" },
            zIndex: 0,
          },
        }}
      >
        <Typography
          component="h2"
          sx={{
            color: "#ffffff",
            fontSize: { xs: "28px", md: "40px" },
            fontWeight: 500,
            lineHeight: 1.2,
            mb: { xs: "12px", md: "16px" },
            position: "relative",
          }}
        >
          Explore the BUEZ App Interface
        </Typography>
        <Typography
          component="p"
          sx={{
            color: "rgba(255,255,255,0.6)",
            fontSize: { xs: "16px", lg: "18px" },
            lineHeight: 1.7,
            maxWidth: { xs: "100%", lg: "990px" },
            margin: "0 auto",
            mb: { xs: "40px", md: "50px" },
            position: "relative",
          }}
        >
          Our clean, intuitive design makes connecting with helpers, posting
          tasks, and getting things done smoothly. Enjoy a truly smooth and
          user-friendly experience from start to finish.
        </Typography>

        {/* Fanned phone stack */}
        <Box sx={{ position: "relative" }}>
          <IconButton
            onClick={prev}
            sx={{ ...arrowSx, left: { xs: "0", md: "10px" } }}
          >
            <ArrowBackIosNewIcon sx={{ fontSize: "20px" }} />
          </IconButton>
          <IconButton
            onClick={next}
            sx={{ ...arrowSx, right: { xs: "0", md: "10px" } }}
          >
            <ArrowForwardIosIcon sx={{ fontSize: "20px" }} />
          </IconButton>

          <Box
            sx={{
              position: "relative",
              height: { xs: "540px", md: "620px" },
            }}
          >
            {images.map((img, index) => {
              // slot -2..2 relative to the active phone
              const rel =
                ((index - active + 2 + images.length) % images.length) - 2;
              const slot = slots[rel];
              return (
                <Box
                  key={index}
                  component="img"
                  src={img}
                  alt={`BUEZ Interface ${index + 1}`}
                  onClick={() => setActive(index)}
                  sx={{
                    position: "absolute",
                    top: "50%",
                    left: "50%",
                    width: {
                      xs: rel === 0 ? "260px" : "0px",
                      md: `${slot.width}px`,
                    },
                    height: "auto",
                    transform: {
                      xs: "translate(-50%, -50%)",
                      md: `translate(calc(-50% + ${slot.offset}px), -50%)`,
                    },
                    zIndex: slot.z,
                    cursor: rel === 0 ? "default" : "pointer",
                    transition: "all 0.5s ease",
                    opacity: { xs: rel === 0 ? 1 : 0, md: 1 },
                  }}
                />
              );
            })}
          </Box>

          {/* Dots */}
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              gap: "10px",
              mt: "36px",
            }}
          >
            {images.map((_, index) => (
              <Box
                key={index}
                onClick={() => setActive(index)}
                sx={{
                  width: index === active ? "12px" : "8px",
                  height: index === active ? "12px" : "8px",
                  borderRadius: "50%",
                  background:
                    index === active ? "#ffffff" : "rgba(255, 255, 255, 0.3)",
                  cursor: "pointer",
                  transition: "all 0.3s ease",
                }}
              />
            ))}
          </Box>
        </Box>
      </Box>
    </Box>
  );
};
export default ExploreBuez;
