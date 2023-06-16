import React from 'react';
import styles from './stepper.module.scss'
import StepperItem from './stepperItem';

const Stepper = ({ step }) => {
  const calculateWidth = () => {
    return step === 0 ? '0' : step === 1 ? '50%' : '100%'
  }

  const steps = [1, 2, 3]

  return (
    <div className={styles.line_wrapper}>
      <div className={styles.line_filled} style={{ width: calculateWidth() }}></div>
      {steps.map((x) => {
        return (
          <StepperItem key={x} steps={steps.length} number={x} />
        )
      })}
    </div>
  )
}
export default Stepper;