
import QuizHeader from "@/layouts/quiz-header";
import QuestionArea from "@/app/quiz/question-area";
import VisualArea from "@/app/quiz/visual-area";
export default function Quiz() {
  return (
    <main className="w-full min-h-screen bg-[#0E0F0F]">
      
      {/* Header */}
      <QuizHeader />

      {/* Page content */}
      <section className="flex">
        <QuestionArea />
        <VisualArea />
      </section>

    </main>
  );
}
