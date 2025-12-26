// export interface GetNewReleasesResponse {
//   albums: {
//     href: string;
//     limit: number;
//     next: string;
//     offset: number;
//     previous: string | null;
//     total: number;
//     items: {
//       album_type: string;
//       total_tracks: number;
//       available_markets: string[];
//       external_urls: {
//         spotify?: string;
//       };
//       href: string;
//       id: string;
//       images: {
//         url: string;
//         height: number | null;
//         width: number | null;
//       }[];
//       name: string;
//       release_date: string;
//       release_date_precision: string;
//       restrictions?: {
//         reason?: string;
//       };
//       type: string;
//       uri: string;
//       artists: {
//         external_urls?: {
//           spotify?: string;
//         };
//         href?: string;
//         id?: string;
//         name?: string;
//         type?: string;
//         uri?: string;
//       }[];
//     }[];
//   };
// }

import type { Artist } from "./artist";
import type { ExternalUrls, Image, Restriction } from "./commonType";

export interface GetNewReleasesResponse {
  albums: {
    href: string;
    limit: number;
    next: string;
    offset: number;
    previous: string | null;
    total: number;
    items: SimplifiedAlbum[];
  };
}

export interface SimplifiedAlbum {
  album_type: string;
  total_tracks: number;
  available_markets: string[];
  external_urls: ExternalUrls;
  href: string;
  id: string;
  images: Image[];
  name: string;
  release_date: string;
  release_date_precision: string;
  restrictions?: Restriction;
  type: string;
  uri: string;
  artists: Artist[];
}
