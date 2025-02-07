"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import "./style.css";
import { RiLogoutCircleRLine } from "react-icons/ri";

function Navbar() {
  const token = localStorage.getItem("accessToken");
  const pathname = usePathname();
  const route = useRouter();

  const logOut = () => {
    localStorage.removeItem("accessToken");
    route.push("/");
  };

  return (
    <div className="flex justify-between p-5 px-8 bg-slate-800 text-gray-100">
      <Link
        className={`${
          pathname === "/" ? "active" : ""
        }text-gray-100 text-2xl font-bold `}
        href={"/"}
      >
        {"</> "}DevConnector
      </Link>
      <div className="flex gap-5">
        <Link
          className={`${
            pathname === "/developers" ? "active" : ""
          } text-lg font-medium`}
          href={"/developers"}
        >
          Developers
        </Link>
        {!token ? (
          <div className="flex gap-5">
            <Link
              className={`${
                pathname === "/register" ? "active" : ""
              } text-lg font-medium`}
              href={"/register"}
            >
              Register
            </Link>
            <Link
              className={`${
                pathname === "/login" ? "active" : ""
              } text-lg font-medium`}
              href={"/login"}
            >
              Login
            </Link>
          </div>
        ) : (
          <div className="flex gap-5 items-center">
            <Link
              className={`${
                pathname === "/posts" ? "active" : ""
              } text-lg font-medium`}
              href={"/posts"}
            >
              Posts
            </Link>
            <Link
              className={`${
                pathname === "/dashboard" ? "active" : ""
              } text-lg font-medium`}
              href={"/dashboard"}
            >
              Dashboard
            </Link>
            <button
              onClick={logOut}
              className={`${
                pathname === "/" ? "active" : ""
              } text-lg font-medium`}
            >
             <RiLogoutCircleRLine size = '28px'/>
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

export default Navbar;
