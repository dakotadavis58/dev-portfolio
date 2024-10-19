import ThemeToggle from "./theme-toggle";
import Image from "next/image";
import UserImg from "@/public/images/user-image.jpg";

import Link from "next/link";

export default function Header() {
  return (
    <header className="text-center pt-6">
      {/* Dark mode toggle */}
      {/* <ThemeToggle /> */}
      {/* Intro */}
      <div className="mb-10">
        <Link href="/">
          {/* <div className="inline-flex mb-4">
            <svg
              width="48"
              height="48"
              viewBox="0 0 100 100"
              className="dark:text-slate-600 text-slate-400"
            >
              <rect
                x="5"
                y="5"
                width="90"
                height="90"
                rx="10"
                fill="none"
                stroke="currentColor"
                strokeWidth="4"
              />
              <path
                d="M30 35 L15 50 L30 65"
                fill="none"
                stroke="currentColor"
                strokeWidth="4"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M70 35 L85 50 L70 65"
                fill="none"
                stroke="currentColor"
                strokeWidth="4"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <line
                x1="55"
                y1="25"
                x2="45"
                y2="75"
                stroke="currentColor"
                strokeWidth="4"
                strokeLinecap="round"
              />
            </svg>
          </div> */}
          <div className="mb-5">
            <h1 className="font-inter-tight font-bold text-gray-800 dark:text-gray-100 text-2xl mb-1">
              Dakota Davis
            </h1>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              Full-stack developer and engineer from New Hampshire, USA 🌲
            </p>
          </div>
        </Link>
        <a
          className="btn-sm text-gray-200 dark:text-gray-800 bg-gradient-to-r from-gray-800 to-gray-700 dark:from-gray-300 dark:to-gray-100 dark:hover:bg-gray-100 shadow relative before:absolute before:inset-0 before:rounded-[inherit] before:bg-[linear-gradient(45deg,transparent_25%,theme(colors.white/.2)_50%,transparent_75%,transparent_100%)] dark:before:bg-[linear-gradient(45deg,transparent_25%,theme(colors.white)_50%,transparent_75%,transparent_100%)] before:bg-[length:250%_250%,100%_100%] before:bg-[position:200%_0,0_0] before:bg-no-repeat before:[transition:background-position_0s_ease] hover:before:bg-[position:-100%_0,0_0] hover:before:duration-[1500ms]"
          href="/#contact"
        >
          Available For Work
        </a>
      </div>
    </header>
  );
}
