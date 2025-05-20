import { Helmet } from "react-helmet";
import { Link, useLoaderData } from "react-router";

export default function AllItems() {
  const data = useLoaderData();

  console.log(data);

  return (
    <div className="container my-10 md:my-[70px] lg:my-[100px]">
      <Helmet>
        <title>Art Gallery | All Items</title>
      </Helmet>
      <h1 className="text-center text-2xl lg:text-[35px] font-semibold bg-gradient-to-r from-purple-600 vai via-blue-400 to-pink-500 text-transparent bg-clip-text mb-5 md:mb-10 border-4  w-fit mx-auto py-2 px-5 ">
        All Art And Craft Items
      </h1>

      <div className="container overflow-x-auto mx-10">
        <table className="table-sm md:table text-xs">
          {/* head */}
          <thead>
            <tr className="text-blue-500">
              <th className="hidden md:block text-xl">NO</th>
              <th className="text-xl">CATEGORY</th>
              <th className="text-xl">PRICE</th>
              <th className="text-xl">TIME</th>
              <th className="hidden md:block text-xl">RATING</th>
              <th className="text-xl">ACTION</th>
            </tr>
          </thead>
          {data.map((craft, idx) => {
            const { _id, name, price, rating, time, category } = craft;
            return (
              <tbody key={_id}>
                <tr className="text-center md:text-left ">
                  <th className="hidden md:block text-base">{idx + 1}</th>
                  <td className="text-xl font-semibold ">{category}</td>
                  <td className="text-xl font-semibold">{price}</td>
                  <td className="text-xl font-semibold">{time}</td>
                  <td className="hidden md:block text-xl font-semibold">{rating}</td>
                  <td>
                    <Link to={`/artsDetails/${name}`}>
                      <button className="btn text-base bg-gradient-to-tr from-purple-300 to-pink-300 text-black font-black">
                        View Details
                      </button>
                    </Link>
                  </td>
                </tr>
              </tbody>
            );
          })}
        </table>
      </div>
    </div>
  );
}
