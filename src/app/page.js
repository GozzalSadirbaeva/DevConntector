"use client";

import Main from "@/components/Main";
import { useRouter } from "next/navigation";
// import { useRouter } from "next/router";
// import { Main } from "next/document";

function Home() {
  const route = useRouter();
  // if (!localStorage.getItem("accessToken")) {
  //   route.push("/login");
  // }
  return (
    <div >
      <Main />
    </div>
  );
}

export default Home;
