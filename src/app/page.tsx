import Link from "next/link";
import Image from "next/image";

export default function Home() {
  return (
    <main className="w-full min-h-screen bg-[#0E0F0F] flex items-center justify-center px-4">
      <div className="w-full max-w-7xl flex flex-col md:flex-row items-center md:items-center justify-between gap-12">
        {/* Col left */}
        <section className="w-full md:max-w-xl text-center md:text-left">
          {/* Logo */}
          <div className="flex justify-center md:justify-center mb-10">
            <Image
              src="/logo.svg"
              alt="Mindflow logo"
              width={150}
              height={150}
              className="opacity-90"
            />
          </div>

          {/* Title */}
          <h1 className="text-white text-5xl md:text-6xl font-semibold leading-tight mb-8">
            A stress-free way to <br /> test your reasoning
          </h1>

          {/* Description */}
          <p className="text-white text-md md:text-lg leading-relaxed mb-12">
            Practice real problem-solving questions at your own pace. <br />
            A gentle way to warm up for interviews or simply understand your
            thinking better.
          </p>

          {/* Button */}
          <div className="flex justify-center md:justify-center">
            <Link
              href="/welcome"
              className="
                w-full
                max-w-sm
                bg-[#27D89D]
                hover:bg-[#1fb585]
                transition
                text-white
                font-medium
                py-2
                rounded-sm
                text-center
              "
            >
              Start
            </Link>
          </div>
        </section>

        {/* Col right: Isotype */}
        <section className="w-full flex justify-center md:justify-end">
          <div className="w-[320px] h-80 md:w-[520px] md:h-[520px] lg:w-[640px] lg:h-[640px]">
            <Image
              src="/isotype.svg"
              alt="Mindflow abstract illustration"
              width={800}
              height={800}
              className="opacity-90 w-full h-full object-contain"
              priority
            />
          </div>
        </section>
      </div>
    </main>
  );
}
