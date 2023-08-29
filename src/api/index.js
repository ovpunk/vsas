export const signUpFetch = (values) => {
  return fetch("http://127.0.0.1:8000/api/users/", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(values),
  });
};

export const signInFetch = (values) => {
  return fetch("http://127.0.0.1:8000/api/auth/token/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(values),
  });
};

//http://127.0.0.1:8000/api/users/me/
