import styles from './Layout.module.css';
import React from 'react';
import Header from '../components/header/Header';
import { Outlet } from 'react-router-dom';

class Layout extends React.Component {
  render() {
    return (
      <div className={styles.container}>
        <Header />
        <main>
          <Outlet />
        </main>
      </div>
    );
  }
}

export default Layout;
