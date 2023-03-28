import styles from './Form.module.css';
import React, { createRef } from 'react';
import { cardType } from '../../types';
import Card from '../../components/card/Card';

type FormState = {
  cards: cardType[];
};

class Form extends React.Component<object, FormState> {
  constructor(props: object) {
    super(props);

    this.state = {
      cards: [],
    };
  }

  nameRef = createRef<HTMLInputElement>();
  surnameRef = createRef<HTMLInputElement>();
  birthdayRef = createRef<HTMLInputElement>();
  countryRef = createRef<HTMLSelectElement>();
  characterRef = createRef<HTMLFieldSetElement>();
  genderRef = createRef<HTMLInputElement>();
  imageRef = createRef<HTMLInputElement>();

  handleSubmit = (e: React.MouseEvent<HTMLFormElement>): void => {
    e.preventDefault();

    const checkboxes = Array.from(this.characterRef.current?.children as HTMLCollection)
      .filter((el) => el.tagName === 'DIV')
      .map((el) => Array.from(el.children as HTMLCollection)[0])
      .filter((input) => (input as HTMLInputElement).checked)
      .map((input) => (input as HTMLInputElement).defaultValue);

    const file = this.imageRef?.current?.files;

    const card: cardType = {
      name: this.nameRef.current?.value as string,
      surname: this.surnameRef.current?.value as string,
      birthday: this.birthdayRef.current?.value as string,
      country: this.countryRef.current?.value as string,
      character: checkboxes,
      gender: this.genderRef.current?.value as string,
      photoImg: file ? URL.createObjectURL(file[0]) : '',
    };

    this.setState({ cards: [...this.state.cards, card] });
  };

  render() {
    return (
      <div className={styles.container}>
        <p className={styles.title}> Form </p>
        <form action="#" onSubmit={this.handleSubmit}>
          <fieldset>
            <legend> Name </legend>
            <input type="text" placeholder="Name" ref={this.nameRef} />
          </fieldset>
          <fieldset>
            <legend> Surname </legend>
            <input type="text" placeholder="Surname" ref={this.surnameRef} />
          </fieldset>
          <fieldset>
            <legend> Birthday </legend>
            <input type="date" ref={this.birthdayRef} />
          </fieldset>
          <fieldset>
            <legend> Country </legend>
            <select ref={this.countryRef}>
              <option> Belarus </option>
              <option> Russia </option>
              <option> Poland </option>
              <option> Germany </option>
              <option> Ukraine </option>
            </select>
          </fieldset>
          <fieldset className={styles.list} ref={this.characterRef}>
            <legend> Character </legend>
            <div>
              <input type="checkbox" defaultValue="Kind" />
              Kind
            </div>
            <div>
              <input type="checkbox" defaultValue="Wicked" />
              Wicked
            </div>
            <div>
              <input type="checkbox" defaultValue="Cute" />
              Cute
            </div>
            <div>
              <input type="checkbox" defaultValue="Aggressive" />
              Aggressive
            </div>
            <div>
              <input type="checkbox" defaultValue="Stress resistant" />
              Stress resistant
            </div>
            <div>
              <input type="checkbox" defaultValue="Intelligent" />
              Intelligent
            </div>
            <div>
              <input type="checkbox" defaultValue="Impulsive" />
              Impulsive
            </div>
          </fieldset>
          <fieldset className={styles.list}>
            <legend> Gender </legend>
            <div>
              <input type="radio" name="gender" defaultValue="Male" ref={this.genderRef} /> Male
            </div>
            <div>
              <input type="radio" name="gender" defaultValue="Female" ref={this.genderRef} />
              Female
            </div>
          </fieldset>
          <fieldset className={styles.avatar}>
            <legend> Avatar </legend>
            <label htmlFor="file">Select photo</label>
            <input ref={this.imageRef} type="file" id="file" />
          </fieldset>
          <input type="submit" value="Submit" />
        </form>
        <div className={styles.cards}>
          {this.state.cards.map((el, i) => (
            <Card
              key={i}
              name={el.name}
              surname={el.surname}
              birthday={el.birthday}
              country={el.country}
              character={el.character}
              gender={el.gender}
              photoImg={el.photoImg}
            />
          ))}
        </div>
      </div>
    );
  }
}

export default Form;
