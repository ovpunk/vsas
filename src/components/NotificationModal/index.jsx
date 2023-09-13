import styles from "./notificationmodal.module.scss";

export const NotificationModal = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.top}>
        <h2>Уведомления</h2>
        <p>1</p>
      </div>
      <div className={styles.bottom_line}></div>
      <div className={styles.notifications}>
        <p className={styles.notification}>
          <span>Рушан Сафаргалеев</span> хочет добавить вас в друзья
        </p>
      </div>
      <div className={styles.buttons}>
        <button className={styles.accept}>Принять</button>
        <button className={styles.reject}>Отклонить</button>
      </div>
    </div>
  );
};
