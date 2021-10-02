import axios from 'axios';

const BASE_URL = 'https://jsonplaceholder.typicode.com';

export const fetchPost = async (id) => {
  const url = id ? `${BASE_URL}/posts/${id}` : `${BASE_URL}/posts/`;
  try {
    const { data } = await axios.get(url);

    return {
      data,
      loading: false,
      error: null,
    };
  } catch (error) {
    return {
      data: [],
      loading: false,
      error,
    };
  }
};
