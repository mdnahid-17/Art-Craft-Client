import axios from "axios";
import { useEffect, useState } from "react";
import { FaPaintBrush } from "react-icons/fa";
import { IoStar } from "react-icons/io5";
import { Link } from "react-router";
import UseAuth from "../hooks/useAuth";

export default function CraftItems() {
  const { loader } = UseAuth();
  const [data, setData] = useState([]);

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    const { data } = await axios(`${import.meta.env.VITE_API_URL}/painting`);
    setData(data);
  };

  if (loader)
    return (
      <div className="text-center">
        <span className="loading w-[50px] loading-spinner text-secondary"></span>
        <span className="loading w-[50px] loading-spinner text-primary"></span>
        <span className="loading w-[50px] loading-spinner text-accent"></span>
        <span className="loading w-[50px] loading-spinner text-neutral"></span>
        <span className="loading w-[50px] loading-spinner text-info"></span>
        <span className="loading w-[50px] loading-spinner text-success"></span>
        <span className="loading w-[50px] loading-spinner text-warning"></span>
        <span className="loading w-[50px] loading-spinner text-error"></span>
      </div>
    );

  return (
    <div>
      <h1 className="text-center text-2xl lg:text-[35px] font-semibold bg-gradient-to-r from-purple-600 vai via-blue-400 to-pink-500 text-transparent bg-clip-text border-4  w-fit mx-auto py-2 px-5 ">
        Painting and Drawing
      </h1>
      <p className="mb-5 md:mb-8 lg:mb-10 md:pt-2 w-auto md:w-[500px] lg:w-[600px] m-auto text-center text-sm  md:text-base font-medium">
        Explore our website&apos;s painting and drawing section for a diverse array of artistic expressions, from vibrant
        landscapes to intricate charcoal sketches.
      </p>

      <div className="lg:mx-10 grid md:grid-cols-2 lg:grid-cols-3 md:gap-6 lg:gap-8 space-y-4 md:space-y-0">
        {data.map((craft) => {
          const { _id, item_name, price, subcategory_Name, image, stockStatus, rating, customization } = craft;
          return (
            <div key={_id} className=" relative font-lora">
              <div className="bg-base-300 p-5 rounded-md">
                <img
                  className="w-full md:w-[338px] lg:w-[750px] h-auto md:h-[80px] lg:h-[350px] rounded-md object-cover mb-5"
                  src={image}
                />
                <div className="py-1 px-3 bg-red-700 absolute top-[30px] right-[1.75rem] rounded-md">
                  <p className="text-[16px] font-medium text-white">{stockStatus}</p>
                </div>
                <h5 className="text-[23px] font-bold">{item_name}</h5>
                <div className="flex font-medium gap-2">
                  <FaPaintBrush className="text-xl" />
                  <p className="text-base font-medium">{subcategory_Name}</p>
                </div>
                <div className="flex justify-end mt-[-45px] mr-2">
                  <h6 className="border-2 border-black px-3 w-fit py-1 rounded-lg text-[18px] font-bold ">${price}</h6>
                </div>

                <div className="flex items-center justify-between my-5">
                  <p>
                    <b>Customization: </b>
                    {customization}
                  </p>
                  <div className="flex items-center gap-1 mr-2">
                    <IoStar />
                    <span>{rating}</span>
                  </div>
                </div>

                <div className="text-center">
                  <Link to={`/craftDetails/${_id}`}>
                    <button className="bg-gradient-to-l from-rose-400 to-indigo-500 w-full py-2 px-4 md:py-[9px] md:px-11 text-white md:text-base lg:text-xl font-medium rounded-lg cursor-pointer">
                      View Details
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
