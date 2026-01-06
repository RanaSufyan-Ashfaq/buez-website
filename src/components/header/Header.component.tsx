// MUI Imports
import {
  Box,
  AppBar,
  Toolbar,
  Typography,
  Link,
  IconButton,
  Drawer,
  List,
  ListItem,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import { useState } from "react";
// Assets
import BuezLogo from "../../assets/buez.svg";
// Shared Component
import { GetBetaVersionButton } from "../../shared/GetBetaVersionButton";

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { label: "HOME", href: "#home" },
    { label: "ABOUT BUEZ", href: "#about" },
    { label: "OUR FEATURES", href: "#ourFeatures" },
    { label: "WHY BUEZ", href: "#whyBuez" },
    { label: "PRICING", href: "#pricing" },
    { label: "EXPLORE", href: "#exploreBuez" },
  ];

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const handleNavClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string
  ) => {
    e.preventDefault();
    if (href.startsWith("#")) {
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  return (
    <>
      <Box
        sx={{
          position: "fixed",
          top: "20px",
          left: 0,
          right: 0,
          zIndex: 1100,
          px: { xs: "15px", md: "20px" },
        }}
      >
        <AppBar
          position="static"
          sx={{
            background:
              "linear-gradient(135deg, rgba(255, 255, 255, 0.08), rgba(255, 255, 255, 0.02))",
            backdropFilter: "blur(290px)",
            boxShadow: "0 2px 20px rgba(0, 0, 0, 0.1)",
            borderRadius: "51px",
            maxWidth: "1428px",
            margin: "0 auto",
            border: "1px solid rgba(255, 255, 255, 0.06)",
          }}
        >
          <Toolbar
            sx={{
              px: { xs: "20px", md: "40px" },
              py: { xs: "6px", md: "15px" },
              justifyContent: "space-between",
              minHeight: "auto !important",
            }}
          >
            <Box
              component="a"
              href="#"
              sx={{
                display: "flex",
                alignItems: "center",
                textDecoration: "none",
              }}
            >
              <Box
                component="img"
                src={BuezLogo}
                alt="BUEZ Logo"
                sx={{
                  height: { xs: "45px", md: "60px" },
                }}
              />
            </Box>

            <Box
              sx={{
                display: { xs: "none", sm: "none", md: "none", lg: "flex" },
                gap: { md: "32px", lg: "40px" },
                alignItems: "center",
              }}
            >
              {navItems.map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  onClick={(e) => handleNavClick(e, item.href)}
                  underline="none"
                  sx={{
                    color: "#ffffff",
                    fontSize: "16px",
                    fontWeight: 400,
                    letterSpacing: "0.5px",
                    transition: "color 0.3s ease",
                    "&:hover": {
                      color: "#2F80B5",
                    },
                  }}
                >
                  {item.label}
                </Link>
              ))}
            </Box>

            <Box
              sx={{
                display: { xs: "none", sm: "none", md: "none", lg: "block" },
              }}
            >
              <GetBetaVersionButton />
            </Box>

            <IconButton
              onClick={toggleMobileMenu}
              sx={{
                display: { xs: "block", sm: "block", md: "block", lg: "none" },
                color: "#ffffff",
              }}
            >
              <MenuIcon />
            </IconButton>
          </Toolbar>
        </AppBar>
      </Box>

      <Drawer
        anchor="right"
        open={mobileMenuOpen}
        onClose={toggleMobileMenu}
        sx={{
          display: { xs: "block", sm: "block", md: "block", lg: "none" },
          "& .MuiDrawer-paper": {
            width: "300px",
            background: "#020617",
            padding: "20px",
          },
        }}
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "flex-end",
          }}
        >
          <IconButton onClick={toggleMobileMenu} sx={{ color: "#ffffff" }}>
            <CloseIcon />
          </IconButton>
        </Box>

        <List sx={{ display: "flex", flexDirection: "column", gap: "8px" }}>
          {navItems.map((item) => (
            <ListItem key={item.label} sx={{ padding: 0 }}>
              <Link
                href={item.href}
                onClick={(e) => {
                  toggleMobileMenu();
                  handleNavClick(e, item.href);
                }}
                underline="none"
                sx={{
                  color: "#ffffff",
                  fontSize: "16px",
                  fontWeight: 500,
                  padding: "12px 16px",
                  width: "100%",
                  display: "block",
                  borderRadius: "8px",
                  transition: "all 0.3s ease",
                  "&:hover": {
                    background: "rgba(47, 128, 181, 0.1)",
                    color: "#2F80B5",
                  },
                }}
              >
                {item.label}
              </Link>
            </ListItem>
          ))}
        </List>

        <Box sx={{ mt: "30px" }}>
          <GetBetaVersionButton />
        </Box>
      </Drawer>
    </>
  );
};

export default Header;
