import React from 'react';
import styles from './formlabel.module.scss'
import { TFormlabelProps } from '../../utils/types';

const FormLabel = ({ label, id, optionItems, radioItems, multipleFields, type = 'text', placeholder = 'Введите значение' }: TFormlabelProps) => {

  return (type === 'text' || type === 'tel' || type === 'email' || type === 'number'
    ?
    <div className={styles.formlabel__wrapper}>
      {(label && label.length > 0) && <label htmlFor={id}>{label}</label>}
      <input id={id} type={type} placeholder={placeholder} />
    </div>
    : type === 'select'
      ?
      <div className={styles.formlabel__wrapper}>
        {(label && label.length > 0) && <label htmlFor={id}>{label}</label>}
        <select name='select' defaultValue={optionItems?.find((item) => item.selected)?.value}>
          {optionItems?.map((item) => {
            return (
              <option id={item.id} key={item.value} value={item.value}>{item.value}</option>
            )
          })}
        </select>
      </div>
      : type === 'radio'
        ?
        <div className={styles.formlabel__wrapper}>
          {radioItems?.map((item) => {
            return (
              <>
                {(label && label.length > 0) && <label htmlFor={item.id}>{item.title}</label>}
                <input type="radio" id={item.id} name={item.name} value={item.value} />
              </>
            )
          })}
          <input id={id} type={type} placeholder={placeholder} />
        </div>
        :
        <div>123</div>
  )
}
export default FormLabel;