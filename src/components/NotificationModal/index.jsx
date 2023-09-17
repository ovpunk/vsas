import { useQuery } from "@tanstack/react-query";
import styles from "./notificationmodal.module.scss";
import { applicationArrivedFetch } from "../../api/friendsApi";
import { Notification } from "./Notification";
import classNames from "classnames";

export const NotificationModal = ({ active, setActive }) => {
  const { data, error, isError, isLoading } = useQuery({
    queryKey: ["applicationArrived"],
    queryFn: async () => {
      const res = await applicationArrivedFetch();
      if (res.ok) {
        const responce = await res.json();
        return responce;
      }
    },
  });
  if (isError) return error;
  if (isLoading) return <>Zagruzka</>;

  const handleCloseModal = () => {
    setActive(false);
    document.body.classList.remove("bodyModalOpen");
  };
  console.log(data);
  return (
    <>
      <div
        className={
          active ? classNames(styles.modal, styles.modal_active) : styles.modal
        }
        onClick={handleCloseModal}
      >
        <div
          className={
            active
              ? classNames(styles.content_active, styles.content)
              : styles.content
          }
          onClick={(e) => e.stopPropagation()}
        >
          <div className={styles.top}>
            <div className={styles.top_left}>
              <h2>Уведомления</h2>
              <p>{data && data.length}</p>
            </div>
            <div className={styles.top_right}>
              <svg
                onClick={handleCloseModal}
                data-name="Layer 1"
                id="Layer_1"
                viewBox="0 0 200 200"
                xmlns="http://www.w3.org/2000/svg"
              >
                <title />
                <path d="M114,100l49-49a9.9,9.9,0,0,0-14-14L100,86,51,37A9.9,9.9,0,0,0,37,51l49,49L37,149a9.9,9.9,0,0,0,14,14l49-49,49,49a9.9,9.9,0,0,0,14-14Z" />
              </svg>
            </div>
          </div>
          <div className={styles.bottom_line}></div>
          {data.length ? (
            data.map((el) => <Notification key={el.id} data={el} />)
          ) : (
            <p className={styles.no_notifications}>У вас нет уведомлений.</p>
          )}
        </div>
      </div>
    </>
  );
};
