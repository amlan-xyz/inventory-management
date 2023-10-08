import { Link } from "react-router-dom";

export const Sidebar = () => {
  return (
    <nav className="sidebar">
      <Link to="/">Dashboard</Link>
      <Link to="/sales">Sales</Link>
      <Link to="/items">Items</Link>
    </nav>
  );
};
