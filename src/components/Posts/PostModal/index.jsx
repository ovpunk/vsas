import styles from "./postmodal.module.scss";
import classNames from "classnames";

export const PostModal = ({ active, setAcive }) => {
  return (
    <div className={classNames(styles.modal_active, styles.modal)}>
      <div className={styles.content}>sas</div>
    </div>
  );
};
