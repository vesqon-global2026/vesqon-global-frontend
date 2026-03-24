import React from 'react';
import { Box, Typography, Container } from '@mui/material';
import Header from './Header';
import Footer from './Footer';
import bg2 from "../assets/image/TPI-img/tech-banner.jpg";
import section1 from "../assets/image/services-img-4.jpg";
import { fontMedium, fontBold, fontRegular } from '../assets/style/homeStyle';
import EngineeringIcon from "@mui/icons-material/Engineering";
import PrecisionManufacturingIcon from "@mui/icons-material/PrecisionManufacturing";
import FactCheckIcon from "@mui/icons-material/FactCheck";
import BuildCircleIcon from "@mui/icons-material/BuildCircle";
import ScienceIcon from "@mui/icons-material/Science";
import HealthAndSafetyIcon from "@mui/icons-material/HealthAndSafety";
import { useNavigate } from 'react-router-dom';
const TechnicalStaffing = () => {
  const navigate = useNavigate();

  return (
    <Box>
      <Header />

      {/* HERO */}
      <Box
        sx={{
          height: { xs: "220px", md: "320px" },
          backgroundImage: `linear-gradient(to right, rgba(15,23,42,0.85), rgba(15,23,42,0.4)), url(${bg2})`,
          backgroundSize: "cover",
                backgroundPosition: "center",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          mb: 10
        }}
      >
        <Typography sx={{ color: "#fff", fontSize: { xs: "26px", md: "40px" }, ...fontBold }}>
          Technical Staffing 
        </Typography>
      </Box>

      <Container maxWidth="lg">

        {/* CENTER IMAGE */}
        <Box sx={{ display: "flex", justifyContent: "center", mb: 8 }}>
          <Box
            component="img"
            src={section1}
            sx={{
              width: "100%",
              maxWidth: "1000px",
              height: { xs: "220px", md: "420px" },
              objectFit: "cover",
              borderRadius: "20px",
              boxShadow: "0 25px 60px rgba(0,0,0,0.15)"
            }}
          />
        </Box>

        {/* MAIN CONTENT (TPI STYLE) */}
        <Box sx={{ mb: 12 }}>

          {/* HEADING */}
          <Typography
            sx={{
              ...fontBold,
              fontSize: "34px",
              textAlign: "center",
              mb: 6
            }}
          >
            Skilled Workforce for Critical Projects
          </Typography>

          {/* TWO COLUMN TEXT */}
          <Box
            sx={{
              display: "grid",
              gridTemplateColumns: { xs: "1fr", md: "1fr 1fr" },
              gap: 6
            }}
          >
            {/* LEFT */}
            <Box>
              <Typography sx={textStyle}>
                We provide technical staffing solutions across industries such as power, infrastructure, petrochemical, and oil & gas sectors. Our experts are carefully selected to meet project-specific requirements and ensure high performance.
              </Typography>

              <Typography sx={{ ...textStyle, mt: 3 }}>
                Our team brings strong technical knowledge and hands-on experience, enabling organizations to maintain quality, safety, and operational efficiency in demanding environments.
              </Typography>
            </Box>

            {/* RIGHT */}
            <Box sx={{ borderLeft: { md: "1px solid #e2e8f0" }, pl: { md: 4 } }}>
              <Typography sx={textStyle}>
                We act as a reliable extension of your workforce, supporting your business goals with flexible and scalable staffing solutions tailored to your project needs.
              </Typography>

              <Typography sx={{ ...textStyle, mt: 3 }}>
                By providing skilled professionals, we help organizations improve productivity, reduce risks, and maintain a competitive advantage in the market.
              </Typography>
            </Box>
          </Box>

        </Box>


<Box
  sx={{
    mt: 12,
    py: 12,
    px: { xs: 3, md: 12 },
    background: "linear-gradient(to bottom, #f8fafc, #ffffff)",
    textAlign: "center"
  }}
>
  {/* HEADING */}
  <Typography sx={{ ...fontBold, fontSize: "36px", mb: 2 }}>
    Key Staffing Capabilities
  </Typography>

  {/* SUBTEXT */}
  <Typography
    sx={{
      ...fontRegular,
      maxWidth: "700px",
      mx: "auto",
      mb: 8,
      color: "#64748b"
    }}
  >
    Delivering skilled professionals tailored to meet project demands across multiple disciplines.
  </Typography>

  {/* GRID */}
  <Box
    sx={{
      display: "grid",
      gridTemplateColumns: {
        xs: "1fr",
        sm: "repeat(2, 1fr)",
        md: "repeat(3, 1fr)"
      },
      gap: 5
    }}
  >
    {[
      {
        title: "Inspection of Industrial Plants",
        desc: "Piping systems, storage tanks, utilities, process heaters, valves, and static equipment.",
        icon: <EngineeringIcon />
      },
      {
        title: "Risk-Based Inspection (RBI)",
        desc: "Advanced inspection strategies based on risk evaluation and operational criticality.",
        icon: <FactCheckIcon />
      },
      {
        title: "Fitness for Service (FFS)",
        desc: "Assessment of equipment integrity to ensure safe and reliable continued operation.",
        icon: <BuildCircleIcon />
      },
      {
        title: "In-Service Inspection",
        desc: "Inspection during operation and shutdown to maintain performance and safety.",
        icon: <PrecisionManufacturingIcon />
      },
      {
        title: "Metallography & Corrosion Analysis",
        desc: "Material behavior evaluation, corrosion mapping, and degradation analysis.",
        icon: <ScienceIcon />
      },
      {
        title: "RCA & Integrity Management",
        desc: "Root cause analysis and corrosion management to enhance asset lifecycle.",
        icon: <HealthAndSafetyIcon />
      }
    ].map((item, i) => (
      <Box
        key={i}
        sx={{
          p: 5,
          borderRadius: "18px",
          background: "#fff",
          border: "1px solid #eef2f7",
          transition: "all 0.35s ease",
          textAlign: "left",

          "&:hover": {
            transform: "translateY(-8px)",
            boxShadow: "0 20px 40px rgba(0,0,0,0.08)",
            borderColor: "#dbeafe"
          }
        }}
      >
        {/* ICON */}
        <Box
          sx={{
            mb: 3,
            width: "60px",
            height: "60px",
            borderRadius: "14px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            background: "linear-gradient(135deg,#3f95ea,#52d3aa)",
            color: "#fff",

            "& svg": {
              fontSize: "28px"
            }
          }}
        >
          {item.icon}
        </Box>

        {/* TITLE */}
        <Typography
          sx={{
            ...fontBold,
            fontSize: "20px",
            mb: 1
          }}
        >
          {item.title}
        </Typography>

        {/* DESCRIPTION */}
        <Typography
          sx={{
            ...fontRegular,
            fontSize: "14px",
            color: "#64748b",
            lineHeight: 1.6
          }}
        >
          {item.desc}
        </Typography>
      </Box>
    ))}
  </Box>
</Box>




        {/* CTA (SAME AS TPI STYLE) */}
        <Box sx={ctaStyle}>
          <Typography sx={{ ...fontBold, fontSize: "26px", mb: 2 }}>
            Build a Stronger Workforce Today
          </Typography>

          <Typography sx={{ ...fontRegular, mb: 4, color: "#64748b" }}>
            Get access to qualified technical professionals tailored to your project needs.
          </Typography>

          <Box sx={ctaButton}     onClick={() => navigate("/contact")}
>
            Get Started
          </Box>
        </Box>

      </Container>

      <Footer />
    </Box>
  );
};

const textStyle = {
  ...fontRegular,
  fontSize: "15px",
  lineHeight: 1.9,
  color: "#475569",
  textAlign: "justify"
};

const ctaStyle = {
  mt: 10,
  mb: 10,
  textAlign: "center",
  p: 6,
  borderRadius: "16px",
  background: "#f8fafc"
};

const ctaButton = {
  display: "inline-block",
  px: 5,
  py: 2,
  borderRadius: "30px",
  background: "linear-gradient(135deg,#3f95ea,#52d3aa)",
  color: "#fff",
  cursor: "pointer",
  transition: "0.3s",
  "&:hover": {
    transform: "scale(1.05)"
  }
};

export default TechnicalStaffing;