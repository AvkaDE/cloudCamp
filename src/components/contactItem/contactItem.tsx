import React from 'react';
import styles from "./contactitem.module.scss";
import { ReactComponent as FolderLogo } from '../../assets/folder.svg'

type TContactProps = {
  title: string
  link: string
}

const ContactItem = ({ title, link = '' }: TContactProps) => {

  return (
    <div className={styles.contact__item}>
      <FolderLogo />
      <a href={link} target='__blank'>{title}</a>
    </div>
  )
}
export default ContactItem;