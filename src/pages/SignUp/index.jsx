import styles from "./signup.module.scss";
import { useMutation } from "@tanstack/react-query";
import { signInFetch } from "../../api";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";

export const SignUp = () => {
  const navigate = useNavigate();
  const { mutateAsync, error, isError, isLoading } = useMutation({
    mutationFn: async (values) => {
      const res = await signInFetch(values);

      if (res.ok) {
        const responce = await res.json();
        //dispatch(setUpUser({ ...responce.data, token: responce.token }));

        return console.log(responce);
        //navigate("/1");
      }
    },
  });
  const { register, handleSubmit } = useForm();

  if (isError) return error;
  if (isLoading) return <p>Loading...</p>;
  const submit = (data) => {
    console.log(data);
  };
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <h1 className={styles.title}>Регистрация в VSAS</h1>
        <form onSubmit={handleSubmit(mutateAsync)}>
          <input
            type="text"
            className={styles.field}
            placeholder="Имя"
            {...register("firstname")}
          />
          <input
            type="text"
            className={styles.field}
            placeholder="Фамилия"
            {...register("lastname")}
          />
          <input
            type="text"
            className={styles.field}
            placeholder="Имя пользователя"
            {...register("username")}
          />
          <input
            type="email"
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
          <button className={styles.button}>Зарегистрироваться</button>
        </form>
        <p className={styles.sub_text}>
          Уже есть аккаунт? <Link to={"/"}>Войти.</Link>
        </p>
      </div>
    </div>
  );
};
