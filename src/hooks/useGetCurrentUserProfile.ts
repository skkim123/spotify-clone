import { useQuery } from "@tanstack/react-query";
import { getCurrentUserProfile } from "../apis/userApi";

export const useGetCurrentUserProfile = () => {
  const accessToken = localStorage.getItem("access_token");

  return useQuery({
    queryKey: ["current-user-profile"],
    queryFn: getCurrentUserProfile,
    enabled: !!accessToken,
  });
};
