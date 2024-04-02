import { Box, Stack, Typography } from "@mui/material";
import CircularProgress from "@mui/material/CircularProgress";
import { FC, useState } from "react";
import { useQuery, useQueryClient } from "react-query";
import { QuizQuestion } from "../components/QuizQuestion";

interface Props {}

export const QuestionBase: FC<Props> = () => {
  const queryClient = useQueryClient();
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
  console.log(data);

  return <h1>HELLO</h1>;
};