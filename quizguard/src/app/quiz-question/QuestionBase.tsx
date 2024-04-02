import { Alert, Box, Paper, Stack, Typography } from "@mui/material";
import CircularProgress from "@mui/material/CircularProgress";
import { FC, useState } from "react";
import { useQuery, useQueryClient } from "react-query";
import { QuizQuestion } from "../components/QuizQuestion";
import { QuestionFooter } from "./QuestionFooter";
import HelpOutlineIcon from "@mui/icons-material/HelpOutline";

interface Props {}

export const QuestionBase: FC<Props> = () => {
  const queryClient = useQueryClient();
  const [currentQuestion, setCurrentQuestion] = useState(1);
  const { isLoading, error, data } = useQuery({
    queryKey: ["questionData"],
    queryFn: () =>
      fetch("https://localhost:7237/api/Questions").then((res) => res.json()),
    onSuccess: (response: QuizQuestion[]) => {
      if (!response?.length) return [];
      return response.map((x) => new QuizQuestion(x));
    },
    keepPreviousData: true,
    refetchOnWindowFocus: false,
    refetchOnMount: false,
  });

  if (isLoading || !data) {
    return (
      <Stack
        width={"100vw"}
        height={"100vh"}
        justifyContent={"center"}
        alignItems={"center"}
        gap={2}
      >
        <CircularProgress color="inherit" />
        <Typography>We're getting things ready...</Typography>
      </Stack>
    );
  }

  const questionData = data.find((x) => x.order === currentQuestion);

  return (
    <Stack
      alignItems={"center"}
      justifyContent={"center"}
      gap={2}
      height={"95vh"}
    >
      <Alert
        style={{
          background: "#d5d4d4be",
          borderRadius: 8,
          flex: 1,
        }}
        icon={<HelpOutlineIcon style={{ color: "black" }} />}
      >
        <Typography
          fontWeight={"bold"}
          width={"100%"}
          style={{ flex: 1 }}
          flex={"1"}
          textAlign={"center"}
        >
          {questionData?.order}.{questionData?.text}
        </Typography>
      </Alert>
      <QuestionFooter
        nextText="Submit Question"
        onNext={() => setCurrentQuestion((v) => (v = v + 1))}
      />
    </Stack>
  );
};
