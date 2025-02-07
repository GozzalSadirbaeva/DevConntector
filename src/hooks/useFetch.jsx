"use client";

import axios from "axios";
import React, { useEffect, useState } from "react";

function useFetch(url) {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  async function fetchData() {
    setError(null);
    setLoading(true);
    try {
      let res = axios.get("/test");
      if (res.ok) {
        setData(res.data);
      }
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    fetchData();
  }, [url]);
  return { data, error, loading, refetch: fetchData };
}

export default useFetch;
