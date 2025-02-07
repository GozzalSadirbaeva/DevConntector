"use client";
import { baseUrl } from "@/utils/api";
import axios from "axios";
import { useRouter } from "next/navigation";

function Login() {
  const route = useRouter();

  const onSubmits = async (e) => {
    e.preventDefault();
    let email = e.target[0].value;
    let password = e.target[1].value;
    try {
      let res = await axios.post(`${baseUrl}/auth`, {
        email,
        password,
      });
      if (res.status === 200) {
        localStorage.setItem("accessToken", res.data.token);
        route.push("/dashboard");
      }
      console.log(res);
    } catch (error) {
      console.log(error);
    }
  };
  if (localStorage.getItem("accessToken")) {
    route.push("/dashboard");
  }
  return (
    <div className="flex max-w-[1440px] w-full mx-auto my-0">
      <div>
        <img src="/login4.jpg" alt="" className="w-[90%]" />
      </div>
      <div className="bg-[#7ba1c392] px-10 py-5 rounded-lg mt-20 mb-10 pt-14 mr-20">
        <h2 className="text-2xl text-center p-4 font-semibold text-[#0f3352]">
          Login
        </h2>
        <form
          action=""
          onSubmit={onSubmits}
          className="flex flex-col gap-3 items-center "
        >
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
          <button
            type="submit"
            className="px-4 py-2 bg-[#0f3352] text-white rounded-md mt-3"
          >
            Submit
          </button>
          <p className="text-[#0f3352]">
            Don't have an account?{" "}
            <span
              onClick={() => route.push("/register")}
              className="underline cursor-pointer "
            >
              Sign Up
            </span>{" "}
          </p>
        </form>
      </div>
    </div>
  );
}

export default Login;
