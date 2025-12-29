import { Box, Typography, styled } from "@mui/material";
import { useGetCurrentUserPlaylists } from "../../hooks/useGetCurrentUserPlaylists";

const PlaylistContainer = styled(Box)({
  display: "flex",
  flexDirection: "column",
  gap: "4px",
  overflowY: "auto",
  maxHeight: "calc(100vh - 300px)",
});

const PlaylistItem = styled(Box)({
  display: "flex",
  alignItems: "center",
  gap: "12px",
  padding: "8px",
  borderRadius: "8px",
  cursor: "pointer",
});

const PlaylistImage = styled("img")({
  width: "48px",
  height: "48px",
  borderRadius: "4px",
});

const NoImageBox = styled(Box)({
  width: "48px",
  height: "48px",
  borderRadius: "4px",
  backgroundColor: "#282828",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
});

const PlaylistInfo = styled(Box)({
  display: "flex",
  flexDirection: "column",
  gap: "2px",
  overflow: "hidden",
});

const UserPlaylist = () => {
  const { data } = useGetCurrentUserPlaylists({
    limit: 10,
    offset: 0,
  });

  if (!data || data.items.length === 0) {
    return null;
  }

  return (
    <PlaylistContainer>
      {data.items.map((playlist) => (
        <PlaylistItem key={playlist.id}>
          {playlist.images && playlist.images.length > 0 ? (
            <PlaylistImage src={playlist.images[0].url} alt={playlist.name} />
          ) : (
            <NoImageBox>
              <Typography variant="caption" color="grey.500">
                No image
              </Typography>
            </NoImageBox>
          )}
          <PlaylistInfo>
            <Typography
              variant="body1"
              fontWeight={400}
              noWrap
              sx={{ color: "white" }}
            >
              {playlist.name}
            </Typography>
            <Typography variant="body2" noWrap sx={{ color: "grey.500" }}>
              Playlist • {playlist.owner?.display_name}
            </Typography>
          </PlaylistInfo>
        </PlaylistItem>
      ))}
    </PlaylistContainer>
  );
};

export default UserPlaylist;
