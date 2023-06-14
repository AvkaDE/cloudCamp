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
      placeholder: '+7 999 999 99-99',
      id: 'field-telephone',
    },
    {
      label: 'Email',
      type: 'email',
      placeholder: 'tim.jennings@example.com',
      id: 'field-email',
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
        {simpleInputs.map((item) => {
          return (
            <FormLabel key={item.id} label={item.label} id={item.id} type={item.type} placeholder={item.placeholder} />
          )
        })}
      </div>
      <MainButton type='button' mode='default' id='button-start' onClick={() => openCreatePage()}>Начать</MainButton>
    </div>
  )
}

export default MainPage;