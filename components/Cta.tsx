export default function CTA() {
    return (
      <section className="relative bg-black px-4 pt-24 md:pt-32">
                          <div 
        className="max-w-7xl mx-auto px-6 lg:px-8"
      >
        <hr className="border-gray-800 mb-16" />
      </div>
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="mb-4 text-4xl font-medium tracking-tight text-white md:text-5xl lg:text-6xl">
            Boost your app, launch, earn
          </h2>
          <p className="mb-8 text-lg text-zinc-400 md:text-xl">
            Do it all with LaunchPro to make your SaaS profitable.
          </p>
          <a
            href="https://github.com/idee8/LaunchPro"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-lg bg-[#beff31] px-6 py-3 text-base font-medium text-black transition-colors hover:bg-[#beff31]/90"
          >
            <svg
              viewBox="0 0 24 24"
              fill="none"
              className="h-5 w-5"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M13 10V3L4 14H11V21L20 10H13Z"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            Get LaunchPro
          </a>
        </div>
      </section>
    );
  }
  