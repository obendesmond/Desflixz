import { auth } from "backend";
import { onAuthStateChanged } from "firebase/auth";
import React, { useEffect, useState } from "react";

function useAuth() {
  const [currentUser, setCurrentUser] = useState(null);

  useEffect(() => {
    const unsub = onAuthStateChanged(auth, user => setCurrentUser(user));

    return () => unsub();
  }, [currentUser]);

  return currentUser;
}

export default useAuth;
