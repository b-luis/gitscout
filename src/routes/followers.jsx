import { useState } from "react";
import { getFollowers } from "../api";
import { Loader } from "../components";
import { useQuery } from "@tanstack/react-query";
import { Link, useLocation } from "react-router-dom";
import Search from "./search";
import { Profile } from "../components";

const followers = () => {
  const location = useLocation();
  const username = location?.search.toString().slice(10);
  const shouldFetchData = Boolean(username);
  const [pageNumber, setPageNumber] = useState(1);

  const {
    data: followers,
    error,
    isLoading,
  } = useQuery({
    queryKey: ["followers", username],
    queryFn: shouldFetchData ? () => getFollowers(username) : null,
    enabled: shouldFetchData,
  });

  if (error) return <p>{error.message}</p>;
  if (!shouldFetchData) return <Search text={"No followers found."} />;
  if (isLoading) return <Loader />;

  return followers?.map((follow) => (
    <Profile key={follow.id} login={follow.login} avatar={follow.avatar_url} />
  ));
};

export default followers;
