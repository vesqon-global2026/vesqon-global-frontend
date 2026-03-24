import React from 'react';
import { Box, Typography, Container } from '@mui/material';
import { motion } from 'framer-motion';
import Header from './Header';
import Footer from './Footer';
import bg2 from "../assets/image/TPI-img/tpi-banner.jpeg";
import section1 from "../assets/image/circle-img.jpeg";
import section2 from "../assets/image/TPI-img/img2.png";
import section3 from "../assets/image/services-img-3.png";
import { fontMedium, fontBold, fontRegular } from '../assets/style/homeStyle';
import { Navigate, useNavigate } from 'react-router-dom';
const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
};

const ThirdPartyInspection = () => {
  const navigate = useNavigate();

  return (
    <Box sx={{ width: "100%", minHeight: "100vh" }}>
      <Header />

      {/* Hero Section */}
     <Box
  sx={{
    width: "100%",
    height: { xs: "220px", md: "350px" },
    backgroundImage: `
  linear-gradient(rgba(28,28,28,0.8), rgba(28,28,28,0.8)),
  url(${bg2})
`,
   
    backgroundSize: "cover",
    // backgroundPosition: "center",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    mb: 10,
  }}
>
  <Typography
    sx={{
      color: "#fff",
      fontSize: { xs: "26px", md: "40px" },
      ...fontBold,
      textAlign: "center",
    }}
  >
    Third Party Inspection
  </Typography>
</Box>
<Container maxWidth="lg">

  {/* IMAGE WRAPPER (CENTER FIX) */}
  <Box sx={{ display: "flex", justifyContent: "center", mb: 8 }}>
    <Box
      component="img"
      src={section1}
      alt="Third Party Inspection"
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

  <motion.div
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true }}
    variants={fadeInUp}
  >
    <Box sx={{ py: 6 }}>

      {/* HEADING (IMPROVED) */}
      <Typography
        sx={{
          ...fontBold,
          fontSize: { xs: "26px", md: "36px" },
          textAlign: "center",
          mb: 6
        }}
      >
        Reliable Third Party Inspection for Quality Assurance
      </Typography>

      {/* TWO COLUMN CONTENT */}
      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: { xs: "1fr", md: "1fr 1fr" },
          gap: 6
        }}
      >
        {/* LEFT */}
        <Box>
          <Typography sx={{ ...fontRegular, fontSize: "15px", lineHeight: 1.9, color: "#475569", mb: 3, textAlign: "justify" }}>
            Third-party inspection is an independent evaluation of a product’s quality, conducted by a neutral entity rather than the buyer or manufacturer. It ensures that products meet required quality standards and that manufacturing processes comply with international quality management systems, client requirements, and relevant specifications.
          </Typography>

          <Typography sx={{ ...fontRegular, fontSize: "15px", lineHeight: 1.9, color: "#475569", textAlign: "justify" }}>
            One of the key advantages of third-party inspection is complete impartiality. Inspectors provide fair and objective assessments based solely on verified data, without compromising the interests of any party. This transparency allows all stakeholders to clearly understand the current status of the project and make informed decisions.
          </Typography>
        </Box>

        {/* RIGHT */}
        <Box
          sx={{
            borderLeft: { md: "1px solid #e2e8f0" },
            pl: { md: 4 }
          }}
        >
          <Typography sx={{ ...fontRegular, fontSize: "15px", lineHeight: 1.9, color: "#475569", mb: 3, textAlign: "justify" }}>
            By relying on factual and measurable insights, both parties involved in the manufacturing process gain a clear and accurate view of progress, ensuring decisions are driven purely by real data rather than assumptions.
          </Typography>

          <Typography sx={{ ...fontRegular, fontSize: "15px", lineHeight: 1.9, color: "#475569", textAlign: "justify" }}>
           Inspections are carried out by highly qualified and experienced professionals who work across diverse product categories. Their expertise enables consistent quality monitoring on-site, eliminating the need for constant physical presence while maintaining high standards.

Although third-party inspections involve an initial cost, they ultimately result in significant savings by preventing costly errors, reducing risks, and eliminating the need for maintaining an in-house quality control team.
          </Typography>
        </Box>
      </Box>

    </Box>
  </motion.div>
