import styles from './Form.module.css';
import React, { createRef } from 'react';
import { cardType, cardTypeError } from '../../types';
import Card from '../../components/card/Card';

type FormState = {
  cards: cardType[];
  error: cardTypeError;
};

class Form extends React.Component<object, FormState> {
  constructor(props: object) {
    super(props);

    this.state = {
      cards: [],
      error: {
        name: false,
        surname: false,
        birthday: false,
        country: false,
        character: false,
        gender: false,
        photoImg: false,
      },
    };
  }

  nameRef = createRef<HTMLInputElement>();
  surnameRef = createRef<HTMLInputElement>();
  birthdayRef = createRef<HTMLInputElement>();
  countryRef = createRef<HTMLSelectElement>();
  characterRef = createRef<HTMLFieldSetElement>();
  genderRef = createRef<HTMLFieldSetElement>();
  imageRef = createRef<HTMLInputElement>();

  getCheckboxes = (): string[] => {
    return Array.from(this.characterRef.current?.children as HTMLCollection)
      .filter((el) => el.tagName === 'DIV')
      .map((el) => Array.from(el.children as HTMLCollection)[0])
      .filter((input) => (input as HTMLInputElement).checked)
      .map((input) => (input as HTMLInputElement).defaultValue);
  };

  getRadios = (): string => {
    return Array.from(this.genderRef.current?.children as HTMLCollection)
      .filter((el) => el.tagName === 'DIV')
      .map((el) => Array.from(el.children as HTMLCollection)[0])
      .filter((input) => (input as HTMLInputElement).checked)
      .map((input) => (input as HTMLInputElement).defaultValue)[0];
  };

  getFile = (): FileList | null | undefined => {
    return this.imageRef?.current?.files;
  };

  isValid = (): boolean => {
    const currentErrors: cardTypeError = {
      name: this.isValidName(),
      surname: this.isValidSurname(),
      birthday: this.isValidBirthday(),
      country: this.isValidCountry(),
      character: this.isValidCharacter(),
      gender: this.isValidGender(),
      photoImg: this.isValidPhoto(),
    };

    this.setState({ ...this.state, error: currentErrors });

    const bool =
      this.state.error.name &&
      this.state.error.surname &&
      this.state.error.birthday &&
      this.state.error.country &&
      this.state.error.character &&
      this.state.error.gender &&
      this.state.error.photoImg;

    return bool;
  };

  isValidName = (): boolean => {
    const value = this.nameRef.current?.value || '';

    return !(value.trim().length >= 3 && value[0] == value[0].toUpperCase());
  };

  isValidSurname = (): boolean => {
    const value = this.surnameRef.current?.value || '';

    return !(value.trim().length >= 3 && value[0] === value[0].toUpperCase());
  };

  isValidBirthday = (): boolean => {
    const value = this.birthdayRef.current?.value || '';
    const dateValue = new Date(value);

    return !(dateValue && dateValue < new Date());
  };

  isValidCountry = (): boolean => {
    return !((this.countryRef.current?.value as string).length > 0);
  };

  isValidCharacter = (): boolean => {
    const checkboxes = this.getCheckboxes();

    return !(checkboxes.length > 0);
  };

  isValidGender = (): boolean => {
    const radios = this.getRadios();

    return !radios;
  };

  isValidPhoto = (): boolean => {
    const file = this.getFile();

    return file?.length ? false : true;
  };

  handleSubmit = (e: React.MouseEvent<HTMLFormElement>): void => {
    e.preventDefault();

    if (this.isValid()) {
      const checkboxes = this.getCheckboxes();
      const radios = this.getRadios();

      const file = this.getFile();

      const card: cardType = {
        name: this.nameRef.current?.value as string,
        surname: this.surnameRef.current?.value as string,
        birthday: this.birthdayRef.current?.value as string,
        country: this.countryRef.current?.value as string,
        character: checkboxes,
        gender: radios,
        photoImg: file ? URL.createObjectURL(file[0]) : '',
      };

      this.setState({ cards: [...this.state.cards, card] });
    }
  };

  render() {
    return (
      <div className={styles.container}>
        <p className={styles.title}> Form </p>
        <form action="#" onSubmit={this.handleSubmit}>
          <fieldset>
            <legend> Name </legend>
            <input type="text" placeholder="Name" ref={this.nameRef} />
            {this.state.error.name && (
              <p className={styles.error}>
                Name must start with a capital letter and length must be more then 2 letters
              </p>
            )}
          </fieldset>
          <fieldset>
            <legend> Surname </legend>
            <input type="text" placeholder="Surname" ref={this.surnameRef} />
            {this.state.error.surname && (
              <p className={styles.error}>
                Surname must start with a capital letter and length must be more then 2 letters
              </p>
            )}
          </fieldset>
          <fieldset>
            <legend> Birthday </legend>
            <input type="date" ref={this.birthdayRef} />
            {this.state.error.birthday && (
              <p className={styles.error}>Choose your real date of birth</p>
            )}
          </fieldset>
          <fieldset>
            <legend> Country </legend>
            <select ref={this.countryRef}>
              <option></option>
              <option> Belarus </option>
              <option> Russia </option>
              <option> Poland </option>
              <option> Germany </option>
              <option> Ukraine </option>
            </select>
            {this.state.error.country && <p className={styles.error}>Choose your country</p>}
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
            {this.state.error.character && (
              <p className={styles.error}>You must choose at least one answer</p>
            )}
          </fieldset>
          <fieldset className={styles.list} ref={this.genderRef}>
            <legend> Gender </legend>
            <div>
              <input type="radio" name="gender" defaultValue="Male" /> Male
            </div>
            <div>
              <input type="radio" name="gender" defaultValue="Female" /> Female
            </div>
            {this.state.error.gender && <p className={styles.error}>You must choose your gender</p>}
          </fieldset>
          <fieldset className={styles.avatar}>
            <legend> Avatar </legend>
            <label htmlFor="file">Select photo</label>
            <input ref={this.imageRef} type="file" id="file" />
            {this.state.error.photoImg && (
              <p className={styles.error}>You must choose avatar of your profile</p>
            )}
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
