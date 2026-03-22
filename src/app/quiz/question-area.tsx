"use client";

type QuizQuestion = {
  id: number;
  question: string;
  answers: string[];
  correctIndex: number;
};

type Props = {
  q: QuizQuestion;
  currentIndex: number;
  total: number;
  selected: number | null;
  setSelected: (i: number) => void;
  checked: boolean;
  onCheck: () => void;
  onNext: () => void;
  isLastQuestion: boolean;
};

export default function QuestionArea({
  q,
  currentIndex,
  total,
  selected,
  setSelected,
  checked,
  onCheck,
  onNext,
  isLastQuestion,
}: Props) {
  
  // Handles the main action button logic (Check vs. Next/Results)
  const handleMainButton = () => {
    if (!checked) {
      // Execute onCheck in the parent to validate if selected === q.correctIndex
      onCheck();
    } else {
      // If already checked, move to the next question or results page
      onNext();
    }
  };

  // The button remains disabled if no answer is selected AND we haven't checked yet
  const isButtonDisabled = selected === null && !checked;

  return (
    <div className="text-white w-full max-w-2xl mx-auto">
      {/* Progress Counter */}
      <p className="text-[#33B786] text-xl mb-2 font-medium">
        Question {currentIndex + 1}/{total}
      </p>

      <h2 className="text-3xl font-semibold mb-6">{q.question}</h2>

      <p className="text-gray-400 mb-4">Select correct answer</p>

      <div className="space-y-4">
        {q.answers.map((opt, i) => {
          const isSelected = selected === i;
          const isCorrect = q.correctIndex === i;

          let containerClasses =
            "flex items-center gap-3 rounded-xl p-4 cursor-pointer transition-all duration-200 border-2";

          if (!checked) {
            // Selection state (before clicking "Check")
            containerClasses += isSelected
              ? " bg-white text-black border-[#27D89D]" // Green border when selected
              : " bg-white text-black border-transparent hover:border-gray-300";
          } else {
            // Feedback state (after clicking "Check")
            if (isCorrect) {
              // The correct answer always appears green
              containerClasses += " bg-[#D4F3E7] text-black border-[#33B786]";
            } else if (isSelected && !isCorrect) {
              // If the user picked the wrong answer, highlight it in red
              containerClasses += " bg-[#FFCDD1] text-black border-[#FF5C5C]";
            } else {
              // Dim the other options to focus on the result
              containerClasses += " bg-white text-black border-transparent opacity-40";
            }
          }

          return (
            <label key={i} className={containerClasses}>
              <input
                type="radio"
                name={`answer-${q.id}`}
                checked={isSelected}
                onChange={() => setSelected(i)}
                disabled={checked}
                className="w-5 h-5 accent-[#33B786] cursor-pointer"
              />
              <span className="text-lg font-medium">{opt}</span>
            </label>
          );
        })}
      </div>

      {/* Action Button */}
      <button
        onClick={handleMainButton}
        disabled={isButtonDisabled}
        className={`
          w-full mt-10
          bg-[#27D89D] hover:bg-[#1fb585]
          transition-all duration-200
          text-black font-bold py-4 rounded-xl text-lg
          shadow-lg transform active:scale-[0.98]
          ${isButtonDisabled ? "opacity-40 cursor-not-allowed grayscale" : "cursor-pointer"}
        `}
      >
        {!checked 
          ? "Check answer" 
          : isLastQuestion 
            ? "Check results" 
            : "Next question"}
      </button>
    </div>
  );
}