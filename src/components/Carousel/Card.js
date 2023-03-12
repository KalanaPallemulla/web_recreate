import React from "react";

const Card = ({ image }) => {
  return (
    <>
      <div
        className="w-full md:border-t md:border-r md:border-l md:border-b border-b-0  md:grid md:grid-cols-11 border-[#2B2037] rounded-2xl -mt-6 md:mt-0"
        style={{}}
      >
        <div
          className="md:col-span-6 bg-blue-900 md:order-2 order-1 h-72 rounded-t-2xl md:h-auto hidden md:block"
          style={{
            backgroundImage: `url(
            ${image}
          )`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        ></div>
        <div className="block md:hidden border border-transparent rounded-2xl ">
          <div
            className="md:col-span-6 bg-blue-900 md:order-2 order-1 h-72 rounded-2xl md:h-auto flex flex-col justify-end "
            style={{
              backgroundImage: `url(
            ${image}
          )`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            <div className="block md:hidden h-8 bg-[#120D18] backdrop-blur-3xl rounded-b-md"></div>
          </div>
        </div>
        {/* background-image: url("https://img-cdn.magiceden.dev/rs:fill:1440:1050:0:0/plain/https://bafkreidjkgeh4rybzsky5ty3i2f2mhw4a54bapdqbggv7sv3snixlt5ag4.ipfs.nftstorage.link/") ,background-size: 'cover', background-position: "center center", background-repeat: "no-repeat" */}
        <div className="col-span-4 md:order-1 order-3">
          <div className="mt-4 lg:py-24 col-span-11  lg:order-1 lg:col-span-5 2xl:col-span-4 md:px-10 px-8 md:py-10 ">
            <div className="flex flex-col justify-center   ">
              <h1 className="text-5xl font-extrabold text-white">
                Claynosaurz
              </h1>
              <p className="mt-3 text-gray-500">
                Travel back to distant lands. Explore the uncharted, discover
                lost artifacts. Adventure awaits…
              </p>
            </div>
            <div className="">
              <button
                className="inline-flex justify-center items-center rounded-md text-white-1 my-8 p-2 text-white bg-pink-600"
                //   style={{ backgroundColor: "#e93a88" }}
              >
                Explore Collection
              </button>
            </div>
          </div>
        </div>
        <div className="col-span-1 md:order-3"></div>
      </div>
    </>
  );
};

export default Card;
