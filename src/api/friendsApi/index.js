export const addFriend = (id) => {
  const token = localStorage.getItem("TOKEN");
  return fetch(`http://127.0.0.1:8000/api/befriend/${id}/`, {
    method: "POST",
    headers: {
      Authorization: `Token ${token}`,
    },
  });
};

export const accrptFriend = (id) => {
  const token = localStorage.getItem("TOKEN");
  return fetch(`http://127.0.0.1:8000/api/accept/${id}/`, {
    method: "POST",
    headers: {
      Authorization: `Token ${token}`,
    },
  });
};

export const applicationArrived = () => {
  const token = localStorage.getItem("TOKEN");
  return fetch(`http://127.0.0.1:8000/api/incoming/`, {
    method: "GET",
    headers: {
      Authorization: `Token ${token}`,
    },
  });
};
