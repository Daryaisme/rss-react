import React from 'react';
import { productType } from '../../types';
import styles from './Product.module.css';

class Product extends React.Component<productType> {
  render() {
    return (
      <div className={styles.container}>
        <div className={styles.image}>
          <img src={this.props.imageUrl} width="240px" height="240px" />
        </div>
        <p className={styles.caption}> {this.props.name} </p>
        <p className={styles.description}> {this.props.description} </p>
        <h4> Цена: </h4>
        <span> $ {this.props.price} </span>
        <h4> Рейтинг: </h4>
        <span> {this.props.rating} </span>
      </div>
    );
  }
}

export default Product;
