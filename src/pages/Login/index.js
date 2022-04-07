import React, { useState } from "react";
import Layout from "components/Layout";
import bgImage from "assets/bg.jpg";
import MovieCarousel from "components/MovieCarousel/MovieCarousel";
import requests from "axiosRequests/Requests";
import { Route, Routes } from "react-router-dom";
import LoginComponent from "components/LoginComponent/LoginComponent";

function Login() {
  return (
    <Layout isLogin={true}>
      <div
        style={{
          background: `linear-gradient(to top, rgba(0,0,0,0.8) 0%, rgba(0,0,0,0.3) 60%, rgba(0,0,0,0.8) 100%), url(${bgImage})`,
          backgroundPosition: "center center",
          height: "100vh",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div
          style={{
            top: "20%",
            position: "absolute",
            marginRight: "auto",
            marginLeft: "auto",
            textAlign: "center",
            width: "100%",
          }}
        >
          <h1 style={{ color: "white", fontSize: "40px" }}>
            Unlimited movies, TV shows and more.
          </h1>
          <Routes>
            <Route path="/account" element={<LoginComponent />} />
            <Route
              exact
              path="*"
              element={<MovieCarousel fetchURL={requests.fetchTrending} />}
            />
          </Routes>
        </div>
      </div>
    </Layout>
  );
}

export default Login;
