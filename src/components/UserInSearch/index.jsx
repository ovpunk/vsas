import styles from "./userinsearch.module.scss";
import black from "../../assets/icons/black.jpeg";
import plus from "../../assets/icons/plus.svg";

export const UserInSearch = ({ name }) => {
  return (
    <div className={styles.user_wrapper}>
      <div className={styles.user}>
        <div className={styles.left}>
          <img src={black} alt="" className={styles.avatar} />
          <p className={styles.name}>{name}</p>
        </div>
        <div className={styles.right}>
          <button>Написать</button>
          <img src={plus} alt="" className={styles.plus_icon} />
        </div>
      </div>
      <div className={styles.bottom_line}></div>
    </div>
  );
};
