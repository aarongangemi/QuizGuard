"use client";
import { QueryClient, QueryClientProvider } from "react-query";
import { QuizResultBase } from "./QuizResultBase";

const queryClient = new QueryClient();

export default function QuizResult() {
  return (
    <QueryClientProvider client={queryClient}>
      <QuizResultBase />
    </QueryClientProvider>
  );
}
