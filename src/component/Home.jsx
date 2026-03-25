import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import { Button, Card, CardActionArea, CardContent, CardMedia } from "@mui/material";
import {
  Shield,
  Settings,
  CheckCircle,
  Money,
} from "@mui/icons-material";

import { fontBold, fontMedium, fontRegular } from "../assets/style/homeStyle";
import bg2 from "../assets/image/bg-img2.jpg";
import bg3 from "../assets/image/bg-img3.jpeg";
import bg4 from "../assets/image/bg-img4.png";
import bg5 from "../assets/image/bg-img5.jpeg";
import circleimage from "../assets/image/circle-img.jpeg";
import servicesimg1 from "../assets/image/services-img-1.jpg";
import servicesimg2 from "../assets/image/services-img-2.jpeg";
import servicesimg3 from "../assets/image/services-img-3.png";
import servicesimg4 from "../assets/image/services-img-4.jpg";
import servicesimg5 from "../assets/image/services-img-5.jpg";
import heroimg from "../assets/image/hero-img-final.png";
// import herobanner from "../assets/image/hero-banner.png"
import Footer from "./Footer";
import Header from "./Header";
import { motion } from "framer-motion";
import welcomeimg from "../assets/image/welcome.png";
import herobanner from "../assets/image/hero-banner1.png"
import { useNavigate } from "react-router-dom";

