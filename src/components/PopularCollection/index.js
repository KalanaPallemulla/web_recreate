import React from "react";
import Header from "./Header";
import PopularCard from "./PopularCard";

const PopularCollection = () => {
  return (
    <div>
      <Header />
      <div className="mt-4 px-4 w-full ">
        <div className="md:grid md:grid-cols-3">
          <div className="py-4">
            <PopularCard />
          </div>
          <div className="py-4">
            <PopularCard />
          </div>
          <div className="py-4">
            <PopularCard />
          </div>
          <div className="py-4">
            <PopularCard />
          </div>
          <div className="py-4">
            <PopularCard />
          </div>
          <div className="py-4">
            <PopularCard />
          </div>
          <div className="py-4">
            <PopularCard />
          </div>
          <div className="py-4">
            <PopularCard />
          </div>
          <div className="py-4">
            <PopularCard />
          </div>
          <div className="py-4">
            <PopularCard />
          </div>
          <div className="py-4">
            <PopularCard />
          </div>
          <div className="py-4">
            <PopularCard />
          </div>
        </div>
        <div className="block md:hidden">
          <div className="flex justify-center w-full rounded-full border border-[#2B2037] text-gray-100">
            <button className="py-1">See All</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PopularCollection;
