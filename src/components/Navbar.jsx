import React, { useState } from "react";
import assets from "../assets/assets";
import ThemeToggleBtn from "./ThemeToggleBtn";

// eslint-disable-next-line no-unused-vars
const Navbar = ({ theme, setTheme }) => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="flex justify-between items-center px-4 sm:px-12 lg:px-24 xl:px-40 py-4 sticky top-0 z-20 backdrop-blur-xl font-medium bg-white/50 dark:bg-gray-900/90 ">
      <img
        src={theme == "dark" ? assets.logo_dark : assets.logo}
        alt=""
        className="w-32 sm:w-40"
      />

      <div
        className={`flex gap-5 transition-all
              text-gray-700 dark:text-white
              top-0 right-0 bottom-0

              max-sm:fixed max-sm:flex-col ${
                !sidebarOpen
                  ? "max-sm:w-0 overflow-hidden"
                  : "max-sm:w-60 max-sm:pl-10"
              }

              max-sm:min-h-screen max-sm:h-full max-sm:bg-primary max-sm:text-white max-sm:pt-20

              sm:text-sm sm:items-center`}
      >
        <img
          src={assets.close_icon}
          alt="close-icon"
          className="w-5 absolute right-4 top-4 sm:hidden"
          onClick={() => setSidebarOpen(false)}
        />

        <a
          href="#"
          className="sm:hover:border-b sm:hover:scale-105 transition duration-150"
          onClick={() => setSidebarOpen(false)}
        >
          Home
        </a>
        <a
          href="#services"
          className="sm:hover:border-b sm:hover:scale-105 transition duration-150"
          onClick={() => setSidebarOpen(false)}
        >
          Services
        </a>
        <a
          href="#our-work"
          className="sm:hover:border-b sm:hover:scale-105 transition duration-150"
          onClick={() => setSidebarOpen(false)}
        >
          Our Work
        </a>
        <a
          href="#contact-us"
          className="sm:hover:border-b sm:hover:scale-105 transition duration-150"
          onClick={() => setSidebarOpen(false)}
        >
          Contact Us
        </a>
      </div>

      <div className="flex items-center gap-2 sm:gap-4">
        <ThemeToggleBtn theme={theme} setTheme={setTheme} />
        <img
          src={theme === "dark" ? assets.menu_icon_dark : assets.menu_icon}
          alt=""
          onClick={() => setSidebarOpen(true)}
          className="w-8 sm:hidden"
        />
        <a
          href="#contact-us"
          className=" text-sm max-sm:hidden flex items-center gap-2 bg-primary text-white px-6 py-2 rounded-full cursor-pointer hover:scale-105 transition-all"
        >
          Connect <img src={assets.arrow_icon} width={14} alt="" />
        </a>
      </div>
    </div>
  );
};

export default Navbar;
