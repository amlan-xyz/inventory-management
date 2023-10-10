import { Link } from "react-router-dom";

import "./Sidebar.css";

import {
  MdListAlt,
  MdOutlineDashboard,
  MdOutlineInventory,
} from "react-icons/md";
import { TbListDetails } from "react-icons/tb";

export const Sidebar = () => {
  return (
    <nav className="sidebar">
      <header className="sidebar__header">
        My Inventory
        <MdOutlineInventory />{" "}
      </header>
      <ul className="sidebar__ul">
        <li className="sidebar__li">
          <span className="sidebar__icon">
            <MdOutlineDashboard />
          </span>
          <Link className="sidebar__li-item" to="/">
            Dashboard
          </Link>
        </li>
        <li className="sidebar__li">
          <span className="sidebar__icon">
            <TbListDetails />
          </span>
          <Link className="sidebar__li-item" to="/items">
            Inventory
          </Link>
        </li>
        <li className="sidebar__li">
          <span className="sidebar__icon">
            <MdListAlt />
          </span>
          <Link className="sidebar__li-item" to="/sales">
            Sales
          </Link>
        </li>
      </ul>
    </nav>
  );
};
