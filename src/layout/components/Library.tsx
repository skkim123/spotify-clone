import LibraryHead from "./LibraryHead";
import EmptyPlaylist from "./EmptyPlaylist";
import styled from "@emotion/styled";
import { useGetCurrentUserPlaylists } from "../../hooks/useGetCurrentUserPlaylists";

const LibraryBox = styled("div")({
  display: "flex",
  flexDirection: "column",
  gap: "20px",
});

const Library = () => {
  const { data } = useGetCurrentUserPlaylists({
    limit: 10,
    offset: 0,
  });

  return (
    <LibraryBox>
      <LibraryHead />
      <EmptyPlaylist />
    </LibraryBox>
  );
};

export default Library;
