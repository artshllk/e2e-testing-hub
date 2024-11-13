import Header from "@/components/containers/Header";
import Link from "next/link";

export const articles = [
  {
    id: 1,
    path: "/cypressvsplaywright",
    name: "Cypress vs Playwright",
    date: "October 27, 2024",
    description: "Comparing the leading e2e testing frameworks",
  },
  {
    id: 2,
    path: "/wetvsdry",
    name: "Should Tests Be WET or DRY?",
    date: "Novemeber 10, 2024",
    description: "Finding the Right Balance",
  },
  {
    id: 3,
    path: "/beste2epractices",
    name: "Best E2E Automation Testing Practices",
    date: "November 14, 2024",
    description:
      "Advanced strategies to improve test stability and reduce flakiness",
  },
];

export default function Home() {
  return (
    <>
      <div className="flex justify-center items-center bg-slate-800 py-14">
        <div className="flex flex-col max-w-[44rem] w-full px-4">
          {articles.map((article) => (
            <div
              key={article.id}
              className="bg-gray-900 rounded-lg mt-3 shadow-lg p-6"
            >
              <Link
                href={article.path}
                className="block text-3xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-purple-500"
              >
                {article.name}
              </Link>
              <p className="text-gray-500 font-serif text-sm mt-1">
                {article.date}
              </p>
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
