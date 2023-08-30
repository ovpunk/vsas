import styles from "./header.module.scss";
import settings from "../../assets/icons/settings.svg";
import users from "../../assets/icons/users.svg";
import search from "../../assets/icons/search.svg";

import { Link, useLocation } from "react-router-dom";

export const Header = () => {
  const location = useLocation().pathname;
  return (
    <div className={styles.header}>
      <Link to={"/profile"}>
        <p className={styles.logo}>
          VS<span>A</span>S
        </p>
      </Link>
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

          <Link>
            <img
              src={users}
              alt=""
              className={styles.icons + " " + styles.users}
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
