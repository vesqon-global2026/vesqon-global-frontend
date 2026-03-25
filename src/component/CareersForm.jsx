import {
  Box,
  Grid,
  TextField,
  Typography,
  Button,
  MenuItem,
  InputAdornment,
  Autocomplete
} from "@mui/material";
import React, { useState } from "react";
import { fontBold } from "../assets/style/homeStyle";
import { getNames } from "country-list";
import Swal from "sweetalert2";
import { LoadingButton } from "@mui/lab";
const countries = getNames();


const CareersForm = () => {
const [phone, setPhone] = useState("");

  const [cvFile, setCvFile] = useState(null);
const [fileName, setFileName] = useState("No file chosen");
const [errors, setErrors] = useState({});
const [loading, setLoading] = useState(false);
  // const handleFileChange = (e) => {
  //   if (e.target.files[0]) {
  //     setFileName(e.target.files[0].name);
  //   }
  // };
  const [formData, setFormData] = useState({
  name: "",
  email: "",
  phone: "",
  street: "",
  apartment: "",
  city: "",
  state: "",
  zip: "",
  country: ""
});
const handleChange = (e) => {
  const { name, value } = e.target;

  setFormData({
    ...formData,
    [name]: value
  });
   // remove error when user starts typing
  setErrors((prevErrors) => ({
    ...prevErrors,
    [name]: ""
  }));
};
const handleFileChange = (e) => {

  const file = e.target.files[0];

  if (!file) return;

  const allowedTypes = [
    "application/pdf",
    "application/msword",
    "application/vnd.openxmlformats-officedocument.wordprocessingml.document"
  ];

  if (!allowedTypes.includes(file.type)) {
    setErrors({ ...errors, cv: "Only PDF or Word files allowed" });
    return;
  }

  if (file.size > 2 * 1024 * 1024) {
    setErrors({ ...errors, cv: "File size must be under 2MB" });
    return;
  }

  setCvFile(file);
  setFileName(file.name);

  setErrors({ ...errors, cv: "" });
};
const validateForm = () => {

  let newErrors = {};

  if (!formData.name.trim())
    newErrors.name = "Name is required";

  if (!formData.email.trim())
    newErrors.email = "Email is required";
  else if (!/\S+@\S+\.\S+/.test(formData.email))
    newErrors.email = "Please enter valid email";

  if (!formData.phone.trim())
    newErrors.phone = "Phone number is required";

  if (!cvFile)
    newErrors.cv = "CV file is required";

  setErrors(newErrors);

  return Object.keys(newErrors).length === 0;
};
const handleSubmit = async () => {

  if (!validateForm()) return;

  setLoading(true);

  const data = new FormData();

  Object.keys(formData).forEach(key => {
    data.append(key, formData[key]);
  });

  data.append("cv", cvFile);

  try {

    const response = await fetch("https://vesqon-backend.onrender.com/api/careers", {
  method: "POST",
  body: data
});

const result = await response.json();

if (!response.ok) {
  throw new Error(result.message || "Failed");
}

Swal.fire({
  icon: "success",
  title: "Application Submitted!",
  text: "Your application was sent successfully",
});

    // RESET FORM
    setFormData({
      name: "",
      email: "",
      phone: "",
      street: "",
      apartment: "",
      city: "",
      state: "",
      zip: "",
      country: ""
    });

    setCvFile(null);
    setFileName("No file chosen");
    setErrors({});

  } catch (error) {

    Swal.fire("Error", "Something went wrong", "error");

  } finally {
    setLoading(false);
  }
};
  return (
    <Box
      sx={{
        width: "100%",
        maxWidth: "700px",
        margin: "auto",
        mt: 8,
        mb: 10,
         p: 4,
  background: "#fff",
  borderRadius: "10px",
  boxShadow: "0 5px 20px rgba(0,0,0,0.08)"
      }}
    >
      <Box sx={{ width: "100%", }}>
            <Typography variant="h4" sx={{ ...fontBold, textAlign: "center", mb: 4 }}>
              Join Our Team
            </Typography>
           
          </Box>
      <Grid container  spacing={2}  sx={{ "& .MuiGrid-root": {
width:'100%'                },}}>

        <Grid item  xs={12}  >
          <TextField
          name="name"
            label="Name"
            variant="standard"
            fullWidth
            required
            value={formData.name}
  onChange={handleChange}
  error={!!errors.name}
  helperText={errors.name}
            sx={{paddingTop:
              '10px'
            }}
          />
        </Grid>

        <Grid item xs={12}>
          <TextField
          name="email"
            label="Email Address"
            variant="standard"
            required
            fullWidth
             value={formData.email}
  onChange={handleChange}
  error={!!errors.email}
  helperText={errors.email}
              sx={{paddingTop:
              '10px'
            }}
          />
        </Grid>

        {/* Phone with country code */}
         <Grid item xs={12}>
          <TextField
          name="phone"
            label="Phone"
            variant="standard"
            required
            placeholder="E.g. +1 300 400 5000"
            fullWidth
           value={formData.phone}
  onChange={handleChange}
  error={!!errors.phone}
  helperText={errors.phone}
             sx={{paddingTop:
              '10px'
            }}
          />
        </Grid>

        <Grid item xs={12}>
          <TextField
          name="street"
            label="Street Address"
            variant="standard"
            fullWidth
               value={formData.street}
  onChange={handleChange}
              sx={{paddingTop:
              '10px'
            }}
          />
        </Grid>

        <Grid item xs={12}>
          <TextField
          name="apartment"
            label="Apartment, suite, etc"
            variant="standard"
              value={formData.apartment}
  onChange={handleChange}
            fullWidth
              sx={{paddingTop:
              '10px'
            }}
          />
        </Grid>

        <Grid item xs={12}>
          <TextField
          name="city"
            label="City"
            variant="standard"
            fullWidth
               value={formData.city}
  onChange={handleChange}
              sx={{paddingTop:
              '10px'
            }}
          />
        </Grid>

        <Grid item xs={12}>
          <TextField
          name="state"
            label="State/Province"
            variant="standard"
            fullWidth
               value={formData.state}
  onChange={handleChange}
              sx={{paddingTop:
              '10px'
            }}
          />
        </Grid>

        <Grid item xs={12}>
          <TextField
          name="zip"
            label="ZIP / Postal Code"
            variant="standard"
            fullWidth
                value={formData.zip}
  onChange={handleChange}
              sx={{paddingTop:
              '10px'
            }}
          />
        </Grid>


         <Grid item xs={12}>
          <Autocomplete
  options={countries}
  value={formData.country || null}
  onChange={(e, value) =>
    setFormData({ ...formData, country: value })
  }
  renderInput={(params) => (
    <TextField
      {...params}
      label="Country"
      variant="standard"
      fullWidth
    />
  )}
/>
        </Grid>
        {/* Upload CV */}

        <Grid item xs={12}>
          <Typography sx={{ mb: 1 }}>
            Upload CV
          </Typography>

          <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
            <Button
              variant="contained"
              component="label"
              sx={{
                
                textTransform: "none"
              }}
              
            >
              Choose File
              <input hidden type="file" onChange={handleFileChange} />
            </Button>
{errors.cv && (
  <Typography color="error" fontSize={13}>
    {errors.cv}
  </Typography>
)}
            <Typography sx={{ color: "#777", fontSize: "14px" }}>
              {fileName}
            </Typography>
          </Box>
        </Grid>

        {/* Send Button */}

        <Grid item xs={12}>
          <LoadingButton
  loading={loading}
  variant="contained"
  sx={{
     background: "linear-gradient(135deg,#3f95ea,#52d3aa)",
    px: 5,
    py: 1,
    float: "right"
  }}
  onClick={handleSubmit}
>
  Send
</LoadingButton>
        </Grid>

      </Grid>
    </Box>
  );
};

export default CareersForm;

