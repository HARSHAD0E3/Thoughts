import { useState } from "react";
import { navLinks } from "../../constants";
import { FaSearch } from "react-icons/fa";
import { NavLinkList } from "../index";
import styles from "../../style";
import { Link } from "react-router-dom";
import User from "./User";

function Navbar() {
  const [toggle, setToggle] = useState(false);

  return (
    <div className="w-full fixed top-0 z-[1031] overflow-hidden bg-primary">
      <div className={`${styles.paddingX} ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}`}>
          <nav className="w-full flex py-6 justify-between items-center navbar">
            <div className="sm:hidden flex justify-start items-center">
              <img
                src="/images/menu.svg"
                alt="menu"
                className="w-[28px] h-[28px] object-contain"
                onClick={() => setToggle((prev) => !prev)}
              />
              <div
                className={`${
                  toggle ? "flex" : "hidden"
                } absolute w-full top-0 left-0 h-3/4`}
                onClick={() => setToggle((prev) => !prev)}
              >
                <ul
                  className="sm:hidden list-none flex flex-col gap-4 justify-end backdrop-blur-sm items-center flex-1 p-6 bg-black-gradient fixed z-[1032]  top-20 left-0 my-2 w-full xs:w-1/2 rounded-xl sidebar"
                  onClick={(e) => e.stopPropagation()}
                >
                  {navLinks.map((nav) => (
                    <NavLinkList key={nav.id} nav={nav} />
                  ))}
                </ul>
              </div>
            </div>

            <div className="flex sm:order-none ">
              <Link>
                <img
                  src="/images/logo.png"
                  alt="Thoughts"
                  className="w-[134px] h-[42px]"
                />
              </Link>
              <ul className="list-none sm:flex hidden justify-end items-center ml-4 gap-10  flex-1">
                {navLinks.map((nav) => (
                  <NavLinkList key={nav.id} nav={nav} />
                ))}
              </ul>
            </div>

            <div className="flex mt-2">
              <div className="hidden md:flex bg-black-gradient rounded-lg mr-4">
                <input
                  type="text"
                  placeholder="Search here..."
                  className="p-1  font-poppins font-normal cursor-pointer outline-none text-[16px] bg-black-gradient text-white rounded-lg"
                />
                <FaSearch className="text-white  self-center size-5 m-2" />
              </div>
              <div>
                <User />
              </div>
            </div>
          </nav>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
