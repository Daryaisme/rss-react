import styles from './Main.module.css';
import React from 'react';
import Product from '../../components/product/Product';
import Search from '../../components/search/Search';
import { productType } from '../../types';

type MainProps = {
  products: productType[];
};

type MainState = {
  searchValue: string;
};

class Main extends React.Component<MainProps, MainState> {
  constructor(props: MainProps) {
    super(props);
    this.setSearchValue = this.setSearchValue.bind(this);

    this.state = {
      searchValue: localStorage.getItem('searchValue') || '',
    };
  }

  setSearchValue(): void {
    localStorage.setItem('searchValue', this.state.searchValue);
  }

  componentDidMount() {
    window.addEventListener('beforeunload', this.setSearchValue);
  }

  componentWillUnmount() {
    this.setSearchValue();
    window.removeEventListener('beforeunload', this.setSearchValue);
  }

  handleSearchFilter = (e: React.KeyboardEvent<HTMLInputElement>): void => {
    this.setState({ searchValue: (e.target as HTMLInputElement).value });
  };

  render() {
    return (
      <div>
        <Search onInput={this.handleSearchFilter} value={this.state.searchValue} />
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
