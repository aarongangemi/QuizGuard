import { Paper, Stack, Typography } from "@mui/material";
import { FC, useEffect, useRef, useState } from "react";
import { useMutation, useQuery } from "react-query";
import { QuizOption, QuizQuestion } from "../components/QuizQuestion";
import { QuestionFooter } from "./QuestionFooter";
import { QuestionOption } from "./QuestionOption";
import { QuestionTimeline } from "./QuestionTimeline";
import { QuestionExplainer } from "./QuestionExplainer";
import { CurrentScore } from "./CurrentScore";
import { useRouter } from "next/navigation";
import { QuizUserModel } from "../components/QuizUserModel";
import { LoadingBase } from "../components/LoadingBase";
import { ErrorBase } from "../components/ErrorBase";

const ApiBase = "https://localhost:7237/api/questions";

export const QuestionBase: FC = () => {
  const [selectedIndex, setSelectedIndex] = useState(-1);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const currentQuestionRef = useRef(1);
  const [openExplainer, setOpenExplainer] = useState(false);
  const currentScore = useRef(0);
  const router = useRouter();
  const { isLoading, isFetching, data, refetch, error } = useQuery({
    queryKey: ["questionData"],
    queryFn: () => fetch(ApiBase).then((res) => res.json()),
    onSuccess: (response: QuizQuestion[]) => {
      if (!response?.length) return [];
      return response.map((x) => new QuizQuestion(x));
    },
    keepPreviousData: true,
    refetchOnWindowFocus: false,
    refetchOnMount: false,
  });

  const updateFinalScore = async () => {
    try {
      const id = sessionStorage.getItem("quiz-user-id");
      const response = await fetch(`${ApiBase}/update-score`, {
        method: "PUT",
        body: JSON.stringify({ currentScore: currentScore.current, id }),
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (!response.ok) {
        throw new Error("Failed to update score");
      }
      return response.json().then((x) => new QuizUserModel(x));
    } catch (error) {
      throw error;
    }
  };

  const { mutateAsync: updateResultAsync, isLoading: isUpdating } =
    useMutation(updateFinalScore);

  useEffect(() => {
    if (isLoading && !data)
      setTimeout(() => {
        refetch();
      }, 1500);
  }, [isLoading, data]);

  if ((isFetching || isLoading) && !data) {
    return <LoadingBase text="We're getting things ready for you..." />;
  }

  const questionData = (data || []).find(
    (x) => x.order === currentQuestionRef.current
  );

  const handleSubmit = (selectionOption: QuizOption) => {
    setIsSubmitting(true);
    if (selectionOption?.isCorrect) {
      currentScore.current += 100;
    } else {
      currentScore.current -= 100;
    }
    setTimeout(() => setOpenExplainer(true), 1500);
  };

  const handleExplainerConfirm = async () => {
    currentQuestionRef.current++;
    if (questionData?.order === data?.length) {
      const response = await updateResultAsync();
      if (!!response && response.userId !== -1) {
        sessionStorage.setItem("quiz-user-id", response.userId?.toString());
      }
      router.push("/quiz-result");
      return;
    }
    setSelectedIndex(-1);
    setIsSubmitting(false);
    setOpenExplainer(false);
  };

  if (!!error) {
    return <ErrorBase />;
  }

  if (
    isUpdating ||
    (!questionData && currentQuestionRef.current >= data!.length)
  ) {
    return (
      <LoadingBase text="Congratulations on finishing the quiz! We're processing your result." />
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
        <Stack spacing={2} px={4} mt={3} pb={2}>
          <Stack flexDirection={"row"} gap={2} justifyContent={"space-between"}>
            <QuestionTimeline
              steps={data!.map((_, x) => x)}
              activeStep={currentQuestionRef.current}
            />
            <CurrentScore currentScore={currentScore.current} />
          </Stack>
          <Typography
            fontWeight={"bold"}
            width={"100%"}
            textAlign={"center"}
            color={"black"}
            pt={2}
          >
            {questionData!.order}.{questionData!.text}
          </Typography>
          <Stack spacing={2} pb={4}>
            {questionData!.options?.map((x, i) => (
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
            onNext={() =>
              handleSubmit(questionData!.options?.[selectedIndex - 1])
            }
            disabled={selectedIndex < 1 || isSubmitting}
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
