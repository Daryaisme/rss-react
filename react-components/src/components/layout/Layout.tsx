import styles from './Layout.module.css';
import React from 'react';
import Header from '../header/Header';

class Layout extends React.Component {
  render() {
    return (
      <div className={styles.container}>
        <Header />
        <p>djwene</p>
      </div>
    );
  }
}

export default Layout;
