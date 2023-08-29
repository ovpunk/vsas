import styles from "./header.module.scss";
import settings from "../../assets/icons/settings.svg";
import { Link, useLocation } from "react-router-dom";

export const Header = () => {
  const location = useLocation().pathname;
  return (
    <div className={styles.header}>
      <Link to={"/"}>
        <p className={styles.logo}>VSAS</p>
      </Link>
      {location === "/" || location === "/signup" ? (
        ""
      ) : (
        <Link to={"settings"}>
          <img src={settings} alt="Войти" className={styles.settings} />
        </Link>
      )}
    </div>
  );
};
