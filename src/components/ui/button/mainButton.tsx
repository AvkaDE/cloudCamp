import React from 'react';
import styles from './mainbutton.module.scss'

type TButtonProps = {
  children: string;
  onClick?: () => void;
};

const MainButton = ({ children, onClick }: TButtonProps) => {

  return (
    <button onClick={onClick} className={styles.default__button}>
      {children}
    </button>
  )
}
export default MainButton;