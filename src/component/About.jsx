import React from "react";
import { Box, Typography, Container } from "@mui/material";
import Header from "./Header";
import Footer from "./Footer";
import bg2 from "../assets/image/about-banner.jpg";
import aboutImg from "../assets/image/services-img-3.png";
import aboutimg1 from "../assets/image/about2-final.png";
import aboutpartner from "../assets/image/about-trust.jpg";

import { useNavigate } from "react-router-dom";
import { fontBold, fontMedium, fontRegular } from "../assets/style/homeStyle";
import { motion } from "framer-motion";
import VerifiedIcon from "@mui/icons-material/Verified";
import TrackChangesIcon from "@mui/icons-material/TrackChanges";
import HandshakeIcon from "@mui/icons-material/Handshake";

const About = () => {

const navigate = useNavigate();
const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8 }
  }
};

const fadeLeft = {
  hidden: { opacity: 0, x: -40 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.8 }
  }
};

const fadeRight = {
  hidden: { opacity: 0, x: 40 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.8 }
  }
};
  return (
    <Box>
      <Header />
<Box
              className="banner-section"
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
                sx={{ ...fontBold, color: "white", fontSize: "50px", paddingTop: "100px", textAlign: "center" }}
              >
        About Us
              </Typography>
            </Box>
      {/* ================= HERO STRIP ================= */}
   <motion.div
  variants={fadeUp}
  initial="hidden"
  whileInView="visible"
  viewport={{ once: true }}
>

     <Box
  sx={{
    background: "#f8fafc",
    py: { xs: 8, md: 12 },
    borderBottom: "1px solid #e2e8f0"
  }}
>
  <Container maxWidth="lg">

    <Box
      sx={{
        display: "grid",
        gridTemplateColumns: { xs: "1fr", md: "1fr 1fr" },
        gap: 6,
        alignItems: "center"
      }}
    >

      {/* ================= IMAGE ================= */}
      <motion.div
  variants={fadeUp}
  initial="hidden"
  whileInView="visible"
  viewport={{ once: true }}
>
      <Box
        sx={{
          position: "relative",
          // borderRadius: "20px",
          overflow: "hidden",
          // boxShadow: "0 25px 60px rgba(0,0,0,0.15)",
          transition: "0.4s",

          "&:hover img": {
            transform: "scale(1.08)"
          }
        }}
      >
        <Box
          component="img"
          src={aboutimg1}
          alt="about"
          sx={{
            width: "100%",
            height: { xs: "250px", md: "400px" },
            objectFit: "cover",
            transition: "0.6s"
          }}
        />

        {/* Gradient overlay */}
        {/* <Box
          sx={{
            position: "absolute",
            inset: 0,
            background:
              "linear-gradient(to top, rgba(0,0,0,0.4), rgba(0,0,0,0))"
          }}
        /> */}
      </Box>
  </motion.div>
      {/* ================= TEXT ================= */}
      <motion.div
  variants={fadeRight}
  initial="hidden"
  whileInView="visible"
  viewport={{ once: true }}
>
      <Box>
        <Typography
          sx={{
            ...fontBold,
            fontSize: { xs: "26px", md: "34px" },
            mb: 2
          }}
        >
          About Us
        </Typography>

        <Typography
          sx={{
            ...fontRegular,
            color: "#64748b",
            lineHeight: 1.8,
            mb: 3
          }}
        >
          We deliver reliable inspection, testing, and technical solutions
          designed to ensure quality, safety, and performance across industries.
        </Typography>

        <Typography
          sx={{
            ...fontRegular,
            color: "#475569",
            lineHeight: 1.8,
            mb: 4
          }}
        >
          With a strong focus on precision and industry expertise, we help
          organizations maintain compliance, reduce risks, and enhance
          operational efficiency.
        </Typography>

        {/* CTA BUTTON */}
        <Box
          sx={{
            display: "inline-block",
            px: 5,
            py: 1.8,
            borderRadius: "30px",
            background: "linear-gradient(135deg,#3f95ea,#52d3aa)",
            color: "#fff",
            cursor: "pointer",
            transition: "0.3s",

            "&:hover": {
              transform: "translateY(-3px)",
              boxShadow: "0 10px 30px rgba(0,0,0,0.2)"
            }
          }}
          onClick={() => navigate("/OurServices")}
        >
          Our Services
        </Box>
      </Box>
          </motion.div>

    </Box>
  </Container>
</Box>
  </motion.div>

      {/* ================= OUR PROMISE ================= */}
      <motion.div
  initial="hidden"
  whileInView="visible"
  viewport={{ once: true }}
  variants={{
    visible: {
      transition: {
        staggerChildren: 0.2
      }
    }
  }}
>
      
      <Box sx={{ py: 10 }}>
        <Container maxWidth="lg">

          <Typography sx={{ ...fontBold, textAlign: "center", mb: 6,fontSize: { xs: "26px", md: "34px" }, }}>
            Our Promise
          </Typography>
<motion.div variants={fadeUp}>
          <Box
            sx={{
              display: "grid",
              gridTemplateColumns: { xs: "1fr", md: "repeat(3,1fr)" },
              gap: 4
            }}
          >
            {[
  {
    title: "Technical Excellence",
    icon: <VerifiedIcon />,
    desc: "Driven by deep industry knowledge, our specialists deliver precise, high-quality inspection and technical solutions."
  },
  {
    title: "Uncompromised Integrity",
    icon: <TrackChangesIcon />,
    desc: "We uphold transparency and objectivity in every assessment, ensuring decisions are guided purely by verified data."
  },
  {
    title: "Client-Centric Commitment",
    icon: <HandshakeIcon />,
    desc: "We align our expertise with your goals, delivering reliable solutions that enhance safety, performance, and long-term value."
  }
].map((item, i) => (
              <Box
                key={i}
                sx={{
                  background: "#0f172a",
                  color: "#fff",
                  p: 5,
                  textAlign: "center",
                  borderRadius: "8px",
                  transition: "0.3s",

                  "&:hover": {
                    transform: "translateY(-5px)",
                    boxShadow: "0 15px 40px rgba(0,0,0,0.2)"
                  }
                }}
              >
                <Box sx={{ mb: 2, "& svg": { fontSize: 40 } }}>
                  {item.icon}
                </Box>

                <Typography sx={{ ...fontBold, mb: 1 }}>
                  {item.title}
                </Typography>

                <Typography sx={{ fontSize: "13px", opacity: 0.8 }}>
                  {item.desc}
                </Typography>
              </Box>
            ))}
          </Box>
</motion.div>
        </Container>
      </Box>
</motion.div>
      {/* ================= IMAGE + DARK CONTENT ================= */}
  
      <Box sx={{ display: "grid", gridTemplateColumns: { xs: "1fr", md: "1fr 1fr" } ,marginBottom:'40px'}}>
    <motion.div
  variants={fadeLeft}
  initial="hidden"
  whileInView="visible"
  viewport={{ once: true }}
>
        {/* IMAGE */}
<Box
  component="img"
  src={aboutpartner}
  sx={{
    width: "100%",
    height: {
      xs: "250px",   // mobile
      sm: "300px",   // small tablets
      md: "400px",   // desktop
      lg: "500px",   // large screens
    },
    objectFit: "cover",
    borderRadius: "12px", // optional (nice UI)
    mt: { xs: 2, md: 4 }, // responsive margin top
  }}
/>
</motion.div>
        {/* DARK CONTENT */}
        <Box
          sx={{
              background: "#0f172a",
              color: "#fff",
              display: "flex",
              alignItems: "center",
              px: { xs: 4, md: 8 },
              py: 10
          }}
        >
              <motion.div
        variants={fadeRight}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
          <Box>
            <Typography sx={{ fontSize: "12px", color: "#52d3aa", mb: 2 }}>
              — OUR STORY
            </Typography>

            <Typography sx={{ ...fontBold, fontSize: "26px", mb: 3 }}>
              A Partner You Can Trust
            </Typography>

            <Typography sx={{ ...fontRegular, opacity: 0.85, lineHeight: 1.8 }}>
              We specialize in delivering high-quality inspection, testing, and
              technical services across multiple industries. Our solutions are
              designed to ensure compliance, reduce operational risks, and
              enhance asset reliability.
            </Typography>

            <Typography sx={{ ...fontRegular, mt: 3, opacity: 0.85 }}>
              With a strong focus on accuracy and efficiency, we help organizations
              maintain the highest standards while improving performance and safety.
            </Typography>

            <Box
              sx={{
                mt: 4,
                display: "inline-block",
                px: 4,
                py: 1.5,
                borderRadius: "20px",
                background: "#52d3aa",
                color: "#000",
                cursor: "pointer"
              }}
              onClick={() => navigate("/contact")}
            >
              Get in Touch
            </Box>
          </Box>
</motion.div>
        </Box>
      </Box>
      {/* ================= EXTRA TEXT SECTION ================= */}
     

      <Footer />
    </Box>
  );
};

const textStyle = {
  ...fontRegular,
  fontSize: "15px",
  lineHeight: 1.9,
  color: "#475569"
};

export default About;