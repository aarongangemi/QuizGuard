import Button from "@mui/material/Button";
import { FC } from "react";

interface Props {
  onNext: () => void;
  nextText: string;
  disabled?: boolean;
}

export const QuestionFooter: FC<Props> = ({ nextText, onNext, disabled }) => {
  return (
    <Button
      variant="contained"
      style={{ backgroundColor: !disabled ? "#0b6bcb" : undefined }}
      onClick={(e) => {
        e.preventDefault();
        onNext();
      }}
      disabled={disabled}
    >
      <strong>{nextText}</strong>
    </Button>
  );
};
