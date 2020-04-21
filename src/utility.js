import { useState, useEffect } from "react";

const API_Company = "https://match-labs-api.herokuapp.com/api/no_auth/labs";
const API_Candidates = "https://match-labs-api.herokuapp.com/api/no_auth/candidates";

function useFetch(url) {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  async function fetchUrl() {
    const response = await fetch(url);
    const json = await response.json();
    setData(json);
    setLoading(false);
  }

  useEffect(() => {
    fetchUrl();
  }, []);

  return [data, loading];
}
export { useFetch, API_Company, API_Candidates };
