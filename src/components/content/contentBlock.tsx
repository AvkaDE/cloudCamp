import React from 'react';
import styles from './contentblock.module.scss'

type TContentProps = {
  children: JSX.Element;
};

const ContentBlock = ({ children }: TContentProps) => {

  return (
    <div className={styles.content}>
      {children}
    </div>
  )
}
export default ContentBlock;