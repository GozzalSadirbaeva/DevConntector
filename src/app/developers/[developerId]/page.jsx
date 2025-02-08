"use client";
import { baseUrl } from "@/utils/api";
import axios from "axios";
import { useEffect } from "react";

const DetailPage = () => {
  useEffect(() => {
    const users = async () => {
      try {
        const res = await axios.get(`${baseUrl}/profile/user/:${user_id}`);
        console.log(res);
      } catch (error) {
        console.error("Error fetching developers:", error);
      }
    };

    users();
  }, []);
  return <div>Detail Page</div>;
};

export default DetailPage;
