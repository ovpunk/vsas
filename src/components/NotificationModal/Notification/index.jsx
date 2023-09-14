import {
  acceptFrienshipFetch,
  rejectFrienshipFetch,
} from "../../../api/friendsApi";
import styles from "./notification.module.scss";

export const Notification = ({ data }) => {
  const handleReject = async (sender) => {
    const res = await rejectFrienshipFetch(sender);
    if (res.ok) {
      console.log("Дружбы нет");
    }
  };
  console.log(data);
  const handleAccept = async (sender) => {
    const res = await acceptFrienshipFetch(sender);
    if (res.ok) {
      console.log("Друг добавлен");
    }
  };

  return (
    <div className={styles.notifications}>
      <p className={styles.notification}>
        <span>
          {data.first_name} {data.last_name}
        </span>{" "}
        хочет добавить вас в друзья
      </p>
      <div className={styles.buttons}>
        <button
          className={styles.accept}
          onClick={() => handleAccept(data.sender)}
        >
          Принять
        </button>
        <button
          className={styles.reject}
          onClick={() => handleReject(data.sender)}
        >
          Отклонить
        </button>
      </div>
      <div className={styles.bottom_line}></div>
    </div>
  );
};
