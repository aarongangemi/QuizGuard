import { Button, Paper, Stack, Typography } from "@mui/material";
import CircularProgress from "@mui/material/CircularProgress";
import { FC, useEffect, useState } from "react";
import { useQuery } from "react-query";
import { QuizQuestion } from "../components/QuizQuestion";
import { QuestionFooter } from "./QuestionFooter";
import HelpOutlineIcon from "@mui/icons-material/HelpOutline";
import { QuestionOption } from "./QuestionOption";
import { QuestionTimeline } from "./QuestionTimeline";
import { QuestionExplainer } from "./QuestionExplainer";

export const QuestionBase: FC = () => {
  const [selectedIndex, setSelectedIndex] = useState(-1);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [currentQuestion, setCurrentQuestion] = useState(1);
  const [openExplainer, setOpenExplainer] = useState(false);
  const { isLoading, data, refetch, error } = useQuery({
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

  useEffect(() => {
    if (isLoading && !data)
      setTimeout(() => {
        refetch();
      }, 1500);
  }, [isLoading, data]);

  if (isLoading && !data) {
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

  const handleSubmit = () => {
    setIsSubmitting(true);
    setTimeout(() => setOpenExplainer(true), 1500);
  };

  const handleExplainerConfirm = () => {
    setSelectedIndex(-1);
    setIsSubmitting(false);
    setOpenExplainer(false);
    setCurrentQuestion((v) => (v = v + 1));
  };

  const questionData = (data || []).find((x) => x.order === currentQuestion);

  if (!questionData || !!error) {
    return (
      <Stack
        width={"100vw"}
        height={"100vh"}
        justifyContent={"center"}
        alignItems={"center"}
        gap={2}
      >
        <Typography textAlign={"center"}>
          Something went wrong...
          <br />
          Refresh the page or try again later.
        </Typography>
        <Button variant="contained" onClick={() => window.location.reload()}>
          Refresh
        </Button>
      </Stack>
    );
  }

  return (
    <Stack
      alignItems={"center"}
      justifyContent={"center"}
      gap={2}
      height={"95vh"}
    >
      <Paper
        style={{
          background: "#d5d4d4be",
          borderRadius: 8,
          flex: 1,
          width: 800,
        }}
        elevation={6}
      >
        <Stack spacing={2} px={4} mt={3}>
          <QuestionTimeline
            steps={data!.map((_, x) => x)}
            activeStep={currentQuestion}
          />
          <Typography
            fontWeight={"bold"}
            width={"100%"}
            textAlign={"center"}
            color={"black"}
          >
            <Stack
              spacing={0}
              flexDirection={"row"}
              justifyContent={"center"}
              alignItems={"center"}
              mt={1}
            >
              <HelpOutlineIcon style={{ color: "black", marginRight: 8 }} />
              {questionData.order}.{questionData.text}
            </Stack>
          </Typography>
          <Stack spacing={2} pb={4}>
            {questionData.options?.map((x, i) => (
              <QuestionOption
                optionText={x.text}
                index={i + 1}
                isSelected={i + 1 === selectedIndex}
                onClick={() => {
                  if (selectedIndex === i + 1) {
                    setSelectedIndex(-1);
                    return;
                  }
                  setSelectedIndex(i + 1);
                }}
                isCorrect={x.isCorrect ?? false}
                isSubmitting={isSubmitting}
              />
            ))}
          </Stack>
          <QuestionFooter
            nextText="Submit Answer"
            onNext={handleSubmit}
            disabled={selectedIndex < 1}
          />
          <QuestionExplainer
            open={openExplainer}
            explainerText={questionData!.explainer}
            onExplainerConfirm={handleExplainerConfirm}
          />
        </Stack>
      </Paper>
    </Stack>
  );
};
