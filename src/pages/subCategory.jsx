import { Helmet } from "react-helmet";
import { FaPaintBrush } from "react-icons/fa";
import { IoStar } from "react-icons/io5";
import { Link, useLoaderData } from "react-router";

export default function SubCategory() {
  const loadedData = useLoaderData();
  console.log(loadedData);

  return (
    <div className="md:my-[50px] lg:my-[50px] container">
      <Helmet>
        <title>{loadedData[0].category}</title>
      </Helmet>

      <h1 className="text-center text-2xl lg:text-[35px] font-semibold bg-gradient-to-r from-purple-600 vai via-blue-400 to-pink-500 text-transparent bg-clip-text mb-5 lg:mb-10 border-4  w-fit mx-auto py-2 px-5 ">
        {loadedData[0].category}
      </h1>

      <div className="mt-5 md:mt-[30px] lg:mt-[40px] grid md:grid-cols-2 lg:grid-cols-3 md:gap-6 lg:gap-8 lg:mx-10">
        {loadedData.map((i) => {
          const { _id, name, price, rating, category, photo, customization, stock } = i;
          return (
            <div key={_id} className=" relative font-lora mb-3">
              <div className="bg-base-300 p-5 rounded-md">
                <img
                  className="w-auto md:w-[338px] lg:w-[420px] h-auto md:h-[180px] lg:h-[250px] rounded-md object-cover mb-5"
                  src={photo}
                />
                <div className="py-1 px-3 bg-red-700 absolute top-[30px] right-[1.75rem] rounded-md">
                  <p className="text-[16px] font-medium text-white">{stock}</p>
                </div>
                <h5 className="text-[23px] font-bold">{name}</h5>
                <div className="flex font-medium gap-2">
                  <FaPaintBrush className="text-xl" />
                  <p className="text-base font-medium">{category}</p>
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
                  <Link to={`/artsDetails/${name}`}>
                    <button className="bg-gradient-to-l from-rose-400 to-indigo-500 w-full py-2 px-4 md:py-[9px] md:px-11 cursor-pointer text-white md:text-base lg:text-xl font-medium rounded-lg">
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
