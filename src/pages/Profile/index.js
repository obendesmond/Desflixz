import MovieGroundLayout from "components/MovieGroundLayout/MovieGroundLayout";
import ProfileComponent from "components/ProfileComponent/ProfileComponent";
import React from "react";

function index() {
  return (
    <MovieGroundLayout isLogin>
      <ProfileComponent />
    </MovieGroundLayout>
  );
}

export default index;
