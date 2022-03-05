import React from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import Result from "./Result";

const Main = () => {
  const renderMultiRoutes = ({ element, paths }) =>
    paths.map((path) => <Route key={path} path={path} element={element} />);
  return (
    <div>
      <Routes>
        <Route path="/" element={<Navigate to="/search" />} />
        {renderMultiRoutes({
          paths: ["/search", "/images", "news", "videos"],
          element: <Result />,
        })}
      </Routes>
    </div>
  );
};

export default Main;
