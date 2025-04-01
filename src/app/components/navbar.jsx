import Image from "next/image";
import Link from "next/link";
import { MonitorDownIcon } from "lucide-react";
export default function Navbar() {
  return (
    <div class="navbar bg-base-100 font-parkinsans mt-4 px-24 text-gray-600 ">
      <div class="navbar-start">
        <div class="dropdown">
          <div tabindex="0" role="button" class="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {" "}
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />{" "}
            </svg>
          </div>
          <ul
            tabindex="0"
            class="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
          >
            <li>
              <a>About</a>
            </li>
            <li>
              <a>Blog</a>
            </li>
            <li>
              <a>Projects</a>
            </li>
            <li>
              <a>Leave a Message</a>
            </li>
          </ul>
        </div>
        <Link href="/">
          <div className="hover:cursor-pointer opacity-80">
            <Image src="/logoanother.svg" alt="logo" width={140} height={100} />
          </div>
        </Link>
        {/* change here to image  */}
      </div>
      <div class="navbar-center hidden lg:flex">
        <ul class="menu menu-horizontal px-1 text-base">
          <li>
            <p>About</p>
          </li>
          <Link href="/blog">
            <li>
              <a>Blog</a>
            </li>
          </Link>
          <li>
            <a>Projects</a>
          </li>
          <li>
            <a>Leave a Message</a>
          </li>
        </ul>
      </div>

      <div class="navbar-end">
        <div className="w-12 h-12  mr-10 items-center flex hover:cursor-pointer  justify-center rounded-full border-1   border-gray-300 hover:border-gray-900 ">
          {" "}
          <MonitorDownIcon size={24} />
        </div>
        <div className="hover:cursor-pointer">
          <Image src="/2.svg" alt="logo" width={28} height={20} />
        </div>
      </div>
    </div>
  );
}
