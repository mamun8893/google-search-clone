import React, { useState } from "react";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Main from "./components/Main";

const TheLayout = () => {
  const [darkTheme, setDarkTheme] = useState(false);
  return (
    <div className={darkTheme ? "dark" : ""}>
      <div className=" dark:bg-gray-900 dark:text-gray-200 min-h-screen">
        <header>
          <Navbar darkTheme={darkTheme} setDarkTheme={setDarkTheme} />
        </header>
        <main>
          <Main></Main>
        </main>
        <footer>
          <Footer />
        </footer>
      </div>
    </div>
  );
};

export default TheLayout;
