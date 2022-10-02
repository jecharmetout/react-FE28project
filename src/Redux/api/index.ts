import { create } from "apisauce";
import { ActivationParams, UserActionPayload } from "../../Utils/globalTypes";

const API = create({
  baseURL: "https://studapi.teachmeskills.by"
});

const createNewUser = (userData: UserActionPayload) => {
  return API.post("/auth/users/", userData);
};

const getPostsList = () => {
  return API.get("/blog/posts/?limit=10");
};

const activateNewUser = (params: ActivationParams) => {
  return API.post("/auth/users/activation/", params);
};

const getPost = (id: string) => {
  return API.get(`/blog/posts/${id}/`);
};
export default { createNewUser, getPostsList, activateNewUser, getPost };
