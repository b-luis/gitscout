import React from "react";
import Search from "./search";
import { Link, useLocation } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { getUser } from "../api";
import { Loader } from "../components";

const User = () => {
  const location = useLocation();
  const username = location?.search.toString().slice(10);
  const shouldFetchData = Boolean(username);

  const {
    data: user,
    error,
    isLoading,
  } = useQuery({
    queryKey: ["user", username],
    queryFn: shouldFetchData ? () => getUser(username) : null,
    enabled: shouldFetchData,
  });

  if (error) return <p>{error.message}</p>;
  if (!shouldFetchData) return <Search text={"Who are you looking for?"} />;
  if (isLoading) return <Loader />;

  return (
    <div id="user">
      <img id="user--image" src={user.avatar_url} alt="" />
      <h3 id="user--name">{user.login}</h3>
      <div id="user--details">
        <p className="detail">bio: {user.bio}</p>
        <p className="detail">loc: {user.location}</p>
        <p className="detail">repositories: {user.public_repos}</p>
        <p className="detail">
          joined: {user.created_at.toString().slice(0, 10)}
        </p>
      </div>
    </div>
  );
};

export default User;