</Container>



      <Box sx={{ mt: 14, mb: 14 }}>
  {/* Heading */}
  <Typography
    sx={{
      ...fontBold,
      fontSize: { xs: "26px", md: "34px" },
      mb: 8,
      textAlign: "center"
    }}
  >
    Key Benefits of Third Party Inspection
  </Typography>

  {/* Cards */}
  <Box
    sx={{
      display: "grid",
      gridTemplateColumns: { xs: "1fr", sm: "repeat(2,1fr)", md: "repeat(3,1fr)" },
      gap: 5
    }}
  >
    {[
      {
        title: "Unbiased Evaluation",
        desc: "Independent inspections ensure complete transparency and eliminate conflicts of interest."
      },
      {
        title: "Quality Assurance",
        desc: "Ensures full compliance with international standards and client specifications."
      },
      {
        title: "Risk Reduction",
        desc: "Detect issues early to avoid costly delays, rework, and operational risks."
      }
    ].map((item, i) => (
      <Box
        key={i}
        sx={{
          p: 5,
          borderRadius: "20px",
          background: "linear-gradient(145deg,#ffffff,#f8fafc)",
          border: "1px solid #eef2f7",
          transition: "all 0.35s ease",
          position: "relative",
          overflow: "hidden",

          "&:hover": {
            transform: "translateY(-8px)",
            boxShadow: "0 20px 50px rgba(0,0,0,0.08)"
          }
        }}
      >
        {/* Top Accent Line */}
        <Box
          sx={{
            width: "40px",
            height: "4px",
            background: "linear-gradient(135deg,#3f95ea,#52d3aa)",
            borderRadius: "10px",
            mb: 3
          }}
        />

        {/* Title */}
        <Typography
          sx={{
            ...fontBold,
            fontSize: "18px",
            mb: 2
          }}
        >
          {item.title}
        </Typography>

        {/* Description */}
        <Typography
          sx={{
            ...fontRegular,
            fontSize: "14px",
            lineHeight: 1.8,
            color: "#64748b"
          }}
        >
          {item.desc}
        </Typography>
      </Box>
    ))}
  </Box>
</Box>


<Box sx={{ mt: 10, mb: 10 }}>
  <Typography sx={{ ...fontBold, fontSize: "28px", mb: 6, textAlign: "center" }}>
    Our Inspection Process
  </Typography>

  <Box
    sx={{
      display: "grid",
      gridTemplateColumns: { xs: "1fr", md: "repeat(4,1fr)" },
      gap: 4,
      textAlign: "center"
    }}
  >
    {[
      "Initial Consultation",
      "On-Site Inspection",
      "Testing & Verification",
      "Detailed Reporting"
    ].map((step, i) => (
      <Box key={i}>
        <Box
          sx={{
            width: "60px",
            height: "60px",
            borderRadius: "50%",
            background: "linear-gradient(135deg,#3f95ea,#52d3aa)",
            color: "#fff",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontWeight: "bold",
            mx: "auto",
            mb: 2
          }}
        >
          {i + 1}
        </Box>
        <Typography sx={{ ...fontMedium }}>{step}</Typography>
      </Box>
    ))}
  </Box>
</Box>

<Box
  sx={{
    mt: 14,
    mb: 14,
    p: { xs: 4, md: 8 },
    borderRadius: "24px",
    background: "#f8fafc"
  }}
>
  {/* Heading */}
  <Typography
    sx={{
      ...fontBold,
      fontSize: { xs: "26px", md: "32px" },
      mb: 6,
      textAlign: "center"
    }}
  >
    Our Commitment to Quality
  </Typography>

  {/* Content */}
  <Box
    sx={{
      display: "grid",
      gridTemplateColumns: { xs: "1fr", md: "repeat(2,1fr)" },
      gap: 5
    }}
  >
    {[
      {
        title: "Precision in Every Inspection",
        desc: "We ensure every inspection is carried out with attention to detail, maintaining the highest level of accuracy and consistency."
      },
      {
        title: "Global Standards Compliance",
        desc: "Our processes align with internationally recognized standards, ensuring reliability and acceptance across industries."
      },
      {
        title: "Data-Driven Decisions",
        desc: "We provide clear, factual reports that enable informed decision-making based on real-time inspection data."
      },
      {
        title: "Continuous Improvement",
        desc: "We constantly refine our methodologies to enhance efficiency, accuracy, and overall inspection quality."
      }
    ].map((item, i) => (
      <Box
        key={i}
        sx={{
          p: 5,
          borderRadius: "18px",
          background: "#fff",
          border: "1px solid #eef2f7",
          transition: "0.3s",
          "&:hover": {
            transform: "translateY(-6px)",
            boxShadow: "0 15px 40px rgba(0,0,0,0.08)"
          }
        }}
      >
        <Typography sx={{ ...fontBold, mb: 2, fontSize: "18px" }}>
          {item.title}
        </Typography>

        <Typography sx={{ ...fontRegular, color: "#64748b", fontSize: "14px", lineHeight: 1.8 }}>
          {item.desc}
        </Typography>
      </Box>
    ))}
  </Box>
