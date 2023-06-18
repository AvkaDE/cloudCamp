import React, { useState } from 'react';
import styles from './formpage.module.scss'
import { Formik, Form, Field, FieldArray, getIn } from 'formik';
import Stepper from '../../components/stepper/stepper';
import MainButton from '../../components/ui/button/mainButton';
import { useNavigate } from 'react-router-dom';
import DeleteButton from '../../components/ui/button/deleteButton';
import { ReactComponent as TrashIcon } from '../../assets/trash.svg';
import { ReactComponent as CreateIcon } from '../../assets/plus.svg';
import AddButton from '../../components/ui/button/addButton';
import MyInput from '../../components/ui/inputs/myInput';
import * as Yup from 'yup';
import { SuccessModal } from '../../components/modalContent/succesModal';
import { ErrorModal } from '../../components/modalContent/errorModal';

export default function FormPage() {
  const [currentStep, setCurrentstep] = useState(0)
  const [modal, setModal] = useState(false);
  const [success, setSuccess] = useState(false);

  const navigate = useNavigate()

  const backBtnHandler = () => {
    if (currentStep === 0) {
      return navigate('/')
    } setCurrentstep(currentStep - 1)
  }

  const validSchema = Yup.object().shape({
    fieldNickname: Yup.string().nullable().transform((v, o) => (o === '' ? null : v)).matches((/[a-zA-Z0-9]/g), 'Nickname must contain only letters or digits(special symbols is not allowed)').max(30, 'Must be 30 characters or less'),
    fieldName: Yup.string().matches((/[^(\d+)]/g), 'Name can contain only letters').max(50, 'Must be 50 characters or less').required('Required'),
    fieldSurname: Yup.string().matches((/[^(\d+)]/g), 'Surname can contain only letters').max(50, 'Must be 50 characters or less').required('Required'),
    fieldSex: Yup.string().matches(/(man|woman)/),
    advantages: Yup.array().of(Yup.string().nullable().transform((v, o) => (o === '' ? null : v)).min(5, 'Minimum allowed length per advantage is 5 symbols').max(50, 'Must be 50 characters or less')),
    picked: Yup.string().required('Required'),
    fieldAbout: Yup.string().max(200, 'Must be 200 characters or less'),
  })

  const initValues = {
    fieldNickname: '',
    fieldName: '',
    fieldSurname: '',
    fieldSex: 'man',
    advantages: ['', '', ''],
    checked: [],
    picked: '1',
    fieldAbout: '',
  }

  const nextBtnHandler = async (e, validate, values) => {
    e.preventDefault();
    e.stopPropagation();
    if (currentStep === 0) {
      const firstStepSchema = validSchema.pick(['fieldNickname', 'fieldName', 'fieldSurname', 'fieldSex'])
      if (await firstStepSchema.isValid(values)) {
        return setCurrentstep(currentStep + 1)
      }
      return validate()
    }
    if (currentStep === 1) {
      const secondStepSchema = validSchema.pick(['advantages', 'picked'])
      if (await secondStepSchema.isValid(values)) {
        return setCurrentstep(currentStep + 1)
      }
      return validate()
    }
    if (currentStep === 2) return
  }

  const convertData = (item: any) => {
    return {
      nickname: item.fieldNickname,
      name: item.fieldName,
      surname: item.fieldSurname,
      sex: item.fieldSex,
      advantages: item.advantages.map((item) => item),
      radio: +item.picked,
      checkbox: item.checked.map((item) => +item),
      about: item.fieldAbout,
    }
  }

  const fetchData = async (data) => {
    try {
      const response = await fetch('https://api.sbercloud.ru/content/v1/bootcamp/frontend', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json;charset=utf-8'
        },
        body: JSON.stringify(data)
      });
      return response.json()
    } catch (e: any) {
      throw new Error(e)
    }
  }

  const handleSubmit = async (values) => {
    const data = convertData(values)
    await fetchData(data).then(() => {
      setSuccess(true)
      setModal(true)
    }).catch(() => setModal(true))
  }

  const groupItems = [1, 2, 3]

  return (
    <div className={styles.page_wrapper}>
      <Stepper step={currentStep} />
      <Formik
        initialValues={initValues}
        validationSchema={validSchema}
        onSubmit={async (values) => await handleSubmit(values)}
      >
        {({ values, errors, touched, validateForm, validateField }) => (
          <Form autoComplete='off' className={styles.form_wrapper}>
            <div className={styles.fields_wrapper}>
              {currentStep === 0
                ?
                <>
                  <label className={styles.label__wrapper} htmlFor='field-nickname'>
                    Nickname
                    <Field name="fieldNickname" type='text' id='field-nickname' placeholder='Enter your nickname' component={MyInput} />
                    {errors.fieldNickname && <div className={styles.error_tip}>{errors.fieldNickname}</div>}
                  </label>
                  <label className={styles.label__wrapper} htmlFor='field-name'>
                    Name
                    <Field name="fieldName" type='text' id='field-name' placeholder='Enter your name' component={MyInput} />
                    {errors.fieldName && <div className={styles.error_tip}>{errors.fieldName}</div>}
                  </label>
                  <label className={styles.label__wrapper} htmlFor='field-surname'>
                    Surname
                    <Field name="fieldSurname" type='text' id='field-surname' placeholder='Enter your surname' component={MyInput} />
                    {errors.fieldSurname && <div className={styles.error_tip}>{errors.fieldSurname}</div>}
                  </label>

                  <label className={styles.label__wrapper} htmlFor='field-sex'>
                    Sex
                    <Field name="fieldSex" as="select" id='field-sex'>
                      <option id='field-sex-option-man' value="man">Man</option>
                      <option id='field-sex-option-woman' value="woman">Woman</option>
                    </Field>
                    {touched.fieldSex && errors.fieldSex && <div className={styles.error_tip}>{errors.fieldSex}</div>}
                  </label>
                </>
                :
                currentStep === 1
                  ?
                  <>
                    <div className={styles.group}>
                      <span>Advantages</span>
                      <FieldArray name="advantages" render={arrayHelpers => (
                        <div className={styles.group_wrapper}>
                          {values.advantages.map((_, index) => {
                            return (
                              <div className={styles.label__wrapper} key={`index${index}`}>
                                <div className={styles.controlled_field}>
                                  <Field name={`advantages[${index}]`} type='text' id={`field-advantages-${index + 1}`} placeholder='Enter your advantage' />
                                  <DeleteButton onClick={() => arrayHelpers.remove(index)} id={`button-remove-${index + 1}`}>
                                    <TrashIcon />
                                  </DeleteButton>
                                </div>
                                <ErrorMessage name={`advantages[${index}]`} />
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
                      {touched.picked && errors.picked && <div className={styles.error_tip}>{errors.picked}</div>}
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
                    <label className={styles.label__wrapper} htmlFor='field-about'>
                      About
                      <Field name="fieldAbout" as="textarea" id='field-about' label='About' placeholder='Enter something about you' />
                      <div className={styles.about_info}>
                        {touched.fieldAbout && errors.fieldAbout && <div className={styles.error_tip}>{errors.fieldAbout}</div>}
                        <span>{values.fieldAbout.length}</span>
                      </div>
                    </label>
                  </>
              }
            </div>
            <div className={styles.buttons_wrapper}>
              <MainButton type='button' onClick={() => backBtnHandler()} mode='outlined' id='button-back'>Back</MainButton>
              {currentStep === 2
                ?
                <MainButton type='submit' mode='default' id='button-send'>Send</MainButton>
                :
                <MainButton type='button' onClick={(e) => nextBtnHandler(e, validateForm, values)} mode='default' id='button-next'>Next</MainButton>
              }
            </div>
          </Form>
        )}
      </Formik>
      {modal && (success ? <SuccessModal /> : <ErrorModal togleOpen={() => setModal(false)} />)}
    </div>
  )
}

const ErrorMessage = ({ name }) => (
  <Field
    name={name}
  >
    {({ form }) => {
      const error = getIn(form.errors, name);
      return error && <div className={styles.error_tip}>{error}</div>;
    }}
  </Field>
);

