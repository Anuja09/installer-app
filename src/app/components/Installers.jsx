import React, { useEffect } from "react";
import {
  CardMedia,
  CardHeader,
  Card,
  Paper,
  Button,
  Box,
  Divider,
  CardContent,
} from "@mui/material";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import RemoveShoppingCartIcon from "@mui/icons-material/RemoveShoppingCart";

import { softwares } from "../utils/util";
import { Margin } from "@mui/icons-material";

const Installers = ({ filterSoftwares, setCartSoftwares, cartsoftwares }) => {
  return (
    <Box sx={{ display: "flex", flexWrap: "wrap" }}>
      {filterSoftwares &&
        filterSoftwares.length > 0 &&
        filterSoftwares.map((fSoft) => (
          <Card variant="outlined" component={Paper} sx={{ margin: "10px" }}>
            <CardHeader title={fSoft.name} />
            <Divider />
            <CardMedia
              component="img"
              height="150"
              image={fSoft.image}
              alt="Paella dish"
            />
            <Divider />

            <CardContent>
              <CardContent>
                {cartsoftwares &&
                cartsoftwares.length > 0 &&
                cartsoftwares.find((cSoft) => cSoft.name === fSoft.name) ? (
                  <Button
                    color="secondary"
                    variant="outlined"
                    onClick={() =>
                      setCartSoftwares(
                        cartsoftwares.filter(
                          (cSoft) => cSoft.name !== fSoft.name
                        )
                      )
                    }
                  >
                    <RemoveShoppingCartIcon />
                    Remove From Cart
                  </Button>
                ) : (
                  <>
                    {/* <FormControl sx={{width:'100px',height:'20px'}}>
                      <InputLabel id="demo-simple-select-label">
                        Version
                      </InputLabel>
                      <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        label="version"
                        onChange={(event) =>
                          (fSoft.selectedVersion = event.target.value)
                        }
                      >
                        {fSoft?.versions?.length &&
                          fSoft.versions.map((ver) => (
                            <MenuItem value={ver}>{ver}</MenuItem>
                          ))}
                      </Select>
                    </FormControl> */}
                    <Button
                      variant="outlined"
                      onClick={() =>
                        setCartSoftwares([...cartsoftwares, fSoft])
                      }
                    >
                      <AddShoppingCartIcon />
                      Add To Cart
                    </Button>
                  </>
                )}
              </CardContent>
            </CardContent>
          </Card>
        ))}
    </Box>
  );
};

export default Installers;
