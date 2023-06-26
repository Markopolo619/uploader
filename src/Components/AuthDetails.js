import React, { useEffect, useState } from "react";
import { auth } from "../firebase";
import { onAuthStateChanged, signOut } from "firebase/auth";

const AuthDetails = () => {
  const [authUser, setAuthUser] = useState(null);

  useEffect(() => {
    const listen = onAuthStateChanged(auth, (user) => {
      if (user) {
        setAuthUser(user);
      } else {
        setAuthUser(null);
      }
    });

    return () => {
      listen();
    };
  }, []);

  const usersignOut = () => {
    signOut(auth)
      .then(() => {
        console.log("Sign out succesful");
      })
      .catch((error) => console.log(error));
  };

  return (
    <div>
      {authUser ? (
        <div className="signout_container">
          <p
            style={{ color: "white", textAlign: "center" }}
          >{`Signed In as ${authUser.email}`}</p>
          <button onClick={usersignOut} className="signout_button">
            Sign Out
          </button>
        </div>
      ) : (
        <p>Signed Out</p>
      )}
    </div>
  );
};

export default AuthDetails;
