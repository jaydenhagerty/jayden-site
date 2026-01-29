import CurvedDivider from "../CurvedDivider";
import Link from "next/link";

function App() {
  return (
    <>
      <section className="md:p-16 p-8 pt-24 md:pt-24 bg-black">
        <Link className="mb-8 cursor-pointer transition transform hover:-translate-x-2 w-min pr-16 text-forest-800 font-bold text-xl flex items-center gap-2" href="/software">
          <img src="left-arrow.png" className="h-[24px]" />
          Back
        </Link>
        <div className="rounded-2xl shadow-lg bg-forest-950 text-off-white overflow-hidden">
          <div className="p-8">
            <div className="flex flex-col md:flex-row w-full gap-8 items-start">
              <div className="flex-1">

                {/* <img src="/knightmare logo.png" alt="Knightmare Logo" className="w-full mb-4"/> */}
                <h1 className="font-bold text-4xl mb-2">The Train to Somewhere</h1>
                <b className="block text-forest-700">Demo available on PC</b>
                <div className="flex flex-wrap gap-3 mt-2">
                  <a className="logo-button text-off-white px-4 py-2 rounded-full font-semibold transition cursor-pointer hover:scale-105 bg-forest-900" href="https://store.steampowered.com/app/1414920/Knightmare/" target="_blank">
                    <img src="/itch.io_logo.png" className="h-[25px]"/>
                    Itch.io
                  </a>
                </div>
                <div>
                  <p className="block mt-8">You've woken up on a mysterious train with no memory of how you got there. Explore, talk to the other passengers, and uncover what lies ahead.</p>
                  <p className="block mt-8 p-4 bg-forest-900 rounded-2xl">This game is just a demo for now, but it's already a memorable experience with charming pixel art, immersive sound design, and an intriguing story.</p>
                </div>
              </div>
              <div className="w-full md:w-3/5 rounded-2xl overflow-hidden shadow-lg">
                <iframe
                  loading="lazy"
                  className="w-full aspect-video"
                  src="https://www.youtube.com/embed/_arPD_Utix8"
                  title="YouTube video player"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </section>
      <CurvedDivider
        svgPath="M 0 100 C 612 -79 560 324 1440 100 L 1440 200 L 0 200 Z"
        bgColor="bg-black"
        fillColor="var(--color-forest-900)"
      />
    </>
  );
}

export default App;
