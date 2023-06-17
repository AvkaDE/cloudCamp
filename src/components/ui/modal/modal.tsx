import { ReactNode } from "react";
import styles from './modal.module.scss'

type TProps = {
  children: ReactNode;
};

const Modal = ({ children }: TProps) => {
  return (
    <div className={styles.layout}>
      <div className={styles.modal}>{children}</div>
    </div>
  );
}

export default Modal