import styles from './Search.module.css';
import React from 'react';

type SearchProps = {
  onInput: (e: React.KeyboardEvent<HTMLInputElement>) => void | undefined;
  value: string;
};

class Search extends React.Component<SearchProps> {
  render() {
    return (
      <input
        className={styles.container}
        placeholder="Search..."
        onInput={this.props.onInput}
        defaultValue={this.props.value}
      />
    );
  }
}

export default Search;
