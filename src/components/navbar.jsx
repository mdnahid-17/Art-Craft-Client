import { Link, NavLink } from "react-router";
import UseAuth from "../hooks/useAuth";
import { toast } from "react-toastify";
import { useEffect, useState } from "react";

export default function Navbar() {
  const { user, logOutUser } = UseAuth();
  const [theme, setTheme] = useState("light");
  const navLinks = (
    <>
      <li>
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive ? "text-base text-purple-500 font-semibold" : "text-base font-semibold mx-2 hover:text-pink-500"
          }
        >
          Home
        </NavLink>
      </li>
      <li>
        <NavLink
          to="all-items"
          className={({ isActive }) =>
            isActive ? "text-base text-purple-500 font-semibold" : "text-base font-semibold mx-2 hover:text-pink-500"
          }
        >
          All Art & craft Items
        </NavLink>
      </li>
      <li>
        <NavLink
          to="add-craft"
          className={({ isActive }) =>
            isActive ? "text-base text-purple-500 font-semibold" : "text-base font-semibold mx-2 hover:text-pink-500"
          }
        >
          Add Craft Item
        </NavLink>
      </li>
      <li>
        <NavLink
          to="my-list"
          className={({ isActive }) =>
            isActive ? "text-base text-purple-500 font-semibold" : "text-base font-semibold mx-2 hover:text-pink-500"
          }
        >
          My Art&Craft List
        </NavLink>
      </li>
    </>
  );
  const handleToggle = (e) => {
    if (e.target.checked) {
      setTheme("synthwave");
    } else {
      setTheme("light");
    }
  };

  useEffect(() => {
    localStorage.setItem("theme", theme);
    const localTheme = localStorage.getItem("theme");
    document.querySelector("html").setAttribute("data-theme", localTheme);
  }, [theme]);

  const handleLogOt = () => {
    logOutUser()
      .then(() => {
        toast.success("user successfully logout!");
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <div className="navbar bg-base-100 lg:px-10 shadow-sm">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              {" "}
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />{" "}
            </svg>
          </div>
          <ul tabIndex={0} className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
            {navLinks}
          </ul>
        </div>
        <Link to="/" className="btn btn-ghost text-xl tracking-tighter">
          <span className="text-purple-500">Art</span> &<span className="text-pink-500">Craft</span>
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{navLinks}</ul>
      </div>
      <div className="navbar-end">
        {/* dark-theme */}
        <label className="swap swap-rotate pr-3">
          <input type="checkbox" onChange={handleToggle} className="theme-controller" />

          {/* sun icon */}
          <svg className="swap-off fill-current w-8 h-8 md:w-8 md:h-8" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
            <path d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z" />
          </svg>
          {/* moon icon */}
          <svg className="swap-on fill-current w-8 h-8 md:w-8 md:h-8" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
            <path d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z" />
          </svg>
        </label>

        <div className="dropdown dropdown-end flex z-10">
          <div
            tabIndex={0}
            role="button"
            className={user ? "tooltip tooltip-left md:tooltip-bottom border-4 border-blue-500 rounded-full cursor-pointer" : ""}
            data-tip={user ? user?.displayName : user?.email}
          >
            <div className="w-8 h-8 md:w-10 md:h-10 rounded-full cursor-pointer">
              <img className="rounded-full w-full h-full" src={user?.photoURL || "https://i.ibb.co.com/GFXfKpR/user.png"} />
            </div>
          </div>
          <ul
            tabIndex={0}
            className="mt-14 md:mt-16 z-10 p-2 shadow menu menu-sm dropdown-content bg-white rounded-box w-52 text-center"
          >
            <li className="py-1 font-semibold">{user?.displayName || user?.email}</li>
            <li className="text-center w-full py-1">
              {user ? (
                <a
                  onClick={handleLogOt}
                  className="border-4 border-black text-black font-semibold text-center w-full flex justify-center"
                >
                  SignOut
                </a>
              ) : (
                <Link
                  to={"/login"}
                  className="border-4 border-black text-black font-semibold text-center w-full flex justify-center"
                >
                  SignIn
                </Link>
              )}
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
