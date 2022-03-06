import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { useResultContext } from "../../context/ResultContextProvider";
import Loading from "./Loading";

const Result = () => {
  const { isLoading, getResult, results, searchTerm } = useResultContext();
  const location = useLocation();

  useEffect(() => {
    getResult("/search/q=Javascript Mastery&num=40");
  }, []);

  if (isLoading) return <Loading />;

  switch (location.pathname) {
    case "/search":
      return (
        <div className="flex flex-wrap justify-between space-y-6 sm:px-56">
          {results?.results?.map(({ link, title }, index) => (
            <div key={index} className="md:w-2/5 w-full">
              <a href={link} target="_blank" rel="noreferrer">
                <p className="text-sm">
                  {link.length > 30 ? link.substring(0, 30) : link}
                </p>
                <p className="text-lg hover:unserline dark:text-blue-300 text-blue-700">
                  {title}
                </p>
              </a>
            </div>
          ))}
        </div>
      );

    default:
      return "Error";
  }
};

export default Result;
