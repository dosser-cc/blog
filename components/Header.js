import React from 'react'
import Link from 'next/link'
import Image from 'next/image';
import { ImFacebook, ImTwitter, ImTelegram } from "react-icons/im";



export default function Header() {
  return (
    <header className="bg-gray-50">
      <div className="container mx-auto flex flex-col items-center sm:flex-row sm:justify-between text-center py-3">
        <div className="shrink w-80 sm:order-2">
          <Link href={"/"}>Dosser.cc</Link>
        </div>

        {/*search */}
        <div className="mt-4 md:mt-0">
          <input
            type="text"
            className="mt-1 block w-60 px-3 py-2 bg-white border border-slate-300 rounded-full text-sm shadow-sm placeholder-slate-500 facus: outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500"
            placeholder="search.."
          />
        </div>

        <div className="w-96 order-3 flex justify-center">
          <div className="flex gap-8 mt-6 md:mt-0">
            <Link href={"#"}>
              <ImFacebook className="h-6 w-6 text-green-600" />
            </Link>
            <Link href={"#"}>
              <ImTwitter className="h-6 w-6 text-blue-600" />
            </Link>
            <Link href={"#"}>
              <ImTelegram className="h-6 w-6 text-red-600" />
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}
