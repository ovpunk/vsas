import styles from "./userinsearch.module.scss";
import black from "../../assets/icons/black.jpeg";
import plus from "../../assets/icons/plus.svg";
import { useMutation } from "@tanstack/react-query";
import { addFriend } from "../../api/friendsApi/index";
import { Spinner } from "../Spinner";

export const UserInSearch = ({ name, id }) => {
  const { mutateAsync, error, isError, isLoading } = useMutation({
    mutationFn: async (id) => {
      const res = await addFriend(id);
      if (res.ok) {
        console.log("Заявка отпарвлена");
      }
    },
  });
  if (isLoading) return <Spinner />;
  if (isError) return error;

  const handleAddFriend = () => {
    mutateAsync(id);
  };

  return (
    <div className={styles.user_wrapper}>
      <div className={styles.user}>
        <div className={styles.left}>
          <img src={black} alt="" className={styles.avatar} />
          <p className={styles.name}>{name}</p>
        </div>
        <div className={styles.right}>
          <button>Написать</button>
          <img
            src={plus}
            alt=""
            className={styles.plus_icon}
            onClick={handleAddFriend}
          />
        </div>
      </div>
      <div className={styles.bottom_line}></div>
    </div>
  );
};
