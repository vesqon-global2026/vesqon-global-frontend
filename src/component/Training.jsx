import React from 'react';
import { Box, Typography, Container } from '@mui/material';
import Header from './Header';
import Footer from './Footer';
import bg2 from "../assets/image/bg-img2.jpg";
import section1 from "../assets/image/services-img-5.jpg";
import { fontMedium, fontBold, fontRegular } from '../assets/style/homeStyle';
import ScienceIcon from "@mui/icons-material/Science";
import PrecisionManufacturingIcon from "@mui/icons-material/PrecisionManufacturing";
import FormatPaintIcon from "@mui/icons-material/FormatPaint";
import FactCheckIcon from "@mui/icons-material/FactCheck";
import { useNavigate } from 'react-router-dom';
const Training = () => {
    const navigate = useNavigate();

  return (
    <Box>
      <Header />

      {/* HERO */}
      <Box
        sx={{
          height: { xs: "220px", md: "320px" },
         backgroundImage: `
  linear-gradient(rgba(28,28,28,0.8), rgba(28,28,28,0.8)),
  url(${section1})
`,
 backgroundSize: "cover",
                backgroundPosition: "center",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          mb: 10
        }}
      >
        <Typography sx={{ color: "#fff", fontSize: { xs: "26px", md: "40px" }, ...fontBold }}>
          Training Programs
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

        {/* MAIN CONTENT */}
        <Box sx={{ mb: 12 }}>

          <Typography sx={{ ...fontBold, fontSize: "34px", textAlign: "center", mb: 6 }}>
            Professional Training for Industry Excellence
          </Typography>

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
                Training and development programs focus on expanding knowledge and enhancing technical skill sets, enabling professionals to improve performance and efficiency in their roles.
              </Typography>

              <Typography sx={{ ...textStyle, mt: 3 }}>
                All programs are delivered by experienced internal and external trainers using modern teaching methodologies to ensure effective learning outcomes.
              </Typography>
            </Box>

            {/* RIGHT */}
            <Box sx={{ borderLeft: { md: "1px solid #e2e8f0" }, pl: { md: 4 } }}>
              <Typography sx={textStyle}>
                Training sessions can be conducted at our facilities, client locations, or nearby project sites, offering flexibility and convenience based on operational requirements.
              </Typography>

              <Typography sx={{ ...textStyle, mt: 3 }}>
                Our goal is to equip teams with practical knowledge and industry-relevant expertise for real-world applications.
              </Typography>
            </Box>
          </Box>

        </Box>

        {/* COURSES (PREMIUM GRID LIKE INDUSTRIES) */}
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
    Training Courses
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
    We offer specialized training programs designed to meet diverse industrial requirements.
  </Typography>

  {/* GRID (2 COLUMN) */}
  <Box
    sx={{
      display: "grid",
      gridTemplateColumns: {
        xs: "1fr",
        md: "repeat(2, 1fr)"
      },
      gap: 6,
      maxWidth: "900px",
      mx: "auto"
    }}
  >
    {[
      {
        title: "Non Destructive Examination",
        desc: "Comprehensive training on testing techniques for material evaluation.",
        icon: <ScienceIcon />
      },
      {
        title: "Welding Inspection",
        desc: "Ensuring weld quality, safety, and compliance with industry standards.",
        icon: <PrecisionManufacturingIcon />
      },
      {
        title: "Painting Inspection",
        desc: "Inspection techniques for coating systems and surface protection.",
        icon: <FormatPaintIcon />
      },
      {
        title: "Quality Management & Auditing",
        desc: "Training on quality systems, auditing processes, and compliance standards.",
        icon: <FactCheckIcon />
      }
    ].map((item, i) => (
      <Box
        key={i}
        sx={{
          p: 6,
          borderRadius: "20px",
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
        <Typography sx={{ ...fontBold, fontSize: "20px", mb: 1 }}>
          {item.title}
        </Typography>

        {/* DESC */}
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
        {/* CTA */}
        <Box sx={ctaStyle}>
          <Typography sx={{ ...fontBold, fontSize: "26px", mb: 2 }}>
            Enhance Your Team’s Skills Today
          </Typography>

          <Typography sx={{ ...fontRegular, mb: 4, color: "#64748b" }}>
            Empower your workforce with industry-focused training programs.
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

export default Training;