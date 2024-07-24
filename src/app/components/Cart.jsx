import React, { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { Button, Grid, Drawer, Divider } from "@mui/material";
import ShoppingCartCheckoutIcon from "@mui/icons-material/ShoppingCartCheckout";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { Navigate, useNavigate } from "react-router-dom";
import Badge from "@mui/material/Badge";
import { styled } from "@mui/material/styles";

import { softwares } from "../utils/util";
import Installers from "./Installers";
import InstallationStepper from "./InstallationStepper";

export default function Cart() {
  const navigate = useNavigate();
  const [filterSoftwares, setFilterSoftwares] = useState(softwares);
  const [cartsoftwares, setCartSoftwares] = useState([]);
  const [keyword, setKeyword] = useState("");
  const [openDrawer, setOpenDrawer] = useState(false);

  const StyledBadge = styled(Badge)(({ theme }) => ({
    "& .MuiBadge-badge": {
      right: -3,
      top: 13,
      border: `2px solid ${theme.palette.background.paper}`,
      padding: "0 4px",
    },
  }));

  useEffect(() => {
    if (keyword && keyword.length > 0) {
      setFilterSoftwares(
        filterSoftwares.filter((fSoft) =>
          fSoft.name
            .toLocaleLowerCase()
            .includes(keyword.toLocaleLowerCase().toString())
        )
      );
    } else {
      setFilterSoftwares(softwares);
    }
  }, [keyword]);

  return (
    <Box>
      <Grid container spacing={2}>
        <Grid item xs={12} md={12}>
          <TextField
            id="standard-basic"
            label="Search"
            variant="standard"
            autoComplete="off"
            onChange={(e) => setKeyword(e.target.value)}
            sx={{ marginLeft: "15px" }}
          />
          <Box
            sx={{
              float: "right",
            }}
          >
            <Button variant="outlined" onClick={() => navigate("/")}>
              Back to Home
            </Button>
            <Button
              variant="outlined"
              sx={{ marginTop: "15px", margin: "10px" }}
              onClick={() => setOpenDrawer(true)}
            >
              {cartsoftwares.length ? (
                <StyledBadge
                  badgeContent={cartsoftwares.length}
                  color="secondary"
                  sx={{ marginRight: "15px" }}
                >
                  <ShoppingCartIcon />
                </StyledBadge>
              ) : (
                <ShoppingCartIcon />
              )}{" "}
              Cart
            </Button>
          </Box>
        </Grid>
        <Grid item xs={12} md={12}>
          <Installers
            filterSoftwares={filterSoftwares}
            setCartSoftwares={setCartSoftwares}
            cartsoftwares={cartsoftwares}
          />
        </Grid>
      </Grid>
      <Drawer
        open={openDrawer}
        anchor="right"
        PaperProps={{ sx: { width: "50%" } }}
      >
        <Box sx={{ marginLeft: "20px", display: "flex" }}>
          <h2>Install Softwares</h2>
        </Box>
        <Divider />
        <Box sx={{ margin: "30px" }}>
          <InstallationStepper
            cartsoftwares={cartsoftwares}
            setCartSoftwares={setCartSoftwares}
          />
        </Box>
        <Box>
          <Button
            sx={{ float: "right", marginRight: "10px" }}
            variant="outlined"
            onClick={() => setOpenDrawer(false)}
          >
            Close
          </Button>
        </Box>
      </Drawer>
    </Box>
  );
}
