import styles from './Card.module.css';
import React from 'react';
import { cardType } from '../../types';

class Card extends React.Component<cardType> {
  render() {
    return (
      <div className={styles.container}>
        <img src={this.props.photoImg} />
        <div className={styles.information}>
          <div className={styles.name}>
            <p>{this.props.name}</p>
            <p>{this.props.surname}</p>
          </div>
          <div className={styles.other}>
            <p>
              <span>Birthday</span>: {this.props.birthday}
            </p>
            <p>
              <span>Country</span>: {this.props.country}
            </p>
            <p>
              <span>Gender</span>: {this.props.gender}
            </p>
            <p className={styles.character}>
              <span>Character</span>:
              {this.props.character.map((el, i) => (
                <p key={i} className={styles.one_character}>
                  {el}
                </p>
              ))}
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default Card;
