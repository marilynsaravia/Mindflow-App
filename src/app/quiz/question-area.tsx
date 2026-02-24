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
  isLastQuestion: boolean; // NEW: lets us switch button text on the last question
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
  isLastQuestion, // NEW
}: Props) {
  // Main button:
  // - If not checked yet: validate the answer
  // - If checked: go next OR go to results (parent decides what onNext does)
  const handleMainButton = () => {
    if (!checked) onCheck();
    else onNext();
  };

  const isButtonDisabled = selected === null && !checked;

  return (
    <div className=" text-white">
      <p className="text-[#33B786] text-xl mb-2">
        Question {currentIndex + 1}/{total}
      </p>

      <h2 className="text-3xl font-semibold mb-6">{q.question}</h2>

      <p className="text-gray-300 mb-4">Select correct answer</p>

      <div className="space-y-4">
        {q.answers.map((opt, i) => {
          const isSelected = selected === i;
          const isCorrect = q.correctIndex === i;

          let containerClasses =
            "flex items-center gap-3 rounded-md p-4 cursor-pointer transition-colors";

          if (!checked) {
            containerClasses += " bg-white text-black";
          } else {
            if (isSelected) {
              containerClasses += isCorrect
                ? " bg-[#D4F3E7] text-black"
                : " bg-[#FFCDD1] text-black";
            } else {
              containerClasses += " bg-white text-black opacity-70";
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
              />
              {opt}
            </label>
          );
        })}
      </div>

      <button
        onClick={handleMainButton}
        disabled={isButtonDisabled}
        className={`
          w-full mt-8
          bg-[#27D89D] hover:bg-[#1fb585]
          transition-colors duration-200
          text-white font-semibold py-3 rounded-lg text-lg
          shadow-md
          focus:outline-none focus:ring-2 focus:ring-[#27D89D] focus:ring-offset-2
          ${isButtonDisabled ? "opacity-50 cursor-not-allowed" : "cursor-pointer"}
        `}
      >
        {!checked ? "Check answer" : isLastQuestion ? "Check results" : "Next question"}
      </button>
    </div>
  );
}