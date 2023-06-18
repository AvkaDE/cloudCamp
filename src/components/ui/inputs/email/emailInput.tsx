import React from 'react';

type TProps = {
  value: string;
  disabled?: boolean;
};

const EmailInput = ({ value, disabled }: TProps) => {

  return (
    <input defaultValue={value} disabled={disabled} id="field-email" type="email" placeholder='tim.jennings@example.com'></input>
  )
}
export default EmailInput;