import axios from "axios";

export const getPosts = async () => {
  const response = await axios.get("/posts");
  return response.data;
};

export const getPostsById = async (id) => {
  const response = await axios.get(`/posts/${id}`);
  return response.data;
};
