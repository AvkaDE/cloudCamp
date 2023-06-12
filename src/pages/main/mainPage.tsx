import React from 'react';
import styles from "./mainpage.module.scss";
import MainButton from '../../components/ui/button/mainButton';
import UserLogo from '../../components/userLogo/userLogo';
import ContactItem from '../../components/contactItem/contactItem';
import FormLabel from '../../components/formLabel/formLabel';
import { TFormlabelProps } from '../../utils/types';
import { useNavigate } from "react-router-dom";

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

  const simpleInputs: TFormlabelProps[] = [
    {
      label: 'Номер телефона',
      type: 'tel',
      placeholder: '+7 999 999 99-99'
    },
    {
      label: 'Email',
      type: 'email',
      placeholder: 'tim.jennings@example.com'
    },
  ]

  const openCreatePage = () => {
    navigate('/create')
  }

  return (
    <div>
      <div className={styles.header__wrapper}>
        <UserLogo>АИ</UserLogo>
        <div className={styles.info__wrapper}>
          <h1>Иван Иванов</h1>
          <div className={styles.contact__wrapper}>
            {contacts.map((item) => {
              return (
                <ContactItem title={item.title} link={item.link} />
              )
            })}
          </div>
        </div>
      </div>
      <div className={styles.form__wrapper}>
        {simpleInputs.map((item) => {
          return (
            <FormLabel label={item.label} type={item.type} placeholder={item.placeholder} />
          )
        })}
      </div>
      <MainButton onClick={() => openCreatePage()}>Начать</MainButton>
    </div>
  )
}

export default MainPage;