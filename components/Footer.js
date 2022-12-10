import Link from "next/link";
import { ImFacebook, ImTwitter, ImTelegram } from "react-icons/im";

export default function Footer() {
  return (
    <footer className="bg-gray-50">
      <div className="container mx-auto flex justify-center py-4">
        <div className="py-5">
          <div className="flex gap-6 justify-center">
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
          <p className="text-sm text-gray-400 py-4">
            Copyright © 2022 All rights reserved | Dosser blog
          </p>
        </div>
      </div>
    </footer>
  );
}
