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

  const [currentIndex, setCurrentIndex] = useState(0);
  const [selected, setSelected] = useState<number | null>(null);
  const [checked, setChecked] = useState(false);

  // show image ONLY the first time user enters
  const [hasCheckedOnce, setHasCheckedOnce] = useState(false);

  const q = quiz[currentIndex];

  // detect last question (used to change the button text)
  const isLastQuestion = currentIndex === quiz.length - 1;

  const handleCheck = () => {
    if (selected === null) return;
    setChecked(true);
    setHasCheckedOnce(true);
  };

  const handleNext = () => {
    // If we're on the last question, go to results page
    if (isLastQuestion) {
      router.push("/result");
      return;
    }

    // Otherwise, move to next question
    setCurrentIndex((prev) => prev + 1);
    setSelected(null);
    setChecked(false);
  };


  return (
    <main className="w-full h-screen bg-[#0E0F0F] ">
      {/* Header */}
      <QuizHeader userName={userName} />

      {/* Content */}
      <section className="w-full px-26">
        <div className="flex items-center justify-between gap-12 ">
          {/* Left */}
          <div className="w-3xl">
            <QuestionArea
              q={q}
              currentIndex={currentIndex}
              total={quiz.length}
              selected={selected}
              setSelected={setSelected}
              checked={checked}
              onCheck={handleCheck}
              onNext={handleNext}
              isLastQuestion={isLastQuestion}  
            />
          </div>

          {/* Right */}
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