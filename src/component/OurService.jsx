import React from 'react'
import { Box, Button, Card, CardActionArea, CardContent, CardMedia, patch, Typography } from '@mui/material';
import { fontBold, fontMedium } from '../assets/style/homeStyle';
import servicesimg1 from '../assets/image/services-img-1.jpg';
import servicesimg2 from '../assets/image/services-img-2.jpeg';
import servicesimg3 from '../assets/image/services-img-3.png';
import servicesimg4 from '../assets/image/services-img-4.jpg';
import servicesimg5 from '../assets/image/services-img-5.jpg';
import Header from './Header';
import Footer from './Footer';
import bg2 from "../assets/image/ourservice-banner.jpg";
import { useNavigate } from 'react-router-dom';
import OilBarrelIcon from "@mui/icons-material/OilBarrel";
import ConstructionIcon from "@mui/icons-material/Construction";
import BoltIcon from "@mui/icons-material/Bolt";
import PrecisionManufacturingIcon from "@mui/icons-material/PrecisionManufacturing";
import AccountTreeIcon from "@mui/icons-material/AccountTree";
import DirectionsBoatIcon from "@mui/icons-material/DirectionsBoat";

const OurService = () => {
   const navigate = useNavigate();
  const services = [
    {
      title: "Third Party Inspection",
      image: servicesimg1,
      description:
        "Independent inspection services ensuring compliance with international standards and project specifications.",
        path: "/services/third-party-inspection",
    },
    {
      title: "Asset Integrity Management",
      image: servicesimg2,
      description:
        "Comprehensive asset lifecycle management solutions to maintain reliability and operational safety.",
      path: "/services/asset-integrity-management",
    },
    {
      title: "NDT Services",
      image: servicesimg3,
      description:
        "Advanced non-destructive testing services to detect defects and ensure structural integrity.",
        path: "/services/ndt-services",
    },
    {
      title: "Technical Staffing",
      image: servicesimg4,
      description:
        "Providing experienced engineers, inspectors, and technical specialists for industrial projects.",
      path: "/services/technical-staffing",
    },
    {
      title: "Training",
      image: servicesimg5,
      description:
        "Professional training programs to enhance technical skills and industry knowledge.",
      path: "/services/training",
    },
  ];
const industries = [
  {
    title: "Oil & Gas",
    desc: "Upstream, midstream, and downstream solutions.",
    icon: <OilBarrelIcon sx={{ fontSize: 42 }} />
  },
  {
    title: "Construction",
    desc: "Heavy civil, commercial, and industrial projects.",
    icon: <ConstructionIcon sx={{ fontSize: 42 }} />
  },
  {
    title: "Power & Energy",
    desc: "Generation, transmission, and renewable energy.",
    icon: <BoltIcon sx={{ fontSize: 42 }} />
  },
  {
    title: "Manufacturing",
    desc: "Process optimization and industrial production.",
    icon: <PrecisionManufacturingIcon sx={{ fontSize: 42 }} />
  },
  {
    title: "Infrastructure",
    desc: "Smart cities, transport, and utilities.",
    icon: <AccountTreeIcon sx={{ fontSize: 42 }} />
  },
  {
    title: "Marine & Offshore",
    desc: "Shipbuilding, offshore platforms, and logistics.",
    icon: <DirectionsBoatIcon sx={{ fontSize: 42 }} />
  }
];
  return (
    <Box  sx={{ width: "100%", height: "auto" }}>
      <Header />
       <Box
              className="banner-section"
              sx={{
                width: "100%",
                height: "350px",
                backgroundImage: `
  linear-gradient(rgba(28,28,28,0.8), rgba(28,28,28,0.8)),
  url(${bg2})
`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
                backgroundAttachment: "fixed",
              }}
            >
              <Typography
                sx={{ ...fontBold, color: "white", fontSize: "50px", paddingTop: "100px", textAlign: "center" }}
              >
        Explore Our Comprehensive Services
              </Typography>
            </Box>
    <Box sx={{ width: "100%", padding: "20px" }}>
      <Typography variant="h4" sx={{ ...fontBold, textAlign: "center", mb: 4 }}>
                Our Services
      </Typography>
      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          gap: "30px",
        }}
      >
        {services.map((service, index) => (
          <Card
            key={index}
            sx={{
              maxWidth: 365,
              flex: "1 1 30%",
              minWidth: "250px",
              borderRadius: "20px",
              transition: "0.3s",
              "&:hover": {
                transform: "translateY(-10px)",
                boxShadow: "0px 15px 40px rgba(0,0,0,0.2)",
              },
            }}
          >
            <CardActionArea onClick={() => navigate(service.path)}>
              <CardMedia
                component="img"
                height="160"
                image={service.image}
                alt={service.title}
              />
              <CardContent>
                <Typography gutterBottom variant="h5" sx={{ ...fontBold }}>
                  {service.title}
                </Typography>
                <Typography
                  variant="body2"
                  sx={{ color: "text.secondary", ...fontMedium }}
                >
                  {service.description}
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        ))}
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
  {/* Heading */}
  <Typography sx={{ ...fontBold, fontSize: "36px", mb: 2 }}>
    Industries We Serve
  </Typography>

  <Typography
    sx={{
      maxWidth: "700px",
      mx: "auto",
      mb: 8,
      color: "#64748b"
    }}
  >
    Delivering specialized solutions across diverse industrial sectors with
    precision, reliability, and innovation.
  </Typography>

  {/* Grid */}
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
    {industries.map((item, i) => (
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
        {/* Icon */}
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
            color: "#fff"
          }}
        >
          {item.icon}
        </Box>

        {/* Title */}
        <Typography
          sx={{
            ...fontBold,
            fontSize: "20px",
            mb: 1
          }}
        >
          {item.title}
        </Typography>

        {/* Description */}
        <Typography
          sx={{
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
<Box
  sx={{
    py: 8,
    px: { xs: 2, md: 10 },
    textAlign: "center",
    backgroundColor:'whitesmoke'
  }}
>
  <Typography sx={{ ...fontBold, fontSize: "32px", mb: 6 }}>
    Our Working Process
  </Typography>

  <Box
    sx={{
      display: "flex",
      flexWrap: "wrap",
      justifyContent: "center",
      gap: 5
    }}
  >
    {[
      "Requirement Analysis",
      "Inspection Planning",
      "Execution & Testing",
      "Reporting & Certification"
    ].map((step, i) => (
      <Box key={i} sx={{ width: "220px" }}>
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

        <Typography sx={{ ...fontMedium }}>
          {step}
        </Typography>
      </Box>
    ))}
  </Box>
</Box>
<Box
  sx={{
    py: 8,
    px: { xs: 2, md: 10 },
    background: "linear-gradient(135deg,#3f95ea,#52d3aa)",
    color: "#fff",
    textAlign: "center"
  }}
>
  <Box
    sx={{
      display: "flex",
      flexWrap: "wrap",
      justifyContent: "center",
      gap: 6
    }}
  >
    
    {[
      { value: "500+", label: "Projects Completed" },
      { value: "100+", label: "Expert Engineers" },
      { value: "50+", label: "Global Clients" },
      { value: "10+", label: "Years Experience" }
    ].map((stat, i) => (
      <Box key={i}>
        <Typography sx={{ ...fontBold, fontSize: "36px" }}>
          {stat.value}
        </Typography>
        <Typography sx={{ ...fontMedium }}>
          {stat.label}
        </Typography>
      </Box>
    ))}
  </Box>
</Box>
<Box
  sx={{
    py: 8,
    textAlign: "center",
    background: "#f1f5f9"
  }}
>
  <Typography sx={{ ...fontBold, fontSize: "30px", mb: 2 }}>
    Ready to Work With Us?
  </Typography>

  <Typography sx={{ ...fontMedium, mb: 3 }}>
    Contact us today to get reliable inspection and engineering solutions.
  </Typography>

  <Button
    variant="contained"
    sx={{
      background: "linear-gradient(90deg,#3f95ea,#52d3aa)",
      px: 5,
      py: 1.5,
      borderRadius: "30px",
      textTransform: "none"
    }}
    onClick={() => navigate("/contact")}
  >
    Get Started
  </Button>
</Box>
    <Box>
      <Footer />
    </Box>
    </Box>
  )
}

export default OurService
