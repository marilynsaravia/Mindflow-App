import Image from "next/image";

type QuizQuestion = {
  explanation: string;
  correctAnswer: string;
  correctIndex: number;
};

type Props = {
  q: QuizQuestion;
  checked: boolean;
  selected: number | null;
  showIntroImage: boolean;
};

export default function VisualArea({ q, checked, selected, showIntroImage }: Props) {
  const isCorrect = selected === q.correctIndex;

  // Show image only before the user checks an answer for the first time ever
  if (showIntroImage && !checked) {
    return (
      <div className="w-full flex justify-center items-center">
        <Image
          src="/isotype-dark.svg"
          alt="Mindflow abstract illustration"
          width={500}
          height={500}
          priority
        />
      </div>
    );
  }

  // After checking: show explanation
  if (checked) {
    return (
      <div className="w-full flex justify-center items-center">
        <div className="bg-white rounded-3xl p-10 text-black max-w-2xl w-full">
          <h3 className="text-4xl tracking-tight font-medium text-[#A3C0BD] mb-6">Explanation</h3>

          <p className={`mb-6 text-lg ${isCorrect ? "text-[#33B786]" : "text-[#E74F5B]"}`}>
            {isCorrect ? "Correct!" : "Almost! Good try."}
          </p>

          <p className="text-gray-700 leading-8 mb-6">{q.explanation}</p>

        </div>
      </div>
    );
  }

  // After first check ever (and before checking next questions), keep empty
  return <div className="w-full" />;
}