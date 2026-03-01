import { NavLink, Outlet } from "react-router-dom";

export const Layout = () => {
  return (
    <div className="app-layout">
      <header>
        <NavLink to="/your-work">Your Work</NavLink>
        <NavLink to="/projects">Projects</NavLink>
        <NavLink to="/filters">Filters</NavLink>
        <NavLink to="/dashboards">Dashboards</NavLink>
      </header>

      <main>
        <Outlet />
      </main>
    </div>
  );
};