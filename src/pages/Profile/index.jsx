import styles from "./profile.module.scss";
import black from "../../assets/icons/black.jpeg";
import { useQuery } from "@tanstack/react-query";
import { Spinner } from "../../components/Spinner";
import { useAuth } from "../../hooks/useAuth";
import { Posts } from "../../components/Posts";
import { PostField } from "../../components/PostField";
import { Friends } from "../../components/Friends";

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
        </div>
        <Friends />
      </div>
      <div className={styles.posts}>
        <PostField className={styles.field} />
        <Posts className={styles.wall} />
      </div>
    </div>
  );
};
