import React, { useState } from "react";
import { Button } from "@mui/material";
import "./LoginComponent.css";
import { useNavigate } from "react-router-dom";

export default function LoginComponent() {
  const navigate = useNavigate();
  const [login, setLogin] = useState(false);

  return (
    <div className="authContainer">
      <input type="email" placeholder="enter email" />
      <input type="password" placeholder="enter password" />
      <input
        style={{ display: login ? "none" : "block" }}
        type="password"
        placeholder="re-enter password"
      />
      <Button
        onClick={() => navigate("/home")}
        variant="contained"
        color="secondary"
        disableElevation
      >
        {login ? "Login" : "Register"}
      </Button>
      <p onClick={() => setLogin(!login)}>
        {login ? (
          <>
            <span style={{ color: "white" }}>New to desFlixz? |</span> "Register
            instead!."
          </>
        ) : (
          <>
            <span style={{ color: "white" }}>Already a member? |</span> "Login
            instead!."
          </>
        )}
      </p>
    </div>
  );
}
