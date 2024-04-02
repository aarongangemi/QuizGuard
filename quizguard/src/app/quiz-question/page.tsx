"use client";
import { QueryClient, QueryClientProvider } from "react-query";
import { isQuizUnlocked } from "../components/QuizFunctions";
import { useRouter } from "next/navigation";
import { QuestionBase } from "./QuestionBase";

const queryClient = new QueryClient();

export default function QuizQuestion() {
  const router = useRouter();
  if (!isQuizUnlocked()) {
    router.push("/");
    return;
  }

  return (
    <QueryClientProvider client={queryClient}>
      <QuestionBase />
    </QueryClientProvider>
  );
}
