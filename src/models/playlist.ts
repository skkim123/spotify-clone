import type { ApiResponse } from "./apiResponse";
import type { ExternalUrls, Owner } from "./commonType";
import type { Image } from "./commonType";

export interface GetCurrentUserPlaylistsRequest {
  limit?: number;
  offset?: number;
}

// interface 못 씀
export type GetCurrentUserPlaylistsResponse = ApiResponse<SimplifiedPlaylist[]>;

export interface SimplifiedPlaylist {
  collaborative?: boolean;
  description?: string;
  external_urls?: ExternalUrls;
  href?: string;
  id?: string;
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
