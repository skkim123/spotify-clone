import { TableCell, TableRow } from "@mui/material";
import type { PlaylistTrack } from "../../../models/playlist";
import type { Episode, Track } from "../../../models/track";

interface DesktopPlaylistItemProps {
  item: PlaylistTrack;
  index: number;
}

const DesktopPlaylistItem = ({ item, index }: DesktopPlaylistItemProps) => {
  const isEpisode = (track: Track | Episode): track is Episode => {
    return "description" in track;
  };

  return (
    <TableRow>
      <TableCell>{index}</TableCell>
      <TableCell>{item.track.name || "no name"}</TableCell>
      <TableCell>
        {isEpisode(item.track) ? "N/A" : item.track.album?.name ?? "no album"}
      </TableCell>
      <TableCell>{item.added_at ?? "unknown"}</TableCell>
      <TableCell>{item.track.duration_ms ?? "unknown"}</TableCell>
    </TableRow>
  );
};

export default DesktopPlaylistItem;
