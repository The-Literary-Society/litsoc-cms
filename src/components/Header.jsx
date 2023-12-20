import React, { useState } from 'react';
import { images } from '../constants/index';
import { RiMenu3Fill } from "react-icons/ri";
import { MdClose } from "react-icons/md";
import { IoMdArrowDropdown } from "react-icons/io";
import { Link } from "react-router-dom";

const navItemInfo = [
  { name: "Home", type: "link", href: "/" },
  { name: "About Us", type: "link", href: "/aboutus" },
  {
    name: "Blog",
    type: "dropdown",
    items: [
      { title: "Academics", href: "/academics" },
      { title: "Campus", href: "/campus" },
      { title: "Events", href: "/events" },
      { title: "Clubs", href: "/clubs" },
      { title: "Admission", href: "/admission" },
    ],
  },
  { name: "News", type: "link", href: "/news" },
  { name: "Team", type: "link", href: "/team" },
];

const NavItem = ({ item }) => {
  const [dropdown, setDropdown] = useState(false);

  const toggleDropdownHandler = () => {
    setDropdown((curState) => !curState);
  };

  return (
    <li className="relative group">
      {item.type === "link" ? (
        <>
          <Link to={item.href} className="lg:hover:text-amber-700 hover:text-amber-100 px-4 py-2">
            {item.name}
          </Link>
        </>
      ) : (
        <div className="flex flex-col items-center">
          <button
            className="px-4 py-2 flex gap-x-1 items-center"
            onClick={toggleDropdownHandler}
          >
            <span>{item.name}</span>
            <IoMdArrowDropdown />
          </button>
          <div
            className={`${
              dropdown ? "block" : "hidden"
            }  lg:hidden transition-all duration-800 lg:absolute lg:bottom-0 lg:right-0 lg:transform lg:translate-y-full lg:group-hover:block w-max lg:bg-gray-100 bg-amber-800 rounded-md`}
          >
            <ul className="bg-dark-soft lg:bg-transparent text-center flex flex-col shadow-lg rounded-lg overflow-hidden">
              {item.items.map((page, index) => (
                <Link
                  key={index}
                  to={page.href}
                  className=" hover:bg-amber-700 hover:text-white text-sm px-5 py-2 text-white lg:text-black"
                >
                  {page.title}
                </Link>
              ))}
            </ul>
          </div>
        </div>
      )}
    </li>
  );
};


const Header = () => {
  const [navIsVisible, setNavIsVisible] = useState(false);

  const navVisibilityHandler = () => {
    setNavIsVisible((curState) => !curState);
  };

  return (
    <section className='sticky top-0 left-0 right-0 z-50 bg-white'>
      <header className='container px-4 lg:px-0 mx-auto flex justify-between py-4 items-center'>
        <div>
          <img src={images.Logo} alt="logo" width={120} />
        </div>
        <div className='z-50'>
          {!navIsVisible && (
            <RiMenu3Fill className='w-6 h-6 lg:hidden' onClick={navVisibilityHandler} />
          )}
          {navIsVisible && (
            <MdClose className='w-6 h-6 lg:hidden' onClick={navVisibilityHandler} />
          )}
        </div>
        <div
          className={`${navIsVisible ? "right-0" : "-right-full"
            } transition-all duration-400 bg-amber-900 lg:bg-transparent z-[49] flex flex-col w-full lg:w-auto justify-center lg:justify-end lg:flex-row fixed top-0 bottom-0 lg:static gap-x-4 items-center mt-[100px] lg:mt-0 `}
        >
          <ul className="text-white items-center gap-y-6 lg:text-dark-soft flex flex-col lg:flex-row gap-x-1 font-semibold lg:flex lg:text-black ">
            {navItemInfo.map((item) => (
              <NavItem key={item.name} item={item} />
            ))}
          </ul>

          <button className='mt-5 lg:mt-0 border-2 lg:border-amber-700 border-amber-100 py-1 px-5 rounded-full lg:text-amber-700 text-amber-100 font-semibold hover:bg-amber-100 lg:hover:bg-amber-700 hover:text-black lg:hover:text-white transition-all duration-300'>Sign In</button>
        </div>
      </header>
    </section>
  );
};

export default Header;
