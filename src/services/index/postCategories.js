import axios from "axios";

export const getAllCategories = async () => {
  try {
    const { data } = await axios.get(`https://litsocvssut.onrender.com/api/post-categories`);
    return data;
  } catch (error) {
    if (error.response && error.response.data.message)
      throw new Error(error.response.data.message);
    throw new Error(error.message);
  }
};
