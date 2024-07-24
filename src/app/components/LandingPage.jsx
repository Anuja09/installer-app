import React from "react";
import {
  Grid,
  Button,
  CssBaseline,
  Paper,
  Box,
} from "@mui/material";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

export default function LandingPage() {
    const navigate=useNavigate()
  const userInfo = useSelector((state) => state.main.user);

  return (
    <>
      <Grid container component="main" sx={{ height: "85vh" }}>
        <CssBaseline />
        <Grid item xs={3} sm={3} md={3} />
        <Grid
          item
          xs={6}
          sm={6}
          md={6}
          component={Paper}
          elevation={6}
          square
          sx={{ margin: "100px 0px" }}
        >
          <Box
            sx={{
              my: 8,
              mx: 4,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <h2>Welcome {userInfo.name}</h2>
            <Button variant="contained" onClick={()=>navigate("/installers")}>Proceed</Button>
          </Box>
        </Grid>
        <Grid item xs={3} sm={3} md={3} />
      </Grid>
      <Button>Proceed</Button>
    </>
  );
}
