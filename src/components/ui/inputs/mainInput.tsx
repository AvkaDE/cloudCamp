import React from 'react';

const MainInput = ({ type }) => {

  const telPattern = '(\s*)?(\+)?([- _():=+]?\d[- _():=+]?){10,14}(\s*)?';

  return (
    type === 'tel'
      ?
      <label className='label__wrapper' htmlFor="field-phone">
        Номер телефона
        <input id="field-phone" type="tel" pattern={telPattern} placeholder='Enter your phone'></input>
      </label>
      :
      <label className='label__wrapper' htmlFor="field-email">
        Email
        <input id="field-email" type="email" placeholder='tim.jennings@example.com'></input>
      </label>
  )
}
export default MainInput;