import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import CssBaseline from "@mui/material/CssBaseline";
import useScrollTrigger from "@mui/material/useScrollTrigger";
import { Box, Button } from "@mui/material";
import { styled } from "@mui/system";

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
                src="https://upload.wikimedia.org/wikipedia/commons/7/7a/Logonetflix.png"
                alt="Netflix Logo"
                style={{
                  height: "30px",
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
