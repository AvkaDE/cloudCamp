import React from 'react';
import styles from './formlabel.module.scss'
import { TFormlabelProps } from '../../utils/types';

const FormLabel = ({ label, type = 'text', placeholder = 'Введите значение' }: TFormlabelProps) => {

  return (
    <div className={styles.formlabel__wrapper}>
      <label htmlFor={`${placeholder} + id`}>{label}</label>
      <input id={`${placeholder} + id`} type={type} placeholder={placeholder} />
    </div>
  )
}
export default FormLabel;