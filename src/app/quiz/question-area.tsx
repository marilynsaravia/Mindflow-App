import quiz from "@/data/quiz.json";

export default function QuestionArea() {
  const currentIndex = 0; // this will be state later
  const q = quiz[currentIndex];

  return (
    <div className="text-white p-8">
      <p className="text-[#33B786] text-xl mb-2">
        Question {currentIndex + 1}/{quiz.length}
      </p>

      <h2 className="text-3xl font-semibold mb-6">{q.question}</h2>

      <p className="text-gray-300 mb-4">Select correct answer</p>

      <div className="space-y-4">
        {q.answers.map((opt, i) => (
          <label key={i} className="flex items-center gap-3 bg-white text-black rounded-md p-4">
            <input type="radio" name="answer" value={i} />
            {opt}
          </label>
        ))}
      </div>
      {/* Button */}
      <button
        className="
          w-full 
          mt-8
        bg-[#27D89D] 
        hover:bg-[#1fb585] 
          transition-colors 
          duration-200
          text-center
        text-white 
          font-semibold 
          py-3 
          rounded-lg 
          text-lg
          shadow-md
          cursor-pointer
          focus:outline-none focus:ring-2 focus:ring-[#27D89D] focus:ring-offset-2
        "
      >
        Check answer
      </button>
    </div>
  );
}
