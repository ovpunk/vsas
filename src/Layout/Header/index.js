import styles from "./header.module.scss";
import settings from "../../assets/icons/settings.svg";
import search from "../../assets/icons/search.svg";
import notifications from "../../assets/icons/notifications.svg";
import { Link, useLocation } from "react-router-dom";

export const Header = () => {
  const location = useLocation().pathname;

  return (
    <div className={styles.header}>
      {/*Логотип ведет на разные страницы в зависимости от страницы (чтобы избавится от блика редиректа)*/}
      {location === "/" || location === "/signup" ? (
        <Link to={"/"}>
          <p className={styles.logo}>
            VS<span>A</span>S
          </p>
        </Link>
      ) : (
        <Link to={"/profile"}>
          <p className={styles.logo}>
            VS<span>A</span>S
          </p>
        </Link>
      )}
      {/*Отображение навигации только в авторизованной зоне */}
      {location === "/" || location === "/signup" ? (
        ""
      ) : (
        <div className={styles.nav}>
          <Link to={"/users"}>
            <img
              src={search}
              alt=""
              className={styles.icons + " " + styles.search}
            />
          </Link>

          <Link to={"/profile"}>
            <img
              src={notifications}
              alt=""
              className={styles.icons + " " + styles.notifications}
            />
          </Link>

          <Link to={"settings"}>
            <img
              src={settings}
              alt="Войти"
              className={styles.icons + " " + styles.settings}
            />
          </Link>
        </div>
      )}
    </div>
  );
};
