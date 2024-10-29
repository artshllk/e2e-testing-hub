import Image from "next/image";
import Link from "next/link";

export default function Header() {
  return (
    <div className="flex items-center justify-between p-4 bg-gray-800">
      <Link href="/">
        <h1 className="text-white text-2xl font-bold bg-gradient-to-r from-pink-500 to-purple-500 text-transparent bg-clip-text shadow-md">
          overautomated
        </h1>
      </Link>
      <div className="flex">
        <p className="text-blue-300 text-lg mr-2">by</p>
        <Image
          src="/photo.jpg"
          alt="photo"
          width={35}
          height={35}
          className="rounded-full"
        />
      </div>
    </div>
  );
}
