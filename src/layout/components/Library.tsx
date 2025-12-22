import LibraryHead from "./LibraryHead";
import EmptyPlaylist from "./EmptyPlaylist";
import styled from "@emotion/styled";

const LibraryBox = styled("div")({
  display: "flex",
  flexDirection: "column",
  gap: "20px",
});

const Library = () => {
  return (
    <LibraryBox>
      <LibraryHead />
      <EmptyPlaylist />
    </LibraryBox>
  );
};

export default Library;
