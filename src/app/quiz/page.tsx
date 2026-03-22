"use client";

import { useSearchParams, useRouter } from "next/navigation";
import { useState } from "react";
import quiz from "@/data/quiz.json";

import QuizHeader from "@/layouts/quiz-header";
import QuestionArea from "@/app/quiz/question-area";
import VisualArea from "@/app/quiz/visual-area";

export default function Quiz() {
  const searchParams = useSearchParams();
  const router = useRouter();

  const userName = searchParams.get("name") || "Guest";

  // --- QUIZ STATES ---
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selected, setSelected] = useState<number | null>(null);
  const [checked, setChecked] = useState(false);
  const [score, setScore] = useState(0); // New state for tracking correct answerss

  // Controls showing the intro image ONLY the first time the user enters
  const [hasCheckedOnce, setHasCheckedOnce] = useState(false);

  const q = quiz[currentIndex];
  const totalQuestions = quiz.length;

  // Check if it's the last question in the array
  const isLastQuestion = currentIndex === totalQuestions - 1;

  const handleCheck = () => {
    if (selected === null) return;

    // If the answer is correct, increment the score
    if (selected === q.correctIndex) {
      setScore((prev) => prev + 1);
    }

    setChecked(true);
    setHasCheckedOnce(true);
  };

  const handleNext = () => {
    if (isLastQuestion) {
      // Upon completion, send the score and total via URL parameters
      router.push(`/result?score=${score}&total=${totalQuestions}`);
      return;
    }

    // If not the last question, move to the next one and reset selection states
    setCurrentIndex((prev) => prev + 1);
    setSelected(null);
    setChecked(false);
  };

  return (
    <main className="w-full h-screen bg-[#0E0F0F]">
      {/* Header */}
      <QuizHeader userName={userName} />

      {/* Content */}
      <section className="w-full px-26">
        <div className="flex items-center justify-between gap-12">
          {/* Left: Question Area */}
          <div className="w-3xl">
            <QuestionArea
              q={q}
              currentIndex={currentIndex}
              total={totalQuestions}
              selected={selected}
              setSelected={setSelected}
              checked={checked}
              onCheck={handleCheck}
              onNext={handleNext}
              isLastQuestion={isLastQuestion}
            />
          </div>

          {/* Right: Visual Area */}
          <div className="flex-1 justify-center items-center">
            <VisualArea
              q={q}
              checked={checked}
              selected={selected}
              showIntroImage={!hasCheckedOnce}
            />
          </div>
        </div>
      </section>
    </main>
  );
}