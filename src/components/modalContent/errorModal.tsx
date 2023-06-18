import Modal from "../ui/modal/modal";
import MainButton from "../ui/button/mainButton";
import styles from "./content.module.scss";
import close from '../../assets/close.svg'

export const ErrorModal = ({ togleOpen }) => {
  return (
    <Modal>
      <div className={styles.title_wrapper}>
        <h2 className={styles.title}>Ошибка</h2>
        <button className={styles.close} onClick={togleOpen}>
          <img src={close} alt="" />
        </button>
      </div>
      <div className={styles.img_wrapper}>
        <div className={styles.error_wrapper}>
          <div className={styles.error}>
            <img className={styles.img} src={close} alt="" />
          </div>
        </div>
      </div>
      <div className={styles.close_accent}>
        <MainButton type="button" mode="default" id="button-close" onClick={togleOpen}>
          Close
        </MainButton>
      </div>

    </Modal>
  );
};