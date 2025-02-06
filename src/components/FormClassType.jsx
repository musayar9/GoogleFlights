import React, { useState } from "react";
import {
  Menu,
  MenuItem,
  Button,
  useTheme,
  useMediaQuery,
  Typography,
  Box
} from "@mui/material";
import { ArrowDropDown } from "@mui/icons-material";
import { useGlobalContext } from "../context/context";

const FormClassType = () => {
  // State to handle the dropdown menu
  const [anchorEl, setAnchorEl] = useState(null);

  // Get selected option and setter from global context
  const { selectedOption, setSelectedOption } = useGlobalContext();

  // Theme and media query for responsiveness
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));
  const isMediumScreen = useMediaQuery(theme.breakpoints.down("md"));

  // Available class type options
  const options = ["economy", "premium_economy", "business", "first"];

  // Handle button click to open menu
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  // Handle menu item selection and close menu
  const handleClose = (option) => {
    if (option) setSelectedOption(option);
    setAnchorEl(null);
  };

  return (
    <Box>
      {/* Button to open the dropdown menu */}
      <Button
        onClick={handleClick}
        variant="outlined"
        endIcon={<ArrowDropDown />}
        sx={{
          backgroundColor: "white",
          textTransform: "capitalize",
          border: "none",
          borderColor: "#ccc",
          color: "#808385",
          fontSize: 12,
          "&:hover": { backgroundColor: "#f5f5f5" },
        }}
      >
        {selectedOption}
      </Button>

      {/* Dropdown menu for class selection */}
      <Menu
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={() => handleClose(null)}
      >
        {options.map((option, index) => (
          <MenuItem
            key={index}
            selected={option === selectedOption}
            onClick={() => handleClose(option)}
            sx={{ textTransform: "capitalize" }}
          >
            {/* Adjust font size based on screen size */}
            <Typography sx={{ fontSize: isSmallScreen ? "0.60rem" : "1rem" }}>
              {option}
            </Typography>
          </MenuItem>
        ))}
      </Menu>
    </Box>
  );
};

export default FormClassType;
