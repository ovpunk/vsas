import styles from "./profile.module.scss";
import black from "../../assets/icons/black.jpeg";

export const Profile = () => {
  return (
    <div className={styles.container}>
      <div className={styles.profile}>
        <div className={styles.friends}>
          <div className={styles.friends_title}>Друзья</div>
          <div className={styles.friends_wrapper}>
            <div className={styles.friend}>
              <img src={black} alt="black" className={styles.black} />
              <p className={styles.friend_name}>Рушан Сафаргалеев</p>
            </div>
            <div className={styles.bottom_line}></div>

            <div className={styles.friend}>
              <img src={black} alt="black" className={styles.black} />
              <p className={styles.friend_name}>Владислав Калугин</p>
            </div>
            <div className={styles.bottom_line}></div>

            <div className={styles.friend}>
              <img src={black} alt="black" className={styles.black} />
              <p className={styles.friend_name}>Артур Айбатов</p>
            </div>
            <div className={styles.bottom_line}></div>

            <div className={styles.friend}>
              <img src={black} alt="black" className={styles.black} />
              <p className={styles.friend_name}>Сид Вишес</p>
            </div>
            <div className={styles.bottom_line}></div>
          </div>
        </div>
        <div className={styles.myProfile}>
          <img src={black} alt="" className={styles.avatar} />

          <div className={styles.info}>
            <p className={styles.username}>@slava</p>
            <p className={styles.name}>Вячеслав Овчинников</p>
          </div>
        </div>
      </div>
    </div>
  );
};
