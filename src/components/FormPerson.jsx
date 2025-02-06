import React, { useState } from "react";
import {
  Box,
  Button,
  ButtonGroup,
  ClickAwayListener,
  Divider,
  Grid,
  Menu,
  Typography,
  useTheme,
  useMediaQuery,
} from "@mui/material";
import { ArrowDropDown, Person } from "@mui/icons-material";
import { useGlobalContext } from "../context/context";

const FormPerson = () => {
  // State to manage the menu anchor element
  const [anchorEl, setAnchorEl] = useState(null);

  // Get passenger data and setter from global context
  const { passengers, setPassengers } = useGlobalContext();

  // Function to handle button click and open the menu
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  // Get theme and media query for responsive design
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));
  const isMediumScreen = useMediaQuery(theme.breakpoints.down("md"));

  // Function to close the menu
  const handleClose = () => {
    setAnchorEl(null);
  };

  // Function to update the passenger count based on type
  const handleChange = (type, value) => {
    setPassengers((prev) => ({
      ...prev,
      [type]: Math.max(0, prev[type] + value), // Ensure value does not go below zero
    }));
  };

  return (
    <Box>
      {/* Button to open the dropdown menu */}
      <Button
        startIcon={<Person />}
        onClick={handleClick}
        endIcon={<ArrowDropDown />}
        variant="outlined"
        sx={{
          textTransform: "none",
          px: 2,
          border: "none",
          color: "#808385",
          fontSize: 12,
        }}
      >
        {passengers.adults + passengers.children + passengers.infantsSeat}
      </Button>

      {/* Dropdown menu for selecting passengers */}
      <Menu
        autoFocus
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={handleClose}
        PaperProps={{ sx: { width: 300, p: 2 } }}
      >
        <ClickAwayListener onClickAway={handleClose}>
          <Box>
            {/* Adults selection */}
            <Grid
              container
              alignItems="center"
              justifyContent="space-between"
              sx={{ my: 1 }}
            >
              <Typography>Adults</Typography>
              <ButtonGroup size="small">
                <Button
                  onClick={() => handleChange("adults", -1)}
                  disabled={passengers.adults <= 1}
                >
                  -
                </Button>
                <Button>{passengers.adults}</Button>
                <Button onClick={() => handleChange("adults", 1)}>+</Button>
              </ButtonGroup>
            </Grid>

            {/* Children selection */}
            <Grid
              container
              alignItems="center"
              justifyContent="space-between"
              sx={{ my: 1 }}
            >
              <Typography>Children (2-11 Age)</Typography>
              <ButtonGroup size="small">
                <Button
                  onClick={() => handleChange("children", -1)}
                  disabled={passengers.children <= 0}
                >
                  -
                </Button>
                <Button>{passengers.children}</Button>
                <Button onClick={() => handleChange("children", 1)}>+</Button>
              </ButtonGroup>
            </Grid>

            {/* Infant selection */}
            <Grid
              container
              alignItems="center"
              justifyContent="space-between"
              sx={{ my: 1 }}
            >
              <Typography>Baby (In Seat)</Typography>
              <ButtonGroup size="small">
                <Button
                  onClick={() => handleChange("infantsSeat", -1)}
                  disabled={passengers.infantsSeat <= 0}
                >
                  -
                </Button>
                <Button>{passengers.infantsSeat}</Button>
                <Button onClick={() => handleChange("infantsSeat", 1)}>
                  +
                </Button>
              </ButtonGroup>
            </Grid>

            {/* Divider */}
            <Divider sx={{ my: 2 }} />

            {/* Action buttons */}
            <Grid container justifyContent="space-between">
              <Button onClick={handleClose} color="error">
                Cancel
              </Button>
              <Button onClick={handleClose} color="primary">
                OK
              </Button>
            </Grid>
          </Box>
        </ClickAwayListener>
      </Menu>
    </Box>
  );
};

export default FormPerson;
