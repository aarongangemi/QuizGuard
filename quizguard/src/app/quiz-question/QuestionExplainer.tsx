import { Button, Modal, Stack, Typography } from "@mui/material";
import { FC } from "react";

interface Props {
  open: boolean;
  explainerText: string;
  onExplainerConfirm: () => void;
}

const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  boxShadow: 24,
  p: 4,
  borderRadius: 4,
};

export const QuestionExplainer: FC<Props> = ({
  open,
  explainerText,
  onExplainerConfirm,
}) => {
  return (
    <Modal open={open}>
      <Stack sx={style}>
        <Typography variant="h5">Explanation</Typography>
        <Typography textAlign={"left"} py={3}>
          {explainerText}
        </Typography>
        <Button
          variant="contained"
          color="primary"
          onClick={onExplainerConfirm}
        >
          Next Question
        </Button>
      </Stack>
    </Modal>
  );
};
