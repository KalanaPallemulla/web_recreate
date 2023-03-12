import React from "react";

const TrendingCard = () => {
  return (
    <div class="m-0 p-0 border border-b-0 last:border-b-1 border-[#2B2037] first:rounded-t-lg last:rounded-b-lg bg-[#1C1326] hover:bg-[#2b192f] active:bg-gray-300 hover:opacity-100 text-[#f9f6f8] hover:text-[#c3bfc6]">
      <a href="/marketplace/automata">
        <div class="grid gap-4 items-center p-4 sm:py-3 grid-cols-1 sm:grid-cols-[minmax(min-content,1fr),4fr,minmax(min-content,1fr)] grid-rows-[minmax(40px,1fr),auto] sm:grid-rows-1">
          <div class="flex items-center gap-1">
            <img
              draggable="false"
              loading="lazy"
              style={{ backgroundColor: "gray" }}
              class="rounded-full w-8 h-8"
              src="https://img-cdn.magiceden.dev/rs:fill:64:64:0:0/plain/https://creator-hub-prod.s3.us-east-2.amazonaws.com/automata_pfp_1668993566504.jpeg"
            />
            <h5 class="text-sm font-medium line-clamp-2">Automata</h5>
          </div>
          <div class="flex flex-col items-left justify-center max-w-[680px]">
            <p class="font-normal leading-5 text-xs text-light-gray-400">
              9 hours ago
            </p>
            <h4 class="font-bold leading-6">
              Submit for Community Art Week! Win SOL, $CLOUD, and more!
            </h4>
            <p class="font-normal leading-6 text-light-gray-400"></p>
          </div>
          <div class="flex items-center justify-between gap-8">
            <span class="text-sm font-medium">
              <span class="text-pink-600 hover:text-pink-800 active:text-pink-100">
                View Details
              </span>
            </span>
            <button
              aria-label="twitter"
              style={{
                backgroundColor: "transparent",
                font: "inherit",
                color: "inherit",
                cursor: "pointer",
              }}
              // "background-color: transparent; border: none; padding: 0px; font: inherit; color: inherit; cursor: pointer;"
            >
              <div class="px-2 py-2 border border-[#2B2037] rounded-sm hover:bg-[#2b192f]  active:bg-gray-400 text-white bg-[#25192F]">
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  stroke-width="0"
                  viewBox="0 0 512 512"
                  color="#f5f3f7"
                  height="14"
                  width="14"
                  xmlns="http://www.w3.org/2000/svg"
                  style={{ color: "rgb(245, 243, 247)" }}
                >
                  <path d="M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z"></path>
                </svg>
              </div>
            </button>
          </div>
        </div>
      </a>
    </div>
  );
};

export default TrendingCard;
