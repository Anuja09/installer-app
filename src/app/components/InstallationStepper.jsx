import React from "react";

import {
  Box,
  FormControlLabel,
  Checkbox,
  FormGroup,
  Grid,
} from "@mui/material";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import StepContent from "@mui/material/StepContent";
import Button from "@mui/material/Button";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import Chip from "@mui/material/Chip";
import Stack from "@mui/material/Stack";

import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableFooter from "@mui/material/TableFooter";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";

import { InstallingSteps } from "../utils/util";
import { green } from "@mui/material/colors";

const InstallationStepper = ({ cartsoftwares, setCartSoftwares }) => {
  const [activeStep, setActiveStep] = React.useState(0);

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleReset = () => {
    setActiveStep(0);
  };

  return (
    <Box>
      {cartsoftwares && cartsoftwares.length > 0 ? (
        <>
          <Stepper activeStep={activeStep} orientation="vertical">
            {InstallingSteps.map((step, index) => (
              <Step key={step.label}>
                <StepLabel>{step.label}</StepLabel>
                <StepContent>
                  <Box sx={{ mb: 2 }}>
                    {index === 0 ? (
                      <FormGroup>
                        {cartsoftwares &&
                          cartsoftwares.length > 0 &&
                          cartsoftwares.map((cSoft) => (
                            <FormControlLabel
                              label={cSoft.name}
                              control={
                                <Checkbox
                                  checked
                                  onChange={(e) =>
                                    setCartSoftwares(
                                      cartsoftwares.filter(
                                        (software) =>
                                          software.name !== cSoft.name
                                      )
                                    )
                                  }
                                />
                              }
                            />
                          ))}
                      </FormGroup>
                    ) : (
                      ""
                    )}
                    {index === 1 ? (
                      <Typography>
                        You have selected
                        {cartsoftwares.map((cSoft, cIndex) => (
                          <>
                            {" "}
                            {cSoft.name}
                            {cartsoftwares.length !== cIndex + 1 ? "," : "."}
                          </>
                        ))}
                      </Typography>
                    ) : (
                      ""
                    )}
                    {index === InstallingSteps.length - 1 ? (
                      <>
                        <TableContainer component={Paper}>
                          <Table
                            sx={{ minWidth: 500 }}
                            aria-label="custom pagination table"
                          >
                            <TableBody>
                              <TableRow key={"header"}>
                                <TableCell component="th" scope="row">
                                  Softwares
                                </TableCell>
                                <TableCell
                                  style={{ width: 100 }}
                                  align="center"
                                >
                                  Download Status
                                </TableCell>
                                <TableCell style={{ width: 100 }} align="left">
                                  Action
                                </TableCell>
                                <TableCell style={{ width: 100 }} align="left">
                                  Final Status
                                </TableCell>
                              </TableRow>
                              {cartsoftwares.map((row, index) => (
                                <TableRow key={row.name}>
                                  <TableCell component="th" scope="row">
                                    {row.name}
                                  </TableCell>
                                  <TableCell
                                    style={{ width: 100 }}
                                    align="center"
                                  >
                                    {index !== 2 && (
                                      <Button color="green">
                                        Downloaded
                                        <CheckCircleOutlineIcon
                                          color="green"
                                          sx={{ marginTop: "0px" }}
                                        />
                                      </Button>
                                    )}

                                    {index === 2 && (
                                      <Button color="secondary">
                                        Failed
                                        <CheckCircleOutlineIcon
                                          color="secondary"
                                          sx={{ marginTop: "0px" }}
                                        />
                                      </Button>
                                    )}
                                  </TableCell>
                                  <TableCell
                                    style={{ width: 100 }}
                                    align="left"
                                  >
                                    {index === 0 && (
                                      <>
                                        <Stack direction="row" spacing={1}>
                                          <Chip
                                            label="Install"
                                            color="primary"
                                          />
                                        </Stack>
                                      </>
                                    )}
                                    {index === 1 && (
                                      <Stack direction="row" spacing={1}>
                                        <Chip label="Retry" color="secondary" />
                                      </Stack>
                                    )}
                                    {index === 2 &&<div style={{marginLeft:'20px'}}> -</div>}
                                    {index === 3 && (
                                      <Button color="green">
                                        Installed
                                        <CheckCircleOutlineIcon
                                          color="green"
                                          sx={{ marginTop: "0px" }}
                                        />
                                      </Button>
                                    )}
                                  </TableCell>
                                  <TableCell
                                    style={{ width: 100 }}
                                    align="left"
                                  >
                                    {index === 3 ? (
                                      <Button color="green">
                                        Success
                                        <CheckCircleOutlineIcon
                                          color="green"
                                          sx={{ marginTop: "0px" }}
                                        />
                                      </Button>
                                    ) : (
                                      "-"
                                    )}
                                  </TableCell>
                                </TableRow>
                              ))}
                            </TableBody>
                          </Table>
                        </TableContainer>
                      </>
                    ) : (
                      ""
                    )}
                    <div>
                      {index !== InstallingSteps.length - 1 ? (
                        <Button
                          variant="contained"
                          onClick={handleNext}
                          sx={{ mt: 1, mr: 1 }}
                        >
                          Continue
                        </Button>
                      ) : (
                        ""
                      )}
                      {index === 1 && (
                        <Button onClick={handleBack} sx={{ mt: 1, mr: 1 }}>
                          Back
                        </Button>
                      )}
                    </div>
                  </Box>
                </StepContent>
              </Step>
            ))}
          </Stepper>
          {activeStep === InstallingSteps.length && (
            <Paper square elevation={0} sx={{ p: 3 }}>
              <Typography>
                All steps completed - you&apos;re finished
              </Typography>
              <Button onClick={handleReset} sx={{ mt: 1, mr: 1 }}>
                Reset
              </Button>
            </Paper>
          )}
        </>
      ) : (
        <div>Please add the softwares to cart</div>
      )}
    </Box>
  );
};

export default InstallationStepper;
