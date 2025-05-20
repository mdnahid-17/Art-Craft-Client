import { useState } from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router";
import classNames from "classnames";
import { MdErrorOutline } from "react-icons/md";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import ReactPasswordChecklist from "react-password-checklist";
import UseAuth from "../hooks/useAuth";
import axios from "axios";
import Swal from "sweetalert2";
import { Helmet } from "react-helmet";

export default function Register() {
  const { createUser, loader } = UseAuth();
  const [showPassword, setShowPassword] = useState(false);
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    const { email, password } = data;

    try {
      createUser(email, password).then((result) => {
        console.log(result.user);
        const { data } = axios.post(
          `${import.meta.env.VITE_API_URL}/jwt`,
          {
            email: result?.user?.email,
          },
          { withCredentials: true }
        );
        console.log(data);
        Swal.fire({
          title: "Success",
          text: "SignIn successfully done",
          icon: "success",
          confirmButtonText: "ok!",
        });
        navigate("/");
      });
    } catch (error) {
      console.error(error);
      Swal.fire({
        title: "Error",
        text: "Something is Wrong",
        icon: "error",
        confirmButtonText: "ok!",
      });
    }
  };
 
  if (loader) {
    return <h1 className="text-2xl py-4 text-center font-semibold">Loading...</h1>;
  }

  return (
    <div className="lg:w-1/2 border border-linear-65 from-purple-500 to-pink-500 border-purple-500 mx-auto p-10 my-10 rounded-xl">
       <Helmet>
        <title>Art Gallery | Register</title>
      </Helmet>
      <h1 className="text-center font-bold text-3xl text-black pb-4">This is Register Page</h1>

      <form onSubmit={handleSubmit(onSubmit)} className="container mx-auto py-5 space-y-3">
        <label htmlFor="fullName" className="text-xl font-semibold">
          Name
        </label>
        <div className="relative">
          <input
            className={classNames("w-full border border-gray-400 rounded-md p-4 text-xl mb-3 outline-none", {
              "is-invalid": errors.fullName,
            })}
            type="text"
            name="fullName"
            id="fullName"
            placeholder="Enter Your name"
            {...register("fullName", {
              required: "This field is required",
              minLength: {
                value: 4,
                message: "Name at list 4 characters",
              },
            })}
          />
          <MdErrorOutline className={classNames("error", { "error-icon": errors.fullName })}></MdErrorOutline>
        </div>
        {errors.fullName && <span className="text-red-600 mb-3 text-xl font-semibold">{errors.fullName.message}</span>}
        <br />
        <label className="text-xl font-semibold">Photo Url</label>
        <div className="relative">
          <input
            className={classNames("w-full border border-gray-400 rounded-md p-4 text-xl mb-3 outline-none", {
              "is-invalid": errors.photoUrl,
            })}
            type="text"
            name="photoUrl"
            placeholder="Enter Your photo link (small-link)"
            {...register("photoUrl", { required: true })}
          />
          <MdErrorOutline className={classNames("error", { "error-icon": errors.photoUrl })}></MdErrorOutline>
        </div>
        {errors.photoUrl && <span className="text-red-600 mb-3 text-xl font-semibold">This field is required</span>}
        <br />
        <label className="text-xl font-semibold">Email</label>
        <div className="relative">
          <input
            className={classNames("w-full border border-gray-400 rounded-md p-4 text-xl mb-3 outline-none", {
              "is-invalid": errors.email,
            })}
            type="email"
            name="email"
            placeholder="Enter Your email"
            {...register("email", {
              required: "This field is required",
              pattern: {
                value: /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
                message: "Enter your valid email address",
              },
            })}
          />
          <MdErrorOutline className={classNames("error", { "error-icon": errors.email })}></MdErrorOutline>
        </div>
        {errors.email && <span className="text-red-600 mb-3 text-xl font-semibold">{errors.email.message}</span>}
        <br />
        <div className="relative">
          <label className="text-xl font-semibold">Password</label>
          <input
            className={classNames("w-full border border-gray-400 rounded-md p-4 text-xl mb-3 outline-none", {
              "is-invalid": errors.password,
            })}
            type={showPassword ? "text" : "password"}
            name="password"
            placeholder="Password"
            onClick={(e) => setPassword(e.target.value)}
            {...register("password", {
              required: "This field is required",
              pattern: {
                value: /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/,
                message:
                  "password contains at least eight characters, including at least one number and includes both lower and uppercase letters and special characters",
              },
            })}
          />
          <MdErrorOutline className={classNames("error", { "error-icon": errors.password })}></MdErrorOutline>
          {errors.password && <span className="text-red-600 mb-3 text-xl font-semibold">{errors.password.message}</span>}
          <span onClick={() => setShowPassword(!showPassword)} className="text-2xl absolute right-3 top-12">
            {showPassword ? <FaEye></FaEye> : <FaEyeSlash></FaEyeSlash>}
          </span>
          <br />
        </div>
        <ReactPasswordChecklist
          rules={["minLength", "specialChar", "number", "capital", "lowercase"]}
          minLength={8}
          value={password}
        />
        <button className="btn w-full h-12 text-xl  border-pink-400 hover:bg-linear-65 from-purple-400 to-pink-500 hover:text-white hover:border-transparent">
          Register
        </button>
      </form>
      <p className="text-xl font-bold text-center">
        New Here?{" "}
        <Link className="text-blue-700" to="/login">
          Please Login
        </Link>
      </p>
    </div>
  );
}
