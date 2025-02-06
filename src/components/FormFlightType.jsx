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
  const [anchorEl, setAnchorEl] = useState(null);
  const { oneWay, setOneWay } = useGlobalContext();
  const [selectedOption, setSelectedOption] = useState({
    name: "Round-trip",
    icon: <SyncAltOutlined />,
  });

  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));
  const isMediumScreen = useMediaQuery(theme.breakpoints.down("md"));

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

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = (option) => {
    if (option) setSelectedOption(option);
    setAnchorEl(null);
    setOneWay(option?.name === "One Way");
  };

  return (
    <div>
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
          fontSize: isSmallScreen ? "0.75rem" : "1rem",
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
