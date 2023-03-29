import styles from './Popup.module.css';
import React from 'react';

type PopupProps = {
  message: string;
};

class Popup extends React.Component<PopupProps> {
  render() {
    return (
      <div className={styles.container}>
        <div>{this.props.message}</div>
      </div>
    );
  }
}

export default Popup;
