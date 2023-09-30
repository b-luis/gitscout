import { useState } from "react";
import { DiGithubAlt } from "react-icons/di";
import { useSearchParams } from "react-router-dom";

const Root = () => {
  const [input, setInput] = useState("");
  const [searchParams, setSearchParams] = useSearchParams();

  const handleChange = (e) => {
    setInput(e.target.value);
    console.log(e.code);
  };

  const handleSearch = () => {
    setSearchParams({ username: input });
  };

  return (
    <>
      <header id="header">
        <div id="header--title">
          <DiGithubAlt id="header__logo" />
          <h2 id="header__name">GitHub User Searcher</h2>
        </div>
        <div id="header--search">
          <input
            type="text"
            placeholder="Search User"
            onChange={handleChange}
            value={input}
            id="header--search__input"
          />
          <button
            onClick={handleSearch}
            onKeyDown={(e) => (e.key === "Enter" ? handleSearch : "")}
            id="header--search__button"
          >
            Search
          </button>
        </div>
      </header>
    </>
  );
};

export default Root;
