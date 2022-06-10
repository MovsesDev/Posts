import axios from "axios";
import { loginUser } from "./login-server";

const instance = axios.create({
  baseURL: "https://629dd8753dda090f3c0ce5f3.mockapi.io/",
});

export const getPosts = async () => {
  try {
    const res = await instance.get("goods");
    return res.data;
  } catch (e) {
    console.log(e);
  }
};

export const addPost = async (post: {
  id: number;
  name: string;
  description: string;
  author: string;
}) => {
  try {
    const res = await instance.post("goods/", post);
    getPosts();
    return res;
  } catch (e) {
    console.log(e);
  }
};

export const deletePost = async (id: string) => {
  try {
    const res = await instance.delete("goods/" + id);
    return res.data;
  } catch (e) {
    console.log(e);
  }
};

export const editPost = async (post: {
  id: string | undefined;
  name: string | null;
  description: string | null;
}) => {
  try {
    const res = await instance.put(`goods/` + post.id, {
      name: post.name,
      description: post.description,
    });
    return res.data;
  } catch (e) {
    console.log(e);
  }
};

export const signup = async (email: string, password: string) => {
  try {
    const res = await instance.post("users", {
      email,
      password,
    });
    return res.data;
  } catch (e) {
    console.log(e);
  }
};

export const login = async (email: string, password: string) => {
  try {
    const res = await loginUser(instance, email, password);
    return res;
  } catch (e) {
    console.log(e);
  }
};
