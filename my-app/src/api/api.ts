import axios from "axios";
import { stringify } from "querystring";

const instance = axios.create({
  baseURL: "https://629dd8753dda090f3c0ce5f3.mockapi.io/goods",
});

export const getPosts = async () => {
  try {
    const res = await instance.get("");
    console.log(res.data);

    return res.data;
  } catch (e) {
    console.log(e);
  }
};

export const addPost = async (post: {
  id: number;
  name: string  | null;
  description: string  | null;
}) => {
  try {
    const res = await instance.post("", post);
    const data = getPosts()
    return data;
  } catch (e) {
    console.log(e);
  }
};

export const deletePost = async (id: string) => {
  try {
    const res = await instance.delete(id);
    return res.data;
  } catch (e) {
    console.log(e);
  }
};

export const editPost = async (post: {
  id: string;
  name: string;
  description: string;
}) => {
  try {
    const res = await instance.put(post.id, {
      name: post.name,
      description: post.description,
    });
    return res.data;
  } catch (e) {
    console.log(e);
  }
};
