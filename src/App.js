import "./App.css";
import { carouselImages } from "./assets/images";
import Card from "./components/Carousel/Card";
import Container from "./components/Container";
import TrendingCard from "./components/TrendingCard";

function App() {
  return (
    <Container>
      <div>
        <div className="md:grid md:grid-cols-12 l">
          <div className="md:col-span-1"></div>
          <div className="md:col-span-11 md:pl-10">
            <div className="">
              <div className="">
                <Card image={carouselImages[0]} />
              </div>
            </div>
            <div className="mt-32 px-4 ">
              <div>
                <div class="flex items-center gap-1 mb-4">
                  <h2 class="text-xl sm:text-3xl font-bold inline text-white">
                    Trending announcements 📢
                  </h2>
                  <span class="border rounded px-[5px] py-1 mx-2 inline-flex items-center text-gray-50 text-center leading-none text-[10px] uppercase border-[#E53C74] bg-[#3D122B]">
                    Beta
                  </span>
                </div>
              </div>
              <div>
                <TrendingCard />
                <TrendingCard />
                <TrendingCard />
                <TrendingCard />
                <TrendingCard />
                <TrendingCard />
                <TrendingCard />
                <TrendingCard />
              </div>
            </div>
            <div className="mt-20 px-4 w-full flex justify-center">
              <div class="flex md:items-center flex-nowrap w-full gap-6 mb-3 text-white flex-col md:flex-row ">
                <h2 class="text-xl sm:text-3xl font-bold ">Launchpad drops</h2>
                <div className="flex justify-between ">
                  <div class="flex flex-nowrap  border-solid border-pink-600 border rounded-full">
                    <button class="px-2 py-2 text-xs rounded-full text-white-1  bg-pink-600 hover:opacity-80">
                      Next 7 days
                    </button>
                    <button class="px-2 py-2 text-xs rounded text-white-1 hover:opacity-80">
                      Coming soon
                    </button>
                    <button class="px-2 py-2 text-xs rounded text-white-1 hover:opacity-80">
                      Live
                    </button>
                  </div>
                  {/* <div class="flex-grow-2"></div> */}
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
          </div>
        </div>
      </div>
    </Container>
  );
}

export default App;
