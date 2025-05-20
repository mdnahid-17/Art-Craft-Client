import axios from "axios";
import UseAuth from "../hooks/useAuth";
import Swal from "sweetalert2";
import { Helmet } from "react-helmet";

export default function AddCraft() {
  const { user } = UseAuth();

  const handleAddPainting = async (e) => {
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
    const userName = user?.displayName;
    const email = user?.email;

    const newCraft = { name, price, rating, time, category, photo, customization, stock, description, userName, email };

    try {
      const { data } = await axios.post(`${import.meta.env.VITE_API_URL}/arts`, newCraft);
      console.log(data);
      Swal.fire({
        title: "Success",
        text: "Painting Add Successfully Done",
        icon: "success",
        confirmButtonText: "OK!",
      });
       form.reset();
    } catch (error) {
      console.log(error);
      Swal.fire({
        title: "Error",
        text: "Something is Wrong",
        icon: "error",
        confirmButtonText: "ok!",
      });
    }
  };


  return (
    <div className="my-10 md:my-[50px] lg:my-[100px] mx-14 container">
       <Helmet>
        <title>Art Gallery | Add Craft </title>
      </Helmet>
      <form
        onSubmit={handleAddPainting}
        className="border border-linear-65 from-purple-500 to-pink-500 border-purple-500 py-10 px-14 rounded-xl"
      >
        <h1 className="text-center text-2xl md:text-[35px] font-semibold bg-gradient-to-r from-purple-600 vai via-blue-400 to-pink-500 text-transparent bg-clip-text mb-5 md:mb-10">
          Create New Painting
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="font-rale md:text-xl ">Name</label>
            <input
              type="text"
              name="name"
              required
              placeholder="Enter painting name"
              className="input input-info mt-2 py-[11px] pl-[11px]   text-base w-full font-rale rounded-md "
            />
          </div>
          <div className=" flex flex-col">
            <label className="font-rale md:text-xl">Subcategory Name</label>
            <select
              name="category"
              required
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
              required
              placeholder="Enter photo url"
              className="input input-info mt-2 py-[11px] pl-[11px]   text-base w-full font-rale rounded-md "
            />
          </div>
          <div>
            <label className=" font-rale md:text-xl">Price</label>
            <input
              type="number"
              name="price"
              required
              placeholder="Enter painting price"
              className="input input-info mt-2 py-[11px] pl-[11px]   text-base w-full font-rale rounded-md "
            />
          </div>
          <div>
            <label className=" font-rale md:text-xl">customization</label>
            <select
              name="customization"
              required
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
              required
              placeholder="Enter painting rating"
              className="input input-info mt-2 py-[11px] pl-[11px]   text-base w-full font-rale rounded-md "
            />
          </div>
          <div>
            <label className=" font-rale md:text-xl">Processing Time(hr)</label>
            <input
              type="number"
              name="time"
              required
              placeholder="Enter painting processing time"
              className="input input-info mt-2 py-[11px] pl-[11px]   text-base w-full font-rale rounded-md "
            />
          </div>
          <div>
            <label className=" font-rale md:text-xl">Stock Status</label>
            <select name="stock" required className="select select-info mt-2 pl-[11px]  text-base w-full font-rale rounded-md ">
              <option>In stock</option>
              <option>Made to order</option>
            </select>
          </div>

          <div className="col-span-full">
            <label className=" font-rale md:text-xl">Description</label>
            <textarea
              name="description"
              required
              className="textarea textarea-info text-base w-full font-rale rounded-md h-32 pl-[11px]"
              placeholder="write a short description here..."
            ></textarea>
          </div>
          <div className="col-span-full mt-5 flex justify-center lg:justify-end">
            <input
              type="submit"
              value="Add Painting"
              className="py-[10px] bg-linear-65 from-purple-500 to-pink-500 text-center rounded-[5px] w-full lg:w-auto px-0 lg:px-[100px] cursor-pointer text-white text-2xl font-bold"
            />
          </div>
        </div>
      </form>
    </div>
  );
}
