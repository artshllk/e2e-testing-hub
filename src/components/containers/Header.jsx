import Image from "next/image";
import Link from "next/link";

export default function Header() {
  return (
    <header className="flex justify-center p-3 pl-0 pr-0 bg-gray-900 shadow-md">
      <div className="flex flex-row justify-between md:flex-row md:justify-between items-center w-full max-w-2xl px-4 lg:px-0">
        <Link href="/" className="flex items-center mb-2 md:mb-0">
          <h1 className="text-3xl font-extrabold bg-gradient-to-r from-pink-500 to-purple-500 text-transparent bg-clip-text shadow-lg transition duration-300 hover:shadow-xl">
            automative
          </h1>
        </Link>

        <div className="flex items-center gap-x-2">
          <p className="bg-gradient-to-r from-pink-500 to-purple-500 text-transparent bg-clip-text shadow-lg hover:shadow-xl font-medium transition duration-300">
            by
          </p>
          <Image
            src="/photo.jpg"
            alt="Profile picture of Art Shllaku"
            width={50}
            height={50}
            className="rounded-full border-2 border-blue-500 transition duration-300 hover:scale-110"
          />
        </div>
      </div>
    </header>
  );
}
