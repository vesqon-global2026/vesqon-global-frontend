import { Facebook, Google, LinkedIn, Twitter } from '@mui/icons-material'
import { Box, Typography, TextField, Button } from '@mui/material'
import React from 'react'
import { fontBold, fontRegular } from '../assets/style/homeStyle'

const Footer = () => {
  return (
   <Box sx={{ position: "relative", overflow: "hidden" }}>

  {/* 🔥 TOP SOFT WAVE */}
  <Box
    sx={{
      position: "absolute",
      top: "-40px",
      left: 0,
      width: "100%",
      zIndex: 0,
      opacity: 0.15,
    }}
  >
    <svg viewBox="0 0 1440 320" style={{ width: "100%" }}>
      <path
        fill="#3f95ea"
        d="M0,160L80,176C160,192,320,224,480,208C640,192,800,128,960,122.7C1120,117,1280,171,1360,197.3L1440,224V0H0Z"
      />
    </svg>
  </Box>


  {/* 🔥 MAIN FOOTER */}
  <Box
    sx={{
      position: "relative",
      zIndex: 2,

      // ✨ ANIMATED GRADIENT
      background: "linear-gradient(270deg,#0f172a,#1e293b,#020617)",
      backgroundSize: "400% 400%",
      animation: "footerGradient 12s ease infinite",

      color: "#fff",
    }}
  >

    {/* TOP BAR */}
    <Box
      sx={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        px: { xs: 2, md: 6 },
        py: 2,
        flexWrap: "wrap",
        gap: 2,
        borderBottom: "1px solid rgba(255,255,255,0.08)"
      }}
    >
      <Typography sx={{ ...fontRegular, fontSize: "14px", opacity: 0.9 }}>
        Delivering Accuracy, Building Confidence.
      </Typography>

      <Typography sx={{ ...fontBold, fontSize: "18px", letterSpacing: "1px" }}>
        Vesqon Global
      </Typography>

      {/* SOCIAL ICONS */}
      <Box sx={{ display: "flex", alignItems: "center", gap: 1.5 }}>
        <Typography sx={{ ...fontRegular, fontSize: "14px", opacity: 0.8 }}>
          Follow us
        </Typography>

        {[Facebook, Twitter, Google, LinkedIn].map((Icon, i) => (
          <Box
            key={i}
            sx={{
              width: "36px",
              height: "36px",
              borderRadius: "50%",
              background: "rgba(255,255,255,0.08)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              cursor: "pointer",
              transition: "all 0.3s ease",

              "&:hover": {
                background: "#3f95ea",
                transform: "translateY(-4px) scale(1.1)",
                boxShadow: "0px 10px 25px rgba(63,149,234,0.4)"
              }
            }}
          >
            <Icon sx={{ fontSize: "18px" }} />
          </Box>
        ))}
      </Box>
    </Box>


    {/* CONTENT */}
    <Box
      sx={{
        display: "flex",
        px: { xs: 2, md: 6 },
        py: { xs: 4, md: 6 },
        justifyContent: "space-between",
        flexWrap: "wrap",
        gap: "40px",
      }}
    >

      {/* ADDRESS */}
      <Box sx={{ flex: 1, minWidth: "250px" }}>
        <Typography sx={{ ...fontBold, fontSize: "20px", mb: 2 }}>
          Reach Us
        </Typography>

        <Typography sx={{ ...fontRegular, lineHeight: "28px", color: "#cbd5e1" }}>
          Al Luqman Building <br />
          3rd Floor, Office No-7<br />
          Al Khobar, KSA.
        </Typography>

        <Typography
          sx={{
            ...fontRegular,
            mt: 2,
            color: "#cbd5e1",
            cursor: "pointer",
            transition: "0.3s",
            "&:hover": {
              color: "#52d3aa",
              textDecoration: "underline"
            }
          }}
        >
          Email: info@vesqon.com
        </Typography>
      </Box>


      {/* NEWSLETTER */}
      <Box sx={{ flex: 1, minWidth: "250px" }}>
        <Typography sx={{ ...fontBold, fontSize: "20px", mb: 2 }}>
          Subscribe Newsletter
        </Typography>

        <Typography sx={{ ...fontRegular, mb: 2, color: "#cbd5e1" }}>
          Stay updated with our latest news and offers.
        </Typography>

        <Box
          sx={{
            display: "flex",
            gap: "10px",
            width:'65%',
            background: "rgba(255,255,255,0.05)",
            borderRadius: "10px",
            p: "6px",

            "&:focus-within": {
              boxShadow: "0px 0px 0px 2px #3f95ea"
            }
          }}
        >
          <TextField
            size="small"
            placeholder="Enter your email"
            variant="outlined"
            sx={{
              flex: 1,
              "& .MuiOutlinedInput-root": {
                color: "#fff",
                "& fieldset": { border: "none" }
              },
              input: { color: "#fff" }
            }}
          />

          <Button
            variant="contained"
            sx={{
              background: "linear-gradient(90deg,#3f95ea,#52d3aa)",
              textTransform: "none",
              px: 3,
              borderRadius: "8px",

              "&:hover": {
                transform: "scale(1.05)",
                boxShadow: "0px 10px 25px rgba(63,149,234,0.4)"
              },

              "&:active": {
                transform: "scale(0.95)"
              }
            }}
          >
            Subscribe
          </Button>
        </Box>
      </Box>

    </Box>


    {/* COPYRIGHT */}
    <Box
      sx={{
        textAlign: "center",
        py: 2,
        borderTop: "1px solid rgba(255,255,255,0.05)"
      }}
    >
      <Typography
        sx={{
          ...fontRegular,
          fontSize: "13px",
          color: "#94a3b8",
          "&:hover": { color: "#fff" }
        }}
      >
        © {new Date().getFullYear()} Vesqon Global. All Rights Reserved.
      </Typography>
    </Box>

  </Box>


  {/* 🔥 KEYFRAMES */}
  <style>
    {`
      @keyframes footerGradient {
        0% { background-position: 0% 50%; }
        50% { background-position: 100% 50%; }
        100% { background-position: 0% 50%; }
      }
    `}
  </style>

</Box>
  )
}

export default Footer