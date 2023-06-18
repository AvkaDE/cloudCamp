import React from 'react';
import styles from './stepper.module.scss'
import { ReactComponent as CompleteIcon } from '../../assets/complete.svg'

type TStepperItemProps = {
  number: number;
  step: number;
}

const StepperItem = ({ number, step }: TStepperItemProps) => {

  const status = number <= step + 1 ? number <= step ? 'succes' : 'filled' : 'default'

  return (
    status === 'default'
      ?
      <div className={styles.item_default}>
        <div className={styles.circle_default}></div>
        {number}
      </div>
      :
      status === 'filled'
        ?
        <div className={styles.item_filled}>
          <div className={styles.circle_filled}>
            <div className={styles.dot}>
            </div>
          </div>
          {number}
        </div>
        :
        <div className={styles.item_filled}>
          <div className={styles.circle_filled}>
            <CompleteIcon />
          </div>
          {number}
        </div>
  )
}
export default StepperItem;