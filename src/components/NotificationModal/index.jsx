import { useQuery } from "@tanstack/react-query";
import styles from "./notificationmodal.module.scss";
import { applicationArrived } from "../../api/friendsApi";
import { Notification } from "./Notification";

export const NotificationModal = () => {
  const { data, error, isError, isLoading } = useQuery({
    queryKey: ["applicationArrived"],
    queryFn: async () => {
      const res = await applicationArrived();
      if (res.ok) {
        const responce = res.json();
        return responce;
      }
    },
  });
  if (isError) return error;
  if (isLoading) return <>Zagruzka</>;

  return (
    <div className={styles.wrapper}>
      <div className={styles.top}>
        <h2>Уведомления</h2>
        <p>{data && data.length}</p>
      </div>
      <div className={styles.bottom_line}></div>
      {data.map((el) => (
        <Notification key={el.id} data={el} />
      ))}
    </div>
  );
};
