import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import CssBaseline from "@mui/material/CssBaseline";
import useScrollTrigger from "@mui/material/useScrollTrigger";
import { Box, Button } from "@mui/material";

import logo from "assets/logo.png";
import { useNavigate } from "react-router-dom";

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

export default function Nav({ isLogin, ...rest }) {
  const navigate = useNavigate();

  return isLogin ? (
    <div
      style={{
        position: "absolute",
        padding: "20px 50px",
        display: "flex",
        justifyContent: "space-between",
        alignContent: "center",
        width: "100vw",
        //   border: "2px solid red",
      }}
    >
      <img
        onClick={() => navigate("/")}
        src={logo}
        alt="Netflix Logo"
        style={{
          height: "40px",
          objectFit: "contain",
          cursor: "pointer",
        }}
      />
      <Button
        style={{ marginRight: "100px", height: "35px" }}
        variant="contained"
        disableElevation
        color="secondary"
        onClick={() => navigate("/account")}
      >
        Account
      </Button>
    </div>
  ) : (
    <>
      <CssBaseline />
      <ElevationScroll {...rest}>
        <AppBar>
          <Box sx={{ flexGrow: 1 }}>
            <Toolbar>
              <img
                onClick={() => navigate("/")}
                src={logo}
                alt="Netflix Logo"
                style={{
                  height: "40px",
                  objectFit: "contain",
                  cursor: "pointer",
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
