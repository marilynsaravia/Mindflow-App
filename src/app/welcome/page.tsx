export default function Welcome () {
  return(
    <main className="w-full min-h-screen bg-[#0E0F0F] flex items-center justify-center px-4">
      <div className="w-full max-w-7xl flex flex-col md:flex-row items-center md:items-center justify-between gap-12">
        <section className="w-full md:max-w-xl text-center md:text-left">
          <img className="mb-10"width="100" height="100"src="/logo.svg" alt="" />
          <p className="text-2xl text-[#27D89D]">Mindflow</p>
          <h1 className="text-white text-5xl md:text-6xl font-semibold leading-tight mb-8">Before we begin… let’s get to know you</h1>
          <p className="text-white text-md md:text-lg leading-relaxed mb-12">Enter your name so we can personalize your experience and guide you through the test gently.</p>
        </section>
        <section className="min-w-lg flex items-center justify-center p-4">
          <div className="flex flex-col bg-white w-full h-auto rounded-xl p-9 shadow-2xl">
            {/* Welcome Title */}
            <h1 className="text-3xl font-medium text-[#33B786] mb-6">Welcome !</h1>
            
            {/* Name input */}
            <label htmlFor="name" className="text-gray-700 mb-2">Name</label>
            <div className="relative mb-6">
              <input 
                id="name"
                type="text" 
                className="w-full p-3 border border-gray-300 rounded-lg pr-10 focus:outline-none focus:ring-1 focus:ring-[#27D89D]" 
                placeholder="Enter name here"
              />
              {/* User icon */}
              <svg 
                className="absolute right-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24" 
                xmlns="http://www.w3.org/2000/svg"
              >
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth="2" 
                  d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                ></path>
              </svg>
            </div>
            
            {/* Checkbox and Links */}
            <div className="flex items-start mb-6">
              <input 
                type="checkbox" 
                id="agree" 
                className="mt-1 w-5 h-5 text-[#27D89D] border-gray-300 rounded focus:ring-[#27D89D] accent-[#27D89D]"
              />
              <label htmlFor="agree" className="ml-3 text-sm text-gray-600">
                I agree to all the 
                <a href="#" className="text-[#36b68a] hover:text-[#27D89D] font-medium"> Terms</a>, 
                <a href="#" className="text-[#36b68a] hover:text-[#27D89D] font-medium"> Privacy Policy</a> and 
                <a href="#" className="text-[#36b68a] hover:text-[#27D89D] font-medium"> Fees</a>.
              </label>
            </div>
            
            {/* Button */}
            <a 
              href="/quiz" 
              className="w-full 
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
                focus:outline-none focus:ring-2 focus:ring-[#27D89D] focus:ring-offset-2"
            >
              Start test
            </a>
          </div>
        </section>
      </div>
    </main>
  )
}