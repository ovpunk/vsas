import styles from "./signup.module.scss";
import { useMutation } from "@tanstack/react-query";
import { signUpFetch } from "../../api";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { Spinner } from "../../components/Spinner";
import { useNoAuth } from "../../hooks/useNoAuth";

export const SignUp = () => {
  useNoAuth();
  const navigate = useNavigate();
  const { mutateAsync, error, isError, isLoading } = useMutation({
    mutationFn: async (values) => {
      const res = await signUpFetch(values);

      if (res.ok) {
        const responce = await res.json();
        localStorage.setItem("TOKEN", responce.auth_token);
        return navigate("/profile");
      }
    },
  });
  const { register, handleSubmit } = useForm();

  if (isError) return error;
  if (isLoading) return <Spinner />;
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <h1 className={styles.title}>Регистрация в VSAS</h1>
        <form onSubmit={handleSubmit(mutateAsync)}>
          <input
            type="email"
            className={styles.field}
            placeholder="Электронный адрес"
            {...register("email")}
          />

          <input
            type="text"
            className={styles.field}
            placeholder="Имя пользователя"
            {...register("username")}
          />

          <input
            type="text"
            className={styles.field}
            placeholder="Имя"
            {...register("first_name")}
          />
          <input
            type="text"
            className={styles.field}
            placeholder="Фамилия"
            {...register("last_name")}
          />

          <input
            type="password"
            className={styles.field}
            placeholder="Папроль"
            {...register("password")}
          />
          <button className={styles.button}>Зарегистрироваться</button>
        </form>
        <p className={styles.sub_text}>
          Уже есть аккаунт? <Link to={"/"}>Войти.</Link>
        </p>
      </div>
    </div>
  );
};
