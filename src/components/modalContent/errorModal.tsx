import { useNavigate } from "react-router";
import Modal from "../ui/modal/modal";
import MainButton from "../ui/button/mainButton";
import styles from "./content.module.scss";

export const ErrorModal = () => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate('/');
  };

  return (
    <Modal>
        <div className={styles.title_wrapper}>
          <h2 className={styles.title}>Ошибка</h2>
          <MainButton id="button-send" type="button" mode="default" onClick={handleClick}>
              OK
          </MainButton>
        </div>
      <div className={styles.img_wrapper}>
        <div className={styles.error}>
        </div>
      </div>
        <div className={styles.close_accent}>
          <MainButton type="button" mode="default" id="button-close" onClick={handleClick}>
            Close
          </MainButton>
        </div>
      
    </Modal>
  );
};