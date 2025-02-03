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
} from "@mui/material";
import { ArrowDropDown, Person } from "@mui/icons-material";

const FormPerson = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const [passengers, setPassengers] = useState({
    adults: 1,
    children: 0,
    infantsSeat: 0,
    infantsLap: 0,
  });

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

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
        sx={{ textTransform: "none", px: 2, border: "none", color: "black" }}
      >
        {passengers.adults +
          passengers.children +
          passengers.infantsSeat +
          passengers.infantsLap}
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
              <Typography>Yetişkin</Typography>
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
              <Typography>Çocuk (2-11 Yaş)</Typography>
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
              <Typography>Bebek (Koltukta)</Typography>
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

            <Grid
              container
              alignItems="center"
              justifyContent="space-between"
              sx={{ my: 1 }}
            >
              <Typography>Bebek (Kucakta)</Typography>
              <ButtonGroup size="small">
                <Button
                  onClick={() => handleChange("infantsLap", -1)}
                  disabled={passengers.infantsLap <= 0}
                >
                  -
                </Button>
                <Button>{passengers.infantsLap}</Button>
                <Button onClick={() => handleChange("infantsLap", 1)}>+</Button>
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
