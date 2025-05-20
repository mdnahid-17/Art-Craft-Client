import { FaPaintBrush } from "react-icons/fa";
import { FaArrowLeftLong, FaRegStar } from "react-icons/fa6";
import { useLoaderData, useNavigate } from "react-router";
import Marquee from "react-fast-marquee";
import UseAuth from "../hooks/useAuth";
import { Helmet } from "react-helmet";

export default function CraftDetails() {
  const data = useLoaderData();
  const navigate = useNavigate();
  const {loader} =UseAuth()

  const handleBack = () => {
    navigate(-1);
  };

  const { _id,item_name, price, rating, processing_time, category, image, customization, stockStatus, short_description } =
    data || {};
    if (loader) {
      return <h1 className="text-2xl py-4 text-center font-semibold">Loading...</h1>;
    }
  return (
    <div className="container my-[100px] mb-5 lg:my-[70px] lg:pt-1 flex flex-col justify-center items-center">
       <Helmet>
        <title>{`Craft Details id: ${_id}`}</title>
      </Helmet>
      <div onClick={handleBack} className="self-start rounded-md md:ml-6 lg:ml-[188px]">
        <button className="flex items-center gap-2 btn hover:bg-linear-65 from-purple-500 to-pink-500 md:text-xl text-left justify-start hover:text-white">
          <FaArrowLeftLong />
          Back
        </button>
      </div>

      <div className="rounded-[5px] border border-neutral-200 p-[15px] md:p-[20px] lg:p-[30px] mt-2 md:mt-8">
        <img className="w-full object-cover h-auto md:w-full md:h-full lg:w-full lg:h-[450px] rounded-[5px]" src={image} />

        <div className="flex items-center p-2 md:p-4 w-[300px] md:w-[600px] lg:w-[800px]">
          <Marquee speed={100} pauseOnHover={true}>
            <p className="text-red-700 text-sm md:text-lg font-medium md:font-semibold leading-[30px] mr-10">{stockStatus}</p>
            <p className="text-red-700 text-sm md:text-lg font-medium md:font-semibold leading-[30px] mr-10">{stockStatus}</p>
            <p className="text-red-700 text-sm md:text-lg font-medium md:font-semibold leading-[30px] mr-10">{stockStatus}</p>
            <p className="text-red-700 text-sm md:text-lg font-medium md:font-semibold leading-[30px] mr-10">{stockStatus}</p>
            <p className="text-red-700 text-sm md:text-lg font-medium md:font-semibold leading-[30px] mr-10">{stockStatus}</p>
            <p className="text-red-700 text-sm md:text-lg font-medium md:font-semibold leading-[30px] mr-10">{stockStatus}</p>
            <p className="text-red-700 text-sm md:text-lg font-medium md:font-semibold leading-[30px] mr-10">{stockStatus}</p>
            <p className="text-red-700 text-sm md:text-lg font-medium md:font-semibold leading-[30px] mr-10">{stockStatus}</p>
            <p className="text-red-700 text-sm md:text-lg font-medium md:font-semibold leading-[30px] mr-10">{stockStatus}</p>
            <p className="text-red-700 text-sm md:text-lg font-medium md:font-semibold leading-[30px] mr-10">{stockStatus}</p>
            <p className="text-red-700 text-sm md:text-lg font-medium md:font-semibold leading-[30px] mr-10">{stockStatus}</p>
          </Marquee>
        </div>

        <div>
          <h3 className="text-[17px] md:text-[20px] lg:text-[25px] font-semibold lg:font-bold ">{item_name}</h3>
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2 mb-2">
              <FaPaintBrush className="text-xl" />
              <p className="text-sm md:text-[18px] my-1 font-semibold">{category}</p>
            </div>
            <p className="mt-[-30px] md:mt-[-40px] lg:mt-[-50px] md:mr-4 rounded-md text-base font-medium bg-black text-white pt-[4px] pb-[3px] px-3">
              $ {price}
            </p>
          </div>
          <p className="text-sm md:text-base font-normal md:w-[600px] lg:w-[800px]">
            <b>Description : </b>
            {short_description}
          </p>
          <p className="text-sm md:text-base font-semibold my-1">
            <b>Customization : </b>
            {customization}
          </p>

          <div className="flex py-1 w-full bg-black items-center justify-between rounded-md mt-5 gap-10">
            <p className="text-base font-medium text-white ml-5">
              <b>Time : </b> {processing_time} hr
            </p>
            <div className="flex items-center gap-2 text-white mr-5">
              <FaRegStar className="text-[18px]" />
              <p className="mb-[-2px] ">{rating}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
