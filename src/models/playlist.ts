import type { ApiResponse } from "./apiResponse";
import type {
  ExternalUrls,
  Followers,
  Image,
  Owner,
  Restriction,
} from "./commonType";
import type { Artist } from "./artist";
import type { SimplifiedAlbum } from "./album";
import type { Episode, Track } from "./track";

export interface GetCurrentUserPlaylistsRequest {
  limit?: number;
  offset?: number;
}

// interface 못 씀
export type GetCurrentUserPlaylistsResponse = ApiResponse<SimplifiedPlaylist>;

export interface SimplifiedPlaylist {
  collaborative?: boolean;
  description?: string;
  external_urls?: ExternalUrls;
  href?: string;
  id: string;
  images?: Image[];
  name?: string;
  owner?: Owner;
  public?: boolean;
  tracks?: {
    href?: string;
    total?: number;
  };
  type?: string;
  uri?: string;
}

export interface GetPlaylistRequest {
  playlist_id: string;
  market?: string;
  fieids?: string;
  additional_types?: string;
}

export interface GetPlaylistResponse {
  collaborative: boolean;
  description: string | null;
  external_urls: ExternalUrls;
  followers: Followers;
  href: string;
  id: string;
  images: Image[];
  name: string;
  owner: Owner;
  public: boolean | null;
  snapshot_id: string;
  tracks: PlaylistTracks;
  type: string;
  uri: string;
}

export interface PlaylistTracks {
  href: string;
  limit: number;
  next: string | null;
  offset: number;
  previous: string | null;
  total: number;
  items: PlaylistTrackItem[];
}

export interface PlaylistTrackItem {
  added_at: string;
  added_by: Owner;
  is_local: boolean;
  track: Track;
}

export interface GetPlaylistItemsRequest extends GetPlaylistRequest {
  offset?: number;
  limit?: number;
}

export interface PlaylistTrack {
  added_at?: string | null;
  added_by?: {
    external_urls: ExternalUrls;
    followers?: Followers;
    href?: string;
    id: string;
    type?: string;
    uri?: string;
  } | null;
  is_local: boolean;
  track: Track | Episode;
}

export type GetPlaylistItemsResponse = ApiResponse<PlaylistTrack>;
