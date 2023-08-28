export const signInFetch = (values) => {
  return fetch("http://localhost:8000/api/users/", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(values),
  });
};
