import Image from "next/image";
import Link from "next/link";

export default function Header() {
  return (
    <div className="flex items-center justify-center mt-4">
      <div className="w-[40%] flex justify-between items-center">
        <Link href="/">
          <h1 className="text-blue-500 text-2xl font-bold">overautomated</h1>
        </Link>
        <p className="text-blue-300 text-lg flex start-44 relative">by</p>
        <Image
          src="/photo.jpg"
          alt="photo"
          width={35}
          height={20}
          className="rounded-full"
        />
      </div>
    </div>
  );
}
