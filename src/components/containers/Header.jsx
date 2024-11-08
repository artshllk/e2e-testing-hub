import Image from "next/image";
import Link from "next/link";

export default function Header() {
  return (
    <header className="flex items-center justify-between p-4 bg-gray-900 shadow-md">
      <Link href="/" className="flex items-center">
        <h1 className="text-3xl font-extrabold bg-gradient-to-r from-pink-500 to-purple-500 text-transparent bg-clip-text shadow-lg transition duration-300 hover:shadow-xl">
          automative
        </h1>
      </Link>
      <div className="flex items-center">
        <p className="bg-gradient-to-r from-pink-500 to-purple-500 text-transparent bg-clip-text shadow-lg hover:shadow-xl font-medium mr-3 transition duration-300">
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
    </header>
  );
}
