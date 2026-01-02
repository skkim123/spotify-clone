import useGetPlaylist from "../../hooks/useGetPlaylist";
import { Navigate, useParams } from "react-router";
import {
  Box,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Typography,
  styled,
} from "@mui/material";
import useGetPlaylistItems from "../../hooks/useGetPlaylistItems";
import DesktopPlaylistItem from "./components/DesktopPlaylistItem";
import { PAGE_LIMIT } from "../../configs/commonConfig";

const HeaderContainer = styled(Box)({
  display: "flex",
  alignItems: "flex-end",
  gap: "24px",
  padding: "24px",
});

const PlaylistImage = styled("img")({
  width: "192px",
  height: "192px",
  borderRadius: "25%",
});

const NoImageBox = styled(Box)({
  width: "192px",
  height: "192px",
  borderRadius: "4px",
  backgroundColor: "#282828",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
});

const PlaylistDetailPage = () => {
  const { id } = useParams<{ id: string }>();
  if (!id) return <Navigate to="/" />;
  const { data: playlist } = useGetPlaylist({ playlist_id: id });
  const {
    data: playlistItems,
    isLoading: isPlaylistItemsLoading,
    error: playlistItemsLoading,
    hasNextPage,
    fetchNextPage,
    isFetchingNextPage,
  } = useGetPlaylistItems({ playlist_id: id, limit: PAGE_LIMIT });

  console.log("playlistItems", playlistItems);

  if (!playlist) return null;

  return (
    <Box>
      <HeaderContainer>
        {playlist.images && playlist.images.length > 0 ? (
          <PlaylistImage src={playlist.images[0].url} alt={playlist.name} />
        ) : (
          <NoImageBox>
            <Typography color="grey">No Image</Typography>
          </NoImageBox>
        )}
        <Box>
          <Typography
            variant="h3"
            fontWeight={700}
            sx={{ color: "white", marginBottom: "8px" }}
          >
            {playlist.name}
          </Typography>
          <Typography variant="body2" sx={{ color: "#b3b3b3" }}>
            {playlist.owner?.display_name} {playlist.tracks?.total || 0} songs
          </Typography>
        </Box>
      </HeaderContainer>
      {playlist.tracks?.total === 0 ? (
        <Typography>Search for songs</Typography>
      ) : (
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>#</TableCell>
              <TableCell>Title</TableCell>
              <TableCell>Album</TableCell>
              <TableCell>Date Added</TableCell>
              <TableCell>Duration</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {playlistItems?.pages.map((page, pageIndex) =>
              page.items.map((item, index) => (
                <DesktopPlaylistItem
                  key={index}
                  item={item}
                  index={pageIndex * PAGE_LIMIT + index + 1}
                />
              ))
            )}
          </TableBody>
        </Table>
      )}
    </Box>
  );
};

export default PlaylistDetailPage;
