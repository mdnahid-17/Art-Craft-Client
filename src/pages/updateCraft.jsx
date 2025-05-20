import axios from "axios";
import { Helmet } from "react-helmet";
import { useLoaderData } from "react-router";
import Swal from "sweetalert2";

export default function UpdateCraft() {
  const loadedUpdateCrafts  = useLoaderData();
  console.log(loadedUpdateCrafts );
  const { _id, name, price, category, photo, stock, customization, rating, time, description } = loadedUpdateCrafts ;

  const handleUpdatePainting = async(e) => {
    e.preventDefault();
    const form = e.target;

    const name = form.name.value;
    const price = form.price.value;
    const rating = form.rating.value;
    const time = form.time.value;
    const photo = form.photo.value;
    const category = form.category.value;
    const customization = form.customization.value;
    const stock = form.stock.value;
    const description = form.description.value;

    const updateCrafts = { name, price, rating, time, category, photo, customization, stock, description };

    try {
      const { data } = await axios.put(`${import.meta.env.VITE_API_URL}/arts/${_id}`, updateCrafts);
      console.log(data);
      if (data.modifiedCount > 0) {
        Swal.fire({
          title: "Success!",
          text: "Painting updated successfully!",
          icon: "success",
          confirmButtonText: "OK",
        });
      }
      form.reset();
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <div>
       <Helmet>
        <title>Update id | {_id}</title>
      </Helmet>
      <div className="mx-10 my-7 md:my-[50px] lg:my-[50px] container">
        <form onSubmit={handleUpdatePainting} className="border-2 border-indigo-400 py-10 px-14 rounded-xl">
          <h1 className="text-center text-2xl lg:text-[35px] font-semibold bg-gradient-to-r from-purple-600 vai via-blue-400 to-pink-500 text-transparent bg-clip-text mb-5 md:mb-10">
            Update New Painting
          </h1>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="font-rale md:text-xl ">Name</label>
              <input
                type="text"
                name="name"
                defaultValue={name}
                placeholder="Enter painting name"
                className="input input-info mt-2 py-[11px] pl-[11px] text-base w-full font-rale rounded-md"
              />
            </div>
            <div className="flex flex-col">
              <label className="font-rale md:text-xl">Subcategory Name</label>
              <select
                name="category"
                defaultValue={category}
                className="select select-info mt-2 pl-[11px]  text-base w-full font-rale rounded-md "
              >
                <option>Landscape Painting</option>
                <option>Portrait Drawing</option>
                <option>Water Color Painting</option>
                <option>Oil Painting</option>
                <option>Charcoal Sketching</option>
                <option>Cartoon Drawing</option>
              </select>
            </div>
            <div>
              <label className=" font-rale md:text-xl">Image</label>
              <input
                type="url"
                name="photo"
                defaultValue={photo}
                placeholder="Enter photo url"
                className="input input-info mt-2 py-[11px] pl-[11px]   text-base w-full font-rale rounded-md "
              />
            </div>
            <div>
              <label className=" font-rale md:text-xl">Price</label>
              <input
                type="number"
                name="price"
                defaultValue={price}
                placeholder="Enter painting price"
                className="input input-info mt-2 py-[11px] pl-[11px]   text-base w-full font-rale rounded-md "
              />
            </div>
            <div>
              <label className=" font-rale md:text-xl">customization</label>
              <select
                name="customization"
                defaultValue={customization}
                className="select select-info mt-2 pl-[11px]  text-base w-full font-rale rounded-md "
              >
                <option>Yes</option>
                <option>No</option>
              </select>
            </div>
            <div>
              <label className=" font-rale md:text-xl">Rating</label>
              <input
                type="text"
                name="rating"
                defaultValue={rating}
                placeholder="Enter painting rating"
                className="input input-info mt-2 py-[11px] pl-[11px]   text-base w-full font-rale rounded-md "
              />
            </div>
            <div>
              <label className=" font-rale md:text-xl">Processing Time(hr)</label>
              <input
                type="number"
                name="time"
                defaultValue={time}
                placeholder="Enter painting processing time"
                className="input input-info mt-2 py-[11px] pl-[11px]   text-base w-full font-rale rounded-md "
              />
            </div>
            <div>
              <label className=" font-rale md:text-xl">Stock Status</label>
              <select
                name="stock"
                defaultValue={stock}
                className="select select-info mt-2 pl-[11px]  text-base w-full font-rale rounded-md "
              >
                <option>In stock</option>
                <option>Made to order</option>
              </select>
            </div>

            <div className="col-span-full">
              <label className=" font-rale md:text-xl">Description</label>
              <textarea
                name="description"
                defaultValue={description}
                className="textarea textarea-info text-base w-full font-rale rounded-md h-32 pl-[11px]"
                placeholder="write a short description here..."
              ></textarea>
            </div>
            <div className="col-span-full mt-5 flex justify-center lg:justify-end">
              <input
                type="submit"
                value="Update Painting"
                className="py-[10px] bg-gradient-to-l from-blue-300 to-indigo-500 text-center rounded-[5px] w-full lg:w-auto px-0 lg:px-[100px] cursor-pointer text-black text-2xl font-bold"
              />
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
