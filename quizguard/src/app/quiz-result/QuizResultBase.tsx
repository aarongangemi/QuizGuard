"use client";

import { Stack, Paper, Button } from "@mui/material";
import { ResultCard } from "./ResultCard";
import { useRouter } from "next/navigation";
import { useQuery } from "react-query";
import { QuizResult } from "../components/QuizResult";
import { LoadingBase } from "../components/LoadingBase";
import { ErrorBase } from "../components/ErrorBase";
import { FC } from "react";

export const QuizResultBase: FC = () => {
  const router = useRouter();
  const userId = sessionStorage.getItem("quiz-user-id");
  const { isFetching, isLoading, data, error } = useQuery({
    queryKey: ["questionData"],
    queryFn: () =>
      fetch(`https://localhost:7237/api/result/${userId}`).then((res) =>
        res.json()
      ),
    onSuccess: (response: QuizResult) => {
      if (!response) {
        router.push("/quiz-cover");
        return;
      }
      return new QuizResult(response);
    },
    onError: () => router.push("/quiz-cover"),
    refetchOnWindowFocus: false,
  });

  if (!userId) {
    router.push("/quiz-cover");
    return;
  }

  if (isFetching || isLoading) {
    return (
      <LoadingBase text="Congratulations on finishing the quiz! We're processing your result." />
    );
  }

  if (!!error) {
    return <ErrorBase />;
  }

  return (
    <Stack
      height={"95vh"}
      justifyContent={"center"}
      alignItems={"center"}
      gap={2}
    >
      <Paper
        style={{
          background: "#d5d4d4be",
          borderRadius: 6,
          width: 800,
          height: "80%",
        }}
        elevation={6}
      >
        <Stack height={"100%"} px={8} spacing={2} justifyContent={"center"}>
          <Stack
            flexDirection={"row"}
            justifyContent={"space-between"}
            alignItems={"center"}
          >
            <ResultCard
              label="Your score"
              score={data!.score}
              ranking={data!.ranking}
              showTrophy={
                data?.score === data?.highestScore && data?.ranking == 1
              }
            />
            <ResultCard
              label="Highest score"
              score={data!.highestScore}
              ranking={1}
              showTrophy={data?.score === data?.highestScore}
            />
          </Stack>
          <Button variant="contained" onClick={() => router.push("quiz-cover")}>
            Play again
          </Button>
          <Button variant="contained" onClick={() => router.push("/")}>
            Back to modules
          </Button>
        </Stack>
      </Paper>
    </Stack>
  );
};
