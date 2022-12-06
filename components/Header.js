import React from 'react'
import Link from 'next/link'

export default function Header() {
  return (
    <header className="bg-gray-50">
      <div className="xl:container xl:mx-auto flex flex-col items-center sm:flex-row sm:justify-between text-center py-3">
        <div>
          <input type="text" placeholder="search.." />
        </div>
        <div>
          <Link href={"#"}>Dosser</Link>
        </div>
        <div>
          <div className="flex">
            <Link href={"#"}>Facebook</Link>
            <Link href={"#"}>Twitter</Link>
            <Link href={"#"}>Youtube</Link>
          </div>
        </div>
      </div>
    </header>
  );
}
