import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { useResultContext } from "../../context/ResultContextProvider";
import Loading from "./Loading";

const Result = () => {
  const { isLoading, getResult, result, searchTerm } = useResultContext();
  const location = useLocation();

  useEffect(() => {
    getResult("/search/q=Javascript Mastery&num=40");
  }, []);

  if (isLoading) return <Loading />;

  switch (location.pathname) {
    case "/search":
      return "search";

    default:
      return "Error";
  }

  return (
    <div>
      <h2>Result</h2>
    </div>
  );
};

export default Result;
