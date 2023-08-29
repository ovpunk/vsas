import styles from "./profile.module.scss";
import black from "../../assets/icons/black.jpeg";
import { useQuery } from "@tanstack/react-query";
import { Spinner } from "../../components/Spinner";
import right from "../../assets/icons/right.svg";
import { useAuth } from "../../hooks/useAuth";

//import { useParams } from "react-router-dom";

export const Profile = () => {
  const token = localStorage.getItem("TOKEN");

  console.log(token);

  //const {username} = useParams()
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
  useAuth();
  if (isError) return error;
  if (isLoading) return <Spinner />;
  return (
    <div className={styles.container}>
      <div className={styles.profile}>
        <div className={styles.friends}>
          <div className={styles.friends_top}>
            <div className={styles.friends_title}>Друзья</div>
            <img src={right} alt="Все друзья" className={styles.right_icon} />
          </div>
        </div>
        <div className={styles.myProfile}>
          <img src={black} alt="" className={styles.avatar} />

          <div className={styles.info}>
            <p className={styles.username}>@slava</p>
            <p className={styles.name}>Вячеслав Овчинников</p>
          </div>
        </div>
      </div>
    </div>
  );
};
