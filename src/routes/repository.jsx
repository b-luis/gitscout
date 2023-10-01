import Search from "./search";
import { useLocation } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { getRepo } from "../api";
import { Loader, Profile } from "../components";
import { AiTwotoneStar, AiOutlineFork } from "react-icons/ai";

const Repository = () => {
  const location = useLocation();
  const username = location?.search.toString().slice(10);
  const shouldFetchData = Boolean(username);

  const {
    data: repository,
    error,
    isLoading,
  } = useQuery({
    queryKey: ["following", username],
    queryFn: shouldFetchData ? () => getRepo(username) : null,
    enabled: shouldFetchData,
  });

  if (error) return <p>{error.message}</p>;
  if (!shouldFetchData) return <Search text={"No repository found."} />;
  if (isLoading) return <Loader />;

  return (
    <section id="repository">
      {repository?.map((repo, index) => (
        <div className="repository--wrapper">
          <a id="repository--link" href={repo.html_url} target="_blank">
            {index + 1}. {repo.name}
          </a>
          <div id="repository--details">
            <p className="repository--users">
              <AiTwotoneStar className="repository--icon star" />
              {repo.stargazers_count} stars
            </p>
            <p className="repository--users">
              <AiOutlineFork className="repository--icon" />
              {repo.forks_count} forks
            </p>
          </div>
        </div>
      ))}
    </section>
  );
};

export default Repository;
