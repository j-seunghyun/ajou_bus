export const getUserId = () => {
  const userId = localStorage.getItem("userId");
  return userId;
};

export const getId = () => {
  const id = localStorage.getItem("id");
  return id;
};

export const setUserId = (userId) => {
  localStorage.setItem("userId", userId);
};

export const setId = (id) => {
  localStorage.setItem("id", id);
};

export const setLevel = (level) => {
  localStorage.setItem("level", level);
};

export const getLevel = () => localStorage.getItem("level");

export const setCookie = (token) => {
  document.cookie = token;
};

export const getCookie = () => {
  return document.cookie;
};
