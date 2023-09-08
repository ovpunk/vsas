import mStyles from "./header.module.scss";
import settings from "../../assets/icons/settings.svg";
import search from "../../assets/icons/search.svg";
import notifications from "../../assets/icons/notifications.svg";
import { Link, useLocation } from "react-router-dom";
import Tooltip from "../../components/Tooltip";

export const Header = () => {
  const location = useLocation().pathname;

  return (
    <div className={mStyles.header}>
      {/*Логотип ведет на разные страницы в зависимости от страницы (чтобы избавится от блика редиректа)*/}
      {location === "/" || location === "/signup" ? (
        <Link to={"/"}>
          <p className={mStyles.logo}>
            VS<span>A</span>S
          </p>
        </Link>
      ) : (
        <Link to={"/profile"}>
          <p className={mStyles.logo}>
            VS<span>A</span>S
          </p>
        </Link>
      )}
      {/*Отображение навигации только в авторизованной зоне */}
      {location === "/" || location === "/signup" ? (
        ""
      ) : (
        <div className={mStyles.nav}>
          <Tooltip text="Поиск">
            <Link to={"/users"}>
              <img
                src={search}
                alt=""
                className={mStyles.icons + " " + mStyles.search}
              />
            </Link>
          </Tooltip>

          <Tooltip text="Уведомления">
            <Link to={"/profile"}>
              <img
                src={notifications}
                alt=""
                className={mStyles.icons + " " + mStyles.notifications}
              />
            </Link>
          </Tooltip>

          <Tooltip text="Настройки">
            <Link to={"settings"}>
              <img
                src={settings}
                alt="Войти"
                className={mStyles.icons + " " + mStyles.settings}
              />
            </Link>
          </Tooltip>
        </div>
      )}
    </div>
  );
};
