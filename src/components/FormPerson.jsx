import React, { useState } from "react";
import {
  Box,
  Button,
  ButtonGroup,
  ClickAwayListener,
  Divider,
  Grid,
  Menu,
  MenuItem,
  Typography,
    useTheme,
  useMediaQuery,
} from "@mui/material";
import { ArrowDropDown, Person } from "@mui/icons-material";
import { useGlobalContext } from "../context/context";

const FormPerson = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const { passengers, setPassengers } = useGlobalContext();
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));
  const isMediumScreen = useMediaQuery(theme.breakpoints.down("md"));
  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleChange = (type, value) => {
    setPassengers((prev) => ({
      ...prev,
      [type]: Math.max(0, prev[type] + value),
    }));
  };

  return (
    <Box>
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

      <Menu
        autoFocus
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={handleClose}
        PaperProps={{ sx: { width: 300, p: 2 } }}
      >
        <ClickAwayListener onClickAway={handleClose}>
          <Box>
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

            <Divider sx={{ my: 2 }} />

            {/* Alt Butonlar */}
            <Grid container justifyContent="space-between">
              <Button onClick={handleClose} color="error">
                İptal
              </Button>
              <Button onClick={handleClose} color="primary">
                Bitti
              </Button>
            </Grid>
          </Box>
        </ClickAwayListener>
      </Menu>
    </Box>
  );
};

export default FormPerson;
