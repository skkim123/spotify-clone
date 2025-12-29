import { useInfiniteQuery } from "@tanstack/react-query";
import getCurrentUserPlaylists from "../apis/playlistApi";
import type { GetCurrentUserPlaylistsRequest } from "../models/playlist";

export const useGetCurrentUserPlaylists = ({
  limit,
}: GetCurrentUserPlaylistsRequest) => {
  return useInfiniteQuery({
    queryKey: ["current-user-playlists"],
    queryFn: ({ pageParam = 0 }) => {
      return getCurrentUserPlaylists({ limit, offset: pageParam });
    },
    initialPageParam: 0,
    // getNextPageParam의 리턴값이 queryFn의 pageParam으로 전달됨 !!! 오호
    getNextPageParam: (lastPage) => {
      if (lastPage.next) {
        const url = new URL(lastPage.next);
        const nextOffset = url.searchParams.get("offset");
        return nextOffset ? parseInt(nextOffset) : undefined;
      }
    },
  });
};
