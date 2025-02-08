"use client";
import { baseUrl } from "@/utils/api";
import axios from "axios";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

function Register() {
  const route = useRouter();

  useEffect(() => {
    if (typeof window !== "undefined" && localStorage.getItem("accessToken")) {
      route.push("/dashboard");
    }
  }, []);

  const onSubmits = async (e) => {
    e.preventDefault();
    let name = e.target[0].value;
    let email = e.target[1].value;
    let password = e.target[2].value;

    try {
      let res = await axios.post(`${baseUrl}/users`, { name, email, password });

      if (res.status === 200) {
        // ✅ `window` borligini tekshirib, tokenni saqlaymiz
        if (typeof window !== "undefined") {
          localStorage.setItem("accessToken", res.data.token);
          route.push("/dashboard"); // Dashboard sahifasiga o'tish
        }
      }
    } catch (error) {
      console.error("Registration error:", error);
    }
  };

  return (
    <div className="flex gap-[130px] max-w-[1440px] w-full mx-auto my-0">
      <div className="">
        <img src="/sign9.avif" alt="" className="pl-20" />
      </div>
      <div className="bg-[#7ba1c392] px-10 py-3 rounded-lg mt-20 mb-10 pt-8 mr-20 ">
        <h2 className="text-2xl text-center p-4 font-semibold text-[#0f3352]">
          Sign Up
        </h2>
        <p className="text-center pb-3 text-lg text-[#0f3352]">
          Create Your Account
        </p>
        <form
          action=""
          onSubmit={onSubmits}
          className="flex flex-col gap-3 items-center "
        >
          <input
            type="text"
            placeholder="Name"
            className="px-2 py-2 rounded-lg outline-none w-[300px]"
          />
          <input
            type="text"
            placeholder="Email"
            className="px-2 py-2 rounded-lg outline-none w-[300px]"
          />
          <input
            type="password"
            placeholder="Password"
            className="px-2 py-2 rounded-lg outline-none w-[300px]"
          />
          <input
            type="password"
            placeholder="Confirm password"
            className="px-2 py-2 rounded-lg outline-none w-[300px]"
          />
          <button
            type="submit"
            className="px-4 py-2 bg-[#0f3352] text-white rounded-md mt-3"
          >
            Register
          </button>
          <p className="text-[#0f3352]">
            Already have an account? {""}
            <span
              onClick={() => route.push("/login")}
              className="underline cursor-pointer "
            >
              Sign In
            </span>{" "}
          </p>
        </form>
      </div>
    </div>
  );
}

export default Register;
