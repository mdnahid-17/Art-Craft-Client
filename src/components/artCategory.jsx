import { Link } from "react-router";
import landscape from "../assets/art&craft/Landscape Painting-B.jpg";
import portrait from "../assets/art&craft/Portrait Drawing-BhMGW51n.jpg";
import water from "../assets/art&craft/Watercolour Painting-CQzgwDMO.jpg";
import oil from "../assets/art&craft/Oil Painting-DyOI8XJC.jpg";
import coal from "../assets/art&craft/coal-DohR7WwZ.jpg";
import cartoon from "../assets/art&craft/Cartoon Drawing-CFxbhuuY.jpg";
import { FaArrowRightLong } from "react-icons/fa6";

export default function ArtCategory() {
  return (
    <div className=" md:mt-[50px] lg:mx-10">
      <div className="py-5 ">
        <h1 className="text-center text-xl lg:text-[35px] font-semibold bg-gradient-to-r from-purple-600 vai via-blue-400 to-pink-500 text-transparent bg-clip-text border-4  w-fit mx-auto px-5 ">
          Art and Craft Categories
        </h1>
        <p className="lg:w-1/2 py-3 mx-auto text-base text-center font-semibold">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam rem minima aspernatur? Odio veritatis minus officia
          quis reiciendis quos cupiditate.
        </p>
      </div>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 md:gap-6 lg:gap-8 space-y-4 md:space-y-0">
        <div>
          <img className="object-cover rounded-lg w-[400px] h-[280px]" src={landscape} />
          <Link to={"/subCategory/Landscape Painting"}>
            <button className="flex items-center justify-center gap-2 py-[10px] bg-gradient-to-l from-blue-300 to-indigo-500 text-center rounded-[5px] px-[50px] cursor-pointer text-black text-base font-bold w-full md:w-[280px] translate-y-[-60px]  md:translate-x-[30px] lg:translate-x-[58px]">
              Landscape Painting
              <FaArrowRightLong />
            </button>
          </Link>
        </div>

        <div>
          <img className="object-cover rounded-lg w-[400px] h-[280px]" src={portrait} />
          <Link to={"/subCategory/Portrait Drawing"}>
            <button className="flex items-center justify-center gap-2 py-[10px] bg-gradient-to-l from-blue-300 to-indigo-500 text-center rounded-[5px] px-[50px] cursor-pointer text-black text-base font-bold w-full md:w-[280px] translate-y-[-60px]  md:translate-x-[30px] lg:translate-x-[58px]">
              Portrait Drawing
              <FaArrowRightLong />
            </button>
          </Link>
        </div>

        <div>
          <img className="object-cover rounded-lg w-[400px] h-[280px]" src={water} />
          <Link to={"/subCategory/Water Color Painting"}>
            <button className="flex items-center justify-center gap-2 py-[10px] bg-gradient-to-l from-blue-300 to-indigo-500 text-center rounded-[5px] px-[50px] cursor-pointer text-black text-base font-bold w-full md:w-[280px] translate-y-[-60px]  md:translate-x-[30px] lg:translate-x-[58px]">
              WaterColor Painting
              <FaArrowRightLong />
            </button>
          </Link>
        </div>

        <div>
          <img className="object-cover rounded-lg w-[400px] h-[280px]" src={oil} />
          <Link to={"/subCategory/Oil Painting"}>
            <button className="flex items-center justify-center gap-2 py-[10px] bg-gradient-to-l from-blue-300 to-indigo-500 text-center rounded-[5px] px-[50px] cursor-pointer text-black text-base font-bold w-full md:w-[280px] translate-y-[-60px]  md:translate-x-[30px] lg:translate-x-[58px]">
              Oil Painting
              <FaArrowRightLong />
            </button>
          </Link>
        </div>

        <div>
          <img className="object-cover rounded-lg w-[400px] h-[280px]" src={coal} />
          <Link to={"/subCategory/Charcoal Sketching"}>
            <button className="flex items-center justify-center gap-2 py-[10px] bg-gradient-to-l from-blue-300 to-indigo-500 text-center rounded-[5px] px-[50px] cursor-pointer text-black text-base font-bold w-full md:w-[280px] translate-y-[-60px]  md:translate-x-[30px] lg:translate-x-[58px]">
              Charcoal Sketching
              <FaArrowRightLong />
            </button>
          </Link>
        </div>

        <div>
          <img className="object-cover rounded-lg w-[400px] h-[280px]" src={cartoon} />
          <Link to={"/subCategory/Cartoon Drawing"}>
            <button className="flex items-center justify-center gap-2 py-[10px] bg-gradient-to-l from-blue-300 to-indigo-500 text-center rounded-[5px] px-[50px] cursor-pointer text-black text-base font-bold w-full md:w-[280px] translate-y-[-60px]  md:translate-x-[30px] lg:translate-x-[58px]">
              Cartoon Drawing
              <FaArrowRightLong />
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
