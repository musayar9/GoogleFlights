import React, { useState } from "react";
import { Menu, MenuItem, Button } from "@mui/material";
import { ArrowDropDown } from "@mui/icons-material";

const FormClassType = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const [selectedOption, setSelectedOption] = useState("Ekonomi");

  const options = ["Ekonomi", "Premium Ekonomi", "Business", "Birinci"];

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
          color: "black",
          backgroundColor: "white",
          border: "none",
          borderColor: "#ccc",
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
          >
            {option}
          </MenuItem>
        ))}
      </Menu>
    </div>
  );
};

export default FormClassType;
