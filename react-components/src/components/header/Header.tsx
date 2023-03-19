import styles from './Header.module.css';
import React from 'react';
import { NavLink } from 'react-router-dom';

class Header extends React.Component {
  render() {
    return (
      <div className={styles.container}>
        <NavLink
          to="/"
          className={(navData) => (navData.isActive ? styles.link_active : styles.link_passive)}
        >
          Main
        </NavLink>
        <NavLink
          to="/about"
          className={(navData) => (navData.isActive ? styles.link_active : styles.link_passive)}
        >
          About
        </NavLink>
      </div>
    );
  }
}

export default Header;
