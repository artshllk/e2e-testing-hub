import Link from "next/link";

export default function Home() {
  return (
    <>
      <div className="flex justify-center mt-12">
        <Link
          href="/cypressvsplaywright"
          className="font-bold text-center text-2xl text-blue-300 px-4 py-2 rounded
         hover:text-3xl transition-all"
        >
          Cypress vs Playwright
        </Link>
      </div>
    </>
  );
}
