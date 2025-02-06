import React, { useState } from "react";
import {
  Menu,
  MenuItem,
  Button,
  useTheme,
  useMediaQuery,
  Typography,
} from "@mui/material";
import { ArrowDropDown } from "@mui/icons-material";
import { useGlobalContext } from "../context/context";

const FormClassType = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const { selectedOption, setSelectedOption } = useGlobalContext();
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));
  const isMediumScreen = useMediaQuery(theme.breakpoints.down("md"));
  const options = ["economy", "premium_economy", "business", "first"];
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = (option) => {
    if (option) setSelectedOption(option);
    setAnchorEl(null);
  };

  return (
    <div>
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
          fontSize:  12 ,
          "&:hover": { backgroundColor: "#f5f5f5" },
        }}
      >
        {selectedOption}
      </Button>

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
            <Typography sx={{ fontSize: isSmallScreen ? "0.75rem" : "1rem" }}>
              {option}
            </Typography>
          </MenuItem>
        ))}
      </Menu>
    </div>
  );
};

export default FormClassType;
