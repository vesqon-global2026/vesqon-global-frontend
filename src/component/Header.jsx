import {
  Box,
  Tab,
  Tabs,
  Typography,
  Menu,
  MenuItem,
  IconButton,
  Drawer,
  List,
  ListItemButton,
  ListItemText,
  Collapse
} from "@mui/material";

import MenuIcon from "@mui/icons-material/Menu";
import KeyboardArrowDown from "@mui/icons-material/KeyboardArrowDown";
import CloseIcon from "@mui/icons-material/Close";

import React from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { fontBold, fontMedium } from "../assets/style/homeStyle";
import logo from "../assets/image/final-vg.png";

const Header = () => {

  const [value, setValue] = React.useState("home");
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = React.useState(false);

  const navigate = useNavigate();
  const location = useLocation();

  /* Sync tab with URL */

  // Sync tab with URL
React.useEffect(() => {
  if (location.pathname === "/") setValue("home");
  else if (location.pathname === "/about") setValue("about");

  else if (
    location.pathname.startsWith("/OurServices") || 
    location.pathname.startsWith("/services")
  ) setValue("services"); // <- catch all service pages
  else if (location.pathname === "/careers") setValue("carriers");
  else if (location.pathname === "/contact") setValue("contact");
}, [location.pathname]);

  const handleChange = (event, newValue) => {
    setValue(newValue);
    if (newValue === "home") navigate("/");
    if (newValue === "about") navigate("/about");
    if (newValue === "carriers") navigate("/careers");
    if (newValue === "contact") navigate("/contact");
  };

  /* Desktop Services Dropdown */

  const handleMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const handleMenuItemClick = (path) => {
    navigate(path);
    handleMenuClose();
  };

  /* Mobile Drawer */

  const handleDrawerOpen = () => {
    setMobileOpen(true);
  };

  const handleDrawerClose = () => {
    setMobileOpen(false);
  };

  const handleMobileNavigate = (path) => {
    navigate(path);
    setMobileOpen(false);
  };

  return (
    <Box>

      {/* HEADER */}

      <Box
        sx={{
          position: "sticky",
          top: 0,
          zIndex: 1200,
          padding: { xs: "10px 20px", md: "5px 40px" },
          // background: "linear-gradient(90deg,#B16CEA,#6C63FF)",
          color: "white",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center"
        }}
      >

        {/* LOGO */}
       <Box
  sx={{
    display: "flex",
    justifyContent: { xs: "center", md: "flex-start" }, // center on mobile, left on desktop
    alignItems: "center",
    py: { xs: 2, md: 0 },
  }}
>
  <Box
    component="img"
    src={logo}
    alt="Vesqon Global Logo"
    sx={{
      width: { xs: "120px", sm: "180px", md: "240px" },  // responsive width
      height: "auto", // maintain aspect ratio
      objectFit: "contain",
    }}
  />
</Box>
        {/* <Box>
        <Typography sx={{ ...fontBold, fontSize: "26px", marginLeft: "-20px", color: "#00a7a7" }}>
          Vesqon 
        </Typography>
        <Typography sx={{ ...fontMedium, fontSize: "18px", color: "white",marginTop:'-5px',marginLeft: "15px" }}>
          Global
        </Typography>
        </Box>
</Box>
<Typography sx={{ ...fontMedium, fontSize: "14px", color: "white", marginLeft: "10px" }}>
          The Guardian of Quality
        </Typography>
</Box> */}
        {/* DESKTOP NAV */}

        <Box sx={{ display: { xs: "none", md: "flex" }, alignItems: "center" }}>

        <Tabs
    value={value}
    onChange={handleChange}
    TabIndicatorProps={{
      sx: {
        height: "3px",
        background: "linear-gradient(90deg, #20518f, #5daa54)",
      },
    }}
  >

    {/* HOME TAB */}
    <Tab
      value="home"
      label="Home"
      sx={{
        ...fontBold,
        textTransform: "capitalize",
        fontSize: "20px",
        color: "#20518f",
        "&.Mui-selected": {
          color: "#5daa54",
        },
      }}
    />
   <Tab
      value="about"
      label="About Us"
      sx={{
        ...fontBold,
        textTransform: "capitalize",
        fontSize: "20px",
        color: "#20518f",
        "&.Mui-selected": {
          color: "#5daa54",
        },
      }}
    />
    {/* SERVICES TAB */}
    <Tab
      value="services"
      label="Our Services"
      icon={
        <KeyboardArrowDown
          onMouseEnter={handleMenuOpen}
          sx={{
            transform: anchorEl ? "rotate(180deg)" : "rotate(0deg)",
            transition: "0.3s",
          }}
        />
      }
      iconPosition="end"
      onClick={() => {
        setValue("services");
        navigate("/OurServices");
      }}
      sx={{
        ...fontBold,
        textTransform: "capitalize",
        fontSize: { xs: "12px", sm: "14px", md: "20px" },
        color: "#20518f",
        "&.Mui-selected": {
          color: "#5daa54",
        },
        "& .MuiTab-iconWrapper": {
          ml: "4px",
        },
      }}
    />

    {/* CAREERS TAB */}
    <Tab
      value="carriers"
      label="Careers"
      sx={{
        ...fontBold,
        textTransform: "capitalize",
        fontSize: "20px",
        color: "#20518f",
        "&.Mui-selected": {
          color: "#5daa54",
        },
      }}
    />

    {/* CONTACT TAB */}
    <Tab
      value="contact"
      label="Contact"
      sx={{
        ...fontBold,
        textTransform: "capitalize",
        fontSize: "20px",
        color: "#20518f",
        "&.Mui-selected": {
          color: "#5daa54",
        },
      }}
    />

  </Tabs>
          {/* DESKTOP DROPDOWN */}

          <Menu
            anchorEl={anchorEl}
            open={Boolean(anchorEl)}
            onClose={handleMenuClose}
            MenuListProps={{
              onMouseLeave: handleMenuClose
            }}
          >

            <MenuItem onClick={() => handleMenuItemClick("/services/third-party-inspection")} >
              Third Party Inspection
            </MenuItem>

            <MenuItem onClick={() => handleMenuItemClick("/services/asset-integrity-management")}>
              Asset Integrity Management
            </MenuItem>

            <MenuItem onClick={() => handleMenuItemClick("/services/ndt-services")}>
              NDT Services
            </MenuItem>

            <MenuItem onClick={() => handleMenuItemClick("/services/technical-staffing")}>
              Technical Staffing
            </MenuItem>

            <MenuItem onClick={() => handleMenuItemClick("/services/training")}>
              Training
            </MenuItem>

          </Menu>

        </Box>

        {/* MOBILE BURGER */}

        <IconButton
          onClick={handleDrawerOpen}
          sx={{ display: { xs: "block", md: "none" }, color: "black" }}
        >
          <MenuIcon />
        </IconButton>

      </Box>

      {/* MOBILE MENU BELOW HEADER */}

      <Drawer
        anchor="right"
        open={mobileOpen}
        onClose={handleDrawerClose}
        sx={{
          display: { xs: "block", md: "none" },
          "& .MuiDrawer-paper": {
            width: "100%",
            top: "64px",
            height: "48%",
            background: "rgba(0,0,0,0.8)",
            color: "white"
          }
        }}
      >

        <Box sx={{ padding: "20px" }}>

          <IconButton
            onClick={handleDrawerClose}
            sx={{ color: "white", float: "right" }}
          >
            <CloseIcon />
          </IconButton>

        </Box>

        <List >

          <ListItemButton onClick={() => handleMobileNavigate("/")}sx={{borderBottom:'1px solid #6f6f6f',}}>
            <ListItemText primary="Home" />
          </ListItemButton>
 <ListItemButton onClick={() => handleMobileNavigate("/about")}sx={{borderBottom:'1px solid #6f6f6f',}}>
            <ListItemText primary="About Us" />
          </ListItemButton>

          <ListItemButton
            onClick={() => setMobileServicesOpen(!mobileServicesOpen)} sx={{borderBottom:'1px solid #6f6f6f',}}
          >
            <ListItemText primary="Our Services"  onClick={() => {
                setValue("services");
                navigate("/OurServices");
              }}/>
            <KeyboardArrowDown
              sx={{
                transform: mobileServicesOpen
                  ? "rotate(180deg)"
                  : "rotate(0deg)",
                transition: "0.3s"
              }}
            />
          </ListItemButton>

          <Collapse in={mobileServicesOpen} timeout="auto" unmountOnExit>

            <List component="div" disablePadding sx={{ pl: 3 }}>

              <ListItemButton onClick={() => handleMobileNavigate("/services/third-party-inspection")} sx={{borderBottom:'1px solid #6f6f6f'}}>
                <ListItemText primary="Third Party Inspection" />
              </ListItemButton>

              <ListItemButton onClick={() => handleMobileNavigate("/services/asset-integrity-management")} sx={{borderBottom:'1px solid #6f6f6f'}}>
                <ListItemText primary="Asset Integrity Management" />
              </ListItemButton>

              <ListItemButton onClick={() => handleMobileNavigate("/services/ndt-services")} sx={{borderBottom:'1px solid #6f6f6f'}}>
                <ListItemText primary="NDT Services" />
              </ListItemButton>

              <ListItemButton onClick={() => handleMobileNavigate("/services/technical-staffing")} sx={{borderBottom:'1px solid #6f6f6f'}}>
                <ListItemText primary="Technical Staffing" />
              </ListItemButton>

              <ListItemButton onClick={() => handleMobileNavigate("/services/training")} sx={{borderBottom:'1px solid #6f6f6f'}}>
                <ListItemText primary="Training" />
              </ListItemButton>

            </List>

          </Collapse>

          <ListItemButton onClick={() => handleMobileNavigate("/careers")} sx={{borderBottom:'1px solid #6f6f6f'}}>
            <ListItemText primary="Carriers" />
          </ListItemButton>

          <ListItemButton onClick={() => handleMobileNavigate("/contact")} >
            <ListItemText primary="Contact" />
          </ListItemButton>

        </List>

      </Drawer>

    </Box>
  );
};

export default Header;