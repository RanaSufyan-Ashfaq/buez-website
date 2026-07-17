// MUI Imports
import { Box, AppBar, Toolbar, Typography, Link, IconButton, Drawer, List, ListItem, Menu, MenuItem } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import LanguageIcon from "@mui/icons-material/Language";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { useTranslation } from "react-i18next";
// Assets
import BuezLogo from "../../assets/buez.svg";
// Shared Component
import { GetBetaVersionButton } from "../../shared/GetBetaVersionButton";

const languages = [
  { code: "en", label: "English", short: "EN" },
  { code: "de", label: "Deutsch (CH)", short: "DE" },
];

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [langAnchor, setLangAnchor] = useState<null | HTMLElement>(null);
  const navigate = useNavigate();
  const location = useLocation();
  const { t, i18n } = useTranslation();

  const currentLang =
    languages.find((l) => l.code === i18n.resolvedLanguage) ?? languages[0];

  const changeLanguage = (code: string) => {
    i18n.changeLanguage(code);
    setLangAnchor(null);
  };

  const navItems = [
    { label: t("nav.home"), href: "/" },
    { label: t("nav.about"), href: "#about" },
    { label: t("nav.features"), href: "#ourFeatures" },
    { label: t("nav.why"), href: "#whyBuez" },
    { label: t("nav.pricing"), href: "#pricing" },
    { label: t("nav.explore"), href: "#exploreBuez" },
  ];

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const scrollToSection = (hash: string) => {
    const element = document.querySelector(hash);
    if (element) {
      // Small timeout to ensure accurate position calculation if things depend on layout
      setTimeout(() => {
        element.scrollIntoView({ behavior: "smooth" });
      }, 100);
    }
  };

  useEffect(() => {
    // specific check for state passed from navigation
    if (location.state && location.state.scrollTo && location.pathname === "/") {
      scrollToSection(location.state.scrollTo);
      // Clean up state to avoid re-scrolling on random updates
      window.history.replaceState({}, document.title);
    }
  }, [location]);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    if (href === "/") {
      // Home: scroll to the top of the landing page (hero)
      if (location.pathname === "/") {
        window.scrollTo({ top: 0, behavior: "smooth" });
      } else {
        navigate("/");
        setTimeout(() => window.scrollTo({ top: 0 }), 100);
      }
    } else if (href.startsWith("#")) {
      if (location.pathname === "/") {
        // Already on home page, just scroll
        scrollToSection(href);
      } else {
        // Not on home page, navigate to home and pass content to scroll to
        navigate("/", { state: { scrollTo: href } });
      }
    } else {
      // External link or other route
      navigate(href);
    }
    setMobileMenuOpen(false);
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
            background: "linear-gradient(135deg, rgba(255, 255, 255, 0.08), rgba(255, 255, 255, 0.02)), linear-gradient(rgba(2, 6, 23, 0.65), rgba(2, 6, 23, 0.65))",
            backdropFilter: "blur(20px)",
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
              href="/"
              onClick={(e) => handleNavClick(e, "/")}
              sx={{
                display: "flex",
                alignItems: "center",
                textDecoration: "none",
                cursor: "pointer",
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
                    cursor: "pointer",
                    "&:hover": {
                      color: "#8799F2",
                    },
                  }}
                >
                  {item.label}
                </Link>
              ))}
            </Box>

            <Box
              sx={{
                display: { xs: "none", sm: "none", md: "none", lg: "flex" },
                alignItems: "center",
                gap: "20px",
              }}
            >
              <Box
                onClick={(e) => setLangAnchor(e.currentTarget)}
                sx={{
                  display: "flex",
                  alignItems: "center",
                  gap: "6px",
                  cursor: "pointer",
                  color: "#ffffff",
                  transition: "color 0.3s ease",
                  "&:hover": { color: "#8799F2" },
                }}
              >
                <LanguageIcon sx={{ fontSize: "20px" }} />
                <Typography sx={{ fontSize: "16px", fontWeight: 500 }}>
                  {currentLang.short}
                </Typography>
                <KeyboardArrowDownIcon sx={{ fontSize: "18px" }} />
              </Box>

              <GetBetaVersionButton label={t("nav.downloadApp")} scrollTo="#downloadApp" />
            </Box>

            <Menu
              anchorEl={langAnchor}
              open={Boolean(langAnchor)}
              onClose={() => setLangAnchor(null)}
              disableScrollLock
              anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
              transformOrigin={{ vertical: "top", horizontal: "right" }}
              slotProps={{
                paper: {
                  sx: {
                    mt: "8px",
                    background: "#0B1020",
                    border: "1px solid rgba(255,255,255,0.1)",
                    borderRadius: "12px",
                    minWidth: "150px",
                  },
                },
              }}
            >
              {languages.map((lang) => (
                <MenuItem
                  key={lang.code}
                  selected={lang.code === currentLang.code}
                  onClick={() => changeLanguage(lang.code)}
                  sx={{
                    color: "#ffffff",
                    fontSize: "14px",
                    "&:hover": { background: "rgba(135,153,242,0.12)" },
                    "&.Mui-selected": {
                      background: "rgba(135,153,242,0.16)",
                      "&:hover": { background: "rgba(135,153,242,0.22)" },
                    },
                  }}
                >
                  {lang.label}
                </MenuItem>
              ))}
            </Menu>

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
                  cursor: "pointer",
                  "&:hover": {
                    background: "rgba(135, 153, 242, 0.08)",
                    color: "#8799F2",
                  },
                }}
              >
                {item.label}
              </Link>
            </ListItem>
          ))}
        </List>

        <Box
          sx={{
            display: "flex",
            gap: "10px",
            mt: "24px",
            px: "16px",
          }}
        >
          {languages.map((lang) => (
            <Box
              key={lang.code}
              onClick={() => changeLanguage(lang.code)}
              sx={{
                flex: 1,
                textAlign: "center",
                padding: "10px 0",
                borderRadius: "10px",
                cursor: "pointer",
                fontSize: "14px",
                fontWeight: 500,
                color: lang.code === currentLang.code ? "#ffffff" : "rgba(255,255,255,0.6)",
                background:
                  lang.code === currentLang.code
                    ? "rgba(135,153,242,0.18)"
                    : "rgba(255,255,255,0.05)",
                border: "1px solid rgba(255,255,255,0.08)",
              }}
            >
              {lang.label}
            </Box>
          ))}
        </Box>

        <Box sx={{ mt: "20px" }}>
          <GetBetaVersionButton label={t("nav.downloadApp")} scrollTo="#downloadApp" />
        </Box>
      </Drawer>
    </>
  );
};

export default Header;
