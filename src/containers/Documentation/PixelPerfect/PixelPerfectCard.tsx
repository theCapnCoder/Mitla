import { FC, useState } from "react";
import {
  Card,
  CardMedia,
  Paper,
  styled,
} from "@mui/material";
import { Card as TCard } from "./pixelPerfectData";

const CardPaper = styled(Paper)({
  width: "200px",
  height: "200px",
  cursor: "pointer",
  backgroundColor: "#FAFAFA",
  borderRadius: "6px",
});

type Props = TCard;

export const PixelPerfectCard: FC<Props> = ({ img }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const handleClick = () => {
    setIsExpanded(!isExpanded);
  };

  const position = isExpanded
    ? {
        position: "fixed",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
      }
    : {};

  return (
    <CardPaper>
      <Card onClick={handleClick}>
        <CardMedia
          component="img"
          alt="Card Image"
          height={isExpanded ? "1000" : "200"}
          width={isExpanded ? "1000" : "200"}
          sx={{ position }}
          image={img}
        />
      </Card>
    </CardPaper>
  );
};
