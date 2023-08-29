import styles from "./users.module.scss";
import search from "../../assets/icons/search.svg";
import black from "../../assets/icons/black.jpeg";
import plus from "../../assets/icons/plus.svg";
import { useAuth } from "../../hooks/useAuth";

export const Users = () => {
  useAuth();
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <div className={styles.users_count}>
          <p>Люди</p>
          <span>123 253</span>
        </div>
        <div className={styles.bottom_line}></div>
        <div className={styles.search_wrapper}>
          <input
            type="text"
            className={styles.search}
            placeholder="Введите запрос"
          />
          <img src={search} alt="Найти" className={styles.search_icon} />
        </div>
        <div className={styles.user_wrapper}>
          <div className={styles.user}>
            <div className={styles.left}>
              <img src={black} alt="" className={styles.avatar} />
              <p className={styles.name}>Вячеслав Овчинников</p>
            </div>
            <div className={styles.right}>
              <button>Написать</button>
              <img src={plus} alt="" className={styles.plus_icon} />
            </div>
          </div>
          <div className={styles.bottom_line}></div>
        </div>
        <div className={styles.user_wrapper}>
          <div className={styles.user}>
            <div className={styles.left}>
              <img src={black} alt="" className={styles.avatar} />
              <p className={styles.name}>Вячеслав Овчинников</p>
            </div>
            <div className={styles.right}>
              <button>Написать</button>
              <img src={plus} alt="" className={styles.plus_icon} />
            </div>
          </div>
          <div className={styles.bottom_line}></div>
        </div>
        <div className={styles.user_wrapper}>
          <div className={styles.user}>
            <div className={styles.left}>
              <img src={black} alt="" className={styles.avatar} />
              <p className={styles.name}>Вячеслав Овчинников</p>
            </div>
            <div className={styles.right}>
              <button>Написать</button>
              <img src={plus} alt="" className={styles.plus_icon} />
            </div>
          </div>
          <div className={styles.bottom_line}></div>
        </div>
        <div className={styles.user_wrapper}>
          <div className={styles.user}>
            <div className={styles.left}>
              <img src={black} alt="" className={styles.avatar} />
              <p className={styles.name}>Вячеслав Овчинников</p>
            </div>
            <div className={styles.right}>
              <button>Написать</button>
              <img src={plus} alt="" className={styles.plus_icon} />
            </div>
          </div>
          <div className={styles.bottom_line}></div>
        </div>
      </div>
    </div>
  );
};
