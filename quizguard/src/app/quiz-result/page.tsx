"use client";

import { Stack, Paper, Button } from "@mui/material";
import { ResultCard } from "./ResultCard";
import { useRouter } from "next/navigation";

export default function QuizQuestion() {
  const router = useRouter();

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
            <ResultCard label="Your score" score={0} ranking={1} />
            <ResultCard label="Highest score" score={0} ranking={4} />
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
}
