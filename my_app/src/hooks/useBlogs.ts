import axios from "axios";
import { BACKEND_URL, jwt_token } from "../config";

export default function useBlogs() {
  const createUser = async (name: string, job: string) => {
    const response = await axios.get(`${BACKEND_URL}/api/v1/blog/bulk`, {
      headers: {
        "Authorization": "Bearer " + jwt_token
      }
    });
    return response.data.blogs;
  };

  return { createUser };
}
