import Button from "@mui/material/Button";
import { FC } from "react";

interface Props {
  onNext: () => void;
  nextText: string;
}

export const QuestionFooter: FC<Props> = ({ nextText, onNext }) => {
  return (
    <Button
      variant="contained"
      style={{ backgroundColor: "#006400" }}
      onClick={(e) => {
        e.preventDefault();
        onNext();
      }}
    >
      <strong>{nextText}</strong>
    </Button>
  );
};
