"use client";

import Main from "@/components/Main";
import { useRouter } from "next/navigation";


function Home() {
  const route = useRouter();
  
  return (
    <div >
      <Main />
    </div>
  );
}

export default Home;
