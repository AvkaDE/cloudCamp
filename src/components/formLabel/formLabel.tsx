import React from 'react';
import styles from './formlabel.module.scss'
import { TFormlabelProps } from '../../utils/types';

const FormLabel = ({ label, id, optionItems, groupName, selected, type = 'text', placeholder = 'Введите значение' }: TFormlabelProps) => {

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
        <div className={styles.formlabel__wrapper_vertical}>
          <input type='radio' id={id} name={groupName} defaultChecked={selected} />
          {(label) && <label htmlFor={id}>{label}</label>}
        </div>
        : type === 'checkbox'
          ?
          <div className={styles.formlabel__wrapper_vertical}>
            <input type='checkbox' id={id} name={groupName} value={id} />
            {(label) && <label htmlFor={id}>{label}</label>}
          </div>
          :
          <div className={styles.formlabel__wrapper}>
            {(label && label.length > 0) && <label htmlFor={id}>{label}</label>}
            <textarea id={id} placeholder={placeholder} />
          </div>
  )
}
export default FormLabel;