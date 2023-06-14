import React, { useState } from 'react';
import styles from './formpage.module.scss'
import { Formik, Form, Field } from 'formik';
import FormLabel from '../../components/formLabel/formLabel';
import { TOptionItem } from '../../utils/types';
import Stepper from '../../components/stepper/stepper';
import MainButton from '../../components/ui/button/mainButton';
import { useNavigate } from 'react-router-dom';
import DeleteButton from '../../components/ui/button/deleteButton';
import { ReactComponent as TrashIcon } from '../../assets/trash.svg';
import { ReactComponent as CreateIcon } from '../../assets/plus.svg';
import AddButton from '../../components/ui/button/addButton';

export default function FormPage() {

  const optionItems: TOptionItem[] = [
    {
      value: 'man',
      selected: true,
      id: 'field-sex-option-man',
    },
    {
      value: 'woman',
      id: 'field-sex-option-woman',
    },
  ]
  const navigate = useNavigate()

  const [currentStep, setCurrentstep] = useState(0)

  const backBtnHandler = () => {
    if (currentStep === 0) {
      return navigate('/')
    } setCurrentstep(currentStep - 1)
  }

  const nextBtnHandler = () => {
    setCurrentstep(currentStep + 1)
  }

  const [advantages, setAdvantages] = useState([
    {
      id: 1,
      name: 'field-advantages-1',
      fieldId: 'field-advantages-1',
    },
    {
      id: 2,
      name: 'field-advantages-2',
      fieldId: 'field-advantages-2',
    },
    {
      id: 3,
      name: 'field-advantages-3',
      fieldId: 'field-advantages-3',
    },
  ])

  const handleCreate = () => {
    const newItemId = advantages.length > 0 ? advantages[advantages.length - 1].id + 1 : 1
    const newData = [...advantages, {
      id: newItemId,
      name: `field-advantages-${newItemId}`,
      fieldId: `field-advantages-${newItemId}`
    }]
    console.log(newData)
    setAdvantages(newData)
  }

  const handleDelete = (item: { name: string, id: number, fieldId: string }) => {
    setAdvantages(advantages.filter((x) => x.id !== item.id))
  }

  return (
    <div className={styles.page_wrapper}>
      <Stepper />
      <Formik
        initialValues={{
          nickname: '',
          name: '',
          surname: '',
          sex: '',
        }}
        onSubmit={() => console.log('submitted')} >
        <Form className={styles.form_wrapper}>
          <div className={styles.fields_wrapper}>
            {currentStep === 0
              ?
              <>
                <Field name="nickname" type='text' id='field-nickname' label='Nickname' placeholder='Enter your nickname' component={FormLabel} />
                <Field name="name" type='text' id='field-name' label='Name' placeholder='Enter your name' component={FormLabel} />
                <Field name="surname" type='text' id='field-surname' label='Surname' placeholder='Enter your surname' component={FormLabel} />
                <Field name="sex" type='select' id='field-sex' label='Sex' optionItems={optionItems} component={FormLabel} />
              </>
              :
              currentStep === 1
                ?
                <>
                  <div className={styles.advantages_wrapper}>
                    <span>Advantages</span>
                    {advantages.map((item) => {
                      return (
                        <div key={item.id} className={styles.controlled_field}>
                          <Field key={item.fieldId} name={item.name} type='text' id={item.fieldId} placeholder='Enter your advantage' component={FormLabel} />
                          <DeleteButton onClick={() => handleDelete(item)} id={item.fieldId}>
                            <TrashIcon />
                          </DeleteButton>
                        </div>
                      )
                    })}
                    <AddButton onClick={() => handleCreate()} id='button-add'>
                      <CreateIcon />
                    </AddButton>
                  </div>
                  <Field name="nickname" type='text' id='field-nickname' label='Nickname' placeholder='Enter your nickname' component={FormLabel} />
                  <Field name="name" type='text' id='field-name' label='Name' placeholder='Enter your name' component={FormLabel} />
                  <Field name="surname" type='text' id='field-surname' label='Surname' placeholder='Enter your surname' component={FormLabel} />
                </>
                :
                <>
                  <Field name="nickname" type='text' id='field-nickname' label='Nickname' placeholder='Enter your nickname' component={FormLabel} />
                  <Field name="name" type='text' id='field-name' label='Name' placeholder='Enter your name' component={FormLabel} />
                </>
            }
          </div>
          <div className={styles.buttons_wrapper}>
            <MainButton type='button' onClick={() => backBtnHandler()} mode='outlined' id='button-back'>Back</MainButton>
            <MainButton type={currentStep === 3 ? 'submit' : 'button'} onClick={() => nextBtnHandler()} mode='default' id='button-next'>{currentStep === 2 ? 'Send' : 'Next'}</MainButton>
          </div>
        </Form>
      </Formik>
    </div>
  )
}

export function FormiStepper() {

}
