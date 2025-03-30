import Image from "next/image";
import Navbar from "../components/navbar";
import { ArrowDown, ArrowRight } from "lucide-react";
import VideoEmbed from "../components/youtube";
import Footer from "../components/footer";

export default function Homeapp() {
  return (
    <>
      <Navbar />
      <div className="flex  w-screen h-screen grow px-14 justify-between">
        <div className="flex-col my-28 mx-24">
          <div className="font-parkinsans text-4xl tracking-wide leading-12 w-[450px]">
            Helping people make the world a better place through quality
            software.
          </div>
          <div className="flex flex-col w-[190px] mt-8">
            <button className="btn py-9 text-lg font-medium font-parkinsans  rounded-full bg-black text-white">
              {" "}
              Read blog
            </button>
            <button className="btn py-9  text-lg font-medium  font-parkinsans rounded-full mt-3 bg-white hover:border-none hover:shadow-none text-black">
              {" "}
              View projects
            </button>
          </div>
          <div className="flex  mt-10">
            <div className=" w-14 h-14 items-center flex hover:cursor-pointer   justify-center rounded-full border-2   border-gray-300 hover:border-gray-900 ">
              <ArrowDown size={24} />
            </div>
            <div className=" flex flex-col justify-center font-parkinsans text-lg ml-7 font-medium tracking-wide hover:underline decoration-blue-950 hover:cursor-pointer">
              {" "}
              Learn more about Dennis
            </div>
          </div>
        </div>

        <div className="w-[900px]   h-[700px] ">
          <Image
            src="/10.png"
            alt="logo"
            width={900}
            height={800}
            quality={100}
        
        
          />
        </div>
      </div>
      <div className=" flex p-20  w-screen h-screen font-parkinsans">
        <div className="w-1/2 flex py-16 px-16 flex-col ">
          {" "}
          {/* <Image
            src="/2.jpg"
            alt="logo"
            width={200}
            height={100}
            quality={100}
            className=" w-[400px] hover:cursor-pointer h-[200px] object-cover rounded-3xl"
          /> */}
          <VideoEmbed />
          <div className="mt-3 w-72 flex-col">
            <div className="text-xl  text-gray-600">
              Introduction video (2:13)
            </div>
            <div className="text-sm mt-1 hover:cursor-pointer">
              or, watch the full video here (8:05)
            </div>
          </div>
        </div>

        <div className="w-full p-16 flex flex-col">
          {" "}
          <div className="text-4xl w-[550px] leading-12 font-parkinsans font-medium text-black ">
            Hi, I'm Dennis Bamfo. I help people make the world better through
            quality software.
          </div>
          <div className="text-2xl w-[520px] font-parkinsans text-gray-700  font-light mt-10 leading-11">
            I'm also a big extreme sports enthusiast. When I'm not hanging out
            with my family or at the computer you can find me cruising around on
            my onewheel or hitting the slopes on my snowboard when it's cold.
          </div>
          <div className="flex mt-7">
            <div className=" flex flex-col justify-center font-parkinsans text-xl text-black font-medium tracking-wide hover:underline decoration-blue-950 hover:cursor-pointer">
              {" "}
              Learn more about me
            </div>
            <div className=" w-14 h-14 items-center flex hover:cursor-pointer  ml-7  justify-center rounded-full border-2   border-gray-300 hover:border-gray-900 ">
              <ArrowRight size={24} />
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col w-screen ">
        <div className="flex p-32  items-start">
          <div className="w-[600px] flex flex-col">
            <div className="text-4xl font-parkinsans font-base">
              Blog recommendations
            </div>
            <div className="text-4xl font-parkinsans font-light text-gray-500 mt-2">
              Prepared especially for you.
            </div>
          </div>

          <div className="flex items-center hover:underline decoration-blue-950 ml-80 pt-7 hover:cursor-pointer">
            <div className="font-parkinsans font-medium text-xl flex items-center">
              <div className="hover:cursor-pointer">See the full blog</div>
            </div>
            <div className="w-14 h-14 flex items-center justify-center hover:cursor-pointer ml-7 bg-center rounded-full border-2 border-gray-300 hover:border-gray-900">
              <ArrowRight size={24} />
            </div>
          </div>
        </div>
        <div className="p-32 -mt-40  grid grid-cols-3 gap-3">
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
        </div>
      </div>

      <Footer />
    </>
  );
}
