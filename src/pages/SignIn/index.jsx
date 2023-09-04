import styles from "./signin.module.scss";
import show from "../../assets/icons/show.svg";
import hide from "../../assets/icons/hide.svg";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useMutation } from "@tanstack/react-query";
import { signInFetch } from "../../api";
import { Spinner } from "../../components/Spinner";

import { useState } from "react";
import { useNoAuth } from "../../hooks/useNoAuth";

export const SignIn = () => {
  useNoAuth();
  const navigate = useNavigate();
  const { mutateAsync, error, isError, isLoading } = useMutation({
    mutationFn: async (values) => {
      const res = await signInFetch(values);

      if (res.status === 400) {
        setError("password", {
          type: "manual",
          message: "* Не верные почта или пароль.",
        });
      }
      if (res.ok) {
        const responce = await res.json();
        localStorage.setItem("TOKEN", responce.auth_token);
        return navigate("/profile");
      }
    },
  });
  const {
    register,
    formState: { errors },
    handleSubmit,
    setError,
    watch,
  } = useForm({
    mode: "onBlur",
  });

  const [passwordType, setPasswordType] = useState("password");
  const [passwordIcon, setPasswordIcon] = useState(show);
  const switchPasswordType = (event) => {
    event.preventDefault();
    if (passwordType === "password") {
      setPasswordType("text");
      setPasswordIcon(hide);
    }
    if (passwordType === "text") {
      setPasswordType("password");
      setPasswordIcon(show);
    }
  };

  const passwordValue = watch("password" || "text");
  if (isError) return { error };
  if (isLoading) return <Spinner />;

  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <h1 className={styles.title}>Войти в VSAS</h1>
        <form onSubmit={handleSubmit(mutateAsync)}>
          <div className={styles.field_wrapper}>
            <input
              type="email"
              className={styles.field}
              onChange={(e) => console.log(e.target.value)}
              placeholder="Электронный адрес"
              {...register("email", {
                required: "* Обязательное поле.",
                pattern: {
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                  message: "* Неверный адрес электронной почты!",
                },
              })}
            />
            <div className={styles.error}>
              {errors?.email && <p>{errors?.email?.message || "Ошибка"}</p>}
            </div>
          </div>

          <div className={styles.field_wrapper}>
            <input
              type={passwordType}
              className={styles.field}
              placeholder="Пароль"
              {...register("password", {
                required: "* Обязательное поле.",
              })}
            />
            {passwordValue && (
              <img
                src={passwordIcon}
                alt="Показать/Скрыть"
                className={styles.show_hide_password}
                onClick={switchPasswordType}
              />
            )}
            <div className={styles.error}>
              {errors?.password && (
                <p>{errors?.password?.message || "Ошибка"}</p>
              )}
            </div>
          </div>

          <button className={styles.button} type="submit">
            Войти
          </button>
        </form>
        <p className={styles.sub_text}>
          Нет аккаунта? <Link to={"/signup"}>Зарегистрироваться.</Link>
        </p>
      </div>
    </div>
  );
};
