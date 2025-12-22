import { BookmarkAdd } from "@mui/icons-material";
import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import AddIcon from "@mui/icons-material/Add";
import { styled } from "@mui/material/styles";

const LibraryBox = styled(Box)({
  display: "flex",
  alignItems: "center",
  gap: "24px",
});

const PlusButton = styled(AddIcon)(({ theme }) => ({
  color: theme.palette.primary.main,
}));

const LibraryHead = () => {
  return (
    <LibraryBox>
      <BookmarkAdd />
      <Typography variant="h2" fontWeight={700}>
        Your Library
      </Typography>
      <PlusButton />
    </LibraryBox>
  );
};

export default LibraryHead;
