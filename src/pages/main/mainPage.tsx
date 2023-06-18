import React from 'react';
import styles from "./mainpage.module.scss";
import MainButton from '../../components/ui/button/mainButton';
import UserLogo from '../../components/userLogo/userLogo';
import ContactItem from '../../components/contactItem/contactItem';
import { useNavigate } from "react-router-dom";
import TelephoneInput from '../../components/ui/inputs/phone/telephoneInput';
import EmailInput from '../../components/ui/inputs/email/emailInput';

const MainPage = () => {
  const navigate = useNavigate()

  const contacts = [
    {
      title: 'Telegram',
      link: 'https://t.me/avkade'
    },
    {
      title: 'Github',
      link: 'https://github.com/AvkaDE'
    },
    {
      title: 'Resume',
      link: '../../assets/CVnew.pdf'
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
        <TelephoneInput disabled={true} value='9108645298' />
        <EmailInput disabled={true} value='lol2012pw@yandex.ru' />
      </div>
      <MainButton type='button' mode='default' id='button-start' onClick={() => openCreatePage()}>Начать</MainButton>
    </div>
  )
}

export default MainPage;