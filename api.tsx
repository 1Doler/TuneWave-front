import axios from "./axiox";
import { InputsProfile } from "./page-components";

export interface UpdateProfileBody extends InputsProfile {
  id: String;
  avatarUrl: String;
}

export const updateProfile = async (body: UpdateProfileBody) => {
  const res = await axios.post("/auth/user", body, { withCredentials: true });
  return res;
};
