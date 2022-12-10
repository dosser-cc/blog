import Link from "next/link";
import Image from "next/image";
import Author from "./_child/author";


export default function Mainlist(){
  return (
    <section className="container mx-auto md:px-20">
      <h1 className="font-bold text-4xl px-12 text-center py-6">Latext Post</h1>

      {/** grid columns */}
      <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {Post()}
        {Post()}
        {Post()}
        {Post()}
      </div>
    </section>
  );
}

function Post(){
  return (
    <div className="item p-2">
      <div className="images">
        <Link href={"/"}>
          <Image
            src={"/images/flowr.jpg"}
            className="rounded"
            width={480}
            height={480}
          />
        </Link>
      </div>
      <div className="info flex justify-center flex-col py-4">
        <div className="cat">
          <Link
            className="text-orange-600 text-sm hover:text-orange-400"
            href={"/"}
          >
            Business Travel
          </Link>
          <Link
            className="text-gray-500 text-sm hover:text-orange-400"
            href={"/"}
          >
            - July 3, 2022
          </Link>
        </div>
        <div className="title">
          <Link
            className="text-lg text-gray-800 hover:text-gray-600"
            href={"/"}
          >
            How to Make Blog Website with Next.js
          </Link>
        </div>
        <p className="text-sm text-gray-500 overflow-hidden py-3 hidden md:flex">
          How to Make Blog Website with Next.js & Tailwind CSS - For Beginners
          In this course
        </p>
        
      </div>
    </div>
  );
}
