import styles from './Main.module.css';
import React from 'react';
import Product from '../../components/product/Product';
import Search from '../../components/search/Search';
import { productType } from '../../types';

export type MainProps = {
  products: productType[];
};

class Main extends React.Component<MainProps> {
  render() {
    return (
      <div>
        <Search />
        <div className={styles.products}>
          {this.props.products.map((product) => (
            <Product
              key={product.id}
              id={product.id}
              name={product.name}
              description={product.description}
              price={product.price}
              rating={product.rating}
              imageUrl={product.imageUrl}
            />
          ))}
        </div>
      </div>
    );
  }
}

export default Main;
