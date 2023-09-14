export const addFriend = (id) => {
  const token = localStorage.getItem("TOKEN");
  return fetch(`http://127.0.0.1:8000/api/befriend/${id}/`, {
    method: "POST",
    headers: {
      Authorization: `Token ${token}`,
    },
  });
};

export const acceptFriend = (id) => {
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

export const rejectFrienshipFetch = (sender) => {
  const token = localStorage.getItem("TOKEN");
  return fetch(`http://127.0.0.1:8000/api/remove/${sender}/`, {
    method: "DELETE",
    headers: {
      Authorization: `Token ${token}`,
    },
  });
};

export const acceptFrienshipFetch = (sender) => {
  const token = localStorage.getItem("TOKEN");
  return fetch(
    `http://127.0.0.1:8000/api/accept/${sender}/
  `,
    {
      method: "POST",
      headers: {
        Authorization: `Token ${token}`,
      },
    }
  );
};

export const applicationGoneFetch = () => {
  const token = localStorage.getItem("TOKEN");
  return fetch("http://127.0.0.1:8000/api/outcoming/", {
    method: "GET",
    headers: {
      Authorization: `Token ${token}`,
    },
  });
};

export const cancelApplicationFetch = (recipient) => {
  const token = localStorage.getItem("TOKEN");
  return fetch(`http://127.0.0.1:8000/api/cancel/${recipient}/`, {
    method: "DELETE",
    headers: {
      Authorization: `Token ${token}`,
    },
  });
};

export const getMyFriendsFetch = () => {
  const token = localStorage.getItem("TOKEN");
  return fetch(`http://127.0.0.1:8000/api/my-friends/`, {
    method: "GET",
    headers: {
      Authorization: `Token ${token}`,
    },
  });
};

export const deleteFriendFetch = (id) => {
  const token = localStorage.getItem("TOKEN");
  return fetch(`http://127.0.0.1:8000/api/unfriend/${id}/`, {
    method: "DELETE",
    headers: {
      Authorization: `Token ${token}`,
    },
  });
};
