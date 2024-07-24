import React, { useState } from "react";
import {
  Avatar,
  Button,
  CssBaseline,
  TextField,
  Paper,
  Box,
  Grid,
  Typography,
} from "@mui/material";
import { useDispatch } from "react-redux";
import { LockOutlined } from "@mui/icons-material";
import { Users } from "../utils/util";
import Snackbar from "@mui/material/Snackbar";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import { loggedInUser } from "../actions/actions";

export default function LoginIn() {
  const dispatch = useDispatch();
  const [open, setOpen] = React.useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const loginObj = {
      username: data.get("username"),
      password: data.get("password"),
    };
    const actualUser = Users.find(
      (user) =>
        user.username.toString() === loginObj.username.toString() && user.password.toString() === loginObj.password.toString()
    );
console.log(actualUser,'actualUser actualUser');
    if (actualUser) {
      dispatch(loggedInUser(actualUser));
    } else {
      setOpen(true);
      document.getElementById("form").reset();
    }
    console.log(loginObj, "-------------");
  };

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
  };

  const action = (
    <React.Fragment>
      <IconButton
        size="small"
        aria-label="close"
        color="inherit"
        onClick={handleClose}
      >
        <CloseIcon fontSize="small" />
      </IconButton>
    </React.Fragment>
  );

  return (
    <>
      <Grid
        container
        component="main"
        sx={{ height: "100vh", background: "#87cefa" }}
      >
        <CssBaseline />
        <Grid item xs={4} sm={4} md={4} />
        <Grid
          item
          xs={4}
          sm={4}
          md={4}
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
            <Avatar sx={{ m: 1, bgcolor: "#87cefa" }}>
              <LockOutlined />
            </Avatar>
            <Typography component="h1" variant="h5">
              Please Login
            </Typography>
            <Box
              component="form"
              id="form"
              noValidate
              onSubmit={handleSubmit}
              sx={{ mt: 1 }}
            >
              <TextField
                margin="normal"
                required
                fullWidth
                id="username"
                label="Username"
                name="username"
                autoComplete="off"
                autoFocus
              />
              <TextField
                margin="normal"
                required
                fullWidth
                id="password"
                label="Password"
                name="password"
                autoComplete="off"
                type="password"
                autoFocus
              />
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
              >
                Submit
              </Button>
              <Typography></Typography>
            </Box>
          </Box>
        </Grid>
        <Grid item xs={4} sm={4} md={4} />
        <Snackbar
          open={open}
          autoHideDuration={1000}
          onClose={handleClose}
          message="Invalid Username and Password"
          action={action}
        />
      </Grid>
    </>
  );
}
