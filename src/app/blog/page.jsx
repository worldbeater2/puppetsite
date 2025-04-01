import { PlusIcon, RssIcon } from "lucide-react";
import Navbar from "../components/navbar";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import Footer from "../components/footer";

export default function Blog() {
  return (
    <>
      <Navbar />
      <div className="w-screen h-screen flex ">
        <div className="flex-col my-24 mx-30">
          <div className="font-parkinsans text-4xl mt-16 tracking-normal leading-12 w-[500px]">
            Learn development with great articles.
          </div>
          <div className="flex">
            <div className="text-4xl font-parkinsans font-light tracking-normal leading-12 w-[400px] text-gray-500 mt-2">
              Find the latest of my writing here.{" "}
              <span className="inline-flex items-center">
                <RssIcon className="h-5 w-5 text-gray-500 ml-1" />
              </span>
            </div>
          </div>

          <label className="input mt-14  rounded-full font-semibold py-2 px-4 text-lg hover:border-sky-600 flex h-[80px] hover:border-2 w-[470px]">
            <svg
              className="h-[1em] opacity-50"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <g
                strokeLinejoin="round"
                strokeLinecap="round"
                strokeWidth="2.5"
                fill="none"
                stroke="currentColor"
              >
                <circle cx="11" cy="11" r="8"></circle>
                <path d="m21 21-4.3-4.3"></path>
              </g>
            </svg>
            <input
              className=""
              type="search"
              required
              placeholder="Search posts"
            />
          </label>
        </div>
        <div className="w-[600px] mt-6 pr-32 pt-28 h-[600px] ">
          <Image
            src="/15.png"
            alt="logo"
            width={900}
            height={800}
            quality={100}
          />
        </div>
      </div>
      <div className=" w-screen px-30 mx-auto flex-col flex">
        <div className="flex mr-6 justify-start font-normal font-parkinsans text-lg">
          Search blog by topics
        </div>
        <div className="mt-5 grid grid-cols-7 gap-2 max-w-[1000px] ">
          <div className="py-4 font-normal flex grow justify-center text-gray-700 hover:border-sky-600 hover:cursor-pointer hover:border-2  rounded-4xl font-parkinsans text-sm bg-base-300">
            career
          </div>
          <div className="py-4 font-normal flex grow justify-center text-gray-700 hover:border-2 hover:border-sky-600 hover:cursor-pointer   rounded-4xl font-parkinsans text-sm bg-base-300">
            personal
          </div>
          <div className="py-4 font-normal flex grow justify-center text-gray-700 hover:border-2 hover:border-sky-600 hover:cursor-pointer  rounded-4xl font-parkinsans text-sm bg-base-300">
            legal
          </div>
          <div className="py-4 font-normal flex grow justify-center text-gray-700 hover:border-2 hover:border-sky-600 hover:cursor-pointer   rounded-4xl font-parkinsans text-sm bg-base-300">
            tech
          </div>
          <div className="py-4 font-normal flex grow justify-center text-gray-700 hover:border-2 hover:border-sky-600 hover:cursor-pointer  rounded-4xl font-parkinsans text-sm bg-base-300">
            startups
          </div>
          <div className="py-4 font-normal flex grow justify-center text-gray-700 hover:border-2 hover:border-sky-600 hover:cursor-pointer  rounded-4xl font-parkinsans text-sm bg-base-300">
            coding
          </div>
          <div className="py-4 font-normal flex grow justify-center text-gray-700 hover:border-2 hover:border-sky-600 hover:cursor-pointer  rounded-4xl font-parkinsans text-sm bg-base-300">
            business
          </div>
        </div>
        <div className=" grid grid-cols-6 gap-2 mt-5 max-w-[900px] ">
          <div className="py-4 font-normal flex grow justify-center text-gray-700 hover:border-2 hover:border-sky-600 hover:cursor-pointer  rounded-4xl font-parkinsans text-sm bg-base-300">
            Ghana
          </div>
          <div className="py-4 font-normal flex grow justify-center text-gray-700 hover:border-2 hover:border-sky-600 hover:cursor-pointer  rounded-4xl font-parkinsans text-sm bg-base-300">
            Germany
          </div>
          <div className="py-4 font-normal flex grow justify-center text-gray-700 hover:border-2 hover:border-sky-600 hover:cursor-pointer  rounded-4xl font-parkinsans text-sm bg-base-300">
            hobbies
          </div>
          <div className="py-4 font-normal flex grow justify-center text-gray-700 hover:border-2 hover:border-sky-600 hover:cursor-pointer  rounded-4xl font-parkinsans text-sm bg-base-300">
            Ai
          </div>
          <div className="py-4 font-normal flex grow justify-center text-gray-700 hover:border-2 hover:border-sky-600 hover:cursor-pointer  rounded-4xl font-parkinsans text-sm bg-base-300">
            fintech
          </div>
          <div className="py-4 font-normal flex grow justify-center text-gray-700 hover:border-2 hover:border-sky-600 hover:cursor-pointer  rounded-4xl font-parkinsans text-sm bg-base-300">
            regulations
          </div>
        </div>

        <div className="flex justify-center mb-10  mt-3 mx-auto">
          <div className="mt-7 flex bg-base-200 hover:border-2 hover:cursor-pointer hover:border-teal-400 w-[1200px] mb-4 rounded-xl h-[680px]">
            <div className=" flex flex-col p-7 mt-3">
              <div className="font-parkinsans mx-14 my-12 font-medium">
                {" "}
                Featured Article
              </div>
              <div className="text-4xl mx-14 w-[500px] tracking-wide leading-12 font-medium font-parkinsans ">
                How to Use React context effectively
              </div>
              <div className="mx-14 mt-10 text-gray-400 font-parkinsans font-normal text-2xl w-[460px]">
                September 10th, 2025 — 4 min read
              </div>
              <div className="flex mt-60 mx-14">
                <div className=" flex flex-col justify-center font-parkinsans text-xl text-black font-medium tracking-wide hover:underline decoration-blue-950 hover:cursor-pointer">
                  {" "}
                  Read full article
                </div>
                <div className=" w-14 h-14 items-center flex hover:cursor-pointer  ml-7  justify-center rounded-full border-2   border-gray-300 hover:border-gray-900 ">
                  <ArrowRight size={24} />
                </div>
              </div>
            </div>
            <div className="flex mt-24 ml-14 flex-col hover:cursor-pointer ">
              <Image
                src="https://images.unsplash.com/photo-1743062545929-0135b193c968?q=80&w=3145&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="logo"
                width={300}
                height={200}
                quality={100}
                className="w-[370px] hover:grayscale-100 h-[480px] object-cover rounded-md"
                unoptimized
              />
            </div>
          </div>
        </div>
      </div>
      <div className="px-32 grid grid-cols-3 gap-3">
        <div className="flex flex-col  hover:cursor-pointer">
          <Image
            src="https://images.unsplash.com/photo-1535332089761-5fd44d68e506?q=80&w=2278&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="logo"
            width={300}
            height={200}
            quality={100}
            className="w-[370px] hover:grayscale-100 h-[480px] object-cover rounded-md"
            unoptimized
          />
          <div className="mt-6 text-gray-600 font-parkinsans font-medium text-xl w-[400px]">
            September 10th, 2018 — 4 min read
          </div>
          <div className="text-2xl font-medium font-parkinsans mt-3 ">
            useEffect vs useLayoutEffect
          </div>
        </div>
        <div className="flex flex-col hover:cursor-pointer ">
          <Image
            src="https://plus.unsplash.com/premium_photo-1671420510148-f92fa0e8650d?q=80&w=2160&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="logo"
            width={300}
            height={200}
            quality={100}
            className="w-[370px] hover:grayscale-100 h-[480px] object-cover rounded-md"
            unoptimized
          />
          <div className="mt-6 text-gray-600 font-parkinsans font-medium text-xl w-[400px]">
            September 10th, 2018 — 4 min read
          </div>
          <div className="text-2xl font-medium font-parkinsans mt-3 ">
            useEffect vs useLayoutEffect
          </div>
        </div>
        <div className="flex flex-col hover:cursor-pointer ">
          <Image
            src="https://images.unsplash.com/photo-1641293374867-3b84ca22a7b0?q=80&w=3087&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="logo"
            width={300}
            height={200}
            quality={100}
            className="w-[370px] hover:grayscale-100 h-[480px] object-cover rounded-md"
            unoptimized
          />
          <div className="mt-6 text-gray-600 font-parkinsans font-medium text-xl w-[400px]">
            September 10th, 2018 — 4 min read
          </div>
          <div className="text-2xl font-medium font-parkinsans mt-3 ">
            useEffect vs useLayoutEffect
          </div>
        </div>
        <div className="flex flex-col mt-10 hover:cursor-pointer">
          <Image
            src="https://images.unsplash.com/photo-1742829705753-f07509bc88ac?q=80&w=3165&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="logo"
            width={300}
            height={200}
            quality={100}
            className="w-[370px] hover:grayscale-100 h-[480px] object-cover rounded-md"
            unoptimized
          />
          <div className="mt-6 text-gray-600 font-parkinsans font-medium text-xl w-[400px]">
            September 10th, 2018 — 4 min read
          </div>
          <div className="text-2xl font-medium font-parkinsans mt-3 ">
            useEffect vs useLayoutEffect
          </div>
        </div>
        <div className="flex flex-col mt-10 hover:cursor-pointer ">
          <Image
            src="https://images.unsplash.com/photo-1742197062761-1e44b0d7fd2e?q=80&w=3164&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="logo"
            width={300}
            height={200}
            quality={100}
            className="w-[370px] hover:grayscale-100 h-[480px] object-cover rounded-md"
            unoptimized
          />
          <div className="mt-6 text-gray-600 font-parkinsans font-medium text-xl w-[400px]">
            September 10th, 2018 — 4 min read
          </div>
          <div className="text-2xl font-medium font-parkinsans mt-3 ">
            useEffect vs useLayoutEffect
          </div>
        </div>

        <div className="flex flex-col mt-10 hover:cursor-pointer ">
          <Image
            src="https://images.unsplash.com/photo-1741732311591-18ddbd0964cc?q=80&w=3087&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="logo"
            width={300}
            height={200}
            quality={100}
            className="w-[370px] hover:grayscale-100 h-[480px] object-cover rounded-md"
            unoptimized
          />
          <div className="mt-6 text-gray-600 font-parkinsans font-medium text-xl w-[400px]">
            September 10th, 2018 — 4 min read
          </div>
          <div className="text-2xl font-medium font-parkinsans mt-3 ">
            useEffect vs useLayoutEffect
          </div>
        </div>

        <div className="flex w-screen hover:cursor-pointer justify-center -ml-36 mt-32 ">
          <div className="flex items-center pl-5 py-3 border-gray-300 border-2 hover:border-sky-600 rounded-4xl">
            <div className="font-parkinsans font-normal text-base flex items-center">
              <div className="hover:cursor-pointer">Load more articles</div>
            </div>
            <div className="w-12 h-12 flex items-center justify-center hover:cursor-pointer">
              <PlusIcon size={18} />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
