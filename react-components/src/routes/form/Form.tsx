import styles from './Form.module.css';
import React from 'react';
import no_photo from '../../images/no-photo.png';

class Form extends React.Component {
  render() {
    return (
      <div className={styles.container}>
        <p className={styles.title}> Form </p>
        <form action="#">
          <fieldset>
            <legend> Name </legend>
            <input type="text" pattern="[0-9]{3}-[A-Z]{3}/[a-z]{3}" placeholder="123-ABC/abc" />
          </fieldset>
          <fieldset>
            <legend> Surname </legend>
            <input type="text" pattern="[0-9]{3}-[A-Z]{3}/[a-z]{3}" placeholder="123-ABC/abc" />
          </fieldset>
          <fieldset>
            <legend> Birthday </legend>
            <input type="date" />
          </fieldset>
          <fieldset>
            <legend> Country </legend>
            <select>
              <option> Belarus </option>
              <option> Russia </option>
              <option> Poland </option>
              <option> Germany </option>
              <option> Ukraine </option>
            </select>
          </fieldset>
          <fieldset className={styles.list}>
            <legend> Character </legend>
            <div>
              <input type="checkbox" /> Kind
            </div>
            <div>
              <input type="checkbox" /> Wicked
            </div>
            <div>
              <input type="checkbox" /> Cute
            </div>
            <div>
              <input type="checkbox" /> Aggressive
            </div>
            <div>
              <input type="checkbox" /> Stress resistant
            </div>
            <div>
              <input type="checkbox" /> Intelligent
            </div>
            <div>
              <input type="checkbox" /> Impulsive
            </div>
          </fieldset>
          <fieldset className={styles.list}>
            <legend> Gender </legend>
            <div>
              <input type="radio" name="gender" /> Male
            </div>
            <div>
              <input type="radio" name="gender" /> Female
            </div>
          </fieldset>
          <fieldset className={styles.avatar}>
            <legend> Avatar </legend>
            <div className={styles.photo}>
              <img src={no_photo} />
              <p>no photo</p>
            </div>
            <label htmlFor="file">Select photo</label>
            <input type="file" id="file" />
          </fieldset>
          <input type="submit" value="Submit" />
        </form>
      </div>
    );
  }
}

export default Form;
