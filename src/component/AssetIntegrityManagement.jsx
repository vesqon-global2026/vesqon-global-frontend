import React from 'react';
import { Box, Typography, Container } from '@mui/material';
import Header from './Header';
import Footer from './Footer';

import bg2 from "../assets/image/TPI-img/asset-banner.jpg";
import section1 from "../assets/image/services-img-2.jpeg";
import section3 from "../assets/image/services-img-4.jpg";
import { fontMedium, fontBold, fontRegular } from '../assets/style/homeStyle';
import { useNavigate } from 'react-router-dom';

const AssetIntegrityManagement = () => {
  const navigate = useNavigate();

  const keyServices = [
    "Inspection of industrial plants including piping systems, storage tanks, utilities, process heaters, valves, and static equipment",
    "Risk-based inspection (RBI)",
    "Fitness for Service (FFS) evaluations",
    "In-service inspections during operation and shutdown",
    "In-situ metallography studies",
    "Corrosion mapping and analysis",
    "Corrosion management planning",
    "Root Cause Analysis (RCA)",
    "Life extension and remaining life assessments",
    "Pipeline integrity management"
  ];

  return (
    <Box>
      <Header />

      {/* HERO */}
      <Box
        sx={{
            width: "100%",
            height: { xs: "220px", md: "350px" },
            backgroundImage: `
               linear-gradient(rgba(28,28,28,0.8), rgba(28,28,28,0.8)),
              url(${bg2})
            `,
            backgroundSize: "cover",
            backgroundPosition: "center",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            mb: 10,
          }}
      >
        <Typography sx={{ color: "#fff", fontSize: { xs: "26px", md: "40px" }, ...fontBold }}>
          Asset Integrity Management
        </Typography>
      </Box>

      <Container maxWidth="lg">

        {/* IMAGE */}
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

        {/* ================= INTRO ================= */}
        <Box sx={{ mb: 12 }}>
          <Typography sx={{ ...fontBold, fontSize: "34px", textAlign: "center", mb: 6 }}>
            Asset Integrity for Safe & Reliable Operations
          </Typography>

          <Box
            sx={{
              display: "grid",
              gridTemplateColumns: { xs: "1fr", md: "1fr 1fr" },
              gap: 6
            }}
          >
            <Box>
              <Typography sx={textStyle}>
                Asset Integrity Management ensures that critical industrial assets—such as power plants,
                oil rigs, and refineries—operate safely, efficiently, and reliably throughout their lifecycle.
              </Typography>

              <Typography sx={{ ...textStyle, mt: 3 }}>
                Our services help maintain equipment in a fit-for-service condition while extending asset life
                in the most dependable, safe, and cost-effective manner.
              </Typography>
            </Box>

            <Box sx={{ borderLeft: { md: "1px solid #e2e8f0" }, pl: { md: 4 } }}>
              <Typography sx={textStyle}>
                By combining advanced inspection techniques with risk-based methodologies, we provide clear
                visibility into asset condition and performance.
              </Typography>

              <Typography sx={{ ...textStyle, mt: 3 }}>
                This enables informed decision-making, reduces operational risks, and ensures long-term sustainability.
              </Typography>
            </Box>
          </Box>
        </Box>

        {/* ================= KEY SERVICES ================= */}
<Box sx={{ mt: 14, mb: 14 }}>

  {/* HEADING */}
  <Typography
    sx={{
      ...fontBold,
      fontSize: { xs: "28px", md: "34px" },
      textAlign: "center",
      mb: 2
    }}
  >
    Key Services
  </Typography>

  {/* SUBTEXT */}
  <Typography
    sx={{
      ...fontRegular,
      textAlign: "center",
      color: "#64748b",
      maxWidth: "700px",
      mx: "auto",
      mb: 10,
      lineHeight: 1.7
    }}
  >
    Comprehensive inspection and integrity solutions designed to ensure safety,
    reliability, and long-term performance.
  </Typography>

  {/* GRID */}
  <Box
    sx={{
      maxWidth: "900px",
      mx: "auto",
      display: "grid",
      gridAutoFlow: "column", // 🔥 KEY
      gridTemplateRows: {
        xs: "repeat(10, auto)",
        md: "repeat(5, auto)" // ✅ 5 rows → 2 columns
      },
      gap: 3
    }}
  >
    {keyServices.map((item, i) => (
      <Box
        key={i}
        sx={{
          display: "flex",
          alignItems: "flex-start",
          gap: 3,
          // p: 3,
          borderRadius: "14px",
          transition: "0.3s",

          "&:hover": {
            background: "#f8fafc",
            transform: "translateX(4px)"
          }
        }}
      >
        {/* NUMBER */}
        <Box
          sx={{
            minWidth: "36px",
            height: "36px",
            borderRadius: "50%",
            background: "linear-gradient(135deg,#3f95ea,#52d3aa)",
            color: "#fff",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontSize: "13px",
            fontWeight: "bold",
            mt: "2px"
          }}
        >
          {i + 1}
        </Box>

        {/* TEXT */}
        <Typography
          sx={{
            ...fontMedium,
            fontSize: "15px",
            lineHeight: 1.8,
            color: "#1e293b"
          }}
        >
          {item}
        </Typography>
      </Box>
    ))}
  </Box>

</Box>

        {/* ================= EXPERTISE ================= */}
        <Box sx={{ mb: 12 }}>
          <Box
            sx={{
              display: "grid",
              gridTemplateColumns: { xs: "1fr", md: "1fr 1fr" },
              gap: 6,
              alignItems: "center"
            }}
          >
            <Box
              component="img"
              src={section3}
              sx={{
                width: "100%",
                borderRadius: "20px",
                boxShadow: "0 20px 50px rgba(0,0,0,0.1)"
              }}
            />

            <Box>
              <Typography sx={{ ...fontBold, fontSize: "24px", mb: 2 }}>
                Expertise & Optimization
              </Typography>

              <Typography sx={textStyle}>
                With decades of experience, we deliver advanced risk-based methodologies and practical toolsets
                to optimize asset integrity management processes.
              </Typography>

              <Typography sx={{ ...textStyle, mt: 3 }}>
                Our approach ensures improved reliability, operational efficiency, and long-term performance
                while maintaining strict safety and environmental standards.
              </Typography>
            </Box>
          </Box>
        </Box>

        {/* ================= VALUE ================= */}
        <Box sx={{ mb: 14 }}>
          <Typography sx={{ ...fontBold, fontSize: "30px", textAlign: "center", mb: 6 }}>
            Long-Term Asset Value & Reliability
          </Typography>

          <Box
            sx={{
              display: "grid",
              gridTemplateColumns: { xs: "1fr", md: "1fr 1fr" },
              gap: 6
            }}
          >
            <Box>
              <Typography sx={textStyle}>
                Asset Integrity Management involves evaluating material degradation, corrosion behavior,
                and operational risks to understand the true condition of equipment.
              </Typography>

              <Typography sx={{ ...textStyle, mt: 3 }}>
                By identifying root causes such as aging, corrosion, or manufacturing defects, we enable
                optimized short-term repairs and long-term asset strategies.
              </Typography>
            </Box>

            <Box sx={{ borderLeft: { md: "1px solid #e2e8f0" }, pl: { md: 4 } }}>
              <Typography sx={textStyle}>
                A well-structured AIM program ensures that the right people, systems, and processes are in
                place throughout the asset lifecycle.
              </Typography>

              <Typography sx={{ ...textStyle, mt: 3 }}>
                This guarantees safe operations, regulatory compliance, and cost-effective performance while
                maintaining environmental and safety standards.
              </Typography>
            </Box>
          </Box>
        </Box>

        {/* ================= CTA ================= */}
        <Box sx={ctaStyle}>
          <Typography sx={{ ...fontBold, fontSize: "26px", mb: 2 }}>
            Optimize Your Asset Performance Today
          </Typography>

          <Typography sx={{ ...fontRegular, mb: 4, color: "#64748b" }}>
            Ensure reliability and safety with expert asset integrity solutions.
          </Typography>

          <Box sx={ctaButton}     onClick={() => navigate("/contact")}
>Get Started</Box>
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
  cursor: "pointer"
};

export default AssetIntegrityManagement;