</Box>

<Box
  sx={{
    mt: 10,
    mb: 10,
    textAlign: "center",
    p: 6,
    borderRadius: "16px",
    background: "#f8fafc"
  }}
>
  <Typography sx={{ ...fontBold, fontSize: "26px", mb: 2 }}>
    Need Reliable Inspection Services?
  </Typography>

  <Typography sx={{ ...fontRegular, mb: 4, color: "#64748b" }}>
    Contact us today to ensure your projects meet the highest quality standards.
  </Typography>

  <Box
    sx={{
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
    }}
        onClick={() => navigate("/contact")}


  >
    Get a Quote
  </Box>
</Box>
    {/* <Box className="content" sx={{ display: "flex", justifyContent: "center" }}> */}

  {/* MAIN CONTAINER (controls width for everything) */}
  {/* <Box sx={{ width: { xs: "95%", md: "70%" } }}> */}

    {/* IMAGE */}
    {/* <Box sx={{ display: "flex", justifyContent: "center" }}>
      <Box
        component="img"
        src={section1}
        alt="tpi"
        sx={{
          width: "100%",
          height: "500px",
          objectFit: "cover",
          borderRadius: "10px"
        }}
      />
    </Box> */}

    {/* TITLE */}
    {/* <Typography
      sx={{
        ...fontBold,
        fontSize: "24px",
        textAlign: "center",
        mt: 2
      }}
    >
      When Excellence Matters, Trust IES for Third Party Inspection
    </Typography> */}

    {/* TEXT CONTENT */}
    {/* <Box
      className="text-content"
      sx={{
        display: "flex",
        flexDirection: { xs: "column", md: "row" },
        gap: 4,
        mt: 2
      }}
    >

      <Box sx={{ flex: 1 }}>
        <Typography sx={{ ...fontRegular, lineHeight: 1.8, fontSize: "12px",textAlign:'justify'}}>
           A third-party inspection is an examination or assessment of a product's quality that is not conducted by the buyer or the producer. We make sure that every product fulfills the necessary quality requirements and that the manufacturing process itself complies with international standards for the quality management system, clients, and, if relevant, product specifications.
        </Typography>

        <Typography sx={{ ...fontRegular, lineHeight: 1.8, fontSize: "12px", mt: 2 ,textAlign:'justify'}}>
                         One of the primary advantages of working with us is that the inspectors conducting TPIs are impartial and can therefore render a fair decision without jeopardizing the interests of either party—while, of course, keeping the client and the requirements in mind. Put simply, their choice will only be impacted by concrete facts and both parties involved in the manufacturing process will be able to see exactly where they stand in the present project, and their decision will only be affected by actual data.

        </Typography>
      </Box>

      <Box sx={{ flex: 1 }}>
        <Typography sx={{ ...fontRegular, lineHeight: 1.8, fontSize: "12px",textAlign:'justify' }}>
                         Inspections are usually carried out by qualified, skilled, and experienced inspectional experts that work on a variety of product categories on a daily basis. They offer an unbiased assessment of the products' quality and make it possible to closely monitor quality consistency on-site without physically being there. Furthermore, even though TPIs are pricey, they ultimately save you money by preventing costly mistakes or hiring an internal QC team.
          </Typography>
      </Box>

    </Box>

  </Box>

</Box> */}
      <Footer />
    </Box>
  );
};

export default ThirdPartyInspection;