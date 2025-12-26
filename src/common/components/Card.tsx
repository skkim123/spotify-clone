import { Box, styled, Typography } from "@mui/material";
import PlayButton from "./PlayButton";

interface CardProps {
  name: string;
  image: string;
  artistName?: string;
}

const CardContainer = styled(Box)(({ theme }) => ({
  cursor: "pointer",
  "&:hover .play-button": {
    opacity: 1,
  },
  [theme.breakpoints.down("sm")]: {
    "& .play-button": {
      opacity: 1,
    },
  },
}));

const ImageWrapper = styled(Box)({
  position: "relative",
  marginBottom: 8,
});

const CardImage = styled("img")({
  width: "100%",
  borderRadius: 8,
});

const PlayButtonWrapper = styled(Box)({
  position: "absolute",
  right: 8,
  bottom: 8,
  opacity: 0,
});

const Title = styled(Typography)({
  fontWeight: 600,
});

const Subtitle = styled(Typography)(({ theme }) => ({
  fontSize: 14,
  color: theme.palette.text.secondary,
}));

const Card = ({ image, name, artistName }: CardProps) => {
  return (
    <CardContainer>
      <ImageWrapper>
        <CardImage src={image} alt={name} />
        <PlayButtonWrapper className="play-button">
          <PlayButton />
        </PlayButtonWrapper>
      </ImageWrapper>
      <Title>{name}</Title>
      {artistName && <Subtitle>{artistName}</Subtitle>}
    </CardContainer>
  );
};

export default Card;
