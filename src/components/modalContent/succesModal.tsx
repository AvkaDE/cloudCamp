import { useNavigate } from "react-router";
import Modal from "../ui/modal/modal";
import MainButton from "../ui/button/mainButton";
import styles from "./content.module.scss";

export const SuccessModal = () => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate('/');
  };

  return (
    <Modal>
        <h2 className={styles.title}>Форма успешно отправлена</h2>
      <div className={styles.img_wrapper}>
        <div className={styles.success}>
        </div>
      </div>
        <MainButton type="button" mode="default" id="button-to-main" onClick={handleClick}>
          На главную
        </MainButton>
    </Modal>
  );
};