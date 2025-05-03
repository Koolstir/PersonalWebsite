export default function About() {
  return (
    <>
      <section className="flex flex-col items-center justify-center">
        <header className="mt-20 mb-10 text-4xl font-semibold text-center">
          About
        </header>
        <p className="mx-10 mb-10 text-lg font-mono w-300 text-center">
          Proficient in web development with expertise in NextJS and Postgres,
          having led the design and creation of an internal employee training
          portal. Experienced in automation using PowerShell for streamlined
          onboarding and offboarding processes. Skilled in website redesign,
          demonstrated by overhauling a 50-page official website, and adept in
          implementing CI/CD changes for Azure services to enhance development
          workflows.
        </p>
      </section>
      <section>
        <div className="flex justify-center">
          <div className="flex flex-col items-center text-center mr-10">
            <header className="mb-5 font-extrabold text-xl text-center">
              Programming Languages
            </header>
            <div className="grid grid-cols-3 gap-12">
              <div className="font-semibold text-center">
                <img
                  className="rounded-full w-24 h-24 bg-transparent"
                  src="/python.png"
                  alt="Python Logo"
                />
                Python
              </div>

              <div className="font-semibold text-center">
                <img
                  className="rounded-full w-24 h-24 bg-transparent"
                  src="/C.png"
                  alt="C Logo"
                />
                C
              </div>
              <div className="font-semibold text-center">
                <img
                  className="rounded-full w-24 h-24 bg-transparent"
                  src="/tailwind.png"
                  alt="Tailwind Logo"
                />
                Tailwind CSS
              </div>
            </div>
          </div>

          <div className="flex flex-col items-center text-center ml-10">
            <header className="mb-5 font-extrabold text-xl">
              Developer Skills
            </header>
            <div className="grid grid-cols-2 gap-4">
              <div className="font-semibold text-center">
                <img
                  className="rounded-full w-24 h-24 bg-transparent"
                  src="/Git.png"
                  alt="Git Logo"
                />
                Git
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
