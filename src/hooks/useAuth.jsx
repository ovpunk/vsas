import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export const useAuth = () => {
  const token = localStorage.getItem("TOKEN");
  console.log(token);
  const navigate = useNavigate();
  useEffect(() => {
    if (!token) navigate("/");
  }, [navigate, token]);
  return { token };
};
