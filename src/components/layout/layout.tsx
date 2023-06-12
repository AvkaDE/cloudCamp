import React from 'react';
import styles from "./layout.module.scss";
import ContentBlock from '../content/contentBlock';

type TLayoutProps = {
  children: JSX.Element;
};

const Layout = ({ children }: TLayoutProps) => {
  return (
    <div className={styles.layout}>
      <ContentBlock>{children}</ContentBlock>
    </div>
  )
}

export default Layout