import Link from "next/link"
import Image from "next/image"

export default function Tail (){
  return (
    <section className="container mx-auto md:px-20 py-6 p-1">
      <div className="grid lg:grid-cols-2">
        <div className="item">
          <h1 className="font-bold text-4xl py-8 text-center">Business</h1>
          <div className="flex flex-col gap-6">
            {/** posts */}
            {Post()}
            {Post()}
            {Post()}
            {Post()}
          </div>
        </div>
        <div className="item">
          <h1 className="font-bold text-4xl py-8 text-center">Travel</h1>

          {/** posts */}
          <div className="flex flex-col gap-6">
            {Post()}
            {Post()}
            {Post()}
            {Post()}
          </div>
        </div>
      </div>
    </section>
  );
}

function Post(){
  return (
    <div className="flex gap-5">
      <div className="image flex-col justify-start">
        <Link href={"/"}>
          <Image
            src={"/images/flowr.jpg"}
            className="rounded"
            width={250}
            height={200}
          ></Image>
        </Link>
      </div>
      <div className="info flex justify-center flex-col">
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
      </div>
    </div>
  );
}