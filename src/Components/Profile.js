// src/components/Profile.js

import React, { Fragment } from "react";
import { useAuth0 } from "../react-auth0-spa";

const Profile = () => {
  const { loading, user } = useAuth0();

  if (loading || !user) {
    return <div>Loading...</div>;
  }

  return (
    <Fragment>
      <img src={user.picture} alt="Profile" />

      <h2 style={{textDecoration: "none", color: "white"}}>{user.name}</h2>
      <p style={{textDecoration: "none", color: "white"}}>{user.email}</p>
      <code style={{textDecoration: "none", color: "white"}}>{JSON.stringify(user, null, 2)}</code>
    </Fragment>
  );
};

export default Profile;