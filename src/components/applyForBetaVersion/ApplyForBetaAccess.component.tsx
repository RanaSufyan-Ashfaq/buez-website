import React from "react";
import {
  Box,
  Typography,
  TextField,
  Button,
  Checkbox,
  FormControlLabel,
  useMediaQuery,
  Dialog,
  DialogContent,
} from "@mui/material";
import emailjs from "emailjs-com";
import { useTheme, styled } from "@mui/material/styles";
import { useFormik } from "formik";
import * as Yup from "yup";
import CheckCircleCheckedIcon from "@mui/icons-material/CheckCircle";
import CheckIconSuccess from "../../assets/checkIconSuccess.svg";
import CheckCircle from "../../assets/checkCircle.svg";

// Validation Schema
const validationSchema = Yup.object({
  fullName: Yup.string().required("Name is required"),
  email: Yup.string()
    .email("Enter a valid email")
    .required("Email is required"),
  deviceModel: Yup.string(),
  hasAgreed: Yup.boolean()
    .oneOf([true], "You must accept the terms and conditions")
    .required("You must accept the terms and conditions"),
});

const CustomTextField = styled(TextField)({
  "& .MuiOutlinedInput-root": {
    backgroundColor: "rgba(255, 255, 255, 0.05)",
    borderRadius: "300px",
    color: "#fff",
    "& fieldset": {
      borderColor: "transparent",
    },
    "&:hover fieldset": {
      borderColor: "rgba(255, 255, 255, 0.2)",
    },
    "&.Mui-focused fieldset": {
      borderColor: "#6366f1",
    },
    input: {
      padding: "16px",
      "&::placeholder": {
        color: "#6b7280",
        opacity: 1,
      },
    },
  },
  "& .MuiFormHelperText-root": {
    marginLeft: 0,
  },
});

