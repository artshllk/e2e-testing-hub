import Link from "next/link";

export default function Footer() {
  return (
    <footer className="flex justify-center p-5 bg-gray-900 shadow-md mt-8">
      <div className="flex flex-row justify-between items-center w-full max-w-2xl px-4 lg:px-0">
        <Link href="/" className="flex items-left justify-start">
          <h1 className="text-3xl font-extrabold bg-gradient-to-r from-pink-500 to-purple-500 text-transparent bg-clip-text shadow-lg">
            automative
          </h1>
        </Link>
      </div>
    </footer>
  );
}
