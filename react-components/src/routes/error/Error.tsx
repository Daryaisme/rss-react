import styles from './Error.module.css';
import React from 'react';
import { Link } from 'react-router-dom';

class Error extends React.Component {
  render() {
    return (
      <div className={styles.container}>
        <div>
          <p className={styles.digital}>404</p>
          <p className={styles.link}>
            Back to <Link to="/">main</Link>
          </p>
        </div>
      </div>
    );
  }
}

export default Error;