const Home = () => {


  const images = [bg3, bg4, bg5];
  const [bgIndex, setBgIndex] = React.useState(0);
  const [fade, setFade] = React.useState(true);
  const navigate = useNavigate();

  const heroTexts = [
    { title: "Ensuring quality", subtitle: "Securing integrity" },
    { title: "Innovation Drives", subtitle: "Excellence Delivered" },
    { title: "Global Expertise", subtitle: "Local Solutions" },
  ];

  React.useEffect(() => {
    const interval = setInterval(() => {
      setFade(false);
      setTimeout(() => {
        setBgIndex((prev) => (prev + 1) % images.length);
        setFade(true);
      }, 500);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  const services = [
    {
      title: "Third Party Inspection",
      image: servicesimg1,
      description:
        "Independent inspection services ensuring compliance with international standards and project specifications.",
    },
    {
      title: "Asset Integrity Management",
      image: servicesimg2,
      description:
        "Comprehensive asset lifecycle management solutions to maintain reliability and operational safety.",
    },
    {
      title: "NDT Services",
      image: servicesimg3,
      description:
        "Advanced non-destructive testing services to detect defects and ensure structural integrity.",
    },
    {
      title: "Technical Staffing",
      image: servicesimg4,
      description:
        "Providing experienced engineers, inspectors, and technical specialists for industrial projects.",
    },
    {
      title: "Training",
      image: servicesimg5,
      description:
        "Professional training programs to enhance technical skills and industry knowledge.",
    },
  ];

  const whyChooseUs = [
    {
      title: "safety and compliance",
      description:
        "We prioritize safety and compliance in all operations, adhering to the highest industry standards and regulations.",
    },
    {
      title: "Tecnological Expertise",
      description:
        "Our skilled professionals deliver reliable and innovative solutions using cutting-edge technology.",
    },
    {
      title: "comprehensive solutions",
      description:
        "We provide comprehensive solutions with industry experience and technical expertise.",
    },
    {
      title: "Competitive Pricing",
      description:
        "We offer affordable prices without compromising quality. Get the best value for your investment.",
    },
  ];

  return (
    <Box className="main-container" sx={{ width: "100%", height: "auto" }}>
      {/* Top Bar */}
     <Header />

   <Box
  className="hero-section"
  sx={{
    position: "relative",
    overflow: "hidden",

    // 🔥 BACKGROUND GRADIENT
   background: "linear-gradient(270deg, #3f95ea, #52d3aa, #3f95ea)",
backgroundSize: "400% 400%",
animation: "heroGradient 12s ease infinite",
 minHeight: { xs: "80vh", md: "95vh" },
    display: "flex",
    flexDirection: { xs: "column", md: "row" },
    alignItems: "center",
    justifyContent: "space-between",
    px: { xs: 3, md: 12 },
    py: { xs: 6, md: 12 },
  }}
>

{/* OPTIONAL SOFT OVERLAY */}
<Box
  sx={{
    position: "absolute",
    inset: 0,
    background: "rgba(255,255,255,0.05)",
    backdropFilter: "blur(10px)",
    zIndex: 0
  }}
/>

{/* CONTENT WRAPPER */}
<Box
  sx={{
    position: "relative",
    zIndex: 2,
    display: "flex",
    flexDirection: { xs: "column", md: "row" },
    alignItems: "center",
    justifyContent: "space-between",
    width: "100%",
    gap: { xs: 4, md: 0 },
  }}
>

{/* LEFT TEXT */}
<Box
  sx={{
    flex: 1,
    opacity: fade ? 1 : 0,
    transform: fade ? "translateY(0)" : "translateY(40px)",
    transition: "all 0.6s ease",
     alignItems: { xs: "center", md: "flex-start" },
    textAlign: { xs: "center", md: "left" },
  }}
>

<Typography
  sx={{
    ...fontBold,
    fontSize: { xs: "40px", sm: "55px", md: "80px" },
    background: "linear-gradient(90deg,#ffffff,#ffffff)",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
    lineHeight: 1.1,
  }}
>
{heroTexts[bgIndex].title}
</Typography>

<Typography
  sx={{
    ...fontBold,
    fontSize: { xs: "32px", sm: "50px", md: "64px" },
    color: "#ffffff",
    mt: 1,
    lineHeight: 1.1,
  }}
>
{heroTexts[bgIndex].subtitle}
</Typography>

<Box
  sx={{
    display: "flex",
    flexDirection: { xs: "column", md: "row" },
    alignItems: { xs: "center", md: "flex-start" },
    textAlign: { xs: "center", md: "left" },
    gap: 2,
    mt: 4,
  }}
>

<Typography
  sx={{
    ...fontMedium,
    color: "rgba(255,255,255,0.9)",
    fontSize: { xs: "16px", md: "20px" },
    maxWidth: { xs: "90%", md: "400px" },
  }}
>
Let's connect and explore how we can collaborate to achieve your goals.
</Typography>

<Button
  variant="contained"
  onClick={() => navigate("/contact")}
  sx={{
    background: "linear-gradient(135deg,#3f95ea,#52d3aa)",
    textTransform: "none",

    px: { xs: 2.5, sm: 3, md: 4 },   // responsive padding
    py: { xs: 1, sm: 1.2, md: 1.6 },

    fontSize: { xs: "14px", sm: "15px", md: "16px" }, // responsive text
    width: { xs: "auto", sm: "auto" }, // full width on mobile

    ...fontBold,
    borderRadius: { xs: "20px", md: "30px" },

    boxShadow: "0px 10px 30px rgba(0,0,0,0.3)",
    transition: "all 0.3s ease",

    "&:hover": {
      transform: { md: "scale(1.05)" }, // disable scale on mobile
    }
  }}
>
  Contact Us
</Button>

</Box>
</Box>

{/* RIGHT IMAGE */}
<Box
  sx={{
    flex: 1,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  }}
>
<Box
  component="img"
  src={heroimg}
  alt="Hero"
  sx={{
    width: "100%",
    height: {
      xs: "220px",  // mobile
      sm: "300px",  // tablet
      md: "400px",  // laptop
      lg: "500px",  // large screens
    },
    mb: { xs: 3, md: 6 }, // responsive margin bottom
    objectFit: "cover",
    // borderRadius: "20px",
    // objectFit: "cover",
    // boxShadow: "0px 25px 70px rgba(0,0,0,0.3)",
    // transition: "all 0.5s ease",
    // "&:hover": {
    //   transform: "scale(1.05)"
    // }
  }}
/>
</Box>

</Box>

{/* 🌊 CURVED WHITE BOTTOM */}
<Box
  sx={{
    position: "absolute",
    bottom: 0,
    left: 0,
    width: "100%",
    lineHeight: 0,
    zIndex: 1,
  }}
>
  <svg viewBox="0 0 1440 320" style={{ width: "100%" }}>
    <path
      fill="#ffffff"
      d="M0,224L80,213.3C160,203,320,181,480,186.7C640,192,800,224,960,224C1120,224,1280,192,1360,176L1440,160V320H0Z"
    />
  </svg>
  <style>
{`
@keyframes heroGradient {
  0% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
}
`}
</style>
</Box>

</Box>
      {/* Hero Section */}
      {/* <Box
        sx={{
          minHeight: { xs: "80vh", md: "calc(100vh - 80px)" },
          height: { md: "calc(100vh - 80px)" },
          backgroundImage: `url(${images[bgIndex]})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          alignItems: "center",
          justifyContent: { xs: "center", md: "space-between" },
          padding: { xs: "20px", md: "0 80px" },
          transition: "background-image 1s ease-in-out",
          position: "relative",
          textAlign: { xs: "center", md: "left" },
        }}
      > */}
        {/* Pagination dots */}
        {/* <Box
          sx={{
            position: "absolute",
            bottom: { xs: "20px", md: "30px" },
            left: "50%",
            transform: "translateX(-50%)",
            display: "flex",
            gap: "12px",
          }}
        >
          {images.map((_, index) => (
            <Box
              key={index}
              onClick={() => setBgIndex(index)}
              sx={{
                width: "12px",
                height: "12px",
                borderRadius: "50%",
                cursor: "pointer",
                backgroundColor: bgIndex === index ? "#B16CEA" : "white",
                opacity: bgIndex === index ? 1 : 0.5,
                transition: "0.3s",
              }}
            />
          ))}
        </Box>

        <Box sx={{ opacity: fade ? 1 : 0, transition: "opacity 0.5s ease-in-out", mb: { xs: 4, md: 0 } }}>
          <Typography
            sx={{
              ...fontBold,
              fontSize: { xs: "40px", sm: "60px", md: "80px" },
              background: "#5daa54",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            {heroTexts[bgIndex].title}
          </Typography>
          <Typography sx={{ ...fontBold, fontSize: { xs: "40px", sm: "60px", md: "80px" }, color: "white" }}>
            {heroTexts[bgIndex].subtitle}
          </Typography>
         <Box
  sx={{
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: { xs: "column", sm: "column", md: "row" },
    textAlign: { xs: "center", md: "left" },
    mt: 4,
    gap: { xs: 2, md: 2 }
  }}
>
  <Typography
    sx={{
      ...fontMedium,
      color: "white",
      fontSize: { xs: "16px", sm: "18px", md: "20px" },
      mr: { md: 2 },
      maxWidth: { xs: "90%", md: "auto" }
    }}
  >
    Let's connect and explore how we can collaborate to achieve your goals.
  </Typography>

  <Button
    variant="contained"
    sx={{
      background: "linear-gradient(90deg,#5daa54,#5daa54)",
      textTransform: "none",
      px: 2,
      py: 1,
      fontSize: { xs: "14px", sm: "15px", md: "16px" },
      ...fontBold,
      width: { xs: "auto", sm: "auto", md: "auto" }
    }}
  >
    Contact Us
  </Button>
</Box>
         </Box> */}

         {/* hero section end */}

    {/* <Box
  sx={{
    width: { xs: "250px", sm: "350px", md: "470px" },
    height: { xs: "250px", sm: "350px", md: "470px" },
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    position: "relative",
    overflow: "hidden",
    borderRadius: "50%",   // ✅ makes container circular
    margin: { xs: "0 auto", md: "0" },
  }}
> */}
  {/* Outer Glow Ring */}
  {/* <Box
    sx={{
      position: "absolute",
      width: "100%",
      height: "100%",
      borderRadius: "50%",
      background: "conic-gradient(#5daa54, #20518f, #5daa54)",
      filter: "blur(20px)",
      opacity: 0.6,
      animation: "rotateGlow 12s linear infinite",
    }}
  /> */}

  {/* Rotating Ring 1 */}
  {/* <Box
    sx={{
      position: "absolute",
      width: { xs: "240px", sm: "340px", md: "460px" },
      height: { xs: "240px", sm: "340px", md: "460px" },
      borderRadius: "50%",
      border: "3px solid transparent",
     borderTop: "3px solid #5daa54",
borderRight: "3px solid #20518f",
      animation: "rotateRing1 8s linear infinite",
    }}
  /> */}

  {/* Rotating Ring 2 */}
  {/* <Box
    sx={{
      position: "absolute",
      width: { xs: "220px", sm: "320px", md: "440px" },
      height: { xs: "220px", sm: "320px", md: "440px" },
      borderRadius: "50%",
      border: "3px solid transparent",
     borderBottom: "3px solid #5daa54",
borderLeft: "3px solid #20518f",
      animation: "rotateRing2 6s linear infinite",
    }}
  /> */}

  {/* Circle Image */}
  {/* <Box
    sx={{
      width: { xs: "200px", sm: "300px", md: "400px" },
      height: { xs: "200px", sm: "300px", md: "400px" },
      borderRadius: "50%",
      overflow: "hidden",
      animation: "float 6s ease-in-out infinite",
      zIndex: 2,
    }}
  > */}
    {/* <Box
      component="img"
      src={circleimage}
      sx={{
        width: "100%",
        height: "100%",
        objectFit: "cover",
        borderRadius: "50%",
      }}
    />
  </Box>
</Box> */}
      {/* </Box> */}

      {/* Section 2 */}
  <Box
  component={motion.div}
  initial={{ opacity: 0 }}
  whileInView={{ opacity: 1 }}
  transition={{ duration: 0.8 }}
  viewport={{ once: true }}
  sx={{
    position: "relative", // Needed for curve
    width: "100%",
    py: { xs: 8, md: 14 },
    px: { xs: 3, md: 12 },
   background: "linear-gradient(180deg,#eef5ff,#3f95ea)",
    display: "flex",
    flexDirection: { xs: "column", md: "row" },
    alignItems: "center",
    gap: { xs: 6, md: 10 },
  }}
>

  {/* TOP CURVE */}
  <Box
    sx={{
      position: "absolute",
      top: 0,
      left: 0,
      width: "100%",
      
      lineHeight: 0,
      transform: "rotate(360deg)", // flip so it curves downward
      zIndex: 0,
    }}
  >
    <svg viewBox="0 0 1440 320" style={{ width: "100%",}}>
      <path
       fill="#e6f0ff"
        d="M0,224L80,213.3C160,203,320,181,480,186.7C640,192,800,224,960,224C1120,224,1280,192,1360,176L1440,160V0H0Z"
      />
    </svg>
  </Box>

  {/* LEFT CONTENT */}
  <Box
    component={motion.div}
    initial={{ x: -80, opacity: 0 }}
    whileInView={{ x: 0, opacity: 1 }}
    transition={{ duration: 0.8 }}
    viewport={{ once: true }}
    sx={{ flex: 1, position: "relative", zIndex: 2 }} // zIndex above curve
  >
    <Typography sx={{ ...fontMedium, color: "#4f8cff", fontSize: "18px", letterSpacing: "2px", mb: 2 }}>
      ABOUT US
    </Typography>

    <Typography
      sx={{
        ...fontBold,
        fontSize: { xs: "32px", md: "48px" },
        color: "#0f172a",
        lineHeight: 1.2,
        mb: 3,
      }}
    >
      Building smarter inspection & integrity solutions
    </Typography>

    <Typography
      sx={{
        ...fontRegular,
        fontSize: { xs: "15px", md: "17px" },
        color: "#475569",
        lineHeight: 1.8,
        maxWidth: "500px",
        mb: 4,
      }}
    >
      Vesqon Global combines expertise and innovation to deliver reliable
      inspection, testing, and asset integrity services.
    </Typography>

    {/* CTA */}
    <Box sx={{ display: "flex", gap: 2, flexWrap: "wrap" }}>
      <Button
        component={motion.button}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        variant="contained"
        sx={{
          background: "linear-gradient(135deg,#3f95ea,#52d3aa)",
          textTransform: "none",
          px: 4,
          py: 1.5,
          borderRadius: "12px",
          boxShadow: "0px 10px 25px rgba(79,140,255,0.3)",
          ...fontMedium,
        }}
        onClick={() => navigate("/contact")}
      >
        Request a Quote
      </Button>

      <Button
        component={motion.button}
        whileHover={{ scale: 1.05 }}
        variant="outlined"
        sx={{
          borderColor: "#cbd5e1",
          color: "#0f172a",
          textTransform: "none",
          px: 4,
          py: 1.5,
          borderRadius: "12px",
          ...fontMedium,
        }}
        onClick={() => navigate("/about")}
      >
        About Us
      </Button>
    </Box>
  </Box>

  {/* RIGHT IMAGE */}
  <Box
    component={motion.div}
    initial={{ x: 80, opacity: 0 }}
    whileInView={{ x: 0, opacity: 1 }}
    transition={{ duration: 0.8 }}
    viewport={{ once: true }}
    sx={{
      flex: 1,
      position: "relative",
      display: "flex",
      justifyContent: "center",
      zIndex: 2,
    }}
  >
    {/* FLOATING IMAGE */}
    <Box
      component={motion.img}
      src={welcomeimg}
      alt="welcome"
      animate={{ y: [0, -10, 0] }}
      transition={{ duration: 4, repeat: Infinity }}
      sx={{
        width: { xs: "100%", md: "80%" },
        borderRadius: "20px",
        boxShadow: "0px 30px 80px rgba(0,0,0,0.15)",
      }}
    />

    {/* FLOATING CARD */}
    <Box
      component={motion.div}
      animate={{ y: [0, -8, 0] }}
      transition={{ duration: 3, repeat: Infinity }}
      sx={{
        position: "absolute",
        bottom: "-20px",
        right: { xs: "10px", md: "40px" },
        background: "rgba(255,255,255,0.85)",
        backdropFilter: "blur(10px)",
        borderRadius: "16px",
        px: 3,
        py: 2,
        boxShadow: "0px 15px 40px rgba(0,0,0,0.1)",
      }}
    >
      <Typography sx={{ ...fontBold, fontSize: "18px", color: "#0f172a" }}>
        100+
      </Typography>
      <Typography sx={{ ...fontMedium, fontSize: "13px", color: "#64748b" }}>
        Projects Delivered
      </Typography>
    </Box>
  </Box>
</Box>
      {/* Services Cards */}
      <Box>
        <Typography sx={{...fontBold,fontSize:'40px',color:'black',textAlign:'center',marginTop:'20px'}}> Explore Our Services</Typography>

      
      <Box
        className="card-section"
        sx={{
          width: "100%",
          padding: "50px 20px",
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          gap: "50px",
          background: "#fff",
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
            <CardActionArea>
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
      {/* Why Choose Us */}
      <Box
        className="why-us-section"
        sx={{
          width: "100%",
          height: "350px",
          backgroundImage: `linear-gradient(rgba(28,28,28,0.8), rgba(28,28,28,0.8)), url(${bg2})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundAttachment: "fixed",
        }}
      >
        <Typography
          sx={{ ...fontBold, color: "white", fontSize: "40px", padding: "20px", textAlign: "center" }}
        >
          Why Choose Vesqon Global?
        </Typography>
      </Box>

      <Box
        className="contact-section"
        sx={{
          width: "100%",
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          gap: "50px",
          background: "#fff",
        }}
      >
        {whyChooseUs.map((whychooseus, index) => {
          const icons = [
            <Shield sx={{ color: "#6C63FF" }} />,
            <Settings sx={{ color: "#6C63FF" }} />,
            <CheckCircle sx={{ color: "#6C63FF" }} />,
            <Money sx={{ color: "#6C63FF" }} />,
          ];
          return (
            <Card
              key={index}
              sx={{
                maxWidth: 250,
                flex: "1 1 30%",
                minWidth: "250px",
                borderRadius: "20px",
                transition: "0.3s",
                "&:hover": {
                  transform: "translateY(-10px)",
                  boxShadow: "0px 15px 40px rgba(0,0,0,0.2)",
                },
                position: "relative",
                top: "-150px",
              }}
            >
              <CardActionArea>
                <CardContent sx={{ height: "250px" }}>
                  <Box sx={{ display: "flex", alignItems: "center", mb: 2 }}>
                    {icons[index]}
                    <Typography
                      variant="h5"
                      sx={{
                        ...fontBold,
                        ml: 1,
                        textTransform: "capitalize",
                        height: "50px",
                      }}
                    >
                      {whychooseus.title}
                    </Typography>
                  </Box>

                  <Typography
                    variant="body2"
                    sx={{
                      color: "text.secondary",
                      ...fontMedium,
                      padding: "10px",
                      textAlign: "justify",
                      marginTop: "20px",
                    }}
                  >
                    {whychooseus.description}
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          );
        })}
      </Box>

      <Box className="footer">
        <Footer />
      </Box>
    </Box>
  );
};

export default Home;