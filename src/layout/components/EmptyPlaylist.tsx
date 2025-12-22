import { Box, Button, styled, Typography } from "@mui/material";

const EmptyPlaylistBox = styled(Box)({
  backgroundColor: "#242424",
  borderRadius: "8px",
  padding: "20px",
  display: "flex",
  flexDirection: "column",
  gap: "16px",
});

const CreatePlaylistButton = styled(Button)(({ theme }) => ({
  backgroundColor: theme.palette.secondary.main,
  color: "black",
}));

const EmptyPlaylist = () => {
  return (
    <EmptyPlaylistBox>
      <div>
        <Typography variant="h2" fontWeight={700}>
          Create your first playlist
        </Typography>
        <Typography variant="body1" fontWeight={400}>
          It's easy, we'll help you
        </Typography>
      </div>
      <CreatePlaylistButton variant="contained">
        <Typography variant="body1" fontWeight={700}>
          Create playlist
        </Typography>
      </CreatePlaylistButton>
    </EmptyPlaylistBox>
  );
};

export default EmptyPlaylist;

// Create your first playlist
// It's easy, we'll help you
