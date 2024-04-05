import { Paper, Typography } from "@mui/material";
import { FC } from "react";
import classes from "./QuestionOption.module.css";

interface Props {
  optionText: string;
  index: number;
  onClick: () => void;
  isSelected: boolean;
  isSubmitting: boolean;
  isCorrect: boolean;
}

export const QuestionOption: FC<Props> = ({
  optionText,
  index,
  isSelected,
  onClick,
  isSubmitting,
  isCorrect,
}) => {
  function getAlphabetLetter(): string {
    if (index < 1 || index > 26) {
      throw new Error(
        "Index out of range. Please provide an index between 1 and 26."
      );
    }

    return String.fromCharCode(64 + index)?.toLocaleLowerCase();
  }

  return (
    <Paper
      elevation={4}
      className={classes.root}
      data-selected={isSelected}
      data-is-submitting={isSubmitting}
      data-is-correct={isCorrect}
      onClick={onClick}
    >
      <Typography height={"100%"} p={1.75}>
        {`${getAlphabetLetter()}) ${optionText}`}
      </Typography>
    </Paper>
  );
};
