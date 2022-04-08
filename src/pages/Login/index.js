import React, { useState } from "react";
import MovieCarousel from "components/MovieCarousel/MovieCarousel";
import requests from "axiosRequests/Requests";
import { Route, Routes } from "react-router-dom";
import LoginComponent from "components/LoginComponent/LoginComponent";
import { useSelector } from "react-redux";
import { selectUser } from "features/userSlice";
import MovieGroundLayout from "components/MovieGroundLayout/MovieGroundLayout";

function Login() {
  const user = useSelector(selectUser);

  return (
    <MovieGroundLayout isLogin>
      <h1 style={{ color: "white", fontSize: "40px" }}>
        Unlimited movies, TV shows and more.
      </h1>
      <Routes>
        {!user ? <Route path="/account" element={<LoginComponent />} /> : null}

        <Route
          exact
          path="*"
          element={<MovieCarousel fetchURL={requests.fetchTrending} />}
        />
      </Routes>
    </MovieGroundLayout>
  );
}

export default Login;
