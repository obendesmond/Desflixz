import React, { useEffect } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "pages/Home";
import Profile from "pages/Profile";
import Login from "pages/Login";
import { useDispatch, useSelector } from "react-redux";
import { login } from "features/userSlice";
import { logout } from "features/userSlice";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "backend";
import { selectUser } from "features/userSlice";

export default function App() {
  const dispatch = useDispatch();
  const user = useSelector(selectUser);

  useEffect(() => {
    const unsub = onAuthStateChanged(auth, currentUser => {
      // if user is loged in in firebase then keep info in store
      if (currentUser) {
        console.log(currentUser);
        dispatch(
          login({
            uid: currentUser.uid,
            email: currentUser.email,
          })
        );
      } else dispatch(logout());
    });

    return () => unsub();
  }, [dispatch]);
  return (
    <BrowserRouter>
      <Routes>
        {user ? (
          <>
            <Route path="/home" element={<Home />} />
            <Route path="/profile" element={<Profile />} />
          </>
        ) : null}
        <Route path="/" exact element={<Login />} />
        <Route path="*" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
}
