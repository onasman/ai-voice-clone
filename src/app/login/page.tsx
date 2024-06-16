import LoginButton from "~/components/login-button";

export default async function Page() {
  return (
    <div className="flex flex-col">
      <main className="flex-1">
        <section className="h-screen w-full bg-gradient-to-b from-[#F5F5F5] to-[#E0E0E0] py-24 md:py-32 lg:py-40 xl:py-48 dark:from-[#1F2937] dark:to-[#111827]">
          <div className="container px-4 text-center md:px-6">
            <div className="space-y-6">
              <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl">
                The Oracle
              </h1>
              <p className="text-xl text-gray-600 dark:text-gray-400">
                Speak with the Oracle
              </p>
              <p className="mx-auto max-w-[700px] text-gray-500 dark:text-gray-400">
                The Oracle awaits your questions. Log in to begin your journey
                of enlightenment.
              </p>

              <LoginButton />
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
