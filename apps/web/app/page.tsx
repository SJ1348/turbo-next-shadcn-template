import { Button } from "@repo/ui";

export default function Home() {
  return (
    <main className="flex min-h-screen bg-gradient-to-r from-sky-500 to-indigo-500">
      <div className="container mx-auto px-4 py-24 flex flex-col items-center justify-between lg:flex-row lg:justify-around">
        <div className="w-full max-w-md lg:w-1/2 flex flex-col justify-center gap-8">
          <h1 className="text-4xl font-bold text-white leading-tight lg:text-6xl">
            Turbocharge your Next.js UI with Shadcn
          </h1>
          <p className="text-xl text-gray-100 lg:text-2xl">
            Effortlessly integrate pre-built UI components from Shadcn into your
            Next.js projects with this TurboRepo template.
          </p>
          <Button variant="default">
            <a
              href="https://ui.shadcn.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white"
            >
              Go to Shadcn Docs
            </a>
          </Button>
          <p className="text-sm text-gray-300 text-center lg:text-left">
            Get started by editing app/page.tsx
          </p>
        </div>
      </div>
      <div className="container mx-auto px-4 py-8 flex flex-col justify-center gap-4 items-center text-sm text-gray-300">
        <a
          href="https://github.com/SJ1348"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-white"
        >
          Made by Siddhant Thokal
        </a>
      </div>
    </main>
  );
}
