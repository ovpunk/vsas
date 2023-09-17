import styles from "./header.module.scss";
import { Link, useLocation } from "react-router-dom";
import Tooltip from "../../components/Tooltip";
import classNames from "classnames";
import { useState } from "react";
import { NotificationModal } from "../../components/NotificationModal";

export const Header = () => {
  const location = useLocation().pathname;
  const [visibleNotifications, setVisibleNotifications] = useState(false);
  const showNotifications = () => {
    setVisibleNotifications(true);
    document.body.classList.add("bodyModalOpen");
  };
  return (
    <>
      <header className={styles.header}>
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
                <svg
                  className={classNames(styles.icons, styles.search)}
                  enableBackground="new 0 0 32 32"
                  id="Editable-line"
                  version="1.1"
                  viewBox="0 0 32 32"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle
                    cx="14"
                    cy="14"
                    fill="none"
                    id="XMLID_42_"
                    r="9"
                    stroke="#000000"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeMiterlimit="10"
                    strokeWidth="2"
                  />
                  <line
                    fill="none"
                    id="XMLID_44_"
                    stroke="#000000"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeMiterlimit="10"
                    strokeWidth="2"
                    x1="27"
                    x2="20.366"
                    y1="27"
                    y2="20.366"
                  />
                </svg>
              </Link>
            </Tooltip>

            <Tooltip text="Уведомления">
              <div onClick={showNotifications}>
                <svg
                  className={classNames(styles.icons, styles.notifications)}
                  enableBackground="new 0 0 32 32"
                  version="1.1"
                  viewBox="0 0 32 32"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M28.857,25.485L26,20.723V14c0-5.177-3.954-9.446-9-9.949V3c0-0.552-0.448-1-1-1s-1,0.448-1,1v2c0,0.552,0.448,1,1,1  c4.411,0,8,3.589,8,8v7c0,0.182,0.049,0.359,0.143,0.515L26.233,25H5.766l2.091-3.485C7.951,21.359,8,21.182,8,21v-7  c0-3.079,1.8-5.92,4.585-7.238c0.499-0.236,0.712-0.832,0.476-1.332c-0.236-0.499-0.832-0.712-1.332-0.476  C8.249,6.601,6,10.151,6,14v6.723l-2.857,4.763c-0.186,0.309-0.19,0.693-0.013,1.008C3.307,26.807,3.64,27,4,27h8.142  c0.447,1.721,2,3,3.858,3c1.859,0,3.411-1.279,3.858-3H28c0.36,0,0.692-0.193,0.87-0.507C29.048,26.179,29.043,25.794,28.857,25.485  z M16,28c-0.737,0-1.375-0.405-1.722-1h3.443C17.375,27.595,16.737,28,16,28z" />
                </svg>
              </div>
            </Tooltip>

            <Tooltip text="Настройки">
              <Link to={"settings"}>
                <svg
                  className={classNames(styles.icons, styles.settings)}
                  enableBackground="new 0 0 32 32"
                  id="Editable-line"
                  version="1.1"
                  viewBox="0 0 32 32"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle
                    cx="16"
                    cy="16"
                    fill="none"
                    id="XMLID_224_"
                    r="4"
                    stroke="#000000"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeMiterlimit="10"
                    strokeWidth="2"
                  />
                  <path
                    d="  M27.758,10.366l-1-1.732c-0.552-0.957-1.775-1.284-2.732-0.732L23.5,8.206C21.5,9.36,19,7.917,19,5.608V5c0-1.105-0.895-2-2-2h-2  c-1.105,0-2,0.895-2,2v0.608c0,2.309-2.5,3.753-4.5,2.598L7.974,7.902C7.017,7.35,5.794,7.677,5.242,8.634l-1,1.732  c-0.552,0.957-0.225,2.18,0.732,2.732L5.5,13.402c2,1.155,2,4.041,0,5.196l-0.526,0.304c-0.957,0.552-1.284,1.775-0.732,2.732  l1,1.732c0.552,0.957,1.775,1.284,2.732,0.732L8.5,23.794c2-1.155,4.5,0.289,4.5,2.598V27c0,1.105,0.895,2,2,2h2  c1.105,0,2-0.895,2-2v-0.608c0-2.309,2.5-3.753,4.5-2.598l0.526,0.304c0.957,0.552,2.18,0.225,2.732-0.732l1-1.732  c0.552-0.957,0.225-2.18-0.732-2.732L26.5,18.598c-2-1.155-2-4.041,0-5.196l0.526-0.304C27.983,12.546,28.311,11.323,27.758,10.366z  "
                    fill="none"
                    id="XMLID_242_"
                    stroke="#000000"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeMiterlimit="10"
                    strokeWidth="2"
                  />
                </svg>
              </Link>
            </Tooltip>
          </div>
        )}
      </header>
      (
      <NotificationModal
        active={visibleNotifications}
        setActive={setVisibleNotifications}
      />
      )
    </>
  );
};
