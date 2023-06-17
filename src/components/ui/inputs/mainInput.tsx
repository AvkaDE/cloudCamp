import React from 'react';
import styles from './maininput.module.scss'

const MainInput = ({ type }) => {

  return (
    type === 'tel'
      ?
      <label className={styles.label__wrapper} htmlFor="field-phone">
        Номер телефона
        <input id="field-phone" type="tel" pattern="(\s*)?(\+)?([- _():=+]?\d[- _():=+]?){10,14}(\s*)?" placeholder='Enter your phone'></input>
      </label>
      :
      <label className={styles.label__wrapper} htmlFor="field-email">
        Email
        <input id="field-email" type="email" placeholder='tim.jennings@example.com'></input>
      </label>
  )
}
export default MainInput;