import React from 'react';
import styles from './addbutton.module.scss'

type TButtonProps = {
  children: JSX.Element;
  onClick?: () => void;
  id: string;
};

const AddButton = ({ children, onClick, id }: TButtonProps) => {

  return (
    <button type="button" id={id} onClick={onClick} className={styles.outlined_button}>
      {children}
    </button>
  )
}
export default AddButton;