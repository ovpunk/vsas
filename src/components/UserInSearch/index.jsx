import styles from "./userinsearch.module.scss";
import black from "../../assets/icons/black.jpeg";
//import plus from "../../assets/icons/plus.svg";
import { useMutation, useQuery } from "@tanstack/react-query";
import {
  addFriend,
  cancelApplicationFetch,
  deleteFriendFetch,
  getMyFriendsFetch,
} from "../../api/friendsApi/index";
import { applicationGoneFetch } from "../../api/friendsApi/index.js";
import { Spinner } from "../Spinner";
import { useState } from "react";

export const UserInSearch = ({ name, id }) => {
  const [applicationGone, setApplicationGone] = useState(false);
  //Создать стейт удалить/добавить
  const { data: friends } = useQuery({
    queryKey: ["getMyfriends"],
    queryFn: async () => {
      const res = await getMyFriendsFetch();
      if (res.ok) {
        const responce = await res.json();
        return responce;
      }
    },
  });
  console.log(friends);

  const { mutateAsync, error, isError, isLoading } = useMutation({
    mutationFn: async (id) => {
      await addFriend(id);
    },
  });
  if (isLoading) return <Spinner />;
  if (isError) return error;

  const handleAddFriend = async () => {
    mutateAsync(id);
    const res = await applicationGoneFetch();
    if (res.ok) {
      setApplicationGone(!applicationGone);
    }
    console.log(res);
  };

  const handleCancelApplication = async () => {
    const res = await cancelApplicationFetch(id);
    if (res.ok) {
      setApplicationGone(!applicationGone);

      console.log(res);
    }
  };

  const deleteFriend = async () => {
    const res = await deleteFriendFetch(id);
    if (res.ok) {
      console.log("Друг удален");
    }
  };

  return (
    <div className={styles.user_wrapper}>
      <div className={styles.user}>
        <div className={styles.left}>
          <img src={black} alt="" className={styles.avatar} />
          <p className={styles.name}>{name}</p>
        </div>
        <div className={styles.right}>
          {friends && friends.some((friend) => friend.id === id) ? (
            //кнопка удаления
            <button onClick={deleteFriend}>Удалить из друзей</button>
          ) : applicationGone ? (
            //кнопка отмены
            <button onClick={handleCancelApplication}>Отменить заявку</button>
          ) : (
            //кнопка добавления
            <button onClick={handleAddFriend}>Добавить в друзья</button>
          )}
        </div>
      </div>
      <div className={styles.bottom_line}></div>
    </div>
  );
};
