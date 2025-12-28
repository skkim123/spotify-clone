import type { User } from "../models/user";
import api from "../utils/api";

export const getCurrentUserProfile = async (): Promise<User> => {
  try {
    const response = await api.get("/me");

    if (!response?.data) {
      throw new Error("Failed to get current user profile");
    }

    return response.data;
  } catch (error) {
    throw new Error("Failed to get current user profile");
  }
};
