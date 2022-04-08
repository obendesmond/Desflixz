import React, { useState } from "react";
import { selectUser } from "features/userSlice";
import { useSelector } from "react-redux";
import "./ProfileComponent.css";
import { Button } from "@mui/material";
import { signOut } from "firebase/auth";
import { auth } from "backend";

function ProfileComponent() {
  const user = useSelector(selectUser);
  const [email, setEmail] = useState(user.email);

  const handleLogout = () => {
    signOut(auth).catch(err => alert(err.message));
  };

  const sub = (title, subTitle) => (
    <div className="subContainer">
      <div className="subTitle">
        <h3>{title}</h3>
        <p>{subTitle}</p>
      </div>
      <Button variant="contained" disableElevation color="secondary">
        Subscribe
      </Button>
    </div>
  );

  return (
    <div className="profileContainer">
      <h1 className="profileTitle">DesFlixz: Edit Profile</h1>
      <hr />
      <input className="emailInput" value={email} type="text" />
      <h2 className="planTitle">Plans (Current Plan: Platinum)</h2>
      <hr />
      <div className="subscriptionContainer">
        <p className="renewDate">Renewal date: 04/03/2021</p>

        {sub("Desflixz Standard", "1080p")}
        {sub("Desflixz Basic", "480p")}
        {sub("Desflixz Premium", "4k+HDR")}

        <Button
          onClick={handleLogout}
          variant="contained"
          disableElevation
          color="secondary"
        >
          Sign Out
        </Button>
      </div>
    </div>
  );
}

export default ProfileComponent;
