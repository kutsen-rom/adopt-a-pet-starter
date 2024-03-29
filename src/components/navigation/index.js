import React, { useEffect, useState } from 'react';
import { getPetTypes } from '../../api/petfinder';
import Logo from '../../assets/logo.svg';
import Search from '../search';
import { NavLink, Outlet } from 'react-router-dom';

const Navigation = () => {
  const [petTypes, setPetTypes] = useState([]);

  useEffect(() => {
    async function getPetTypesData() {
      const { types } = await getPetTypes();
      setPetTypes(types);
    }

    getPetTypesData();
  }, []);

  return (
    <div>
      <nav>
        <div className="nav-logo">
          <img src={Logo} alt="Petlover" />
          <Search />
        </div>
        <ul className="nav-links">
          <li key="all">
            {/* This link should have an activeClassName and exact prop */}
            <NavLink
              to="/"
              className={({ isActive }) => isActive ? "nav-link-active" : "nav-link"}
            >
              All Pets
            </NavLink>
          </li>
          {petTypes
            ? petTypes.map((type) => (
                <li key={type.name}>
                  {/* These links should have an activeClassName prop */}
                  <NavLink
                    to={`${type._links.self.href.split('/').pop()}`}
                    key={type.name}
                    className={({ isActive }) => isActive ? "nav-link-active" : "nav-link" }
                  >
                    {type.name}s
                  </NavLink>{' '}
                </li>
              ))
            : 'Loading...'}
        </ul>
      </nav>
      <Outlet />
    </div>
  );
};

export default Navigation;
