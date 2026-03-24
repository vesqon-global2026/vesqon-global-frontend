import { Box, Typography } from '@mui/material'
import React from 'react'
import Header from './Header'
import bg2 from "../assets/image/banner.jpg";
import { fontBold, fontRegular } from '../assets/style/homeStyle';
import Footer from './Footer';
import CareersForm from './CareersForm';
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import joinus from '../assets/image/joinus-final.png';
import joinourteam from '../assets/image/Join_Our_Team-removebg-preview.png'
import { motion } from "framer-motion";

const Carriers = () => {
  const fadeLeft = {
  hidden: { opacity: 0, x: -60 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.8 } }
};

const fadeRight = {
  hidden: { opacity: 0, x: 60 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.8 } }
};
  return (
   <Box sx={{ width: "100%", height: "auto" }}>
      <Header/>
      <Box sx={{  width: "100%",
                height: "350px", }}>
       <Box
              className="carrier-banner-section"
              sx={{
               width: "100%",
                height: "100%",
                backgroundImage: `url(${bg2})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
                backgroundAttachment: "fixed",
              }}
            >

              <Typography
                sx={{ ...fontBold, color: "white", fontSize: "50px", paddingTop: "100px", textAlign: "center" }}
              >
        Where Talent Meets Opportunity
              </Typography>
            </Box>
            </Box>
              

<Box sx={{ py: 12, background: "#f8fafc" }}>
  <Box
    sx={{
      display: "grid",
      gridTemplateColumns: { xs: "1fr", md: "1fr 1fr" },
      gap: 6,
      alignItems: "center",
      px: { xs: 2, md: 6 }
    }}
  >

    {/* ================= IMAGE ================= */}
    <Box
      component="img"
      src={joinus} // use your image
      sx={{
        width: "100%",
        height: { xs: "250px", md: "490px" },
        objectFit: "cover",
        // borderRadius: "20px",
        // boxShadow: "0 25px 60px rgba(0,0,0,0.15)"
      }}
    />

    {/* ================= TEXT ================= */}
    <Box>
      <Typography
        sx={{
          ...fontBold,
          fontSize: { xs: "26px", md: "34px" },
          mb: 2
        }}
      >
        Why Join Us
      </Typography>

      <Typography
        sx={{
          color: "#64748b",
          mb: 5,
          lineHeight: 1.7
        }}
      >
        Build your career with a team that values innovation, growth, and excellence.
      </Typography>

      {/* LIST */}
      <Box sx={{ display: "flex", flexDirection: "column", gap: 3 }}>
        {[
          "Work on high-impact industrial projects",
          "Collaborate with experienced professionals",
          "Opportunities for career growth",
          "Exposure to global industry standards",
          "Continuous learning and development",
          "Supportive and professional work culture"
        ].map((item, i) => (
          <Box
            key={i}
            sx={{
              display: "flex",
              alignItems: "flex-start",
              gap: 2,
              transition: "0.3s",

              "&:hover": {
                transform: "translateX(6px)"
              }
            }}
          >
            {/* ICON */}
            <CheckCircleIcon
              sx={{
                color: "#3f95ea",
                mt: "3px",
                fontSize: "22px"
              }}
            />

            {/* TEXT */}
            <Typography
              sx={{
                fontSize: "15px",
                lineHeight: 1.7,
                color: "#1e293b"
              }}
            >
              {item}
            </Typography>
          </Box>
        ))}
      </Box>
    </Box>

  </Box>
</Box>
<Box
  className="careers-form-section"
  sx={{
    width: "100%",
    py: { xs: 8, md: 12 },
    px: { xs: 2, md: 8 },
    display: "grid",
    gridTemplateColumns: { xs: "1fr", md: "1fr 1fr" },
    gap: 8,
    alignItems: "flex-start",
    background: "linear-gradient(to bottom, #ffffff, #f8fafc)"
  }}
>

  {/* ================= FORM ================= */}
  <Box
     sx={{
      order: { xs: 2, md: 1 } // 🔥 MOBILE → second, DESKTOP → first
    }}
  >
    <CareersForm />
  </Box>

  {/* ================= RIGHT CONTENT ================= */}
  <Box sx={{ marginTop: { xs: 0, md: "55px" },
      order: { xs: 1, md: 2 } }}>

    {/* SMALL TAG */}
    <Typography
      sx={{
        fontSize: "12px",
        color: "#3f95ea",
        fontWeight: 600,
        mb: 1,
        letterSpacing: "1px"
      }}
    >
      — CAREERS
    </Typography>

    {/* TITLE */}
    <Typography
      sx={{
        ...fontBold,
        fontSize: { xs: "28px", md: "38px" },
        mb: 2,
        lineHeight: 1.3
      }}
    >
      Start Your Journey With Us
    </Typography>

    {/* TEXT */}
    <Typography
      sx={{
        ...fontRegular,
        color: "#64748b",
        lineHeight: 1.9,
        mb: 5,
        maxWidth: "600px"
      }}
    >
      We are always looking for passionate and skilled professionals who are ready
      to grow, innovate, and contribute to impactful industrial projects. Build your
      career with a team that values expertise, integrity, and continuous development.
    </Typography>

    {/* IMAGE CARD */}
    <Box
      sx={{
        position: "relative",
        // borderRadius: "24px",
        overflow: "hidden",
        // boxShadow: "0 30px 80px rgba(0,0,0,0.15)",

        // "&:hover img": {
        //   transform: "scale(1.08)"
        // }
      }}
    >
      <Box
        component="img"
        src={joinourteam}
        sx={{
          width: "100%",
          height: { xs: "220px", md: "420px" }, 
          objectFit: "cover",
          transition: "0.6s"
        }}
      />

      {/* OVERLAY BADGE */}
      <Box
        sx={{
          position: "absolute",
          bottom: 20,
          left: 20,
          px: 3,
          py: 1,
          borderRadius: "30px",
          background: "linear-gradient(135deg,#3f95ea,#52d3aa)",
          color: "#fff",
          fontSize: "13px",
          fontWeight: 600
        }}
      >
        We’re Hiring
      </Box>
    </Box>

    {/* CTA BUTTON */}
    

  </Box>

</Box>

<Box
  sx={{
    display: "grid",
    gridTemplateColumns: { xs: "1fr", md: "1fr 1fr" },
    mb: 12,
    borderRadius: "24px",
    overflow: "hidden",
    boxShadow: "0 30px 80px rgba(0,0,0,0.08)"
  }}
>

  {/* ================= LEFT ================= */}
  <motion.div
    variants={fadeLeft}
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true }}
  >
    <Box
      sx={{
        background: "linear-gradient(135deg, #3f95ea, #52d3aa)",
        color: "#fff",
        display: "flex",
        alignItems: "center",
        px: { xs: 4, md: 8 },
        py: 10,
        height: "100%",
        position: "relative",

        "&:hover": {
          transform: "scale(1.02)"
        }
      }}
    >
      {/* glow effect */}
      <Box
        sx={{
          position: "absolute",
          width: "200px",
          height: "200px",
          background: "rgba(255,255,255,0.1)",
          borderRadius: "50%",
          top: "-50px",
          right: "-50px"
        }}
      />

      <Box>
        <Typography sx={{ fontSize: "12px", color: "#e0f7fa", mb: 2 }}>
          — OUR CULTURE
        </Typography>

        <Typography sx={{ ...fontBold, fontSize: "28px", mb: 3 }}>
          People First Approach
        </Typography>

        <Typography sx={{ lineHeight: 1.8, opacity: 0.9 }}>
          We believe that our people are our greatest strength. We foster a
          collaborative environment where innovation, safety, and professional
          growth are encouraged at every level.
        </Typography>
      </Box>
    </Box>
  </motion.div>

  {/* ================= RIGHT ================= */}
  <motion.div
    variants={fadeRight}
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true }}
  >
    <Box
      sx={{
        background: "#ffffff",
        display: "flex",
        alignItems: "center",
        px: { xs: 4, md: 8 },
        py: 10,
        height: "100%",
        position: "relative",

        "&:hover": {
          background: "#f8fafc",
          transform: "scale(1.02)"
        }
      }}
    >
      <Box sx={{ maxWidth: "460px" }}>

        {/* TAG */}
        <Typography
          sx={{
            fontSize: "12px",
            color: "#3f95ea",
            mb: 2,
            fontWeight: 600
          }}
        >
          — CAREER GROWTH
        </Typography>

        {/* TITLE */}
        <Typography sx={{ ...fontBold, fontSize: "28px", mb: 3 }}>
          Growth & Development
        </Typography>

        {/* TEXT */}
        <Typography sx={{ lineHeight: 1.8, color: "#64748b" }}>
          We provide continuous learning opportunities, hands-on experience,
          and exposure to real-world projects to help professionals grow and
          excel in their careers.
        </Typography>

        {/* accent underline */}
        <Box
          sx={{
            width: "70px",
            height: "4px",
            background: "linear-gradient(135deg,#3f95ea,#52d3aa)",
            borderRadius: "10px",
            mt: 4
          }}
        />

      </Box>

      {/* subtle divider */}
      <Box
        sx={{
          position: "absolute",
          left: 0,
          top: "20%",
          height: "60%",
          width: "2px",
          background: "#e2e8f0"
        }}
      />

    </Box>
  </motion.div>

</Box>



    <Box>
      <Footer />
    </Box>
   </Box>
  )
}

export default Carriers
