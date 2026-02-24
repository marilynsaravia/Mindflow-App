"use client";

import { useSearchParams } from "next/navigation";

export default function ResultPage() {
  const params = useSearchParams();

  const score = Number(params.get("score")) || 0;
  const total = Number(params.get("total")) || 0;

  const incorrect = total - score;

  return (
    <main className="min-h-screen bg-[#0E0F0F] text-white flex items-center justify-center px-6">
      
      <div className="text-center max-w-xl">
        
        <h1 className="text-4xl font-bold mb-4">
          Great job.
        </h1>

        <p className="text-gray-300 mb-10">
          You're doing really well — keep growing at your own pace.
        </p>

        <div className="flex justify-center gap-10 mb-10">
          <span className="text-green-400">● {score} Correct</span>
          <span className="text-red-400">● {incorrect} Incorrect</span>
        </div>

        <button className="bg-[#27D89D] px-8 py-3 rounded-lg text-black font-semibold">
          Finish
        </button>

        <p className="text-sm text-gray-500 mt-4">
          Try again at your own pace
        </p>

      </div>
    </main>
  );
}