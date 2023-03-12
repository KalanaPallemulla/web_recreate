import React, { useEffect, useState } from "react";
import mdLogo from "../../assets/download.png";
import * as Images from "../../assets/images";
import { BsSearch, BsWallet } from "react-icons/bs";
import { BiMenu } from "react-icons/bi";

const TopKeys = ({ title, value }) => {
  return (
    <div className="flex space-x-1">
      <h1 className="font-sans" style={{ color: "#A197AA", fontSize: "11px" }}>
        {title}:
      </h1>
      <h1 className="font-mono" style={{ color: "#E42575", fontSize: "11px" }}>
        {value}
      </h1>
    </div>
  );
};
const Navbar = ({ isShow, setIsShow }) => {
  const [stickyClass, setStickyClass] = useState("relative");
  const [isHover, setIsHover] = useState(false);
  const [dropKey, setDropKey] = useState(0);

  useEffect(() => {
    window.addEventListener("scroll", stickNavbar);

    return () => {
      window.removeEventListener("scroll", stickNavbar);
    };
  }, []);

  const stickNavbar = () => {
    if (window !== undefined) {
      let windowHeight = window.scrollY;
      windowHeight > 30
        ? setStickyClass("fixed top-0 left-0 z-50 w-screen bg-[#120D18]")
        : setStickyClass("relative");
    }
  };
  const handleClick = (key) => {
    if (key !== 7) {
      if (dropKey !== key) setDropKey(key);
      else setDropKey(0);
    }
  };
  console.log(dropKey);
  return (
    <div className={`w-screen`}>
      <div className="md:block hidden">
        <div
          style={{ backgroundColor: "rgb(28,19,38)" }}
          className=" h-8 flex justify-center items-center space-x-4 md:-ml-7"
        >
          <TopKeys title="Volume 24h" value="89,839 SOL" />
          <TopKeys title="Volume total" value="55,405,964 SOL" />
          <TopKeys title="SOL/USD" value="$20.97" />
          <TopKeys title="Solana Netwrok " value="4,951 TPS" />
        </div>
      </div>
      <div className="md:hidden block">
        <div className=" h-7 flex justify-center items-center space-x-4 ">
          <TopKeys title="Volume 24h" value="89,839 SOL" />
        </div>
      </div>
      {/* Web */}
      <>
        <div
          className={`${stickyClass}`}
          // style={{ backgroundColor: "" }}
        >
          <div className={`h-16  md:px-4  items-center px-5 `}>
            <div className="hidden md:block">
              <div className="md:grid md:grid-cols-3 ">
                <div className="flex h-16 items-center">
                  <div className="bg-blend-lighten hover:bg-blend-darken hover:brightness-75">
                    <div className="hidden md:block">
                      <img
                        className="h-8 hover:bg-opacity-50 "
                        src={Images.logo}
                        alt="loading"
                      />
                    </div>
                  </div>

                  {/* <div>dropDown</div> */}
                </div>
                <div className="flex items-center">
                  <div
                    className="bg-transparent border border-transparent hover:border-gray-500  w-72 rounded-full text-xs flex items-center justify-between"
                    style={{ backgroundColor: "#24182f" }}
                  >
                    <div className="w-full flex">
                      <div className="w-2/12 flex items-center justify-center">
                        <BsSearch className="text-base text-gray-500" />
                      </div>
                      <div className="w-11/12">
                        <input
                          className="bg-transparent w-full p-3  rounded-full border border-transparent  focus:outline-none -ml-2 placeholder:text-gray-500 placeholder:text-xs text-white text-md"
                          placeholder="Search collection and creators"
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex justify-end h-16  items-center pr-4  ">
                  <button className="bg-pink-600 flex justify-center items-center space-x-2 p-2 rounded-lg text-white hover:brightness-75 duration-300	">
                    <BsWallet className="text-sm" />
                    <h1 className="text-sm">Connect Wallet</h1>
                  </button>
                </div>
              </div>
            </div>
            <div className="block md:hidden">
              <div className="grid grid-cols-8 text-white">
                <div className="col-span-2">
                  <div className="flex justify-center items-center h-16 ">
                    <div
                      className={`cursor-pointer h-8 w-8 flex justify-center items-center ${
                        isShow && "bg-gray-700 rounded-md"
                      }`}
                      onClick={() => setIsShow(!isShow)}
                    >
                      <BiMenu color={"white"} className="text-3xl font-bold" />
                    </div>
                    <img
                      className="h-6 hover:bg-opacity-50 ml-1 md:ml-0 "
                      src={Images.smLogo}
                      alt="loading"
                    />
                  </div>
                </div>
                <div className="col-span-4 flex justify-end items-center  h-16">
                  DropDown
                </div>
                <div className="col-span-1"></div>

                <div className="col-span-1">
                  <div className="w-full flex items-center justify-center h-16 ">
                    <div
                      className="flex items-center justify-center  h-10 w-10 rounded-full"
                      style={{ backgroundColor: "rgb(37,29,47)" }}
                    >
                      <BsSearch className="text-xl text-white" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Web */}
          <div
            className={`h-screen bg-yellow-400 ${
              isHover ? "w-56" : "w-16"
            } absolute hidden md:block duration-75 ease-in-out`}
            onMouseEnter={() => setIsHover(true)}
            onMouseLeave={() => setIsHover(false)}
            style={{ backgroundColor: "#120D18" }}
          >
            <div
              className={`py-1 pl-1 ${
                isHover && "border-r border-[#2B2037] h-[90vh]"
              } `}
            >
              {menuList.map((item, index) => (
                <div className="px-2 cursor-pointer">
                  <div
                    className=" h-10 p-2 rounded-md w-full grid grid-cols-4 mt-2"
                    style={{
                      backgroundColor: dropKey === item.id && "#25182E",
                    }}
                    onClick={() => handleClick(item.id)}
                  >
                    <div className="col-span-3 ">
                      <div className="flex justify-start">
                        <item.icon />
                        {isHover && (
                          <h1 className="ml-2 text-sm text-white">
                            {item.name}
                          </h1>
                        )}
                      </div>
                    </div>

                    {isHover &&
                      item.open &&
                      (dropKey !== item.id ? (
                        <div
                          className="  flex items-center justify-center "
                          // onClick={() => setDropKey(item.id)}
                        >
                          <Images.open />
                        </div>
                      ) : (
                        <div
                          className="  flex items-center justify-center "
                          // onClick={() => setDropKey("")}
                        >
                          <Images.close />
                        </div>
                      ))}
                  </div>
                  {isHover && dropKey === item.id && (
                    <div className=" mt-3 space-y-2 ">
                      {item.children.map((child) => (
                        <div className="ml-[4.5vh] lg:ml-[4vh] ">
                          <h1 className="text-[13px] hover:text-gray-300 text-gray-500  w-fit cursor-pointer font-medium">
                            {child}
                          </h1>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
          {/* Mobile */}
          <div className="block md:hidden">
            <div className="w-screen block md:hidden absolute">
              <div
                className={`container text-white ${
                  isShow
                    ? "h-screen w-2/3 border-r border-x-emerald-50"
                    : "h-screen w-0 "
                }ease-in-out duration-100`}
                style={{ backgroundColor: "#120D18" }}
              >
                {isShow && (
                  <div className="grid grid-rows-6">
                    <div
                      className={` row-span-4${
                        isShow ? "h-screen w-2/3" : "h-screen w-0 "
                      }ease-in-out duration-100`}
                    >
                      <div
                        className="w-full flex justify-center mt-2 border-b pb-2"
                        style={{ borderColor: "#33273F" }}
                      >
                        <button className="bg-pink-600 flex justify-center items-center space-x-2 p-3 rounded-lg text-white ">
                          <BsWallet className="text-sm" />
                          <h1 className="text-sm">Connect Wallet</h1>
                        </button>
                      </div>
                      {/* Mobile */}
                      <div className="mt-2 space-y-4 ">
                        {menuList.map((item, index) => (
                          <MenuItem
                            key={index}
                            name={item.name}
                            subMenuItem={item.subMenuItem}
                            Icon={item.icon}
                            index={index}
                            id={item.id}
                            open={item.open}
                          />
                        ))}
                      </div>
                    </div>
                    <div className="">
                      <div className="flex space-x-2">
                        <div className="h-4 flex justify-center">
                          <Images.icon8 />
                        </div>

                        <h1 className="text-xs">Blog</h1>
                      </div>
                    </div>
                    <div className="bg-red-400"></div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </>
    </div>
  );
};

export default Navbar;

const MenuItem = ({
  name,
  subMenuItem = [],
  Icon,
  index,
  id,
  open,
  show = true,
}) => {
  return (
    <div className="flex  items-center justify-center px-4">
      <div
        className=" h-10 p-2 rounded-md w-full grid grid-cols-4 "
        // style={{ backgroundColor: id === 1 && "#25182E" }}
      >
        <div className="col-span-3 ">
          <div className="flex justify-start">
            <Icon />
            {show && <h1 className="ml-2 text-sm text-white">{name}</h1>}
          </div>
        </div>

        {show && (
          <div className="  flex items-center justify-center ">
            {open && <Images.open />}
          </div>
        )}
      </div>
    </div>
  );
};

const menuList = [
  {
    id: 1,
    name: "Marketplace",
    subMenuItem: [],
    icon: Images.icon1,
    open: true,
    children: ["Popular collection", "Drop calendar", "Auction"],
  },
  {
    id: 2,
    name: "Insights",
    subMenuItem: [],
    icon: Images.icon2,
    open: true,
    children: ["Stats", "My Watchlist"],
  },
  {
    id: 3,
    name: "Magic Eden List",
    subMenuItem: [],
    icon: Images.icon3,
    open: true,
    children: ["Whitelists", "About", "Create a whitelist"],
  },
  {
    id: 4,
    name: "Launchpad",
    subMenuItem: [],
    icon: Images.icon4,
    open: true,
    children: ["Launches", "About", "Apply for launchpad"],
  },
  {
    id: 5,
    name: "Eden Games",
    subMenuItem: [],
    icon: Images.icon5,
    open: true,
    children: ["Home", "All Games"],
  },
  {
    id: 6,
    name: "Creators",
    subMenuItem: [],
    icon: Images.icon6,
    open: true,
    children: [
      "Apply for listing",
      "Apply for whitelist",
      "Apply for launchpad",
      "Apply for auctions",
      "Submit announcement",
    ],
  },
  { id: 7, name: "Support", subMenuItem: [], icon: Images.icon7, open: false },
  {
    id: 8,
    name: "Resources",
    subMenuItem: [],
    icon: Images.icon8,
    open: true,
    children: [
      "About Magic Eden",
      "MagicDAO",
      "Trust & Safety",
      "Platform status",
      "Careers",
      "API",
    ],
  },
];
