import styles from "./header.module.scss";
import settings from "../../assets/icons/settings.svg";
import { Link } from "react-router-dom";

export const Header = () => {
  return (
    <div className={styles.header}>
      <Link to={"/"}>
        <p className={styles.logo}>VSAS</p>
      </Link>
      <img src={settings} alt="Войти" className={styles.login} />
    </div>
  );
};
