import React from 'react';
import styles from './deletebutton.module.scss'

type TButtonProps = {
  children: JSX.Element;
  onClick?: () => void;
  id: string;
};

const DeleteButton = ({ children, onClick, id }: TButtonProps) => {

  return (
    <button type="button" id={id} onClick={onClick} className={styles.delete_button}>
      {children}
    </button>
  )
}
export default DeleteButton;