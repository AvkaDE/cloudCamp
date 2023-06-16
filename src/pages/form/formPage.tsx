import React, { useState } from 'react';
import styles from './formpage.module.scss'
import { Formik, Form, Field, FieldArray } from 'formik';
import Stepper from '../../components/stepper/stepper';
import MainButton from '../../components/ui/button/mainButton';
import { useNavigate } from 'react-router-dom';
import DeleteButton from '../../components/ui/button/deleteButton';
import { ReactComponent as TrashIcon } from '../../assets/trash.svg';
import { ReactComponent as CreateIcon } from '../../assets/plus.svg';
import AddButton from '../../components/ui/button/addButton';
import MyInput from '../../components/ui/inputs/myInput';
import * as Yup from 'yup';

export default function FormPage() {

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

  const groupItems = [1, 2, 3]

  return (
    <div className={styles.page_wrapper}>
      <Stepper step={currentStep} />
      <Formik
        initialValues={{
          fieldNickname: '',
          fieldName: '',
          fieldSurname: '',
          fieldSex: '',
          advantages: ['', '', ''],
          checked: [],
          picked: '',
          fieldAbout: '',
        }}
        validationSchema={Yup.object({
          fieldNickname: Yup.string().matches((/[^(a-zA-Z0-9]/g), 'Nickname must conatin only letters or digits(special symbols is not allowed)').max(30, 'Must be 30 characters or less'),
          fieldName: Yup.string().matches((/[\d+]/g), 'Name can contain only letters').max(50, 'Must be 50 characters or less').required('Required'),
          fieldSurname: Yup.string().matches((/[\d+]/g), 'Surname can contain only letters').max(50, 'Must be 50 characters or less').required('Required'),
          fieldSex: Yup.string().matches(/(man|woman)/),
          advantages: Yup.array().of(Yup.string()).min(1),
          checked: Yup.array().of(Yup.string()).min(1).required('Required'),
          picked: Yup.string().required('Required'),
          fieldAbout: Yup.string().max(200, 'Must be 200 characters or less'),
        })}
        onSubmit={async (values) => console.log(values)}
        render={({ values }) => (
          <Form className={styles.form_wrapper}>
            <div className={styles.fields_wrapper}>
              {currentStep === 0
                ?
                <>
                  <label className='label__wrapper' htmlFor='field-nickname'>
                    Nickname
                    <Field name="fieldNickname" type='text' id='field-nickname' placeholder='Enter your nickname' component={MyInput} />
                  </label>
                  <label className='label__wrapper' htmlFor='field-name'>
                    Name
                    <Field name="fieldName" type='text' id='field-name' placeholder='Enter your name' component={MyInput} />
                  </label>
                  <label className='label__wrapper' htmlFor='field-surname'>
                    Surname
                    <Field name="fieldSurname" type='text' id='field-surname' placeholder='Enter your surname' component={MyInput} />
                  </label>

                  <label className='label__wrapper' htmlFor='field-sex'>
                    Sex
                    <Field name="fieldSex" as="select" id='field-sex'>
                      <option id='field-sex-option-man' value="man">Man</option>
                      <option id='field-sex-option-woman' value="woman">Woman</option>
                    </Field>
                  </label>
                </>
                :
                currentStep === 1
                  ?
                  <>
                    <div className={styles.group}>
                      <span>Advantages</span>
                      <FieldArray name="advantages" render={arrayHelpers => (
                        <div>
                          {values.advantages.map((_, index) => {
                            return (
                              <div key={`index${index}`} className={styles.controlled_field}>
                                <Field name={`advantages[${index}]`} type='text' id={`field-advantages-${index + 1}`} placeholder='Enter your advantage' component={MyInput} />
                                <DeleteButton onClick={() => arrayHelpers.remove(index)} id={`button-remove-${index + 1}`}>
                                  <TrashIcon />
                                </DeleteButton>
                              </div>
                            )
                          })}
                          <AddButton onClick={() => arrayHelpers.push('')} id='button add'>
                            <CreateIcon />
                          </AddButton>
                        </div>
                      )} />
                    </div>
                    <div role="group" className={styles.group}>
                      <span>Checkbox group</span>
                      {groupItems.map((item, index) => {
                        return (
                          <label className={styles.formlabel__wrapper} key={item} htmlFor={`field-checkbox-group-option-${index + 1}`}>
                            <Field name='checked' type='checkbox' id={`field-checkbox-group-option-${index + 1}`} value={item.toString()} />
                            {index + 1}
                          </label>
                        )
                      })}
                    </div>
                    <div role='group' className={styles.group}>
                      <span>Radio group</span>
                      {groupItems.map((item, index) => {
                        return (
                          <label className={styles.formlabel__wrapper} key={item} htmlFor={`field-radio-group-option-${index + 1}`}>
                            <Field name='picked' type='radio' id={`field-radio-group-option-${index + 1}`} value={item.toString()} />
                            {index + 1}
                          </label>
                        )
                      })}
                    </div>
                  </>
                  :
                  <>
                    <Field name="fieldAbout" as="textarea" id='field-about' label='About' placeholder='Enter something about you' />
                  </>
              }
            </div>
            <div className={styles.buttons_wrapper}>
              <MainButton type='button' onClick={() => backBtnHandler()} mode='outlined' id='button-back'>Back</MainButton>
              <MainButton type={currentStep === 3 ? 'submit' : 'button'} onClick={() => nextBtnHandler()} mode='default' id={currentStep === 2 ? 'button-send' : 'button-next'}>{currentStep === 2 ? 'Send' : 'Next'}</MainButton>
            </div>
          </Form>
        )}
      >
      </Formik>
    </div>
  )
}

