import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import CssBaseline from "@mui/material/CssBaseline";
import useScrollTrigger from "@mui/material/useScrollTrigger";
import { Box, Button } from "@mui/material";

import logo from "assets/logo.png";

function ElevationScroll(props) {
  const { children } = props;

  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
  });

  return React.cloneElement(children, {
    elevation: trigger ? 4 : 0,
  });
}

export default function Nav(props) {
  return (
    <>
      <CssBaseline />
      <ElevationScroll {...props}>
        <AppBar>
          <Box sx={{ flexGrow: 1 }}>
            <Toolbar>
              <img
                src={logo}
                alt="Netflix Logo"
                style={{
                  height: "40px",
                  objectFit: "contain",
                }}
              />
              <Box sx={{ flexGrow: "1" }} />
              <Button variant="contained" disableElevation color="secondary">
                Login
              </Button>
            </Toolbar>
          </Box>
        </AppBar>
      </ElevationScroll>
      <Toolbar />
    </>
  );
}
