import React, { useState } from "react";
import { Menu, MenuItem, Button } from "@mui/material";
import { ArrowDropDown, Face, SyncAltOutlined } from "@mui/icons-material";
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

  const options = [
    { name: "Round-trip", icon: <SyncAltOutlined sx={{ fontSize: 16 }} /> },
    { name: "One Way", icon: <EastIcon sx={{ fontSize: 16 }} /> },
    {
      name: "Multi City",
      icon: <LocationCityIcon sx={{ fontSize: 16 }} />,
    },
  ];

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = (option) => {
    if (option) setSelectedOption(option);
    console.log("ıo", option);
    setAnchorEl(null);
    if (option.name === "One Way") {
      setOneWay(true);
    } else {
      setOneWay(false);
    }
  };
  console.log("ponew", oneWay);
  return (
    <div>
      <Button
        onClick={handleClick}
        variant="outlined"
        endIcon={<ArrowDropDown />}
        color="#808385"
        
        sx={{
          backgroundColor: "white",
          display: "flex",
          alignItems: "center",
          fontSize: 12,
          border: "none",
          borderColor: "#ccc",
          "&:hover": { backgroundColor: "#f5f5f5" },
        }}
      >
        <p style={{ paddingRight: "5px", paddingTop: "5px" }}>
          {selectedOption.icon}
        </p>
        <p>{selectedOption.name}</p>
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
              gap: 2,
            }}
          >
            <p> {option.icon}</p>

            <p> {option.name}</p>
          </MenuItem>
        ))}
      </Menu>
    </div>
  );
};

export default FormFlightType;
