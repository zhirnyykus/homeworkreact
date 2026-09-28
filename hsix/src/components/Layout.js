import { NavLink, Outlet } from 'react-router-dom';

function Layout() {
  return (
    <div className="app">
      <nav>
        <NavLink to="/">Главная</NavLink>
        <NavLink to="/cats">Коты</NavLink>
      </nav>
      <Outlet />
    </div>
  );
}

export default Layout;