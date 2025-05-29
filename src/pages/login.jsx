import { useState } from "react";
import { useForm } from "react-hook-form";
import axios from "axios";
import { Link, useLocation, useNavigate } from "react-router";
import classNames from "classnames";
import { MdErrorOutline } from "react-icons/md";
import { FaEye, FaEyeSlash, FaGithub, FaGoogle } from "react-icons/fa";
import UseAuth from "../hooks/useAuth";
import Swal from "sweetalert2";
import { Helmet } from "react-helmet";

export default function Login() {
  const { loginUser, loader, googleLogin, githubLogin } = UseAuth();
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const location = useLocation();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  // login user
  const onSubmit = async (data) => {
    const { email, password } = data;
    try {
      const result = await loginUser(email, password);
      console.log(result.user);
      const { data } = await axios.post(
        `${import.meta.env.VITE_API_URL}/jwt`,
        {
          email: result?.user?.email,
        },
        { withCredentials: true }
      );
      console.log(data);
      navigate(location?.state, { replace: true });
      Swal.fire({
        title: "Success",
        text: "SignIn successfully done",
        icon: "success",
        confirmButtonText: "ok!",
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

  // google sign
  const handleGoogleSignIn = async () => {
    try {
      // 1. google sign in from firebase
      const result = await googleLogin();
      console.log(result.user);

      //2. get token from server using email
      const { data } = await axios.post(
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
      navigate(location?.state, { replace: true });
    } catch (err) {
      console.log(err);
      Swal.fire({
        title: "Error",
        text: "Something is Wrong",
        icon: "error",
        confirmButtonText: "ok!",
      });
    }
  };

  // github sign
  const handleGithubSignIn = async () => {
    try {
      // 1. google sign in from firebase
      const result = await githubLogin();
      console.log(result.user);

      //2. get token from server using email
      const { data } = await axios.post(
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
      navigate(location?.state, { replace: true });
    } catch (err) {
      console.log(err);
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
        <title>Art Gallery | Login</title>
      </Helmet>

      <h1 className="text-center font-bold text-3xl text-black pb-4">This is LogIn Page</h1>

      <form onSubmit={handleSubmit(onSubmit)} className="container mx-auto py-5">
        <label className="text-xl font-semibold my-3">Email</label>
        <div className="relative">
          <input
            className={classNames("w-full border border-gray-400 rounded-md p-4 text-xl mb-3 outline-none", {
              "is-invalid": errors.email,
            })}
            type="email"
            name="email"
            placeholder="Enter Your email"
            {...register("email", { required: true })}
          />
          <MdErrorOutline className={classNames("error", { "error-icon": errors.email })}></MdErrorOutline>
        </div>
        {errors.email && <span className="text-red-600 mb-3 text-xl font-semibold">This field is required</span>}
        <br />
        <div className="relative">
          <label className="text-xl font-semibold py-3">Password</label>
          <input
            className={classNames("w-full border border-gray-400 rounded-md p-4 text-xl mb-3 outline-none", {
              "is-invalid": errors.password,
            })}
            type={showPassword ? "text" : "password"}
            name="password"
            placeholder="Password"
            {...register("password", { required: true })}
          />
          <MdErrorOutline className={classNames("error", { "error-icon": errors.password })}></MdErrorOutline>
          {errors.password && <span className="text-red-600 mb-3 text-xl font-semibold">This field is required</span>}
          <span onClick={() => setShowPassword(!showPassword)} className="text-2xl absolute right-3 top-12">
            {showPassword ? <FaEye></FaEye> : <FaEyeSlash></FaEyeSlash>}
          </span>
          <br />
        </div>
        <div className="flex items-center py-4 pb-5">
          <p className="text-xl font-semibold hover:underline">Forget Password</p>
        </div>
        <button className="btn w-full h-12 text-xl  border-pink-400 hover:bg-linear-65 from-purple-400 to-pink-500 hover:text-white hover:border-transparent">
          LogIn
        </button>
      </form>
      <p className="text-xl font-bold mx-auto">
        New Here?{" "}
        <Link className="text-blue-700" to="/register">
          Please Register Now
        </Link>
      </p>
      <h3 className="text-center text-2xl font-bold pt-8 divider">continue with </h3>
      <div className="flex justify-around py-5">
        <button onClick={handleGoogleSignIn} className="flex mx-3 btn btn-outline text-lg">
          <FaGoogle></FaGoogle>Google
        </button>
        <button onClick={handleGithubSignIn} className="flex mr-3 btn btn-outline btn-neutral text-lg">
          <FaGithub size={24}></FaGithub>Github
        </button>
      </div>
    </div>
  );
}
