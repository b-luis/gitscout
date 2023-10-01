import Search from "./search";
import { useLocation } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { getFollowing } from "../api";
import { Loader, Profile } from "../components";

// reference: https://tanstack.com/query/v4/docs/react/guides/query-functions

const Following = () => {
  const location = useLocation();
  const username = location?.search.toString().slice(10);
  const shouldFetchData = Boolean(username);

  const {
    data: following,
    error,
    isLoading,
  } = useQuery({
    queryKey: ["following", username],
    queryFn: shouldFetchData ? () => getFollowing(username) : null,
    enabled: shouldFetchData,
  });

  if (error) return <p>{error.message}</p>;
  if (!shouldFetchData) return <Search text={"No following found."} />;
  if (isLoading) return <Loader />;

  return following?.map((follow) => (
    <Profile key={follow.id} login={follow.login} avatar={follow.avatar_url} />
  ));
};

export default Following;
