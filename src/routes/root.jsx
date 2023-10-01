import { Outlet, NavLink, useLocation } from "react-router-dom";
import { Toolbar, Header } from "../components";
import { User } from "../routes";

const Root = () => {
  const location = useLocation();
  return (
    <>
      <Header />
      <main id="main">
        <Toolbar />
        <div id="main--follow-count-wrapper">
          <section id="main--follow-count">
            <NavLink
              className={({ isActive, isPending }) =>
                isActive ? "active" : isPending ? "" : "main--navlinks"
              }
              to={`following${location?.search}`}
            >
              Following
            </NavLink>
            <NavLink
              className={({ isActive, isPending }) =>
                isActive ? "active" : isPending ? "" : "main--navlinks"
              }
              to={`followers${location?.search}`}
            >
              Followers
            </NavLink>
            <NavLink
              className={({ isActive, isPending }) =>
                isActive ? "active" : isPending ? "" : "main--navlinks"
              }
              to={`repository${location?.search}`}
            >
              Repo
            </NavLink>
            <div id="following-followers-wrapper">
              <Outlet />
            </div>
          </section>
          <section id="main--user-profile">
            <User />
          </section>
        </div>
      </main>
    </>
  );
};

export default Root;
