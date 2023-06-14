import React, { useState } from 'react';
import styles from './formpage.module.scss'
import { Formik, Form, Field } from 'formik';
import FormLabel from '../../components/formLabel/formLabel';
import { TCheckboxItem, TOptionItem, TRadioItem } from '../../utils/types';
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
      fieldId: 'field-advantages-1',
    },
    {
      id: 2,
      fieldId: 'field-advantages-2',
    },
    {
      id: 3,
      fieldId: 'field-advantages-3',
    },
  ])

  const checkboxItems: TCheckboxItem[] = [
    {
      label: 1,
      id: 1,
      fieldId: 'field-checkbox-group-option-1',
      selected: false,
    },
    {
      label: 2,
      id: 2,
      fieldId: 'field-checkbox-group-option-2',
      selected: false,
    },
    {
      label: 3,
      id: 3,
      fieldId: 'field-checkbox-group-option-3',
      selected: false,
    },
  ]

  const radioItems: TRadioItem[] = [
    {
      id: 1,
      selected: false,
      fieldId: 'field-radio-group-option-1',
    },
    {
      id: 2,
      selected: false,
      fieldId: 'field-radio-group-option-2',
    },
    {
      id: 3,
      selected: false,
      fieldId: 'field-radio-group-option-3',
    },
  ]

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

  const handleDelete = (item: { id: number, fieldId: string }) => {
    setAdvantages(advantages.filter((x) => x.id !== item.id))
  }

  return (
    <div className={styles.page_wrapper}>
      <Stepper />
      <Formik
        initialValues={{
          fieldNickname: '',
          fieldName: '',
          fieldSurname: '',
          fieldSex: '',
        }}
        onSubmit={async (values) => console.log(values)} >
        <Form className={styles.form_wrapper}>
          <div className={styles.fields_wrapper}>
            {currentStep === 0
              ?
              <>
                <Field name="fieldNickname" type='text' id='field-nickname' label='Nickname' placeholder='Enter your nickname' component={FormLabel} />
                <Field name="fieldName" type='text' id='field-name' label='Name' placeholder='Enter your name' component={FormLabel} />
                <Field name="fieldSurname" type='text' id='field-surname' label='Surname' placeholder='Enter your surname' component={FormLabel} />
                <Field name="fieldSex" type='select' id='field-sex' label='Sex' optionItems={optionItems} component={FormLabel} />
              </>
              :
              currentStep === 1
                ?
                <>
                  <div className={styles.group}>
                    <span>Advantages</span>
                    {advantages.map((item) => {
                      return (
                        <div key={item.id} className={styles.controlled_field}>
                          <Field name={item.fieldId} type='text' id={item.fieldId} placeholder='Enter your advantage' component={FormLabel} />
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
                  <div className={styles.group}>
                    <span>Checkbox group</span>
                    {checkboxItems.map((item) => {
                      return (
                        <Field key={item.fieldId} name={item.fieldId} type='checkbox' label={item.label} id={item.fieldId} selected={item.selected} component={FormLabel} />
                      )
                    })}
                  </div>
                  <div className={styles.group}>
                    <span>Radio group</span>
                    {radioItems.map((item) => {
                      return (
                        <Field key={item.fieldId} name={item.fieldId} groupName='radioGroup' type='radio' label={item.id} id={item.fieldId} component={FormLabel} />
                      )
                    })}
                  </div>
                </>
                :
                <>
                  <Field name="field-about" type='textarea' id='field-about' label='About' placeholder='Enter something about you' component={FormLabel} />
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
