import styles from './Search.module.css';
import React from 'react';

class Search extends React.Component {
  render() {
    return <input className={styles.container} placeholder="Search..." />;
  }
}

export default Search;
