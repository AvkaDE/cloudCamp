import React from 'react';
import styles from "./mainpage.module.scss";
import MainButton from '../../components/ui/button/mainButton';
import UserLogo from '../../components/userLogo/userLogo';
import ContactItem from '../../components/contactItem/contactItem';
import { useNavigate } from "react-router-dom";
import MainInput from '../../components/ui/inputs/mainInput';

const MainPage = () => {
  const navigate = useNavigate()

  const contacts = [
    {
      title: 'Telegram',
      link: '#'
    },
    {
      title: 'Github',
      link: '#'
    },
    {
      title: 'Resume',
      link: '#'
    },
  ]

  const openCreatePage = () => {
    navigate('/create')
  }

  return (
    <div>
      <div className={styles.header__wrapper}>
        <UserLogo>АД</UserLogo>
        <div className={styles.info__wrapper}>
          <h1>Дмитриков Алексей</h1>
          <div className={styles.contact__wrapper}>
            {contacts.map((item) => {
              return (
                <ContactItem key={item.title} title={item.title} link={item.link} />
              )
            })}
          </div>
        </div>
      </div>
      <div className={styles.form__wrapper}>
        <MainInput type='tel' />
        <MainInput type='email' />
      </div>
      <MainButton type='button' mode='default' id='button-start' onClick={() => openCreatePage()}>Начать</MainButton>
    </div>
  )
}

export default MainPage;