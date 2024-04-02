import { Stack, Button } from "@mui/material";
import { FC } from "react";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import { ArrowBack } from "@mui/icons-material";
import { useRouter } from "next/navigation";

interface Props {
  previousLink: string;
  previousText?: string;
  nextLink: string;
  nextText?: string;
  moduleCompletionKey: string;
}

export const ModuleButtonsFooter: FC<Props> = ({
  previousText = "Previous",
  previousLink,
  nextText = "Next",
  nextLink,
  moduleCompletionKey,
}) => {
  const router = useRouter();

  const handleModuleCompletion = () => {
    sessionStorage.setItem(moduleCompletionKey, "true");
    router.push(nextLink);
  };
  return (
    <Stack direction={"row"} justifyContent={"space-between"} width={"100%"}>
      <Button
        variant="outlined"
        style={{ color: "#f55a07", borderColor: "#f55a07" }}
        onClick={(e) => {
          e.preventDefault();
          router.push(previousLink);
        }}
      >
        <ArrowBack style={{ marginRight: 8 }} />
        <strong>{previousText}</strong>
      </Button>
      <Button
        variant="outlined"
        style={{ color: "#54da39", borderColor: "#54da39" }}
        onClick={(e) => {
          e.preventDefault();
          handleModuleCompletion();
        }}
      >
        <CheckCircleOutlineIcon style={{ marginRight: 8, maxHeight: 21 }} />
        <strong>{nextText}</strong>
      </Button>
    </Stack>
  );
};