const ApplyForBetaAccess: React.FC = () => {
  const theme = useTheme();
  const [isSending, setIsSending] = React.useState(false);

  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  const [openSuccessModal, setOpenSuccessModal] = React.useState(false);

  const handleCloseModal = () => {
    setOpenSuccessModal(false);
    formik.resetForm();
  };

  const formik = useFormik({
    initialValues: {
      fullName: "",
      email: "",
      deviceModel: "",
      hasAgreed: false,
    },
    validationSchema: validationSchema,
    onSubmit: (values, { resetForm }) => {
      setIsSending(true);
      emailjs
        .send(
          import.meta.env.VITE_EMAILJS_SERVICE_ID,
          import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
          {
            fullName: values.fullName,
            email: values.email,
            deviceModel: values.deviceModel || "N/A",
          },
          import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
        )
        .then(
          () => {
            setOpenSuccessModal(true);
            resetForm();
            setIsSending(false);
          },
          (error) => {
            console.error("Email send error:", error);
            alert("Failed to send request. Please try again.");
            setIsSending(false);
          },
        );
    },
  });

  return (
    <Box
      sx={{
        minHeight: "100vh",
        backgroundColor: "#020617", // Very dark blue/black
        color: "#fff",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        pt: { xs: "110px", md: "180px" },
        pb: { xs: "60px", md: "100px" },
        px: 2,
        backgroundImage:
          "radial-gradient(circle at 50% 0%, #0f172a 0%, #020617 50%)",
      }}
    >
      <Box sx={{ textAlign: "center", mb: 8, maxWidth: "600px" }}>
        <Typography
          variant="h3"
          component="h1"
          sx={{
            fontWeight: 600,
            mb: 2,
            fontSize: { xs: "24px", md: "52px" },
          }}
        >
          Apply for Beta Access
        </Typography>
        <Typography variant="body1" sx={{ color: "#94a3b8" }}>
          Submit your name and email to receive your TestFlight invitation.
        </Typography>
      </Box>

      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          backgroundColor: "#1e293b", // Card background
          borderRadius: "24px",
          overflow: "hidden",
          width: "100%",
          maxWidth: "1200px",
          boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.5)",
          border: "1px solid rgba(255, 255, 255, 0.05)",
        }}
      >
        {/* Left Side - Info */}
        <Box
          sx={{
            flex: 1,
            backgroundColor: "#1e293b",
            p: { xs: 2, md: 8 },
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            position: "relative",
            "&::before": {
              content: '""',
              position: "absolute",
              top: "-20%",
              left: "-20%",
              width: "60%",
              height: "60%",
              background:
                "radial-gradient(circle, rgba(99, 102, 241, 0.15) 0%, rgba(0,0,0,0) 70%)",
              zIndex: 0,
            },
          }}
        >
          <Box sx={{ position: "relative", zIndex: 1 }}>
            <Box
              sx={{
                display: "inline-block",
                backgroundColor: "#4557B0",
                color: "#fff",
                px: 2,
                py: 0.5,
                borderRadius: "999px",
                fontSize: "0.75rem",
                fontWeight: 600,
                mb: 3,
              }}
            >
              Test Flight
            </Box>
            <Typography
              variant="h2"
              sx={{
                fontWeight: 700,
                mb: 1,
                fontSize: { xs: "24px", md: "52px" },
                lineHeight: 1.1,
              }}
            >
              Join Our App
            </Typography>
            <Typography
              variant="h2"
              sx={{
                fontWeight: 700,
                mb: 4,
                fontSize: { xs: "24px", md: "52px" },
                lineHeight: 1.1,
              }}
            >
              Beta Program
            </Typography>

            <Typography
              variant="body1"
              sx={{ color: "#94a3b8", maxWidth: "450px", lineHeight: 1.6 }}
            >
              Fill out the form with your name and email to request beta access.
              We'll send you a TestFlight invitation, which you can accept to
              download and try the BUEZ from TestFlight.
            </Typography>
          </Box>
        </Box>

        {/* Right Side - Form */}
        <Box
          sx={{
            flex: 1,
            m: { xs: 2, md: 7 },
            backgroundColor: "#4557B033", // Slightly lighter right side
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            p: "25px",
            borderRadius: "16px",
          }}
        >
          <form onSubmit={formik.handleSubmit}>
            <Box sx={{ mb: 3 }}>
              <Typography sx={{ mb: 1, fontWeight: 500, color: "#e2e8f0" }}>
                Full Name
              </Typography>
              <CustomTextField
                fullWidth
                id="fullName"
                name="fullName"
                placeholder="Steve Smith"
                value={formik.values.fullName}
                onChange={formik.handleChange}
                error={
                  formik.touched.fullName && Boolean(formik.errors.fullName)
                }
                helperText={formik.touched.fullName && formik.errors.fullName}
              />
            </Box>

            <Box sx={{ mb: 3 }}>
              <Typography sx={{ mb: 1, fontWeight: 500, color: "#e2e8f0" }}>
                Email address
              </Typography>
              <CustomTextField
                fullWidth
                id="email"
                name="email"
                placeholder="example@gmail.com"
                value={formik.values.email}
                onChange={formik.handleChange}
                error={formik.touched.email && Boolean(formik.errors.email)}
                helperText={formik.touched.email && formik.errors.email}
              />
            </Box>

            <Box sx={{ mb: 4 }}>
              <Typography sx={{ mb: 1, fontWeight: 500, color: "#e2e8f0" }}>
                Device Model (Optional)
              </Typography>
              <CustomTextField
                fullWidth
                id="deviceModel"
                name="deviceModel"
                placeholder="e.g. iPhone 17pro max"
                value={formik.values.deviceModel}
                onChange={formik.handleChange}
              />
            </Box>

            <FormControlLabel
              sx={{ mb: 4, alignItems: "flex-start", ml: -1 }}
              control={
                <Checkbox
                  id="hasAgreed"
                  name="hasAgreed"
                  checked={formik.values.hasAgreed}
                  onChange={formik.handleChange}
                  icon={
                    <Box
                      sx={{
                        width: 20,
                        height: 20,
                        border: "2px solid #64748b",
                        borderRadius: "4px",
                      }}
                    />
                  }
                  checkedIcon={
                    <Box
                      sx={{
                        width: 20,
                        height: 20,
                        backgroundColor: "#fff",
                        border: "2px solid #fff",
                        borderRadius: "4px",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                      }}
                    >
                      <CheckCircleCheckedIcon
                        sx={{ fontSize: 16, color: "#1e293b" }}
                      />
                    </Box>
                  } // Simplify checked icon for now
                  sx={{ mt: -0.5, mr: 1 }}
                />
              }
              label={
                <Box>
                  <Typography
                    variant="body2"
                    sx={{ color: "#e2e8f0", fontSize: "12px", fontWeight: 500 }}
                  >
                    I have read and agree to participate in the{" "}
                    <span
                      style={{
                        color: "#FFD1A6E5",
                        textDecoration: "underline",
                      }}
                    >
                      beta testing
                    </span>
                  </Typography>
                  <Typography
                    variant="caption"
                    sx={{
                      color: "#64748b",
                      fontSize: "10px",
                      display: "block",
                      mt: 0.5,
                    }}
                  >
                    I understand this app may contain bugs or unfinished
                    features.
                  </Typography>
                  {formik.touched.hasAgreed && formik.errors.hasAgreed && (
                    <Typography
                      variant="caption"
                      color="error"
                      display="block"
                      sx={{ mt: 0.5 }}
                    >
                      {formik.errors.hasAgreed}
                    </Typography>
                  )}
                </Box>
              }
            />

            <Button
              type="submit"
              variant="contained"
              fullWidth
              disabled={isSending}
              sx={{
                bgcolor: "#F3F4F6",
                color: "#0f172a",
                py: 2,
                borderRadius: "300px",
                textTransform: "none",
                fontSize: "16px",
                fontWeight: 500,
                "&:hover": {
                  bgcolor: "#F3F4F6",
                },
                "&.Mui-disabled": {
                  bgcolor: "#F3F4F6",
                  color: "#0f172a",
                  opacity: 0.7,
                },
              }}
            >
              {isSending ? "Sending..." : "Request Beta Access"}
            </Button>
          </form>
        </Box>
      </Box>

      {/* Success Modal */}
      <Dialog
        open={openSuccessModal}
        onClose={handleCloseModal}
        PaperProps={{
          sx: {
            borderRadius: "16px",
            padding: "40px 21px",
            maxWidth: "400px",
            width: "100%",
            boxShadow: "0 0px 87.8px 0px #4557B080",
            border: "2px solid transparent",
            background:
              "linear-gradient(180deg, rgba(30, 41, 59, 1) 0%, rgba(15, 23, 42, 1) 100%) padding-box, linear-gradient(180deg, #191921 0%, #2394E0 50%, #191921 100%) border-box",
          },
        }}
        slotProps={{
          backdrop: {
            sx: {
              backgroundColor: "rgba(2, 6, 23, 0.8)",
              backdropFilter: "blur(4px)",
            },
          },
        }}
      >
        <DialogContent
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            textAlign: "center",
            padding: "0",
          }}
        >
          <Box
            sx={{
              mb: 3,
            }}
            component="img"
            src={CheckIconSuccess}
            alt="Success"
          />

          <Typography
            variant="h5"
            sx={{
              color: "#fff",
              fontWeight: 700,
              mb: 1,
              fontSize: "24px",
            }}
          >
            Thank you!
          </Typography>
          <Typography
            variant="body2"
            sx={{
              color: "#94a3b8",
              mb: 4,
              fontSize: "16px",
              fontWeight: 500,
              lineHeight: 1.6,
            }}
          >
            We've received your request. Your TestFlight invitation will be sent
            to your email shortly.
          </Typography>
          <Button
            onClick={handleCloseModal}
            variant="contained"
            sx={{
              bgcolor: "#fff",
              color: "#0f172a",
              borderRadius: "300px",
              width: "78%",
              py: 1.5,
              textTransform: "none",
              fontWeight: 600,
              fontSize: "16px",
              "&:hover": {
                bgcolor: "#f8fafc",
              },
              display: "flex",
              alignItems: "center",
              gap: 1,
            }}
          >
            <Box component="img" src={CheckCircle} alt="Success" /> Ok
          </Button>
        </DialogContent>
      </Dialog>
    </Box>
  );
};

export default ApplyForBetaAccess;
