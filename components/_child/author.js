import Image from "next/image";
import Link from "next/link";

export default function author() {
  return (
    <div className="author flex py-5">
      <Image className="rounded-full" src={"/images/author/author1.jpg"} width={60} height={60} ></Image>
      <div className="flex flex-col justify-center px-4">
        <Link className="text-md text-gray-800 hover:text-gray-600" href={"/"}>Dosser</Link>
      </div>
    </div>
  );
}
