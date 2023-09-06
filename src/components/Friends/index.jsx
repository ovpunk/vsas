import black from "../../assets/icons/black.jpeg";
import styles from "./friends.module.scss";
export const Friends = () => {
  return (
    <div className={styles.friends}>
      <div className={styles.friends_top}>
        <p>Друзья</p>
        <span>4</span>
      </div>
      <div className={styles.friends_bottom_line}></div>
      <div className={styles.friends_list}>
        <div className={styles.friend}>
          <img src={black} alt="" />
          <p>Рушан</p>
        </div>
        <div className={styles.friend}>
          <img src={black} alt="" />
          <p>Чуршан</p>
        </div>
        <div className={styles.friend}>
          <img src={black} alt="" />
          <p>Абдурахмангаджи</p>
        </div>

        <div className={styles.friend}>
          <img src={black} alt="" />
          <p>Владлен</p>
        </div>
      </div>
    </div>
  );
};
