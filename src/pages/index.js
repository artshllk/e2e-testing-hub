import Header from "@/components/containers/Header";
import Link from "next/link";

export const articles = [
  {
    id: 1,
    name: "Cypress vs Playwright",
    date: "October 27, 2024",
    description: "Comparing the leading e2e testing frameworks.",
  },
  {
    id: 2,
    name: "Best e2e practices",
    date: "September 12, 2024",
    description: "Essential practices for effective end-to-end testing.",
  },
];

export default function Home() {
  return (
    <>
      <div className="flex justify-center items-center bg-slate-800 py-12">
        <div className="flex flex-col max-w-2xl w-full px-4">
          {articles.map((article) => (
            <div
              key={article.id}
              className="bg-gray-900 rounded-lg mt-3 shadow-lg p-6 hover:shadow-xl transition-shadow"
            >
              <Link
                href="/cypressvsplaywright"
                className="block text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-purple-500"
              >
                {article.name}
              </Link>
              <p className="text-gray-500 text-sm mt-1">{article.date}</p>
              <p className="text-gray-400 text-lg mt-2">
                {article.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
