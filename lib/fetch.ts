import { useCallback, useEffect, useState } from "react";

export const fetchApi = async (url: string, option?: RequestInit) => {
  try {
    const response = await fetch(url, option);

    if (!response.ok) {
      new Error(`HTTP error: ${response.status}`);
    }

    return await response.json();
  } catch (e) {
    console.error("Fetch Error", e);
    throw e;
  }
};

export const useFetch = <T>(url: string, options?: RequestInit) => {
  const [data, setData] = useState<T | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const fetchData = useCallback(async () => {
    setLoading(true);
    setError(null);
    try {
      const result = await fetchApi(url, options);
      setData(result.data);
    } catch (error) {
      setError((error as Error).message);
    } finally {
      setLoading(false);
    }
  }, [url, options]);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  return { data, loading, error, refetch: fetchData };
};
