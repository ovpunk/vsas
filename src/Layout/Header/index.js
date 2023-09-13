import styles from "./header.module.scss";
import settings from "../../assets/icons/settings.svg";
import search from "../../assets/icons/search.svg";
import notifications from "../../assets/icons/notifications.svg";
import { Link, useLocation } from "react-router-dom";
import Tooltip from "../../components/Tooltip";
import classNames from "classnames";
import { useState } from "react";
import { NotificationModal } from "../../components/NotificationModal";

export const Header = () => {
  const location = useLocation().pathname;
  const [visibleNotifications, setVisibleNotifications] = useState(false);
  const showNotifications = () => {
    setVisibleNotifications(!visibleNotifications);
  };
  return (
    <>
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
            <Tooltip text="Поиск">
              <Link to={"/users"}>
                <img
                  src={search}
                  alt=""
                  className={classNames(styles.icons, styles.search)}
                />
              </Link>
            </Tooltip>

            <Tooltip text="Уведомления">
              <div onClick={showNotifications}>
                <img
                  src={notifications}
                  alt=""
                  className={classNames(styles.icons, styles.notifications)}
                />
              </div>
            </Tooltip>

            <Tooltip text="Настройки">
              <Link to={"settings"}>
                <img
                  src={settings}
                  alt="Войти"
                  className={classNames(styles.icons, styles.settings)}
                />
              </Link>
            </Tooltip>
          </div>
        )}
      </div>
      {visibleNotifications && (
        <NotificationModal className={styles.notifications_modal} />
      )}
    </>
  );
};
