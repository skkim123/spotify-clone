import LibraryHead from "./LibraryHead";
import EmptyPlaylist from "./EmptyPlaylist";
import { Box, Typography, styled } from "@mui/material";
import { useGetCurrentUserPlaylists } from "../../hooks/useGetCurrentUserPlaylists";
import type { SimplifiedPlaylist } from "../../models/playlist";
import { useInView } from "react-intersection-observer";
import { useEffect, useState, useRef } from "react";
import LoadingSpinner from "../../common/components/LoadingSpinner";
import { useNavigate } from "react-router";

const LibraryBox = styled(Box)({
  display: "flex",
  flexDirection: "column",
  gap: "20px",
});

const PlaylistContainer = styled(Box)({
  display: "flex",
  flexDirection: "column",
  gap: "4px",
  overflowY: "auto",
  maxHeight: "calc(100vh - 300px)",
  scrollbarWidth: "none", // Firefox
  msOverflowStyle: "none", // IE
  "&::-webkit-scrollbar": {
    display: "none", // Chrome, Safari, Edge
  },
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

interface PlaylistProps {
  playlist: SimplifiedPlaylist;
  handleClick: (id: string) => void;
}

const Playlist = ({ playlist, handleClick }: PlaylistProps) => {
  return (
    <PlaylistItem onClick={() => handleClick(playlist.id)}>
      {playlist.images && playlist.images.length > 0 ? (
        <PlaylistImage src={playlist.images[0].url} alt={playlist.name} />
      ) : (
        <NoImageBox>
          <Typography variant="caption" color="grey">
            No image
          </Typography>
        </NoImageBox>
      )}
      <PlaylistInfo>
        <Typography variant="body1" fontWeight={400} sx={{ color: "white" }}>
          {playlist.name}
        </Typography>
        <Typography variant="body2" noWrap sx={{ color: "grey" }}>
          Playlist • {playlist.owner?.display_name}
        </Typography>
      </PlaylistInfo>
    </PlaylistItem>
  );
};

const Library = () => {
  const [container, setContainer] = useState<HTMLDivElement | null>(null);
  const { data, hasNextPage, isFetchingNextPage, fetchNextPage } =
    useGetCurrentUserPlaylists({
      limit: 10,
    });
  const { ref, inView } = useInView({
    root: container,
  });
  const prevInView = useRef(false);

  const userPlaylistExists = !!data && data?.pages[0].items.length > 0;

  useEffect(() => {
    // inView가 false → true로 변할 때만 fetch
    if (inView && !prevInView.current && hasNextPage && !isFetchingNextPage) {
      fetchNextPage();
    }
    prevInView.current = inView;
  }, [inView, hasNextPage, isFetchingNextPage, fetchNextPage]);

  const navigate = useNavigate();

  const handleClick = (id: string) => {
    navigate(`/playlist/${id}`);
  };

  return (
    <LibraryBox>
      <LibraryHead />
      {userPlaylistExists ? (
        <PlaylistContainer ref={setContainer}>
          {data.pages
            .flatMap((page) => page.items)
            .map((playlist) => (
              <Playlist
                key={playlist.id}
                playlist={playlist}
                handleClick={() => handleClick(playlist.id)}
              />
            ))}
          <div ref={ref}>
            {isFetchingNextPage ? (
              <LoadingSpinner />
            ) : (
              <div style={{ height: "1px", backgroundColor: "black" }}></div>
            )}
          </div>
        </PlaylistContainer>
      ) : (
        <EmptyPlaylist />
      )}
    </LibraryBox>
  );
};

export default Library;
