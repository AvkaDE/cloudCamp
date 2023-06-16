import React from 'react';
import './inputs.module.scss'

const MyInput = ({ field, form, ...props }) => {
  return <input {...field} {...props} />;
}
export default MyInput;