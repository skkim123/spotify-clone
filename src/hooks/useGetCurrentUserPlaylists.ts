import { useQuery } from "@tanstack/react-query";
import getCurrentUserPlaylists from "../apis/playlistApi";
import type { GetCurrentUserPlaylistsRequest } from "../models/playlist";

export const useGetCurrentUserPlaylists = ({
  limit,
  offset,
}: GetCurrentUserPlaylistsRequest) => {
  return useQuery({
    queryKey: ["current-user-playlists"],
    queryFn: () => {
      return getCurrentUserPlaylists({ limit, offset });
    },
  });
};
