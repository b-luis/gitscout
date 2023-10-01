import React from "react";
import { Link, useLocation } from "react-router-dom";

const Profile = ({ login, avatar }) => {
  return (
    <Link to={`?username=${login}`}>
      <img
        className="profile--user-image"
        src={avatar}
        alt="GitHub user display picture"
      />
    </Link>
  );
};

export default Profile;
