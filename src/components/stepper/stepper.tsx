import React from 'react';
import styles from './stepper.module.scss'
import StepperItem from './stepperItem';

const Stepper = () => {

  const currentSTep = 1

  const calculateWidth = () => {
    return currentSTep === 1 ? '50%' : '100%'
  }

  return (
    <div className={styles.line_wrapper}>
      <div className={styles.line_filled} style={{ width: calculateWidth() }}></div>
      <StepperItem number={1} />
      <StepperItem number={2} />
      <StepperItem number={3} />
    </div>
  )
}
export default Stepper;