import React from 'react';
import styles from './userlogo.module.scss'

type TUserlogoProps = {
  children: string;
};

const UserLogo = ({ children }: TUserlogoProps) => {

  return (
    <div className={styles.logo__wrapper}>
      {children}
    </div>
  )
}
export default UserLogo;