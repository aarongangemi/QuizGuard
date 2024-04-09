import { Stack, Typography } from "@mui/material";
import { FC } from "react";
import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";

interface Props {
  label: string;
  score: number;
  ranking: number;
}

const getRankingLabel = (ranking: number) => {
  switch (ranking) {
    case 1:
      return "1st";
    case 2:
      return "2nd";
    case 3:
      return "3rd";
    default:
      return `${ranking}th`;
  }
};

export const ResultCard: FC<Props> = ({ label, score, ranking }) => {
  return (
    <Stack
      width={300}
      height={300}
      borderRadius={4}
      sx={{ backgroundColor: "#5ced73", color: "#3a3b3c" }}
      justifyContent={"center"}
      alignItems={"center"}
      spacing={4}
    >
      <Typography variant="h4">{label}</Typography>
      <Stack flexDirection={"row"} gap={2} alignItems={"center"}>
        <Typography variant="h6" fontWeight={"bold"}>
          {score.toLocaleString()}pts
        </Typography>
        <FiberManualRecordIcon sx={{ maxHeight: 12, maxWidth: 12 }} />
        <Typography variant="h6" fontWeight={"bold"}>{`(${getRankingLabel(
          ranking
        )} place)`}</Typography>
      </Stack>
    </Stack>
  );
};
