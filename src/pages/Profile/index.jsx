import styles from "./profile.module.scss";
import black from "../../assets/icons/black.jpeg";
//import edit from "../../assets/icons/edit.svg";
import { useQuery } from "@tanstack/react-query";
import { Spinner } from "../../components/Spinner";
import { useAuth } from "../../hooks/useAuth";
import { Posts } from "../../components/Posts";
import { PostField } from "../../components/PostField";
//import { Link } from "react-router-dom";

export const Profile = () => {
  const { token } = useAuth();
  const { data, error, isError, isLoading } = useQuery({
    queryKey: ["getMyData", token],
    queryFn: async () => {
      const res = await fetch("http://127.0.0.1:8000/api/users/me/", {
        method: "GET",
        headers: {
          Authorization: `Token ${token}`,
        },
      });

      if (res.ok) {
        const responce = await res.json();
        return responce;
      }
    },
  });

  if (isError)
    return (
      <p>
        {error}, {data}
      </p>
    );
  if (isLoading) return <Spinner />;
  return (
    <div className={styles.container}>
      <div className={styles.profile}>
        <img src={black} alt="" className={styles.avatar} />

        <div className={styles.info}>
          <p className={styles.username}>@slava</p>
          <p className={styles.name}>Вячеслав Овчинников</p>
          {/*<p className={styles.age}>Возраст: 26</p>*/}
          {/*<Link className={styles.edit}>
              <img src={edit} alt="Изменить профиль" />
            </Link>*/}
          {/*<div className={styles.bottom_line}></div>*/}
        </div>
        <div className={styles.friends}>
          <div className={styles.friends_top}>
            <p>Друзья</p>
            <span>4</span>
          </div>
          <div className={styles.friends_bottom_line}></div>
          <div className={styles.friends_list}>
            <div className={styles.friend}>
              <img src={black} alt="" />
              <p>Рушан</p>
            </div>
            <div className={styles.friend}>
              <img src={black} alt="" />
              <p>Чуршан</p>
            </div>
            <div className={styles.friend}>
              <img src={black} alt="" />
              <p>Уршат</p>
            </div>
            <div className={styles.friend}>
              <img src={black} alt="" />
              <p>Шуршан</p>
            </div>
            <div className={styles.friend}>
              <img src={black} alt="" />
              <p>Влад</p>
            </div>
            <div className={styles.friend}>
              <img src={black} alt="" />
              <p>Владлен</p>
            </div>
            <div className={styles.friend}>
              <img src={black} alt="" />
              <p>Владивосток</p>
            </div>
            <div className={styles.friend}>
              <img src={black} alt="" />
              <p>Абдурахмангаджи</p>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.posts}>
        <PostField className={styles.field} />
        <Posts className={styles.wall} />
      </div>
    </div>
  );
};
