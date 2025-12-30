import type {
  GetCurrentUserPlaylistsRequest,
  GetCurrentUserPlaylistsResponse,
  GetPlaylistRequest,
  GetPlaylistResponse,
} from "../models/playlist";
import api from "../utils/api";

export const getCurrentUserPlaylists = async ({
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

export const getPlaylist = async ({
  playlist_id: playlistId,
  market,
  fieids,
  additional_types,
}: GetPlaylistRequest): Promise<GetPlaylistResponse> => {
  try {
    const response = await api.get(`/playlists/${playlistId}`, {
      params: {
        market,
        fieids,
        additional_types,
      },
    });
    return response.data;
  } catch (error) {
    throw new Error("Failed to get playlist");
  }
};
