import React from 'react';
import { Box, Typography, Container } from '@mui/material';
import Header from './Header';
import Footer from './Footer';
import bg2 from "../assets/image/bg-img2.jpg";
import section1 from "../assets/image/services-img-3.png";
import section2 from "../assets/image/services-img-5.jpg";
import { fontMedium, fontBold, fontRegular } from '../assets/style/homeStyle';
import { useNavigate } from 'react-router-dom';

const NDTServices = () => {
  const navigate = useNavigate();

  const ndtMethods = [
    "Radiographic Testing",
    "Ultrasonic Testing",
    "Magnetic Particle Inspection",
    "Dye / Liquid Penetrant Inspection",
    "Hardness Testing",
    "Ferrite Testing",
    "Positive Material Identification (PMI)",
    "Vacuum Box Testing",
    "Phased Array Ultrasonic Testing (PAUT)",
    "Time of Flight Ultrasonic Testing (TOFD)",
    "IRIS / ECT / RFET / MFL on Tubes",
    "Borescope Inspection",
    "MFL Tank Floor Mapping",
    "Thermography"
  ];

  return (
    <Box>
      <Header />

      {/* HERO */}
      <Box
        sx={{
          height: { xs: "220px", md: "350px" },
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
          Non-Destructive Testing (NDT) Services
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

        {/* INTRO */}
        <Box sx={{ mb: 12 }}>
          <Typography sx={{ ...fontBold, fontSize: "34px", textAlign: "center", mb: 6 }}>
            Advanced Non-Destructive Testing Solutions
          </Typography>

          <Box
            sx={{
              display: "grid",
              gridTemplateColumns: { xs: "1fr", md: "1fr 1fr" },
              gap: 6
            }}
          >
            {/* LEFT */}
           {/* LEFT */}
<Box>
  <Typography sx={textStyle}>
    The field of non-destructive testing (NDT) combines materials science and quality assurance. 
    NDT is used to check and assess materials, components, or assemblies without damaging their serviceability.
  </Typography>

  <Typography sx={{ ...textStyle, mt: 3 }}>
    One essential method for guaranteeing the quality and safety of systems and goods is non-destructive testing. 
    It can be used to check for a number of possible faults, such as manufacturing difficulties or cracks and other flaws. 
    You can save future expensive repairs or replacements by identifying these issues early.
  </Typography>
</Box>

{/* RIGHT */}
<Box sx={{ borderLeft: { md: "1px solid #e2e8f0" }, pl: { md: 4 } }}>
  <Typography sx={textStyle}>
    The thickness of materials, the hardness of metals, and the characteristics of composites can all be measured using this technique.
  </Typography>

  <Typography sx={{ ...textStyle, mt: 3 }}>
    We provide a broad range of NDT services, including both traditional and cutting-edge NDT approaches.
  </Typography>
</Box>
          </Box>
        </Box>

        {/* METHODS */}
        <Box sx={{ mt: 14, mb: 14 }}>

          <Typography sx={{ ...fontBold, fontSize: "32px", textAlign: "center", mb: 2 }}>
            NDT Methods
          </Typography>

          <Typography
            sx={{
              ...fontRegular,
              textAlign: "center",
              color: "#64748b",
              maxWidth: "700px",
              mx: "auto",
              mb: 10
            }}
          >
            We provide a comprehensive range of NDT services, covering both conventional and advanced inspection techniques.
          </Typography>

          {/* 2 COLUMN COLUMN-WISE */}
          <Box
            sx={{
              maxWidth: "900px",
              mx: "auto",
              display: "grid",
              gridAutoFlow: "column",
              gridTemplateRows: {
                xs: "repeat(14, auto)",
                md: "repeat(7, auto)"
              },
              gap: 3
            }}
          >
            {ndtMethods.map((item, i) => (
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

                <Typography sx={{ ...fontMedium, fontSize: "15px", lineHeight: 1.8 }}>
                  {item}
                </Typography>
              </Box>
            ))}
          </Box>
        </Box>

        {/* EXPERTISE */}
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
              src={section2}
              sx={{
                width: "100%",
                borderRadius: "20px",
                boxShadow: "0 20px 50px rgba(0,0,0,0.1)"
              }}
            />

            <Box>
              <Typography sx={{ ...fontBold, fontSize: "24px", mb: 2 }}>
                Expertise & Reliability
              </Typography>

              <Typography sx={textStyle}>
                We provide a broad range of NDT services, including both traditional and advanced inspection techniques, tailored to meet diverse industrial requirements.
              </Typography>

              <Typography sx={{ ...textStyle, mt: 3 }}>
                Our team ensures accurate results, improved safety, and long-term asset integrity through reliable and efficient inspection solutions.
              </Typography>
            </Box>
          </Box>
        </Box>

        {/* CTA */}
        <Box sx={ctaStyle}>
          <Typography sx={{ ...fontBold, fontSize: "26px", mb: 2 }}>
            Ensure Safety with Advanced NDT Solutions
          </Typography>

          <Typography sx={{ ...fontRegular, mb: 4, color: "#64748b" }}>
            Partner with us for reliable, accurate, and industry-leading inspection services.
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

export default NDTServices;