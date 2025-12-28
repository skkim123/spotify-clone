import type {
  GetCurrentUserPlaylistsRequest,
  GetCurrentUserPlaylistsResponse,
} from "../models/playlist";
import api from "../utils/api";

const getCurrentUserPlaylists = async ({
  limit,
  offset,
}: GetCurrentUserPlaylistsRequest): Promise<GetCurrentUserPlaylistsResponse> => {
  try {
    const response = await api.get("/me/playlists", {
      params: {
        limit,
        offset,
      },
    });
    return response.data;
  } catch (error) {
    throw new Error("Failed to get current user playlists");
  }
};

export default getCurrentUserPlaylists;
