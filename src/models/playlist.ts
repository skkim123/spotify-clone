import type { ApiResponse } from "./apiResponse";
import type { ExternalUrls, Followers, Image, Owner } from "./commonType";
import type { Artist } from "./artist";
import type { SimplifiedAlbum } from "./album";

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

export interface Track {
  album: SimplifiedAlbum;
  artists: Artist[];
  available_markets: string[];
  disc_number: number;
  duration_ms: number;
  explicit: boolean;
  external_ids: ExternalIds;
  external_urls: ExternalUrls;
  href: string;
  id: string;
  is_playable?: boolean;
  name: string;
  popularity: number;
  preview_url: string | null;
  track_number: number;
  type: string;
  uri: string;
  is_local: boolean;
}

export interface ExternalIds {
  isrc?: string;
  ean?: string;
  upc?: string;
}
