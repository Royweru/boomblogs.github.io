import React from "react";
import { NavLink } from "react-router-dom";
import { useContext } from "react";
import DataContext from "./Context/DataContext";
const Nav = () => {
  const { search, setSearch } = useContext(DataContext);
  return (
    <nav className="Nav">
      <form className="navForm" onSubmit={(e) => e.preventDefault}>
        <label htmlFor="search">SEARCH BLOGS</label>
        <input
          type="text"
          id="search"
          placeholder="SEARCH"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </form>
      <ul className="nav2">
        <li>
          <NavLink to={"/"}>Home</NavLink>
        </li>
        <li>
          <NavLink to={"Post"}>Post</NavLink>
        </li>
        <li>
          <NavLink to={"About"}>About</NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
