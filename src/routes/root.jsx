import { Outlet, NavLink, useLocation } from "react-router-dom";
import { Toolbar, Header } from "../components";

const Root = () => {
  const location = useLocation();
  return (
    <>
      <Header />
      <main id="main">
        <Toolbar />
        <div id="main--follow-count-wrapper">
          <section id="main--follow-count">
            <NavLink to={`following${location?.search}`}>Following</NavLink>
            <NavLink to={`followers${location?.search}`}>Followers</NavLink>
            <Outlet />
          </section>
          <section id="main--user-profile"></section> {/** display_user */}
        </div>
      </main>
    </>
  );
};

export default Root;
