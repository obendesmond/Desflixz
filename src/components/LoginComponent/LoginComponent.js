import React, { useState } from "react";
import { Button, CircularProgress } from "@mui/material";
import "./LoginComponent.css";
import { useNavigate } from "react-router-dom";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { auth } from "backend";

export default function LoginComponent() {
  const navigate = useNavigate();
  const [login, setLogin] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rePassword, setRePassword] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [loading, setLoading] = useState(false);

  const handleLogin = () => {
    setLoading(true);
    if (!email || !password) return handleMessage("fill all fields.", setError);
    else
      signInWithEmailAndPassword(auth, email, password)
        .then(user => {
          setLoading(false);
          reset();
          navigate("/home");
        })
        .catch(err => {
          handleMessage(err.message, setError);
          reset();
        });
  };

  const handleRegister = () => {
    setLoading(true);
    if (!email || !password) return handleMessage("fill all fields.", setError);
    if (password !== rePassword)
      return handleMessage("passwords must be equal.", setError);
    else
      return createUserWithEmailAndPassword(auth, email, password)
        .then(user => {
          setLoading(false);
          handleMessage("registration successful. Please login!", setSuccess);
          reset();
          setLogin(true);
        })
        .catch(err => {
          handleMessage(err.message, setError);
          reset();
        });
  };

  const handleMessage = (msg, setData) => {
    setData(msg);
    setTimeout(() => {
      setLoading(false);
      setData("");
    }, 5000);
  };
  const reset = () => {
    setEmail("");
    setPassword("");
    setRePassword("");
  };
  return (
    <div className="authContainer">
      <p className="msg" style={{ color: error ? "yellow" : "green" }}>
        {error}
        {success}
      </p>
      <input
        value={email}
        onChange={e => setEmail(e.target.value)}
        type="email"
        placeholder="enter email"
      />
      <input
        value={password}
        onChange={e => setPassword(e.target.value)}
        type="password"
        placeholder="enter password"
      />
      <input
        value={rePassword}
        onChange={e => setRePassword(e.target.value)}
        style={{ display: login ? "none" : "block" }}
        type="password"
        placeholder="re-enter password"
      />
      <Button
        disabled={loading}
        onClick={() => (login ? handleLogin() : handleRegister())}
        variant="contained"
        color="secondary"
        disableElevation
      >
        {login ? "Login" : "Register"}
        {loading && (
          <CircularProgress
            size={20}
            sx={{
              color: "greenyellow",
              zIndex: 1,
              marginLeft: "-80px",
            }}
          />
        )}
      </Button>
      <p className="link" onClick={() => setLogin(!login)}>
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
