import { Box, Button, Grid, TextField, Typography, Container } from '@mui/material'
import React, { useState } from 'react'
import Header from './Header'
import Footer from './Footer'
import { fontBold, fontMedium, fontRegular } from '../assets/style/homeStyle'
import contactImg from "../assets/image/contact-pic.png";
import bg2 from "../assets/image/TPI-img/contact-banner.jpg";
import PhoneIcon from "@mui/icons-material/Phone";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import EmailIcon from "@mui/icons-material/Email";
import Swal from 'sweetalert2';

const Contact = () => {

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async () => {
    if (!formData.name || !formData.email || !formData.message) {
      Swal.fire({
        icon: "warning",
        title: "Incomplete Form",
        text: "Please fill in all required fields",
        confirmButtonColor: "#5daa54"
      });
      return;
    }

    try {
      setLoading(true);

      const response = await fetch("http://localhost:5000/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      Swal.fire({
        icon: "success",
        title: "Message Sent!",
        text: data.message || "Your message was sent successfully",
        confirmButtonColor: "#5daa54"
      });

      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
      });

    } catch (error) {
      Swal.fire({
        icon: "error",
        title: "Error",
        text: "Failed to send message"
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <Box>

      <Header />

      {/* ================= HERO ================= */}
      <Box sx={{ height: "450px" }}>
        <Box
          sx={{
            height: "100%",
            backgroundImage: `linear-gradient(to right, rgba(15,23,42,0.85), rgba(15,23,42,0.4)),url(${bg2})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            display: "flex",
            alignItems: "center",
            justifyContent: "center"
          }}
        >
          <Typography sx={{ ...fontBold, color: "#fff", fontSize: { xs: "28px", md: "50px" }, textAlign: "center" }}>
            Connect with Us: Your Gateway to Exceptional Service
          </Typography>
        </Box>
      </Box>

      {/* ================= QUICK CONTACT ================= */}
      <Box sx={{ py: 6 }}>
        <Grid container spacing={4} justifyContent="center">
          {[
            { title: "Call Us", desc: "+1 234 567 890", icon: <PhoneIcon /> },
            { title: "Email Us", desc: "info@vesqonglobal.com", icon: <EmailIcon /> },
            { title: "Visit Us", desc: "Al Khobar, KSA", icon: <LocationOnIcon /> }
          ].map((item, i) => (
            <Grid item xs={12} sm={4} key={i}>
              <Box sx={cardStyle}>
                <Box sx={{ mb: 2, color: "#52d3aa" }}>{item.icon}</Box>
                <Typography sx={{ ...fontBold }}>{item.title}</Typography>
                <Typography sx={{ color: "#64748b" }}>{item.desc}</Typography>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Box>

      {/* ================= MAIN CONTACT ================= */}
      <Box sx={{ display: "flex", flexDirection: { xs: "column", md: "row" }, px: 3, py: 6 }}>

        {/* LEFT */}
        <Box sx={{ width: { xs: "100%", md: "50%" },marginLeft: {xs:"0",md:"80px"} }}>
          <Typography sx={{ ...fontBold, fontSize: "24px" }}>
            Let’s Discuss Your Requirements
          </Typography>

          <Typography sx={{ ...fontMedium, mt: 2 }}>
            Prefer direct communication? Reach out anytime.
          </Typography>

          <Box component="img" src={contactImg} sx={{ width: "100%", maxWidth: "420px", mt: 2 }} />
        </Box>

        {/* RIGHT FORM */}
        <Box sx={{ width: { xs: "100%", md: "50%" }, mt: { xs: 4, md: 0 } }}>
          <Box sx={formBox} id="contact-form">

            <TextField name="name" fullWidth label="Your Name *" value={formData.name} onChange={handleChange} sx={{ mb: 3 }} />
            <TextField name="email" fullWidth label="Email *" value={formData.email} onChange={handleChange} sx={{ mb: 3 }} />
            <TextField name="subject" fullWidth label="Subject" value={formData.subject} onChange={handleChange} sx={{ mb: 3 }} />
            <TextField name="message" fullWidth multiline rows={5} label="Message *" value={formData.message} onChange={handleChange} sx={{ mb: 3 }} />

            <Button onClick={handleSubmit} disabled={loading} variant="contained" sx={btnStyle}>
              {loading ? "Sending..." : "Send Your Inquiry"}
            </Button>

          </Box>
        </Box>

      </Box>

     
      {/* ================= MAP ================= */}
      <Box sx={{ p: 4 }}>
        <iframe
          title="map"
          src="https://www.google.com/maps?q=Al+Khobar&output=embed"
          width="100%"
          height="400"
          style={{ border: 0 }}
        />
      </Box>

      {/* ================= CTA ================= */}
      <Box sx={{ textAlign: "center", py: 10 }}>
        <Typography sx={{ ...fontBold, fontSize: "28px", mb: 2 }}>
          Need Immediate Assistance?
        </Typography>

        <Typography sx={{ mb: 4, color: "#64748b" }}>
          Our team is ready to support you.
        </Typography>

        <Box sx={{ display: "flex", justifyContent: "center", gap: 3 }}>
          <Box sx={btnStyle}>Call Now</Box>
          <Box sx={btnOutline} onClick={() => {
    document.getElementById("contact-form")?.scrollIntoView({
      behavior: "smooth"
    });
  }}>Email Us</Box>
        </Box>
      </Box>

      <Footer />

    </Box>
  )
};

export default Contact;

/* ================= STYLES ================= */

const cardStyle = {
  p: 4,
  textAlign: "center",
  borderRadius: "14px",
  background: "#fff",
  border: "1px solid #eef2f7",
  transition: "0.3s",
  "&:hover": {
    transform: "translateY(-5px)",
    boxShadow: "0 15px 40px rgba(0,0,0,0.08)"
  }
};

const formBox = {
  p: 4,
  background: "#fff",
  borderRadius: "10px",
  boxShadow: "0 5px 20px rgba(0,0,0,0.08)"
};

const btnStyle = {
  background: "linear-gradient(90deg,#3f95ea,#52d3aa)",
  px: 5,
  py: 1.5,
  borderRadius: "30px",
  textTransform: "none"
};

const btnOutline = {
  px: 5,
  py: 1.5,
  borderRadius: "30px",
  border: "1px solid #5daa54",
  color: "#5daa54",
  cursor: "pointer"
};