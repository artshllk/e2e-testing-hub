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
      <div className="flex justify-center mt-12 w-70">
        <div className="flex flex-col space-y-8 m-6">
          {articles.map((article) => (
            <div key={article.id}>
              <Link
                href="/cypressvsplaywright"
                className="block text-3xl font-bold text-red-400 hover:text-red-500 transition-all"
              >
                {article.name}
              </Link>
              <p className="text-gray-400 text-sm mt-1">{article.date}</p>
              <p className="text-gray-300 text-lg w-[100%]">
                {article.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
