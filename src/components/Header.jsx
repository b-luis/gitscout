import { useState } from "react";
import { useSearchParams } from "react-router-dom";
import { DiGithubAlt } from "react-icons/di";

const Header = () => {
  const [input, setInput] = useState("");
  const [searchParams, setSearchParams] = useSearchParams();

  return (
    <header id="header">
      <div id="header--title">
        <DiGithubAlt id="header__logo" />
        <h2 id="header__name">GitHub User Searcher</h2>
      </div>
      <div id="header--search">
        <input
          type="text"
          placeholder="Search User"
          onChange={(e) => setInput(e.target.value)}
          value={input}
          id="header--search__input"
        />
        <button
          onClick={() => setSearchParams({ username: input })}
          onKeyDown={(e) => (e.key === "Enter" ? handleSearch : "")}
          id="header--search__button"
        >
          Search
        </button>
      </div>
    </header>
  );
};

export default Header;
