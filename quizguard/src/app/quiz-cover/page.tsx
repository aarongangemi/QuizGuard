"use client";
import { Alert, Button, Checkbox, Stack, Typography } from "@mui/material";
import { PageBase } from "../components/PageBase";
import Image from "next/image";
import Logo from "../../../public/LogoSymbol.png";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { isQuizUnlocked } from "../components/QuizFunctions";

export default function QuizCover() {
  const [checked, setChecked] = useState(false);
  const router = useRouter();
  if (!isQuizUnlocked()) {
    router.push("/");
    return;
  }
  return (
    <PageBase>
      <Stack
        alignItems={"center"}
        justifyContent={"center"}
        height={"100%"}
        gap={4}
      >
        <Alert
          severity="info"
          style={{
            maxWidth: 750,
            background: "#d5d4d4be",
            borderRadius: 8,
            padding: "4px 16px 0px",
          }}
          icon={
            <Stack
              height={"100%"}
              alignItems={"center"}
              justifyContent={"center"}
            >
              <Image src={Logo} alt="Logo" style={{ borderRadius: 12 }} />
            </Stack>
          }
        >
          <Stack gap={2}>
            <Typography variant={"subtitle1"}>
              Welcome to the Cybersecurity Awareness Quiz! You're about to
              embark on a journey to test your knowledge on essential
              cybersecurity concepts and incident response. Please note that
              once you begin the quiz, leaving the browser or refreshing the
              page will result in the loss of your current progress, so make
              sure to complete it in one session. By proceeding, you agree to
              have your quiz score tracked for evaluation purposes. Are you
              ready to begin? Click "Start Quiz" to dive into the world of
              cybersecurity!
            </Typography>
            <Stack flexDirection={"row"} alignItems={"center"}>
              <Checkbox
                onChange={(_, v) => setChecked(v)}
                checked={checked}
                color="success"
              />
              <Typography
                variant={"subtitle1"}
                fontWeight={"bold"}
                onClick={() => setChecked((v) => !v)}
                style={{ cursor: "pointer" }}
              >
                I allow QuizGuard to track my score and progress and understand
                the above statement
              </Typography>
            </Stack>
          </Stack>
        </Alert>
        <Button
          disabled={!checked}
          color="success"
          variant={"contained"}
          style={{ marginTop: 16, width: 250 }}
          onClick={() => router.push("/quiz-question")}
        >
          Start Quiz
        </Button>
      </Stack>
    </PageBase>
  );
}
