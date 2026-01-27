"use client";

import { useSearchParams } from "next/navigation";
import QuizHeader from "@/layouts/quiz-header";
import QuestionArea from "@/app/quiz/question-area";
import VisualArea from "@/app/quiz/visual-area";

export default function Quiz() {
  const searchParams = useSearchParams();
  const userName = searchParams.get("name") || "Guest";

  return (
    <main className="w-full min-h-screen bg-[#0E0F0F]">
      
      {/* Header */}
      <QuizHeader userName={userName} />

      {/* Page content */}
      <section className="flex">
        <QuestionArea />
        <VisualArea />
      </section>

    </main>
  );
}
