import React, { useState } from "react";

const Header = () => {
  const [show, setShow] = useState(false);

  return (
    <div className="mt-16 px-4 flex items-center md:justify-between">
      <div class="flex flex-col flex-wrap md:flex-row gap-4 justify-center md:justify-start md:items-center text-gray-100">
        <h3 class="mb-0 font-bold text-[28px] leading-9 ">
          Popular Collections
        </h3>
        <div class="flex ">
          <div>
            <div
              class="cursor-pointer relative flex border border-[#2B2037] py-1 w-84 rounded-md"
              onClick={() => setShow(!show)}
            >
              <div
                class="bg-transparent w-32 "
                // style={{ width: "170px" }}
              >
                <h1 className="ml-2">Last 24 hours</h1>
              </div>
              <div class="flex items-center h-full">
                {!show ? (
                  <svg
                    stroke="currentColor"
                    fill="none"
                    stroke-width="2"
                    viewBox="0 0 24 24"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    color="#f5f3f7"
                    height="24"
                    width="24"
                    xmlns="http://www.w3.org/2000/svg"
                    style={{ color: "rgb(245, 243, 247)" }}
                  >
                    <polyline points="6 9 12 15 18 9"></polyline>
                  </svg>
                ) : (
                  <svg
                    stroke="currentColor"
                    fill="none"
                    stroke-width="2"
                    viewBox="0 0 24 24"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    color="#f5f3f7"
                    height="24"
                    width="24"
                    xmlns="http://www.w3.org/2000/svg"
                    style={{ color: "rgb(245, 243, 247)" }}
                    className="rotate-180"
                  >
                    <polyline points="6 9 12 15 18 9"></polyline>
                  </svg>
                )}
              </div>
            </div>
            {show && (
              <div className="">
                <div class="absolute bg-[#2b192f] rounded-xl overflow-auto mt-2 text-white-2 w-36 ">
                  <button class="flex w-full py-2 px-3 text-left text-sm hover:bg-gray-400 disabled:cursor-not-allowed disabled:text-light-gray-500">
                    Last 1 hour
                  </button>
                  <button class="flex w-full py-2 px-3 text-left text-sm hover:bg-gray-400 disabled:cursor-not-allowed disabled:text-light-gray-500">
                    Last 6 hours
                  </button>
                  <button class="flex w-full py-2 px-3 text-left text-sm hover:bg-gray-400 disabled:cursor-not-allowed disabled:text-light-gray-500">
                    Last 24 hours
                  </button>
                  <button class="flex w-full py-2 px-3 text-left text-sm hover:bg-gray-400 disabled:cursor-not-allowed disabled:text-light-gray-500">
                    Last 7 days
                  </button>
                  <button class="flex w-full py-2 px-3 text-left text-sm hover:bg-gray-400 disabled:cursor-not-allowed disabled:text-light-gray-500">
                    Last 30 days
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
        <div class="flex items-center flex-wrap gap-6 justify-center md:justify-start">
          <div class="flex flex-nowrap  border-[#2B2037]  border rounded-[40px]">
            <div class="flex items-center relative rounded-full pr-1 bg-pink-600 ">
              <button class="px-2 py-2 text-xs  text-white-1 rounded-[40px] hover:opacity-80">
                <div class="flex items-center gap-2">
                  <div class="bg-[#25192F] rounded-full p-1 w-6 h-6 flex items-center justify-center">
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 20 20"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      backgroundColor="red"
                    >
                      <use href="#solana-icon"></use>
                    </svg>
                  </div>
                  <span>Solana</span>
                </div>
              </button>
            </div>
            <div class="flex items-center relative rounded-full pr-1">
              <button class="px-2 py-2 text-xs rounded text-white-1 rounded-[40px] hover:opacity-80">
                <div class="flex items-center gap-2">
                  <div class="bg-[#25192F] rounded-full p-1 w-6 h-6 flex items-center justify-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 32 32"
                    >
                      <g fill="none" fill-rule="evenodd">
                        <g fill="#FFF" fill-rule="nonzero">
                          <path
                            fill-opacity=".602"
                            d="M16.498 4v8.87l7.497 3.35z"
                          ></path>
                          <path d="M16.498 4L9 16.22l7.498-3.35z"></path>
                          <path
                            fill-opacity=".602"
                            d="M16.498 21.968v6.027L24 17.616z"
                          ></path>
                          <path d="M16.498 27.995v-6.028L9 17.616z"></path>
                          <path
                            fill-opacity=".2"
                            d="M16.498 20.573l7.497-4.353-7.497-3.348z"
                          ></path>
                          <path
                            fill-opacity=".602"
                            d="M9 16.22l7.498 4.353v-7.701z"
                          ></path>
                        </g>
                      </g>
                    </svg>
                  </div>
                  <span>Ethereum</span>
                </div>
              </button>
            </div>
            <div class="flex items-center relative rounded-full pr-1">
              <button class="px-2 py-2 text-xs rounded text-white-1 rounded-[40px] hover:opacity-80">
                <div class="flex items-center gap-2">
                  <div class="bg-[#25192F] rounded-full p-1 w-6 h-6 flex items-center justify-center">
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 16 16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      backgroundColor=""
                    >
                      <g clip-path="url(#clip0_2526_31459)">
                        <path
                          d="M11.8805 5.49729C11.6131 5.34445 11.2692 5.34445 10.9635 5.49729L8.82381 6.75819L7.37187 7.56057L5.27037 8.82147C5.00291 8.97431 4.65903 8.97431 4.35336 8.82147L2.71037 7.82804C2.44291 7.6752 2.25187 7.36953 2.25187 7.02565V5.1152C2.25187 4.80953 2.4047 4.50386 2.71037 4.31281L4.35336 3.35759C4.62082 3.20475 4.9647 3.20475 5.27037 3.35759L6.91336 4.35102C7.18082 4.50386 7.37187 4.80953 7.37187 5.15341V6.41431L8.82381 5.57371V4.2746C8.82381 3.96893 8.67097 3.66326 8.3653 3.47222L5.30858 1.67639C5.04112 1.52356 4.69724 1.52356 4.39157 1.67639L1.25843 3.51042C0.952763 3.66326 0.799927 3.96893 0.799927 4.2746V7.86625C0.799927 8.17192 0.952763 8.47759 1.25843 8.66863L4.35336 10.4645C4.62082 10.6173 4.9647 10.6173 5.27037 10.4645L7.37187 9.24177L8.82381 8.40117L10.9253 7.17848C11.1928 7.02565 11.5366 7.02565 11.8423 7.17848L13.4853 8.13371C13.7528 8.28654 13.9438 8.59222 13.9438 8.9361V10.8465C13.9438 11.1522 13.791 11.4579 13.4853 11.6489L11.8805 12.6042C11.6131 12.757 11.2692 12.757 10.9635 12.6042L9.32052 11.6489C9.05306 11.4961 8.86202 11.1904 8.86202 10.8465V9.62386L7.41008 10.4645V11.7254C7.41008 12.031 7.56291 12.3367 7.86858 12.5277L10.9635 14.3236C11.231 14.4764 11.5749 14.4764 11.8805 14.3236L14.9754 12.5277C15.2429 12.3749 15.434 12.0692 15.434 11.7254V8.0955C15.434 7.78983 15.2811 7.48416 14.9754 7.29311L11.8805 5.49729Z"
                          fill="#8247E5"
                        ></path>
                      </g>
                      <defs>
                        <clipPath id="clip0_2526_31459">
                          <rect
                            width="14.6722"
                            height="12.8"
                            fill="white"
                            transform="translate(0.799927 1.60001)"
                          ></rect>
                        </clipPath>
                      </defs>
                    </svg>
                  </div>
                  <span>Polygon</span>
                </div>
              </button>
            </div>
            <div class="flex items-center relative rounded-full pr-1">
              <button class="px-2 py-2 text-xs rounded text-white-1 rounded-[40px] hover:opacity-80">
                Show all
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="hidden md:block">
        <a
          class="flex justify-center border-2 border-[#2B2037] py-1 px-2 text-white-1 flex-end w-16 text-sm text-white hover:opacity-80"
          href="/launchpad"
        >
          See All
        </a>
      </div>
    </div>
  );
};

export default Header;
