import { Button, Drawer, Paper, Stack, Typography } from "@mui/material";
import { FC } from "react";

interface Props {
  open: boolean;
  explainerText: string;
  onExplainerConfirm: () => void;
}

export const QuestionExplainer: FC<Props> = ({
  open,
  explainerText,
  onExplainerConfirm,
}) => {
  return (
    <Drawer open={open} anchor={"top"}>
      <Paper sx={{ minHeight: 300, background: "#ADD8E6" }}>
        <Typography textAlign={"left"} p={3}>
          {explainerText}
        </Typography>
        <Button
          variant="contained"
          color="primary"
          onClick={onExplainerConfirm}
          sx={{
            position: "absolute",
            bottom: 16,
            right: 16,
          }}
        >
          Next Question
        </Button>
      </Paper>
    </Drawer>
  );
};
