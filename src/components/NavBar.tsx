import { Link, NavLink } from "react-router-dom";

export const NavBar = () => {
  return (
    <div className="navbar ">
      <div className="navbar-start">
        <ul className="menu menu-horizontal px-3">
          <li>
            <NavLink to={"/"}>Timeline</NavLink>
          </li>
          <li>
            <NavLink to={"/profile"}>Profile</NavLink>
          </li>
        </ul>
      </div>
      <div className="navbar-center">
        <Link to="/" className="btn btn-ghost text-xl">
          Social Media App
        </Link>
      </div>
    </div>
  );
};
