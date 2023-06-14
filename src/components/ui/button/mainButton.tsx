import React from 'react';
import styles from './mainbutton.module.scss'

type TButtonProps = {
  children: string;
  onClick?: () => void;
  id: string;
  mode: 'default' | 'outlined'
  type: 'button' | 'submit'
};

const MainButton = ({ children, onClick, id, mode, type }: TButtonProps) => {

  return (
    <button type={type} id={id} onClick={onClick} className={mode === 'default' ? styles.default_button : styles.outlined_button}>
      {children}
    </button>
  )
}
export default MainButton;