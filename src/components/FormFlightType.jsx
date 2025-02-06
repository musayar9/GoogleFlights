import React, { useState } from "react";
import {
  Menu,
  MenuItem,
  Button,
  Typography,
  useTheme,
  useMediaQuery,
} from "@mui/material";
import { ArrowDropDown, SyncAltOutlined } from "@mui/icons-material";
import EastIcon from "@mui/icons-material/East";
import LocationCityIcon from "@mui/icons-material/LocationCity";
import { useGlobalContext } from "../context/context";

const FormFlightType = () => {
  // State to manage dropdown menu
  const [anchorEl, setAnchorEl] = useState(null);

  // Get flight type state from global context
  const { oneWay, setOneWay } = useGlobalContext();

  // State for selected option with default value
  const [selectedOption, setSelectedOption] = useState({
    name: "Round-trip",
    icon: <SyncAltOutlined />,
  });

  // Theme and media query for responsiveness
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));
  const isMediumScreen = useMediaQuery(theme.breakpoints.down("md"));

  // Available flight type options
  const options = [
    {
      name: "Round-trip",
      icon: (
        <SyncAltOutlined
          sx={{ fontSize: isSmallScreen ? 12 : isMediumScreen ? 16 : 20 }}
        />
      ),
    },
    {
      name: "One Way",
      icon: (
        <EastIcon
          sx={{ fontSize: isSmallScreen ? 12 : isMediumScreen ? 16 : 20 }}
        />
      ),
    },
    {
      name: "Multi City",
      icon: (
        <LocationCityIcon
          sx={{ fontSize: isSmallScreen ? 12 : isMediumScreen ? 16 : 20 }}
        />
      ),
    },
  ];

  // Handle button click to open menu
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  // Handle menu item selection and update state
  const handleClose = (option) => {
    if (option) setSelectedOption(option);
    setAnchorEl(null);
    setOneWay(option?.name === "One Way");
  };

  return (
    <div>
      {/* Button to open dropdown menu */}
      <Button
        onClick={handleClick}
        variant="outlined"
        endIcon={<ArrowDropDown />}
        sx={{
          backgroundColor: "white",
          display: "flex",
          alignItems: "center",
          border: "none",
          borderColor: "#ccc",
          textTransform:"capitalize",
          fontSize: isSmallScreen ? 12 :  14,
          "&:hover": { backgroundColor: "#f5f5f5" },
          padding: isSmallScreen ? "4px 8px" : "8px 16px",
        }}
      >
        <Typography
          variant="subtitle2"
          sx={{ paddingLeft: 1, paddingRight: 1 }}
        >
          {selectedOption.icon}
        </Typography>
        <Typography fontSize={isSmallScreen ? "0.60rem" : "1rem"}>
          {selectedOption.name}
        </Typography>
      </Button>

      {/* Dropdown menu for flight type selection */}
      <Menu
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={() => handleClose(null)}
      >
        {options.map((option, index) => (
          <MenuItem
            key={index}
            selected={option.name === selectedOption.name}
            onClick={() => handleClose(option)}
            sx={{
              display: "flex",
              alignItems: "center",
              gap: 1,
            }}
          >
            <Typography>{option.icon}</Typography>
            <Typography sx={{ fontSize: isSmallScreen ? "0.75rem" : "1rem" }}>
              {option.name}
            </Typography>
          </MenuItem>
        ))}
      </Menu>
    </div>
  );
};

export default FormFlightType;
