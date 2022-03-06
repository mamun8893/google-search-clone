import { createContext, useContext, useState } from "react";

const ResultContext = createContext();
const baseUrl = "https://google-search3.p.rapidapi.com/api/v1";

export const ResultContextProvider = ({ children }) => {
  const [results, setResult] = useState([]);
  const [isLoading, setIsloading] = useState(false);
  const [searchTerm, setSearchTerm] = useState("elon mask");

  const getResult = async (type) => {
    setIsloading(true);
    const res = await fetch(`${baseUrl}${type}`, {
      method: "GET",
      headers: {
        "x-user-agent": "desktop",
        "x-proxy-location": "EU",
        "x-rapidapi-host": "google-search3.p.rapidapi.com",
        "x-rapidapi-key": "106c967085mshc77ebd4c9fb561ap191a4djsn94ecdf971199",
      },
    });
    const data = await res.json();

    if (type.includes("/news")) {
      setResult(data.entries);
    } else if (type.includes("/images")) {
      setResult(data.image_results);
    } else {
      setResult(data.results);
    }

    setIsloading(false);
  };

  return (
    <ResultContext.Provider
      value={{ getResult, results, isLoading, searchTerm, setSearchTerm }}
    >
      {children}
    </ResultContext.Provider>
  );
};

export const useResultContext = () => useContext(ResultContext);
