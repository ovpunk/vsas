import { Link, useNavigate } from "react-router-dom";
import styles from "./signin.module.scss";
import { useForm } from "react-hook-form";
import { useMutation } from "@tanstack/react-query";
import { signInFetch } from "../../api";
import { Spinner } from "../../components/Spinner";
import { useNoAuth } from "../../hooks/useNoAuth";

export const SignIn = () => {
  useNoAuth();

  const navigate = useNavigate();
  const { register, handleSubmit } = useForm();

  const { mutateAsync, error, isError, isLoading } = useMutation({
    mutationFn: async (values) => {
      const res = await signInFetch(values);

      if (res.ok) {
        const responce = await res.json();
        localStorage.setItem("TOKEN", responce.auth_token);
        return navigate("/profile");
      }
    },
  });

  if (isError) return { error };
  if (isLoading) return <Spinner />;
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <h1 className={styles.title}>Войти в VSAS</h1>
        <form onSubmit={handleSubmit(mutateAsync)}>
          <input
            type="text"
            className={styles.field}
            placeholder="Электронный адрес"
            {...register("email")}
          />
          <input
            type="password"
            className={styles.field}
            placeholder="Папроль"
            {...register("password")}
          />
          <button className={styles.button}>Войти</button>
        </form>
        <p className={styles.sub_text}>
          Нет аккаунта? <Link to={"/signup"}>Зарегистрироваться.</Link>
        </p>
      </div>
    </div>
  );
};
